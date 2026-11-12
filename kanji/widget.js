// Widget de kanji para Scriptable (iPhone). Lo carga el script de widget.html.
// Parámetro del widget (opcional): niveles a mostrar, p. ej. "N1" o "N3 N2 N1". Vacío = todos.
const BASE = "https://deliciassaulmoreno-ghub.github.io/jlpt-app/kanji/";
const fm = FileManager.local();
const file = fm.joinPath(fm.documentsDirectory(), "kanji-widget-data.json");
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
w.refreshAfterDate = new Date(Date.now() + 15 * 60e3);

if (!D) {
  w.addText("漢字 · sin conexión").font = Font.systemFont(12);
} else {
  const lv = (String(args.widgetParameter || "").match(/[1-5]/g) || []).map(Number);
  const pool = lv.length ? D.filter(k => lv.includes(k[1])) : D;
  const k = pool[Math.floor(Math.random() * pool.length)];
  const [c, n, mean, on, kun] = k;
  const read = [on, kun].filter(Boolean).join("  ");
  const txt = (st, s, font, lines) => { const t = st.addText(s); t.font = font; t.lineLimit = lines; t.minimumScaleFactor = 0.6; return t; };

  if (fam === "accessoryInline") {
    txt(w, c + " " + read.replace(/\s+/g, " ") + " · " + mean, Font.systemFont(14), 1);
  } else if (fam === "accessoryCircular") {
    w.addAccessoryWidgetBackground = true;
    w.setPadding(0, 0, 0, 0);
    txt(w, c, Font.systemFont(34), 1).centerAlignText();
  } else if (fam === "accessoryRectangular") {
    w.setPadding(0, 0, 0, 0);
    const row = w.addStack();
    row.layoutHorizontally();
    row.centerAlignContent();
    txt(row, c, Font.systemFont(46), 1);
    row.addSpacer(8);
    const col = row.addStack();
    col.layoutVertically();
    txt(col, read, Font.systemFont(12), 2);
    col.addSpacer(2);
    txt(col, mean, Font.boldSystemFont(13), 2);
    row.addSpacer();
  } else {
    // Pantalla de inicio (pequeño / mediano / grande)
    const big = fam === "small" ? 64 : 84;
    txt(w, "N" + n, Font.systemFont(11), 1).textOpacity = 0.6;
    txt(w, c, Font.systemFont(big), 1).centerAlignText();
    txt(w, read, Font.systemFont(13), 1).centerAlignText();
    txt(w, mean, Font.boldSystemFont(15), 2).centerAlignText();
  }
}

Script.setWidget(w);
if (config.runsInApp) {
  if (w.presentAccessoryRectangular) await w.presentAccessoryRectangular(); else await w.presentSmall();
}
Script.complete();
