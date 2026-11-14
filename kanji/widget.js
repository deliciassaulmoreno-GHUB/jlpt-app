// Widget de kanji para Scriptable (iPhone). Lo carga el script de widget.html.
// Parámetro del widget (opcional): niveles ("N1", "N3 N2 N1"; vacío = todos) y "ej" para la mitad de ejemplo.
const BASE = "https://deliciassaulmoreno-ghub.github.io/jlpt-app/kanji/";
const MIN = 20; // minutos que dura cada kanji (todos los widgets muestran el mismo a la vez)
const fm = FileManager.local();
const file = fm.joinPath(fm.documentsDirectory(), "kanji-widget-data-2.json");
let D = null;
const stale = !fm.fileExists(file) || Date.now() - fm.modificationDate(file).getTime() > 7 * 864e5;
if (stale) {
  try {
    const r = new Request(BASE + "widget.json");
    r.timeoutInterval = 15;
    const j = await r.loadJSON();
    if (Array.isArray(j) && j.length) { D = j; fm.writeString(file, JSON.stringify(j)); }
  } catch (e) {}
}
if (!D && fm.fileExists(file)) { try { D = JSON.parse(fm.readString(file)); } catch (e) {} }

const fam = config.widgetFamily || "accessoryRectangular";
const w = new ListWidget();
const slot = Math.floor(Date.now() / (MIN * 60e3));
w.refreshAfterDate = new Date((slot + 1) * MIN * 60e3);

if (!D) {
  w.addText("漢字 · sin conexión").font = Font.systemFont(12);
} else {
  const par = String(args.widgetParameter || "").toLowerCase();
  const lv = (par.match(/[1-5]/g) || []).map(Number);
  const pool = lv.length ? D.filter(k => lv.includes(k[1])) : D;
  // Elección fija por tramo de tiempo: así dos widgets juntos enseñan el mismo kanji.
  let h = Math.imul(slot, 2654435761) >>> 0; h ^= h >>> 15; h = Math.imul(h, 2246822519) >>> 0; h = (h ^ (h >>> 13)) >>> 0; // sin signo: si no, el índice puede salir negativo
  const [c, n, mean, on, kun, ej, ejr, ejt, tip] = (pool.length ? pool : D)[h % (pool.length || D.length)];
  const read = [on, kun].filter(Boolean).join("  ");
  const txt = (st, s, font, lines) => { const t = st.addText(s || ""); t.font = font; t.lineLimit = lines; t.minimumScaleFactor = 0.6; return t; };
  const sys = s => Font.systemFont(s), bold = s => Font.boldSystemFont(s);

  if (fam === "accessoryInline") {
    txt(w, c + " " + read.replace(/\s+/g, " ") + " · " + mean, sys(14), 1);
  } else if (fam === "accessoryCircular") {
    // 1x1: kanji y su primera lectura
    w.addAccessoryWidgetBackground = true;
    w.setPadding(0, 0, 0, 0);
    txt(w, c, sys(30), 1).centerAlignText();
    txt(w, (on || kun || "").split("・")[0], sys(9), 1).centerAlignText();
  } else if (fam === "accessoryRectangular" && par.includes("ej")) {
    // Segunda mitad del 4x1: palabra de ejemplo
    w.setPadding(0, 0, 0, 0);
    txt(w, ej, sys(24), 1);
    txt(w, ejr, sys(11), 1);
    txt(w, ejt, bold(12), 1);
  } else if (fam === "accessoryRectangular") {
    // 2x1: kanji, lecturas y significado
    w.setPadding(0, 0, 0, 0);
    const row = w.addStack();
    row.layoutHorizontally();
    row.centerAlignContent();
    txt(row, c, sys(46), 1);
    row.addSpacer(8);
    const col = row.addStack();
    col.layoutVertically();
    txt(col, read, sys(12), 2);
    col.addSpacer(2);
    txt(col, mean, bold(13), 2);
    row.addSpacer();
  } else if (fam === "small") {
    // 2x2 (pantalla de inicio)
    txt(w, "N" + n, sys(11), 1).textOpacity = 0.6;
    txt(w, c, sys(64), 1).centerAlignText();
    txt(w, read, sys(13), 1).centerAlignText();
    txt(w, mean, bold(15), 2).centerAlignText();
  } else {
    // 4x2 (mediano) y 4x4 (grande): todo
    const L = fam === "large";
    const row = w.addStack();
    row.layoutHorizontally();
    row.centerAlignContent();
    const left = row.addStack();
    left.layoutVertically();
    txt(left, "N" + n, sys(11), 1).textOpacity = 0.6;
    txt(left, c, sys(L ? 96 : 76), 1);
    row.addSpacer(12);
    const col = row.addStack();
    col.layoutVertically();
    txt(col, read, sys(13), 2);
    txt(col, mean, bold(L ? 20 : 17), 2);
    col.addSpacer(6);
    txt(col, ej + "  " + ejr, sys(L ? 18 : 15), 1);
    txt(col, ejt, sys(12), 1).textOpacity = 0.7;
    row.addSpacer();
    if (L) { w.addSpacer(12); txt(w, tip, sys(15), 6).textOpacity = 0.8; w.addSpacer(); }
  }
}

Script.setWidget(w);
if (config.runsInApp) {
  if (w.presentAccessoryRectangular) await w.presentAccessoryRectangular(); else await w.presentSmall();
}
Script.complete();
