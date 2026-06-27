/* ============================================================
   MÓDULO DE LECTURA — textos graduados por nivel
   window.READING = [ pasajes ]
   Cada pasaje: { id, lvl, title, mins, paras[], gloss[], q[], audio? }
     paras: { jp (japonés), fu (lectura en hiragana), es (traducción) }
     gloss: { w (palabra), r (lectura), m (significado) }
     q:     { q (pregunta), o [opciones], a (índice de la correcta) }
     audio (OPCIONAL): ruta a un MP3 pregrabado con voz natural,
            p. ej. audio:"audio/r-n3-1.mp3". Si está presente, el botón ▶
            reproduce ese archivo (bajo demanda, no se descarga al abrir);
            si falta o falla, recurre automáticamente a la voz MEJORADA del
            dispositivo (TTS). Usa audio mono ~32-48 kbps para que pese poco
            y NO lo añadas a la precarga del service worker.
   ============================================================ */
window.READING = [

 /* ---------------- N5 ---------------- */
 { id:"r-n5-1", lvl:"N5", title:"わたしの一日", mins:1,
   paras:[
     {jp:"わたしは まいあさ 六時に おきます。", fu:"わたしは まいあさ ろくじに おきます。", es:"Me levanto todas las mañanas a las seis."},
     {jp:"あさごはんを 食べて、七時に 家を 出ます。", fu:"あさごはんを たべて、しちじに いえを でます。", es:"Desayuno y salgo de casa a las siete."},
     {jp:"電車で 会社に 行きます。仕事は 九時からです。", fu:"でんしゃで かいしゃに いきます。しごとは くじからです。", es:"Voy a la empresa en tren. El trabajo empieza a las nueve."},
     {jp:"夜は 家で テレビを 見て、十一時に 寝ます。", fu:"よるは いえで てれびを みて、じゅういちじに ねます。", es:"Por la noche veo la tele en casa y me acuesto a las once."}
   ],
   gloss:[
     {w:"まいあさ", r:"まいあさ", m:"todas las mañanas"},
     {w:"電車", r:"でんしゃ", m:"tren"},
     {w:"会社", r:"かいしゃ", m:"empresa"},
     {w:"仕事", r:"しごと", m:"trabajo"},
     {w:"寝ます", r:"ねます", m:"acostarse (寝る)"}
   ],
   q:[
     {q:"この人は 何時に おきますか。", o:["六時","七時","九時"], a:0},
     {q:"仕事は 何時からですか。", o:["七時","九時","十一時"], a:1}
   ]
 },

 { id:"r-n5-2", lvl:"N5", title:"週末", mins:1,
   paras:[
     {jp:"土曜日に 友だちと 映画を 見ました。", fu:"どようびに ともだちと えいがを みました。", es:"El sábado vi una película con un amigo."},
     {jp:"映画の あとで、レストランで ひるごはんを 食べました。", fu:"えいがの あとで、れすとらんで ひるごはんを たべました。", es:"Después de la película, comimos en un restaurante."},
     {jp:"日曜日は 家で 本を 読みました。とても しずかな 一日でした。", fu:"にちようびは いえで ほんを よみました。とても しずかな いちにちでした。", es:"El domingo leí en casa. Fue un día muy tranquilo."}
   ],
   gloss:[
     {w:"土曜日", r:"どようび", m:"sábado"},
     {w:"映画", r:"えいが", m:"película"},
     {w:"あとで", r:"あとで", m:"después"},
     {w:"日曜日", r:"にちようび", m:"domingo"},
     {w:"しずか", r:"しずか", m:"tranquilo · silencioso"}
   ],
   q:[
     {q:"土曜日に 何を しましたか。", o:["本を 読みました","映画を 見ました","料理を しました"], a:1},
     {q:"日曜日は どんな 一日でしたか。", o:["いそがしい 一日","しずかな 一日","たのしい パーティー"], a:1}
   ]
 },

 /* ---------------- N4 ---------------- */
 { id:"r-n4-1", lvl:"N4", title:"日本の四季", mins:2,
   paras:[
     {jp:"日本には 四つの 季節が あります。春、夏、秋、冬です。", fu:"にほんには よっつの きせつが あります。はる、なつ、あき、ふゆです。", es:"En Japón hay cuatro estaciones: primavera, verano, otoño e invierno."},
     {jp:"春には さくらが さきます。たくさんの 人が 花見を します。", fu:"はるには さくらが さきます。たくさんの ひとが はなみを します。", es:"En primavera florecen los cerezos. Mucha gente va a contemplarlos (hanami)."},
     {jp:"夏は あつくて、海に 行く 人が 多いです。秋は すずしくて、葉が 赤く なります。", fu:"なつは あつくて、うみに いく ひとが おおいです。あきは すずしくて、はが あかく なります。", es:"El verano es caluroso y mucha gente va a la playa. El otoño es fresco y las hojas se vuelven rojas."},
     {jp:"冬は さむくて、雪が ふる ところも あります。", fu:"ふゆは さむくて、ゆきが ふる ところも あります。", es:"El invierno es frío y en algunos lugares nieva."}
   ],
   gloss:[
     {w:"季節", r:"きせつ", m:"estación (del año)"},
     {w:"花見", r:"はなみ", m:"contemplar los cerezos"},
     {w:"すずしくて", r:"すずしい", m:"fresco (すずしい)"},
     {w:"葉", r:"は", m:"hoja"},
     {w:"雪", r:"ゆき", m:"nieve"}
   ],
   q:[
     {q:"日本に 季節は いくつ ありますか。", o:["三つ","四つ","五つ"], a:1},
     {q:"秋は どう なりますか。", o:["あつく なる","葉が 赤く なる","さくらが さく"], a:1}
   ]
 },

 { id:"r-n4-2", lvl:"N4", title:"私の町", mins:2,
   paras:[
     {jp:"私は 小さい 町に 住んでいます。駅から 歩いて 十分ぐらいです。", fu:"わたしは ちいさい まちに すんでいます。えきから あるいて じゅっぷんぐらいです。", es:"Vivo en un pueblo pequeño. Está a unos diez minutos a pie de la estación."},
     {jp:"町には スーパーや 病院が あって、生活に べんりです。", fu:"まちには すーぱーや びょういんが あって、せいかつに べんりです。", es:"En el pueblo hay supermercados y un hospital, así que es cómodo para vivir."},
     {jp:"でも、大きな デパートは ありません。買い物は となりの 町に 行きます。", fu:"でも、おおきな でぱーとは ありません。かいものは となりの まちに いきます。", es:"Pero no hay grandes almacenes. Para comprar voy al pueblo de al lado."}
   ],
   gloss:[
     {w:"住んでいます", r:"すんでいる", m:"vivir (住む)"},
     {w:"病院", r:"びょういん", m:"hospital"},
     {w:"生活", r:"せいかつ", m:"vida · vida diaria"},
     {w:"べんり", r:"べんり", m:"cómodo · práctico"},
     {w:"買い物", r:"かいもの", m:"compras"},
     {w:"となり", r:"となり", m:"de al lado · vecino"}
   ],
   q:[
     {q:"駅から 町まで どのくらい かかりますか。", o:["五分","十分","二十分"], a:1},
     {q:"買い物は どこで しますか。", o:["この町","となりの町","駅の前"], a:1}
   ]
 },

 /* ---------------- N3 ---------------- */
 { id:"r-n3-1", lvl:"N3", title:"環境を守るために", mins:3,
   paras:[
     {jp:"最近、地球の 環境問題が 深刻に なっています。気温が 上がり、自然が こわされています。", fu:"さいきん、ちきゅうの かんきょうもんだいが しんこくに なっています。きおんが あがり、しぜんが こわされています。", es:"Últimamente, los problemas medioambientales de la Tierra se han vuelto graves. La temperatura sube y se destruye la naturaleza."},
     {jp:"私たちの 生活も、環境に 大きな 影響を 与えています。だから、一人ひとりの 努力が 必要です。", fu:"わたしたちの せいかつも、かんきょうに おおきな えいきょうを あたえています。だから、ひとりひとりの どりょくが ひつようです。", es:"Nuestra vida también tiene un gran impacto en el medio ambiente. Por eso hace falta el esfuerzo de cada persona."},
     {jp:"たとえば、ごみを 減らしたり、電気を むだに 使わないように したり する ことが できます。", fu:"たとえば、ごみを へらしたり、でんきを むだに つかわないように したり する ことが できます。", es:"Por ejemplo, podemos reducir la basura o no malgastar la electricidad."},
     {jp:"小さな ことでも、みんなで 続ければ、大きな 変化に なるでしょう。", fu:"ちいさな ことでも、みんなで つづければ、おおきな へんかに なるでしょう。", es:"Aunque sean cosas pequeñas, si todos las mantenemos, se convertirán en un gran cambio."}
   ],
   gloss:[
     {w:"環境", r:"かんきょう", m:"medio ambiente · entorno"},
     {w:"深刻", r:"しんこく", m:"grave · serio"},
     {w:"気温", r:"きおん", m:"temperatura (ambiente)"},
     {w:"自然", r:"しぜん", m:"naturaleza"},
     {w:"影響", r:"えいきょう", m:"influencia · impacto"},
     {w:"努力", r:"どりょく", m:"esfuerzo"},
     {w:"減らしたり", r:"へらす", m:"reducir (減らす)"},
     {w:"変化", r:"へんか", m:"cambio"}
   ],
   q:[
     {q:"環境問題は どう なっていますか。", o:["よく なっている","深刻に なっている","変わっていない"], a:1},
     {q:"筆者は 何が 必要だと 言っていますか。", o:["政府の お金","一人ひとりの 努力","新しい 機械"], a:1}
   ]
 },

 { id:"r-n3-2", lvl:"N3", title:"日本でのアルバイト", mins:3,
   paras:[
     {jp:"私は 留学生で、週に 三回 コンビニで アルバイトを しています。", fu:"わたしは りゅうがくせいで、しゅうに さんかい こんびにで あるばいとを しています。", es:"Soy estudiante de intercambio y trabajo a tiempo parcial en un konbini tres veces por semana."},
     {jp:"仕事を 始める前に、面接が ありました。店長は やさしくて、経験が なくても 大丈夫だと 言ってくれました。", fu:"しごとを はじめるまえに、めんせつが ありました。てんちょうは やさしくて、けいけんが なくても だいじょうぶだと いってくれました。", es:"Antes de empezar el trabajo hubo una entrevista. El encargado fue amable y me dijo que no pasaba nada aunque no tuviera experiencia."},
     {jp:"給料は 高くないですが、日本語を 使う いい きかいに なっています。", fu:"きゅうりょうは たかくないですが、にほんごを つかう いい きかいに なっています。", es:"El sueldo no es alto, pero es una buena oportunidad para usar el japonés."},
     {jp:"お客さんと 話すのは きんちょうしますが、毎日 少しずつ なれて きました。", fu:"おきゃくさんと はなすのは きんちょうしますが、まいにち すこしずつ なれて きました。", es:"Hablar con los clientes me pone nervioso, pero poco a poco me he ido acostumbrando día a día."}
   ],
   gloss:[
     {w:"留学生", r:"りゅうがくせい", m:"estudiante de intercambio"},
     {w:"面接", r:"めんせつ", m:"entrevista"},
     {w:"店長", r:"てんちょう", m:"encargado · jefe de tienda"},
     {w:"経験", r:"けいけん", m:"experiencia"},
     {w:"給料", r:"きゅうりょう", m:"sueldo"},
     {w:"きかい", r:"きかい", m:"oportunidad (機会)"},
     {w:"なれて", r:"なれる", m:"acostumbrarse (慣れる)"}
   ],
   q:[
     {q:"この人は どこで アルバイトを していますか。", o:["レストラン","コンビニ","学校"], a:1},
     {q:"給料に ついて 何と 言っていますか。", o:["とても 高い","高くない","もらえない"], a:1}
   ]
 },

 { id:"r-n3-3", lvl:"N3", title:"健康な生活", mins:3,
   paras:[
     {jp:"健康で いる ためには、バランスの いい 食事と 十分な 睡眠が 大切です。", fu:"けんこうで いる ためには、ばらんすの いい しょくじと じゅうぶんな すいみんが たいせつです。", es:"Para mantenerse sano son importantes una alimentación equilibrada y un sueño suficiente."},
     {jp:"また、適度な 運動も 体に いいです。毎日 歩く だけでも、体力が つきます。", fu:"また、てきどな うんどうも からだに いいです。まいにち あるく だけでも、たいりょくが つきます。", es:"Además, el ejercicio moderado también es bueno para el cuerpo. Solo con caminar a diario se gana resistencia."},
     {jp:"ストレスを ためない ことも 重要です。ときどき 休んで、気分転換を しましょう。", fu:"すとれすを ためない ことも じゅうようです。ときどき やすんで、きぶんてんかんを しましょう。", es:"También es importante no acumular estrés. De vez en cuando, descansemos y despejemos la mente."}
   ],
   gloss:[
     {w:"健康", r:"けんこう", m:"salud"},
     {w:"食事", r:"しょくじ", m:"comida · alimentación"},
     {w:"睡眠", r:"すいみん", m:"sueño"},
     {w:"適度", r:"てきど", m:"moderado · adecuado"},
     {w:"運動", r:"うんどう", m:"ejercicio"},
     {w:"体力", r:"たいりょく", m:"resistencia física"},
     {w:"重要", r:"じゅうよう", m:"importante"},
     {w:"気分転換", r:"きぶんてんかん", m:"despejarse · cambiar de aires"}
   ],
   q:[
     {q:"健康の ために 大切な ことは 何ですか。", o:["お金と 時間","食事と 睡眠","勉強と 仕事"], a:1},
     {q:"毎日 歩くと どう なりますか。", o:["体力が つく","やせる","つかれる"], a:0}
   ]
 }

];
