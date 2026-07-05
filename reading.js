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
,

 /* ---------------- N5 (nuevos) ---------------- */
 { id:"r-n5-3", lvl:"N5", title:"私の家族", mins:1,
   paras:[
     {jp:"わたしの 家族は 四人です。父と 母と 妹と わたしです。", fu:"わたしの かぞくは よにんです。ちちと ははと いもうとと わたしです。", es:"Mi familia somos cuatro: mi padre, mi madre, mi hermana menor y yo."},
     {jp:"父は 会社員で、母は 先生です。", fu:"ちちは かいしゃいんで、ははは せんせいです。", es:"Mi padre es oficinista y mi madre es profesora."},
     {jp:"妹は 高校生で、毎日 ピアノを 練習します。", fu:"いもうとは こうこうせいで、まいにち ぴあのを れんしゅうします。", es:"Mi hermana menor está en bachillerato y practica piano todos los días."},
     {jp:"わたしたちは 仲が いい 家族です。", fu:"わたしたちは なかが いい かぞくです。", es:"Somos una familia que se lleva bien."}
   ],
   gloss:[
     {w:"家族", r:"かぞく", m:"familia"},
     {w:"父", r:"ちち", m:"(mi) padre"},
     {w:"母", r:"はは", m:"(mi) madre"},
     {w:"妹", r:"いもうと", m:"hermana menor"},
     {w:"会社員", r:"かいしゃいん", m:"oficinista"},
     {w:"仲がいい", r:"なかがいい", m:"llevarse bien"}
   ],
   q:[
     {q:"<ruby>家族<rt>かぞく</rt></ruby>は <ruby>何人<rt>なんにん</rt></ruby>ですか。", o:["<ruby>三人<rt>さんにん</rt></ruby>","<ruby>四人<rt>よにん</rt></ruby>","<ruby>五人<rt>ごにん</rt></ruby>"], a:1},
     {q:"お<ruby>母<rt>かあ</rt></ruby>さんの <ruby>仕事<rt>しごと</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。", o:["<ruby>先生<rt>せんせい</rt></ruby>","<ruby>会社員<rt>かいしゃいん</rt></ruby>","<ruby>学生<rt>がくせい</rt></ruby>"], a:0}
   ]
 },

 { id:"r-n5-4", lvl:"N5", title:"好きな食べ物", mins:1,
   paras:[
     {jp:"わたしは すしが 大好きです。とくに まぐろが 好きです。", fu:"わたしは すしが だいすきです。とくに まぐろが すきです。", es:"Me encanta el sushi. Sobre todo me gusta el atún."},
     {jp:"でも、なっとうは あまり 好きじゃ ありません。", fu:"でも、なっとうは あまり すきじゃ ありません。", es:"Pero el nattō no me gusta mucho."},
     {jp:"週末に よく 家で 料理を します。今度 すしを 作りたいです。", fu:"しゅうまつに よく いえで りょうりを します。こんど すしを つくりたいです。", es:"Los fines de semana suelo cocinar en casa. La próxima vez quiero hacer sushi."}
   ],
   gloss:[
     {w:"大好き", r:"だいすき", m:"encantar"},
     {w:"とくに", r:"とくに", m:"sobre todo"},
     {w:"あまり", r:"あまり", m:"no mucho (+ neg.)"},
     {w:"料理", r:"りょうり", m:"cocina · cocinar"},
     {w:"今度", r:"こんど", m:"la próxima vez"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>が <ruby>大好<rt>だいす</rt></ruby>きですか。", o:["なっとう","すし","ぱん"], a:1},
     {q:"なっとうは どうですか。", o:["<ruby>大好<rt>だいす</rt></ruby>き","あまり <ruby>好<rt>す</rt></ruby>きじゃ ない","<ruby>毎日<rt>まいにち</rt></ruby> <ruby>食<rt>た</rt></ruby>べる"], a:1}
   ]
 },

 { id:"r-n5-5", lvl:"N5", title:"わたしの学校", mins:1,
   paras:[
     {jp:"わたしの 学校は 駅から 近いです。", fu:"わたしの がっこうは えきから ちかいです。", es:"Mi escuela está cerca de la estación."},
     {jp:"教室は 三階に あります。窓から 山が 見えます。", fu:"きょうしつは さんがいに あります。まどから やまが みえます。", es:"El aula está en el tercer piso. Desde la ventana se ve una montaña."},
     {jp:"授業は 八時半に 始まります。昼は 友だちと 食堂で 食べます。", fu:"じゅぎょうは はちじはんに はじまります。ひるは ともだちと しょくどうで たべます。", es:"Las clases empiezan a las ocho y media. Al mediodía como con mis amigos en el comedor."}
   ],
   gloss:[
     {w:"近い", r:"ちかい", m:"cercano"},
     {w:"教室", r:"きょうしつ", m:"aula"},
     {w:"見えます", r:"みえます", m:"verse (見える)"},
     {w:"授業", r:"じゅぎょう", m:"clase · lección"},
     {w:"食堂", r:"しょくどう", m:"comedor · cantina"}
   ],
   q:[
     {q:"<ruby>教室<rt>きょうしつ</rt></ruby>は <ruby>何階<rt>なんがい</rt></ruby>に ありますか。", o:["<ruby>二階<rt>にかい</rt></ruby>","<ruby>三階<rt>さんがい</rt></ruby>","<ruby>四階<rt>よんかい</rt></ruby>"], a:1},
     {q:"<ruby>授業<rt>じゅぎょう</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に <ruby>始<rt>はじ</rt></ruby>まりますか。", o:["<ruby>八時半<rt>はちじはん</rt></ruby>","<ruby>九時<rt>くじ</rt></ruby>","<ruby>七時<rt>しちじ</rt></ruby>"], a:0}
   ]
 },

 { id:"r-n5-6", lvl:"N5", title:"スーパーで買い物", mins:1,
   paras:[
     {jp:"きのう スーパーで 買い物を しました。", fu:"きのう すーぱーで かいものを しました。", es:"Ayer hice la compra en el supermercado."},
     {jp:"野菜と 肉と たまごを 買いました。ぜんぶで 二千円でした。", fu:"やさいと にくと たまごを かいました。ぜんぶで にせんえんでした。", es:"Compré verduras, carne y huevos. En total fueron dos mil yenes."},
     {jp:"くだものは 高かったので、買いませんでした。", fu:"くだものは たかかったので、かいませんでした。", es:"La fruta estaba cara, así que no la compré."}
   ],
   gloss:[
     {w:"買い物", r:"かいもの", m:"compra"},
     {w:"野菜", r:"やさい", m:"verdura"},
     {w:"肉", r:"にく", m:"carne"},
     {w:"ぜんぶで", r:"ぜんぶで", m:"en total"},
     {w:"高かった", r:"たかかった", m:"estaba caro (高い)"}
   ],
   q:[
     {q:"<ruby>全部<rt>ぜんぶ</rt></ruby>で いくらでしたか。", o:["<ruby>千円<rt>せんえん</rt></ruby>","<ruby>二千円<rt>にせんえん</rt></ruby>","<ruby>三千円<rt>さんぜんえん</rt></ruby>"], a:1},
     {q:"くだものを <ruby>買<rt>か</rt></ruby>いましたか。", o:["はい、<ruby>買<rt>か</rt></ruby>いました","いいえ、<ruby>買<rt>か</rt></ruby>いませんでした","たくさん <ruby>買<rt>か</rt></ruby>いました"], a:1}
   ]
 },

 { id:"r-n5-7", lvl:"N5", title:"今日の天気", mins:1,
   paras:[
     {jp:"今日は いい 天気です。空は 青くて、とても あたたかいです。", fu:"きょうは いい てんきです。そらは あおくて、とても あたたかいです。", es:"Hoy hace buen tiempo. El cielo está azul y hace mucho calorcito."},
     {jp:"でも、午後から 雨が ふるそうです。", fu:"でも、ごごから あめが ふるそうです。", es:"Pero dicen que por la tarde lloverá."},
     {jp:"だから、かさを 持って 出かけます。", fu:"だから、かさを もって でかけます。", es:"Por eso, salgo con paraguas."}
   ],
   gloss:[
     {w:"天気", r:"てんき", m:"tiempo (clima)"},
     {w:"空", r:"そら", m:"cielo"},
     {w:"午後", r:"ごご", m:"tarde (p.m.)"},
     {w:"かさ", r:"かさ", m:"paraguas"},
     {w:"出かけます", r:"でかけます", m:"salir (出かける)"}
   ],
   q:[
     {q:"<ruby>午後<rt>ごご</rt></ruby>から どう なりますか。", o:["<ruby>雨<rt>あめ</rt></ruby>が ふる","<ruby>雪<rt>ゆき</rt></ruby>が ふる","はれる"], a:0},
     {q:"この<ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>持<rt>も</rt></ruby>って <ruby>出<rt>で</rt></ruby>かけますか。", o:["ぼうし","かさ","かばん"], a:1}
   ]
 },

 { id:"r-n5-8", lvl:"N5", title:"わたしのペット", mins:1,
   paras:[
     {jp:"わたしは ねこを 一ぴき かっています。名前は タマです。", fu:"わたしは ねこを いっぴき かっています。なまえは たまです。", es:"Tengo un gato. Se llama Tama."},
     {jp:"タマは 白くて、目が 青いです。とても かわいいです。", fu:"たまは しろくて、めが あおいです。とても かわいいです。", es:"Tama es blanco y tiene los ojos azules. Es muy mono."},
     {jp:"毎晩 わたしの ベッドで 寝ます。", fu:"まいばん わたしの べっどで ねます。", es:"Todas las noches duerme en mi cama."}
   ],
   gloss:[
     {w:"かっています", r:"かっています", m:"tener (mascota) (飼う)"},
     {w:"名前", r:"なまえ", m:"nombre"},
     {w:"白くて", r:"しろくて", m:"blanco (白い)"},
     {w:"目", r:"め", m:"ojo(s)"},
     {w:"毎晩", r:"まいばん", m:"todas las noches"}
   ],
   q:[
     {q:"タマの <ruby>目<rt>め</rt></ruby>は <ruby>何色<rt>なにいろ</rt></ruby>ですか。", o:["<ruby>白<rt>しろ</rt></ruby>","<ruby>青<rt>あお</rt></ruby>","<ruby>黒<rt>くろ</rt></ruby>"], a:1},
     {q:"タマは どこで <ruby>寝<rt>ね</rt></ruby>ますか。", o:["そとで","この<ruby>人<rt>ひと</rt></ruby>の ベッドで","だいどころで"], a:1}
   ]
 },

 { id:"r-n5-9", lvl:"N5", title:"日本語の勉強", mins:1,
   paras:[
     {jp:"わたしは 一年前から 日本語を 勉強しています。", fu:"わたしは いちねんまえから にほんごを べんきょうしています。", es:"Estudio japonés desde hace un año."},
     {jp:"ひらがなと カタカナは もう 読めます。今は 漢字を 練習しています。", fu:"ひらがなと かたかなは もう よめます。いまは かんじを れんしゅうしています。", es:"Ya sé leer hiragana y katakana. Ahora practico kanji."},
     {jp:"漢字は むずかしいですが、おもしろいです。", fu:"かんじは むずかしいですが、おもしろいです。", es:"Los kanji son difíciles, pero interesantes."}
   ],
   gloss:[
     {w:"一年前", r:"いちねんまえ", m:"hace un año"},
     {w:"勉強", r:"べんきょう", m:"estudio"},
     {w:"読めます", r:"よめます", m:"poder leer (読める)"},
     {w:"漢字", r:"かんじ", m:"kanji"},
     {w:"むずかしい", r:"むずかしい", m:"difícil"}
   ],
   q:[
     {q:"いつから <ruby>日本語<rt>にほんご</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>していますか。", o:["<ruby>一年前<rt>いちねんまえ</rt></ruby>から","<ruby>先月<rt>せんげつ</rt></ruby>から","<ruby>子<rt>こ</rt></ruby>どもの ときから"], a:0},
     {q:"<ruby>今<rt>いま</rt></ruby> <ruby>何<rt>なに</rt></ruby>を <ruby>練習<rt>れんしゅう</rt></ruby>していますか。", o:["ひらがな","カタカナ","<ruby>漢字<rt>かんじ</rt></ruby>"], a:2}
   ]
 },

 { id:"r-n5-10", lvl:"N5", title:"公園で", mins:1,
   paras:[
     {jp:"日曜日に 子どもと 公園へ 行きました。", fu:"にちようびに こどもと こうえんへ いきました。", es:"El domingo fui al parque con mi hijo."},
     {jp:"公園には 大きい 木が たくさん あります。", fu:"こうえんには おおきい きが たくさん あります。", es:"En el parque hay muchos árboles grandes."},
     {jp:"子どもは 友だちと サッカーを して、わたしは ベンチで 本を 読みました。", fu:"こどもは ともだちと さっかーを して、わたしは べんちで ほんを よみました。", es:"Mi hijo jugó al fútbol con sus amigos y yo leí en un banco."},
     {jp:"とても いい 一日でした。", fu:"とても いい いちにちでした。", es:"Fue un día muy bueno."}
   ],
   gloss:[
     {w:"公園", r:"こうえん", m:"parque"},
     {w:"木", r:"き", m:"árbol"},
     {w:"たくさん", r:"たくさん", m:"mucho"},
     {w:"ベンチ", r:"べんち", m:"banco (asiento)"},
     {w:"一日", r:"いちにち", m:"un día"}
   ],
   q:[
     {q:"いつ <ruby>公園<rt>こうえん</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きましたか。", o:["<ruby>土曜日<rt>どようび</rt></ruby>","<ruby>日曜日<rt>にちようび</rt></ruby>","<ruby>月曜日<rt>げつようび</rt></ruby>"], a:1},
     {q:"この<ruby>人<rt>ひと</rt></ruby>は <ruby>公園<rt>こうえん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を しましたか。", o:["サッカーを した","<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>んだ","<ruby>走<rt>はし</rt></ruby>った"], a:1}
   ]
 }
,

 /* ---------------- N4 (nuevos) ---------------- */
 { id:"r-n4-3", lvl:"N4", title:"旅行の計画", mins:2,
   paras:[
     {jp:"来月、友だちと 北海道へ 旅行に 行く 予定です。", fu:"らいげつ、ともだちと ほっかいどうへ りょこうに いく よていです。", es:"El mes que viene tengo previsto ir de viaje a Hokkaidō con un amigo."},
     {jp:"ひこうきの チケットは もう 予約しました。", fu:"ひこうきの ちけっとは もう よやくしました。", es:"Ya he reservado los billetes de avión."},
     {jp:"北海道は 海の 料理が 有名なので、とても 楽しみです。", fu:"ほっかいどうは うみの りょうりが ゆうめいなので、とても たのしみです。", es:"Hokkaidō es famoso por su comida del mar, así que tengo muchas ganas."},
     {jp:"三日間 泊まる つもりです。", fu:"みっかかん とまる つもりです。", es:"Pienso quedarme tres días."}
   ],
   gloss:[
     {w:"予定", r:"よてい", m:"plan · previsto"},
     {w:"予約", r:"よやく", m:"reserva"},
     {w:"有名", r:"ゆうめい", m:"famoso"},
     {w:"楽しみ", r:"たのしみ", m:"ilusión · ganas"},
     {w:"泊まる", r:"とまる", m:"alojarse"}
   ],
   q:[
     {q:"どこへ <ruby>旅行<rt>りょこう</rt></ruby>に <ruby>行<rt>い</rt></ruby>きますか。", o:["<ruby>東京<rt>とうきょう</rt></ruby>","<ruby>北海道<rt>ほっかいどう</rt></ruby>","<ruby>大阪<rt>おおさか</rt></ruby>"], a:1},
     {q:"<ruby>何日間<rt>なんにちかん</rt></ruby> <ruby>泊<rt>と</rt></ruby>まりますか。", o:["<ruby>二日間<rt>ふつかかん</rt></ruby>","<ruby>三日間<rt>みっかかん</rt></ruby>","<ruby>一週間<rt>いっしゅうかん</rt></ruby>"], a:1}
   ]
 },

 { id:"r-n4-4", lvl:"N4", title:"私の趣味", mins:2,
   paras:[
     {jp:"わたしの 趣味は 写真を とる ことです。", fu:"わたしの しゅみは しゃしんを とる ことです。", es:"Mi afición es hacer fotos."},
     {jp:"週末に なると、カメラを 持って いろいろな 所へ 行きます。", fu:"しゅうまつに なると、かめらを もって いろいろな ところへ いきます。", es:"Cuando llega el fin de semana, voy a distintos lugares con la cámara."},
     {jp:"とくに 花や 山の 写真を とるのが 好きです。", fu:"とくに はなや やまの しゃしんを とるのが すきです。", es:"Me gusta especialmente fotografiar flores y montañas."},
     {jp:"いつか 自分の 写真展を 開きたいです。", fu:"いつか じぶんの しゃしんてんを ひらきたいです。", es:"Algún día quiero hacer mi propia exposición de fotos."}
   ],
   gloss:[
     {w:"趣味", r:"しゅみ", m:"afición"},
     {w:"写真", r:"しゃしん", m:"foto"},
     {w:"いろいろな", r:"いろいろな", m:"diversos"},
     {w:"自分", r:"じぶん", m:"uno mismo"},
     {w:"開きたい", r:"ひらきたい", m:"querer abrir/celebrar (開く)"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>の <ruby>趣味<rt>しゅみ</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。", o:["<ruby>絵<rt>え</rt></ruby>を かく こと","<ruby>写真<rt>しゃしん</rt></ruby>を とる こと","<ruby>山<rt>やま</rt></ruby>に <ruby>登<rt>のぼ</rt></ruby>る こと"], a:1},
     {q:"いつか <ruby>何<rt>なに</rt></ruby>を したいですか。", o:["<ruby>写真展<rt>しゃしんてん</rt></ruby>を <ruby>開<rt>ひら</rt></ruby>く","カメラを <ruby>売<rt>う</rt></ruby>る","<ruby>先生<rt>せんせい</rt></ruby>に なる"], a:0}
   ]
 },

 { id:"r-n4-5", lvl:"N4", title:"友だちの誕生日", mins:2,
   paras:[
     {jp:"明日は 友だちの 誕生日です。", fu:"あしたは ともだちの たんじょうびです。", es:"Mañana es el cumpleaños de un amigo."},
     {jp:"プレゼントに 何を あげるか、まだ 決めていません。", fu:"ぷれぜんとに なにを あげるか、まだ きめていません。", es:"Todavía no he decidido qué regalarle."},
     {jp:"彼は 音楽が 好きだから、CDが いいかもしれません。", fu:"かれは おんがくが すきだから、しーでぃーが いいかもしれません。", es:"Como le gusta la música, quizá un CD sea buena idea."},
     {jp:"今夜、みんなで パーティーを する 予定です。", fu:"こんや、みんなで ぱーてぃーを する よていです。", es:"Esta noche tenemos previsto hacer una fiesta entre todos."}
   ],
   gloss:[
     {w:"誕生日", r:"たんじょうび", m:"cumpleaños"},
     {w:"あげる", r:"あげる", m:"dar · regalar"},
     {w:"決めて", r:"きめて", m:"decidir (決める)"},
     {w:"かもしれません", r:"かもしれません", m:"quizá · puede que"},
     {w:"今夜", r:"こんや", m:"esta noche"}
   ],
   q:[
     {q:"あしたは <ruby>何<rt>なに</rt></ruby>の <ruby>日<rt>ひ</rt></ruby>ですか。", o:["<ruby>友<rt>とも</rt></ruby>だちの <ruby>誕生日<rt>たんじょうび</rt></ruby>","テストの <ruby>日<rt>ひ</rt></ruby>","<ruby>休<rt>やす</rt></ruby>みの <ruby>日<rt>ひ</rt></ruby>"], a:0},
     {q:"プレゼントは もう <ruby>決<rt>き</rt></ruby>めましたか。", o:["はい、<ruby>決<rt>き</rt></ruby>めました","いいえ、まだです","CDを <ruby>買<rt>か</rt></ruby>いました"], a:1}
   ]
 },

 { id:"r-n4-6", lvl:"N4", title:"病気のとき", mins:2,
   paras:[
     {jp:"先週、かぜを ひいて 学校を 休みました。", fu:"せんしゅう、かぜを ひいて がっこうを やすみました。", es:"La semana pasada me resfrié y falté a la escuela."},
     {jp:"熱が 高くて、頭も いたかったです。", fu:"ねつが たかくて、あたまも いたかったです。", es:"Tenía fiebre alta y también me dolía la cabeza."},
     {jp:"病院へ 行って、薬を もらいました。", fu:"びょういんへ いって、くすりを もらいました。", es:"Fui al hospital y me dieron medicina."},
     {jp:"二日 休んだら、元気に なりました。", fu:"ふつか やすんだら、げんきに なりました。", es:"Después de descansar dos días, me recuperé."}
   ],
   gloss:[
     {w:"かぜをひく", r:"かぜをひく", m:"resfriarse"},
     {w:"熱", r:"ねつ", m:"fiebre"},
     {w:"頭", r:"あたま", m:"cabeza"},
     {w:"薬", r:"くすり", m:"medicina"},
     {w:"元気", r:"げんき", m:"bien · con energía"}
   ],
   q:[
     {q:"どうして <ruby>学校<rt>がっこう</rt></ruby>を <ruby>休<rt>やす</rt></ruby>みましたか。", o:["<ruby>旅行<rt>りょこう</rt></ruby>に <ruby>行<rt>い</rt></ruby>った","かぜを ひいた","いそがしかった"], a:1},
     {q:"<ruby>病院<rt>びょういん</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を もらいましたか。", o:["<ruby>薬<rt>くすり</rt></ruby>","お<ruby>金<rt>かね</rt></ruby>","<ruby>本<rt>ほん</rt></ruby>"], a:0}
   ]
 },

 { id:"r-n4-7", lvl:"N4", title:"引っ越し", mins:2,
   paras:[
     {jp:"来週、新しい アパートに 引っ越します。", fu:"らいしゅう、あたらしい あぱーとに ひっこします。", es:"La semana que viene me mudo a un piso nuevo."},
     {jp:"今の 部屋は せまくて、駅からも 遠いです。", fu:"いまの へやは せまくて、えきからも とおいです。", es:"Mi habitación actual es pequeña y además está lejos de la estación."},
     {jp:"新しい 部屋は 広くて、日が よく 入ります。", fu:"あたらしい へやは ひろくて、ひが よく はいります。", es:"La nueva es amplia y entra mucha luz."},
     {jp:"引っ越しの 日は 友だちが 手伝って くれます。", fu:"ひっこしの ひは ともだちが てつだって くれます。", es:"El día de la mudanza mis amigos me ayudan."}
   ],
   gloss:[
     {w:"引っ越す", r:"ひっこす", m:"mudarse"},
     {w:"せまい", r:"せまい", m:"estrecho · pequeño"},
     {w:"遠い", r:"とおい", m:"lejano"},
     {w:"広い", r:"ひろい", m:"amplio"},
     {w:"手伝って", r:"てつだって", m:"ayudar (手伝う)"}
   ],
   q:[
     {q:"<ruby>今<rt>いま</rt></ruby>の <ruby>部屋<rt>へや</rt></ruby>は どうですか。", o:["<ruby>広<rt>ひろ</rt></ruby>い","せまくて <ruby>遠<rt>とお</rt></ruby>い","<ruby>駅<rt>えき</rt></ruby>に <ruby>近<rt>ちか</rt></ruby>い"], a:1},
     {q:"<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しの <ruby>日<rt>ひ</rt></ruby>、だれが <ruby>手伝<rt>てつだ</rt></ruby>いますか。", o:["<ruby>家族<rt>かぞく</rt></ruby>","<ruby>友<rt>とも</rt></ruby>だち","<ruby>会社<rt>かいしゃ</rt></ruby>の <ruby>人<rt>ひと</rt></ruby>"], a:1}
   ]
 },

 { id:"r-n4-8", lvl:"N4", title:"図書館で", mins:2,
   paras:[
     {jp:"わたしは よく 図書館で 勉強します。", fu:"わたしは よく としょかんで べんきょうします。", es:"Suelo estudiar en la biblioteca."},
     {jp:"図書館は 静かで、集中できます。", fu:"としょかんは しずかで、しゅうちゅうできます。", es:"La biblioteca es silenciosa y puedo concentrarme."},
     {jp:"本を 借りる ときは、カードが 必要です。", fu:"ほんを かりる ときは、かーどが ひつようです。", es:"Para sacar libros hace falta el carné."},
     {jp:"一度に 五さつまで 借りる ことが できます。", fu:"いちどに ごさつまで かりる ことが できます。", es:"Se pueden sacar hasta cinco libros a la vez."}
   ],
   gloss:[
     {w:"図書館", r:"としょかん", m:"biblioteca"},
     {w:"集中", r:"しゅうちゅう", m:"concentración"},
     {w:"借りる", r:"かりる", m:"tomar prestado"},
     {w:"必要", r:"ひつよう", m:"necesario"},
     {w:"一度に", r:"いちどに", m:"de una vez"}
   ],
   q:[
     {q:"<ruby>図書館<rt>としょかん</rt></ruby>は どうですか。", o:["にぎやか","<ruby>静<rt>しず</rt></ruby>か","せまい"], a:1},
     {q:"<ruby>一度<rt>いちど</rt></ruby>に <ruby>何冊<rt>なんさつ</rt></ruby>まで <ruby>借<rt>か</rt></ruby>りられますか。", o:["<ruby>三冊<rt>さんさつ</rt></ruby>","<ruby>五冊<rt>ごさつ</rt></ruby>","<ruby>十冊<rt>じゅっさつ</rt></ruby>"], a:1}
   ]
 },

 { id:"r-n4-9", lvl:"N4", title:"料理を作る", mins:2,
   paras:[
     {jp:"今日は 母に 料理を 習いました。", fu:"きょうは ははに りょうりを ならいました。", es:"Hoy aprendí a cocinar con mi madre."},
     {jp:"カレーの 作り方は かんたんでした。", fu:"かれーの つくりかたは かんたんでした。", es:"La forma de hacer curry era sencilla."},
     {jp:"まず 野菜を 切って、肉と いっしょに いためます。", fu:"まず やさいを きって、にくと いっしょに いためます。", es:"Primero se cortan las verduras y se saltean junto con la carne."},
     {jp:"さいごに 水を 入れて、よく にこみます。", fu:"さいごに みずを いれて、よく にこみます。", es:"Al final se añade agua y se deja cocer bien."}
   ],
   gloss:[
     {w:"習いました", r:"ならいました", m:"aprendí (習う)"},
     {w:"作り方", r:"つくりかた", m:"forma de hacer"},
     {w:"切って", r:"きって", m:"cortar (切る)"},
     {w:"いためます", r:"いためます", m:"saltear"},
     {w:"にこみます", r:"にこみます", m:"cocer a fuego lento (煮込む)"}
   ],
   q:[
     {q:"だれに <ruby>料理<rt>りょうり</rt></ruby>を <ruby>習<rt>なら</rt></ruby>いましたか。", o:["<ruby>父<rt>ちち</rt></ruby>","<ruby>母<rt>はは</rt></ruby>","<ruby>友<rt>とも</rt></ruby>だち"], a:1},
     {q:"さいごに <ruby>何<rt>なに</rt></ruby>を しますか。", o:["<ruby>野菜<rt>やさい</rt></ruby>を <ruby>切<rt>き</rt></ruby>る","<ruby>水<rt>みず</rt></ruby>を <ruby>入<rt>い</rt></ruby>れて にこむ","<ruby>肉<rt>にく</rt></ruby>を <ruby>買<rt>か</rt></ruby>う"], a:1}
   ]
 },

 { id:"r-n4-10", lvl:"N4", title:"道を聞く", mins:2,
   paras:[
     {jp:"きのう、はじめて 行く 町で 道に まよいました。", fu:"きのう、はじめて いく まちで みちに まよいました。", es:"Ayer me perdí en un pueblo al que iba por primera vez."},
     {jp:"駅へ 行きたかったので、近くの 人に 聞きました。", fu:"えきへ いきたかったので、ちかくの ひとに ききました。", es:"Quería ir a la estación, así que le pregunté a alguien que estaba cerca."},
     {jp:"「まっすぐ 行って、二つ目の かどを 右に まがって ください」と 言われました。", fu:"「まっすぐ いって、ふたつめの かどを みぎに まがって ください」と いわれました。", es:"Me dijeron: «Siga recto y gire a la derecha en la segunda esquina»."},
     {jp:"おかげで、すぐに 駅が 見つかりました。", fu:"おかげで、すぐに えきが みつかりました。", es:"Gracias a eso, enseguida encontré la estación."}
   ],
   gloss:[
     {w:"道にまよう", r:"みちにまよう", m:"perderse"},
     {w:"聞きました", r:"ききました", m:"preguntar (聞く)"},
     {w:"まっすぐ", r:"まっすぐ", m:"recto · derecho"},
     {w:"まがって", r:"まがって", m:"girar (曲がる)"},
     {w:"見つかりました", r:"みつかりました", m:"se encontró (見つかる)"}
   ],
   q:[
     {q:"どうして <ruby>人<rt>ひと</rt></ruby>に <ruby>聞<rt>き</rt></ruby>きましたか。", o:["<ruby>時間<rt>じかん</rt></ruby>が <ruby>分<rt>わ</rt></ruby>からなかった","<ruby>道<rt>みち</rt></ruby>に まよった","おなかが すいた"], a:1},
     {q:"<ruby>二<rt>ふた</rt></ruby>つ<ruby>目<rt>め</rt></ruby>の かどを どちらに まがりますか。", o:["<ruby>右<rt>みぎ</rt></ruby>","<ruby>左<rt>ひだり</rt></ruby>","まっすぐ"], a:0}
   ]
 }
,

 /* ---------------- N3 (nuevos) ---------------- */
 { id:"r-n3-4", lvl:"N3", title:"環境問題", mins:3,
   paras:[
     {jp:"近年、地球の 環境問題が 深刻に なっています。", fu:"きんねん、ちきゅうの かんきょうもんだいが しんこくに なっています。", es:"En los últimos años, los problemas ambientales del planeta se han vuelto graves."},
     {jp:"とくに ごみの 増加と 海の よごれが 大きな 問題です。", fu:"とくに ごみの ぞうかと うみの よごれが おおきな もんだいです。", es:"En particular, el aumento de la basura y la contaminación del mar son grandes problemas."},
     {jp:"私たちに できる ことも あります。買い物の とき エコバッグを 使ったり、ものを 大切に 使ったり する ことです。", fu:"わたしたちに できる ことも あります。かいものの とき えこばっぐを つかったり、ものを たいせつに つかったり する ことです。", es:"También hay cosas que podemos hacer: usar bolsas reutilizables al comprar y cuidar bien las cosas."},
     {jp:"一人ひとりの 小さな 行動が、未来を 変えるかもしれません。", fu:"ひとりひとりの ちいさな こうどうが、みらいを かえるかもしれません。", es:"Las pequeñas acciones de cada persona quizá cambien el futuro."}
   ],
   gloss:[
     {w:"環境", r:"かんきょう", m:"medio ambiente"},
     {w:"深刻", r:"しんこく", m:"grave · serio"},
     {w:"増加", r:"ぞうか", m:"aumento"},
     {w:"よごれ", r:"よごれ", m:"suciedad · contaminación"},
     {w:"行動", r:"こうどう", m:"acción · conducta"},
     {w:"未来", r:"みらい", m:"futuro"}
   ],
   q:[
     {q:"<ruby>何<rt>なに</rt></ruby>が <ruby>大<rt>おお</rt></ruby>きな <ruby>問題<rt>もんだい</rt></ruby>だと <ruby>言<rt>い</rt></ruby>っていますか。", o:["ごみと <ruby>海<rt>うみ</rt></ruby>の よごれ","<ruby>人口<rt>じんこう</rt></ruby>の <ruby>増加<rt>ぞうか</rt></ruby>","<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>の <ruby>値段<rt>ねだん</rt></ruby>"], a:0},
     {q:"<ruby>私<rt>わたし</rt></ruby>たちに できる ことは <ruby>何<rt>なに</rt></ruby>ですか。", o:["エコバッグを <ruby>使<rt>つか</rt></ruby>う","<ruby>車<rt>くるま</rt></ruby>を <ruby>買<rt>か</rt></ruby>う","<ruby>海<rt>うみ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>く"], a:0}
   ]
 },

 { id:"r-n3-5", lvl:"N3", title:"インターネットと生活", mins:3,
   paras:[
     {jp:"インターネットは 私たちの 生活を 大きく 変えました。", fu:"いんたーねっとは わたしたちの せいかつを おおきく かえました。", es:"Internet ha cambiado mucho nuestra vida."},
     {jp:"買い物や 勉強、仕事まで、家に いながら できるように なりました。", fu:"かいものや べんきょう、しごとまで、いえに いながら できるように なりました。", es:"Ahora se puede comprar, estudiar e incluso trabajar sin salir de casa."},
     {jp:"しかし、便利に なった 一方で、長い 時間 使いすぎる 人も 増えています。", fu:"しかし、べんりに なった いっぽうで、ながい じかん つかいすぎる ひとも ふえています。", es:"Sin embargo, aunque es más cómodo, también aumenta la gente que lo usa demasiado tiempo."},
     {jp:"上手に つきあう ことが 大切だと 思います。", fu:"じょうずに つきあう ことが たいせつだと おもいます。", es:"Creo que lo importante es saber usarlo con moderación."}
   ],
   gloss:[
     {w:"生活", r:"せいかつ", m:"vida cotidiana"},
     {w:"いながら", r:"いながら", m:"estando (sin moverse)"},
     {w:"便利", r:"べんり", m:"cómodo · práctico"},
     {w:"一方で", r:"いっぽうで", m:"por otro lado"},
     {w:"使いすぎる", r:"つかいすぎる", m:"usar en exceso"},
     {w:"つきあう", r:"つきあう", m:"tratar · convivir con"}
   ],
   q:[
     {q:"インターネットで <ruby>何<rt>なに</rt></ruby>が できるように なりましたか。", o:["<ruby>家<rt>いえ</rt></ruby>で <ruby>仕事<rt>しごと</rt></ruby>や <ruby>勉強<rt>べんきょう</rt></ruby>","<ruby>外国語<rt>がいこくご</rt></ruby>だけ","<ruby>運動<rt>うんどう</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>が <ruby>大切<rt>たいせつ</rt></ruby>だと <ruby>言<rt>い</rt></ruby>っていますか。", o:["たくさん <ruby>使<rt>つか</rt></ruby>う こと","<ruby>上手<rt>じょうず</rt></ruby>に つきあう こと","<ruby>使<rt>つか</rt></ruby>わない こと"], a:1}
   ]
 },

 { id:"r-n3-6", lvl:"N3", title:"日本の祭り", mins:3,
   paras:[
     {jp:"日本では 夏に なると、各地で 祭りが 開かれます。", fu:"にほんでは なつに なると、かくちで まつりが ひらかれます。", es:"En Japón, al llegar el verano, se celebran festivales por todas partes."},
     {jp:"祭りでは、人々が ゆかたを 着て、屋台で 食べ物を 楽しみます。", fu:"まつりでは、ひとびとが ゆかたを きて、やたいで たべものを たのしみます。", es:"En los festivales la gente se viste con yukata y disfruta de la comida en los puestos."},
     {jp:"夜には 花火が 上がり、空が きれいに 光ります。", fu:"よるには はなびが あがり、そらが きれいに ひかります。", es:"Por la noche se lanzan fuegos artificiales y el cielo brilla precioso."},
     {jp:"祭りは 地域の 人々を つなぐ 大切な 行事です。", fu:"まつりは ちいきの ひとびとを つなぐ たいせつな ぎょうじです。", es:"Los festivales son un evento importante que une a la gente de la zona."}
   ],
   gloss:[
     {w:"各地", r:"かくち", m:"diversos lugares"},
     {w:"開かれます", r:"ひらかれます", m:"celebrarse (開く)"},
     {w:"屋台", r:"やたい", m:"puesto callejero"},
     {w:"上がり", r:"あがり", m:"elevarse (上がる)"},
     {w:"地域", r:"ちいき", m:"región · zona"},
     {w:"行事", r:"ぎょうじ", m:"evento · acto"}
   ],
   q:[
     {q:"<ruby>祭<rt>まつ</rt></ruby>りで <ruby>人々<rt>ひとびと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>着<rt>き</rt></ruby>ますか。", o:["スーツ","ゆかた","コート"], a:1},
     {q:"<ruby>祭<rt>まつ</rt></ruby>りは どんな <ruby>行事<rt>ぎょうじ</rt></ruby>だと <ruby>言<rt>い</rt></ruby>っていますか。", o:["<ruby>地域<rt>ちいき</rt></ruby>の <ruby>人々<rt>ひとびと</rt></ruby>を つなぐ もの","お<ruby>金<rt>かね</rt></ruby>を <ruby>集<rt>あつ</rt></ruby>める もの","<ruby>子<rt>こ</rt></ruby>どもだけの もの"], a:0}
   ]
 },

 { id:"r-n3-7", lvl:"N3", title:"働き方", mins:3,
   paras:[
     {jp:"最近、働き方が 変わってきました。", fu:"さいきん、はたらきかたが かわってきました。", es:"Últimamente la forma de trabajar ha ido cambiando."},
     {jp:"会社に 行かずに、家で 仕事を する 人が 増えています。", fu:"かいしゃに いかずに、いえで しごとを する ひとが ふえています。", es:"Aumenta la gente que trabaja en casa sin ir a la oficina."},
     {jp:"通勤の 時間が 減るので、自分の 時間が 増えるという 良い点が あります。", fu:"つうきんの じかんが へるので、じぶんの じかんが ふえるという いいてんが あります。", es:"Como se reduce el tiempo de desplazamiento, hay una ventaja: aumenta el tiempo propio."},
     {jp:"一方で、仕事と 生活の 区別が つきにくいという 問題も あります。", fu:"いっぽうで、しごとと せいかつの くべつが つきにくいという もんだいも あります。", es:"Por otro lado, también hay un problema: cuesta separar el trabajo de la vida."}
   ],
   gloss:[
     {w:"働き方", r:"はたらきかた", m:"forma de trabajar"},
     {w:"行かずに", r:"いかずに", m:"sin ir (行く)"},
     {w:"通勤", r:"つうきん", m:"desplazamiento al trabajo"},
     {w:"減る", r:"へる", m:"disminuir"},
     {w:"良い点", r:"いいてん", m:"ventaja · punto bueno"},
     {w:"区別", r:"くべつ", m:"distinción · separación"}
   ],
   q:[
     {q:"どんな <ruby>人<rt>ひと</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>えていますか。", o:["<ruby>家<rt>いえ</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>く <ruby>人<rt>ひと</rt></ruby>","<ruby>会社<rt>かいしゃ</rt></ruby>を <ruby>作<rt>つく</rt></ruby>る <ruby>人<rt>ひと</rt></ruby>","<ruby>旅行<rt>りょこう</rt></ruby>する <ruby>人<rt>ひと</rt></ruby>"], a:0},
     {q:"<ruby>家<rt>いえ</rt></ruby>で <ruby>働<rt>はたら</rt></ruby>く <ruby>問題点<rt>もんだいてん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>通勤<rt>つうきん</rt></ruby>が <ruby>長<rt>なが</rt></ruby>い","<ruby>仕事<rt>しごと</rt></ruby>と <ruby>生活<rt>せいかつ</rt></ruby>の <ruby>区別<rt>くべつ</rt></ruby>が つきにくい","<ruby>給料<rt>きゅうりょう</rt></ruby>が <ruby>下<rt>さ</rt></ruby>がる"], a:1}
   ]
 },

 { id:"r-n3-8", lvl:"N3", title:"外国語を学ぶ", mins:3,
   paras:[
     {jp:"外国語を 学ぶ ことは、新しい 世界を 開く ことです。", fu:"がいこくごを まなぶ ことは、あたらしい せかいを ひらく ことです。", es:"Aprender un idioma extranjero es abrir un mundo nuevo."},
     {jp:"ことばを 覚えるだけでなく、その 国の 文化も 理解できるように なります。", fu:"ことばを おぼえるだけでなく、その くにの ぶんかも りかいできるように なります。", es:"No solo se memorizan palabras, sino que se llega a entender también la cultura de ese país."},
     {jp:"はじめは うまく 話せなくても、毎日 続ける ことが 大切です。", fu:"はじめは うまく はなせなくても、まいにち つづける ことが たいせつです。", es:"Aunque al principio no se hable bien, lo importante es seguir cada día."},
     {jp:"まちがいを おそれずに、たくさん 使ってみましょう。", fu:"まちがいを おそれずに、たくさん つかってみましょう。", es:"Sin miedo a equivocarse, usémoslo mucho."}
   ],
   gloss:[
     {w:"学ぶ", r:"まなぶ", m:"aprender"},
     {w:"だけでなく", r:"だけでなく", m:"no solo ~"},
     {w:"文化", r:"ぶんか", m:"cultura"},
     {w:"理解", r:"りかい", m:"comprensión"},
     {w:"続ける", r:"つづける", m:"continuar"},
     {w:"おそれずに", r:"おそれずに", m:"sin temer (おそれる)"}
   ],
   q:[
     {q:"<ruby>外国語<rt>がいこくご</rt></ruby>を <ruby>学<rt>まな</rt></ruby>ぶと、<ruby>何<rt>なに</rt></ruby>が <ruby>理解<rt>りかい</rt></ruby>できますか。", o:["その <ruby>国<rt>くに</rt></ruby>の <ruby>文化<rt>ぶんか</rt></ruby>","<ruby>数学<rt>すうがく</rt></ruby>","<ruby>科学<rt>かがく</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>が <ruby>大切<rt>たいせつ</rt></ruby>だと <ruby>言<rt>い</rt></ruby>っていますか。", o:["<ruby>毎日<rt>まいにち</rt></ruby> <ruby>続<rt>つづ</rt></ruby>ける こと","<ruby>完璧<rt>かんぺき</rt></ruby>に <ruby>話<rt>はな</rt></ruby>す こと","<ruby>留学<rt>りゅうがく</rt></ruby>する こと"], a:0}
   ]
 },

 { id:"r-n3-9", lvl:"N3", title:"都市と田舎", mins:3,
   paras:[
     {jp:"都市と 田舎では、生活が 大きく ちがいます。", fu:"としと いなかでは、せいかつが おおきく ちがいます。", es:"La vida en la ciudad y en el campo es muy diferente."},
     {jp:"都市は 便利で、店も 多く、交通も べんりです。", fu:"としは べんりで、みせも おおく、こうつうも べんりです。", es:"La ciudad es cómoda, hay muchas tiendas y el transporte es práctico."},
     {jp:"一方、田舎は 自然が 豊かで、空気も きれいです。", fu:"いっぽう、いなかは しぜんが ゆたかで、くうきも きれいです。", es:"En cambio, el campo es rico en naturaleza y el aire es limpio."},
     {jp:"どちらに 住みたいかは、人に よって ちがうでしょう。", fu:"どちらに すみたいかは、ひとに よって ちがうでしょう。", es:"Dónde quiere vivir cada uno seguramente depende de la persona."}
   ],
   gloss:[
     {w:"都市", r:"とし", m:"ciudad"},
     {w:"田舎", r:"いなか", m:"campo · zona rural"},
     {w:"交通", r:"こうつう", m:"transporte"},
     {w:"自然", r:"しぜん", m:"naturaleza"},
     {w:"豊か", r:"ゆたか", m:"rico · abundante"},
     {w:"によって", r:"によって", m:"según · dependiendo de"}
   ],
   q:[
     {q:"<ruby>田舎<rt>いなか</rt></ruby>の よい <ruby>点<rt>てん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>店<rt>みせ</rt></ruby>が <ruby>多<rt>おお</rt></ruby>い","<ruby>自然<rt>しぜん</rt></ruby>が <ruby>豊<rt>ゆた</rt></ruby>か","<ruby>交通<rt>こうつう</rt></ruby>が べんり"], a:1},
     {q:"どちらに <ruby>住<rt>す</rt></ruby>みたいかは <ruby>何<rt>なに</rt></ruby>に よりますか。", o:["<ruby>人<rt>ひと</rt></ruby>","<ruby>天気<rt>てんき</rt></ruby>","<ruby>季節<rt>きせつ</rt></ruby>"], a:0}
   ]
 },

 { id:"r-n3-10", lvl:"N3", title:"読書の習慣", mins:3,
   paras:[
     {jp:"私は 毎晩 寝る前に 本を 読む 習慣が あります。", fu:"わたしは まいばん ねるまえに ほんを よむ しゅうかんが あります。", es:"Tengo la costumbre de leer un libro cada noche antes de dormir."},
     {jp:"読書を すると、知らない ことばや 考え方に 出会えます。", fu:"どくしょを すると、しらない ことばや かんがえかたに であえます。", es:"Al leer, uno se encuentra con palabras y formas de pensar que no conocía."},
     {jp:"また、物語の 中で いろいろな 人生を 経験できます。", fu:"また、ものがたりの なかで いろいろな じんせいを けいけんできます。", es:"Además, dentro de las historias se pueden vivir distintas vidas."},
     {jp:"忙しくても、一日 十分でも 読む ように しています。", fu:"いそがしくても、いちにち じゅっぷんでも よむ ように しています。", es:"Aunque esté ocupado, procuro leer aunque sean diez minutos al día."}
   ],
   gloss:[
     {w:"習慣", r:"しゅうかん", m:"hábito · costumbre"},
     {w:"読書", r:"どくしょ", m:"lectura"},
     {w:"出会えます", r:"であえます", m:"poder encontrarse con (出会う)"},
     {w:"物語", r:"ものがたり", m:"relato · historia"},
     {w:"人生", r:"じんせい", m:"vida (de una persona)"},
     {w:"経験", r:"けいけん", m:"experiencia"}
   ],
   q:[
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>は いつ <ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>みますか。", o:["<ruby>朝<rt>あさ</rt></ruby> <ruby>起<rt>お</rt></ruby>きてすぐ","<ruby>寝<rt>ね</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>","<ruby>会社<rt>かいしゃ</rt></ruby>で"], a:1},
     {q:"<ruby>読書<rt>どくしょ</rt></ruby>の よい <ruby>点<rt>てん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。", o:["いろいろな <ruby>人生<rt>じんせい</rt></ruby>を <ruby>経験<rt>けいけん</rt></ruby>できる","お<ruby>金<rt>かね</rt></ruby>が もうかる","<ruby>体<rt>からだ</rt></ruby>が <ruby>強<rt>つよ</rt></ruby>くなる"], a:0}
   ]
 },
 { id:"r-n5-11", lvl:"N5", title:"朝ごはん", mins:1,
   paras:[
     {jp:"わたしは まいあさ 七時に 朝ごはんを 食べます。", fu:"わたしは まいあさ しちじに あさごはんを たべます。", es:"Todas las mañanas desayuno a las siete."},
     {jp:"ごはんと みそしると たまごを 食べます。ときどき パンも 食べます。", fu:"ごはんと みそしると たまごを たべます。ときどき ぱんも たべます。", es:"Como arroz, sopa de miso y huevo. A veces también como pan."},
     {jp:"朝ごはんの あとで、コーヒーを 飲みます。それから 学校へ 行きます。", fu:"あさごはんの あとで、こーひーを のみます。それから がっこうへ いきます。", es:"Después del desayuno bebo café. Luego voy a la escuela."}
   ],
   gloss:[
     {w:"朝ごはん", r:"あさごはん", m:"desayuno"},
     {w:"みそしる", r:"みそしる", m:"sopa de miso"},
     {w:"たまご", r:"たまご", m:"huevo"},
     {w:"ときどき", r:"ときどき", m:"a veces"},
     {w:"コーヒー", r:"コーヒー", m:"café"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に <ruby>朝<rt>あさ</rt></ruby>ごはんを <ruby>食<rt>た</rt></ruby>べますか。", o:["<ruby>六時<rt>ろくじ</rt></ruby>","<ruby>七時<rt>しちじ</rt></ruby>","<ruby>八時<rt>はちじ</rt></ruby>"], a:1},
     {q:"<ruby>朝<rt>あさ</rt></ruby>ごはんの あとで <ruby>何<rt>なに</rt></ruby>を <ruby>飲<rt>の</rt></ruby>みますか。", o:["<ruby>水<rt>みず</rt></ruby>","お<ruby>茶<rt>ちゃ</rt></ruby>","コーヒー"], a:2}
   ]
 },
 { id:"r-n5-12", lvl:"N5", title:"電車の中で", mins:1,
   paras:[
     {jp:"わたしは まいにち 電車で 会社へ 行きます。", fu:"わたしは まいにち でんしゃで かいしゃへ いきます。", es:"Todos los días voy a la empresa en tren."},
     {jp:"電車の 中は とても こんでいます。すわれない ことも あります。", fu:"でんしゃの なかは とても こんでいます。すわれない ことも あります。", es:"Dentro del tren va muy lleno. A veces no puedo sentarme."},
     {jp:"わたしは 電車の 中で 本を 読みます。ときどき ねむく なります。", fu:"わたしは でんしゃの なかで ほんを よみます。ときどき ねむく なります。", es:"En el tren leo un libro. A veces me entra sueño."}
   ],
   gloss:[
     {w:"電車", r:"でんしゃ", m:"tren"},
     {w:"会社", r:"かいしゃ", m:"empresa"},
     {w:"こんでいます", r:"こんでいます", m:"está lleno · concurrido (混む)"},
     {w:"すわれない", r:"すわれない", m:"no poder sentarse (座る)"},
     {w:"ねむく", r:"ねむく", m:"con sueño (眠い)"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>で <ruby>会社<rt>かいしゃ</rt></ruby>へ <ruby>行<rt>い</rt></ruby>きますか。", o:["<ruby>車<rt>くるま</rt></ruby>","<ruby>電車<rt>でんしゃ</rt></ruby>","バス"], a:1},
     {q:"<ruby>電車<rt>でんしゃ</rt></ruby>の <ruby>中<rt>なか</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を しますか。", o:["<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>む","<ruby>音楽<rt>おんがく</rt></ruby>を きく","<ruby>電話<rt>でんわ</rt></ruby>を する"], a:0}
   ]
 },
 { id:"r-n5-13", lvl:"N5", title:"わたしのへや", mins:1,
   paras:[
     {jp:"わたしの へやは あまり 大きく ありません。でも きれいです。", fu:"わたしの へやは あまり おおきく ありません。でも きれいです。", es:"Mi habitación no es muy grande. Pero está limpia."},
     {jp:"へやには ベッドと つくえと 本だなが あります。", fu:"へやには べっどと つくえと ほんだなが あります。", es:"En la habitación hay una cama, un escritorio y una estantería."},
     {jp:"まどから 空が 見えます。わたしは この へやが 大好きです。", fu:"まどから そらが みえます。わたしは この へやが だいすきです。", es:"Desde la ventana se ve el cielo. Me encanta esta habitación."}
   ],
   gloss:[
     {w:"へや", r:"へや", m:"habitación"},
     {w:"つくえ", r:"つくえ", m:"escritorio"},
     {w:"本だな", r:"ほんだな", m:"estantería"},
     {w:"まど", r:"まど", m:"ventana"},
     {w:"空", r:"そら", m:"cielo"}
   ],
   q:[
     {q:"この へやには <ruby>何<rt>なに</rt></ruby>が ありますか。", o:["ベッドと つくえ","<ruby>車<rt>くるま</rt></ruby>","ねこ"], a:0},
     {q:"まどから <ruby>何<rt>なに</rt></ruby>が <ruby>見<rt>み</rt></ruby>えますか。", o:["<ruby>海<rt>うみ</rt></ruby>","<ruby>山<rt>やま</rt></ruby>","<ruby>空<rt>そら</rt></ruby>"], a:2}
   ]
 },
 { id:"r-n5-14", lvl:"N5", title:"友だちに会う", mins:1,
   paras:[
     {jp:"土よう日に 友だちと 会いました。", fu:"どようびに ともだちと あいました。", es:"El sábado me vi con un amigo."},
     {jp:"いっしょに えいがを 見て、レストランで ひるごはんを 食べました。", fu:"いっしょに えいがを みて、れすとらんで ひるごはんを たべました。", es:"Juntos vimos una película y comimos en un restaurante."},
     {jp:"とても たのしかったです。また 来週 会います。", fu:"とても たのしかったです。また らいしゅう あいます。", es:"Fue muy divertido. Nos vemos otra vez la semana que viene."}
   ],
   gloss:[
     {w:"友だち", r:"ともだち", m:"amigo"},
     {w:"えいが", r:"えいが", m:"película"},
     {w:"レストラン", r:"レストラン", m:"restaurante"},
     {w:"ひるごはん", r:"ひるごはん", m:"almuerzo"},
     {w:"来週", r:"らいしゅう", m:"la semana que viene"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は いつ <ruby>友<rt>とも</rt></ruby>だちと <ruby>会<rt>あ</rt></ruby>いましたか。", o:["<ruby>金<rt>きん</rt></ruby>よう<ruby>日<rt>び</rt></ruby>","<ruby>土<rt>ど</rt></ruby>よう<ruby>日<rt>び</rt></ruby>","<ruby>日<rt>にち</rt></ruby>よう<ruby>日<rt>び</rt></ruby>"], a:1},
     {q:"<ruby>友<rt>とも</rt></ruby>だちと <ruby>何<rt>なに</rt></ruby>を しましたか。", o:["えいがを <ruby>見<rt>み</rt></ruby>た","<ruby>勉強<rt>べんきょう</rt></ruby>した","はたらいた"], a:0}
   ]
 },
 { id:"r-n5-15", lvl:"N5", title:"夏休み", mins:1,
   paras:[
     {jp:"なつやすみに 家ぞくと うみへ 行きました。", fu:"なつやすみに かぞくと うみへ いきました。", es:"En las vacaciones de verano fui al mar con mi familia."},
     {jp:"うみで およいだり、すなで あそんだり しました。", fu:"うみで およいだり、すなで あそんだり しました。", es:"Nadamos en el mar y jugamos en la arena."},
     {jp:"夜は 花火を 見ました。とても きれいでした。", fu:"よるは はなびを みました。とても きれいでした。", es:"Por la noche vimos fuegos artificiales. Eran muy bonitos."}
   ],
   gloss:[
     {w:"なつやすみ", r:"なつやすみ", m:"vacaciones de verano"},
     {w:"家ぞく", r:"かぞく", m:"familia"},
     {w:"うみ", r:"うみ", m:"mar"},
     {w:"すな", r:"すな", m:"arena"},
     {w:"花火", r:"はなび", m:"fuegos artificiales"}
   ],
   q:[
     {q:"<ruby>夏休<rt>なつやす</rt></ruby>みに どこへ <ruby>行<rt>い</rt></ruby>きましたか。", o:["<ruby>山<rt>やま</rt></ruby>","うみ","こうえん"], a:1},
     {q:"<ruby>夜<rt>よる</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>見<rt>み</rt></ruby>ましたか。", o:["<ruby>花火<rt>はなび</rt></ruby>","<ruby>星<rt>ほし</rt></ruby>","<ruby>月<rt>つき</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n5-16", lvl:"N5", title:"郵便局で", mins:1,
   paras:[
     {jp:"きのう ゆうびんきょくへ 行きました。", fu:"きのう ゆうびんきょくへ いきました。", es:"Ayer fui a la oficina de correos."},
     {jp:"国の 家ぞくに 手紙と プレゼントを 送りました。", fu:"くにの かぞくに てがみと ぷれぜんとを おくりました。", es:"Envié una carta y un regalo a mi familia en mi país."},
     {jp:"きってを 買って、はがきも 出しました。", fu:"きってを かって、はがきも だしました。", es:"Compré sellos y también eché una postal."}
   ],
   gloss:[
     {w:"ゆうびんきょく", r:"ゆうびんきょく", m:"oficina de correos"},
     {w:"手紙", r:"てがみ", m:"carta"},
     {w:"送りました", r:"おくりました", m:"envié (送る)"},
     {w:"きって", r:"きって", m:"sello"},
     {w:"はがき", r:"はがき", m:"postal"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は どこへ <ruby>行<rt>い</rt></ruby>きましたか。", o:["ぎんこう","ゆうびんきょく","びょういん"], a:1},
     {q:"<ruby>家<rt>か</rt></ruby>ぞくに <ruby>何<rt>なに</rt></ruby>を <ruby>送<rt>おく</rt></ruby>りましたか。", o:["<ruby>手紙<rt>てがみ</rt></ruby>と プレゼント","おかね","<ruby>本<rt>ほん</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n5-17", lvl:"N5", title:"電話", mins:1,
   paras:[
     {jp:"日よう日の 夜、母に 電話を かけました。", fu:"にちようびの よる、ははに でんわを かけました。", es:"El domingo por la noche llamé por teléfono a mi madre."},
     {jp:"母は 元気でした。いろいろな 話を しました。", fu:"ははは げんきでした。いろいろな はなしを しました。", es:"Mi madre estaba bien. Hablamos de muchas cosas."},
     {jp:"らいげつ 国へ 帰ります。母に 会うのが たのしみです。", fu:"らいげつ くにへ かえります。ははに あうのが たのしみです。", es:"El mes que viene vuelvo a mi país. Tengo ganas de ver a mi madre."}
   ],
   gloss:[
     {w:"電話", r:"でんわ", m:"teléfono · llamada"},
     {w:"母", r:"はは", m:"madre"},
     {w:"元気", r:"げんき", m:"con energía · bien de salud"},
     {w:"らいげつ", r:"らいげつ", m:"el mes que viene"},
     {w:"たのしみ", r:"たのしみ", m:"ilusión · algo que se espera con ganas"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は だれに <ruby>電話<rt>でんわ</rt></ruby>を かけましたか。", o:["<ruby>父<rt>ちち</rt></ruby>","<ruby>母<rt>はは</rt></ruby>","<ruby>友<rt>とも</rt></ruby>だち"], a:1},
     {q:"らいげつ <ruby>何<rt>なに</rt></ruby>を しますか。", o:["<ruby>国<rt>くに</rt></ruby>へ <ruby>帰<rt>かえ</rt></ruby>る","<ruby>引<rt>ひ</rt></ruby>っこす","<ruby>旅行<rt>りょこう</rt></ruby>する"], a:0}
   ]
 },
 { id:"r-n5-18", lvl:"N5", title:"わたしの一週間", mins:1,
   paras:[
     {jp:"わたしは 月よう日から 金よう日まで はたらきます。", fu:"わたしは げつようびから きんようびまで はたらきます。", es:"Trabajo de lunes a viernes."},
     {jp:"土よう日は そうじや せんたくを します。", fu:"どようびは そうじや せんたくを します。", es:"Los sábados hago la limpieza y la colada."},
     {jp:"日よう日は うちで ゆっくり やすみます。", fu:"にちようびは うちで ゆっくり やすみます。", es:"Los domingos descanso tranquilamente en casa."}
   ],
   gloss:[
     {w:"はたらきます", r:"はたらきます", m:"trabajar (働く)"},
     {w:"そうじ", r:"そうじ", m:"limpieza"},
     {w:"せんたく", r:"せんたく", m:"colada · lavar la ropa"},
     {w:"ゆっくり", r:"ゆっくり", m:"tranquilamente · sin prisa"},
     {w:"やすみます", r:"やすみます", m:"descansar (休む)"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は いつ はたらきますか。", o:["<ruby>月<rt>げつ</rt></ruby>よう<ruby>日<rt>び</rt></ruby>から <ruby>金<rt>きん</rt></ruby>よう<ruby>日<rt>び</rt></ruby>","<ruby>毎日<rt>まいにち</rt></ruby>","<ruby>週末<rt>しゅうまつ</rt></ruby>だけ"], a:0},
     {q:"<ruby>日<rt>にち</rt></ruby>よう<ruby>日<rt>び</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を しますか。", o:["はたらく","そうじする","うちで やすむ"], a:2}
   ]
 },
 { id:"r-n5-19", lvl:"N5", title:"好きな季節", mins:1,
   paras:[
     {jp:"わたしの 好きな きせつは 春です。", fu:"わたしの すきな きせつは はるです。", es:"Mi estación favorita es la primavera."},
     {jp:"春は あたたかくて、花が たくさん さきます。", fu:"はるは あたたかくて、はなが たくさん さきます。", es:"En primavera hace calorcito y florecen muchas flores."},
     {jp:"わたしは 友だちと 花見に 行くのが 好きです。", fu:"わたしは ともだちと はなみに いくのが すきです。", es:"Me gusta ir a ver los cerezos con mis amigos."}
   ],
   gloss:[
     {w:"きせつ", r:"きせつ", m:"estación (del año)"},
     {w:"春", r:"はる", m:"primavera"},
     {w:"あたたかくて", r:"あたたかくて", m:"cálido · templado (暖かい)"},
     {w:"さきます", r:"さきます", m:"florecer (咲く)"},
     {w:"花見", r:"はなみ", m:"contemplación de los cerezos en flor"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>の <ruby>好<rt>す</rt></ruby>きな きせつは <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>春<rt>はる</rt></ruby>","<ruby>夏<rt>なつ</rt></ruby>","<ruby>冬<rt>ふゆ</rt></ruby>"], a:0},
     {q:"<ruby>春<rt>はる</rt></ruby>に <ruby>友<rt>とも</rt></ruby>だちと <ruby>何<rt>なに</rt></ruby>を しますか。", o:["<ruby>海<rt>うみ</rt></ruby>で およぐ","<ruby>花見<rt>はなみ</rt></ruby>に <ruby>行<rt>い</rt></ruby>く","スキーを する"], a:1}
   ]
 },
 { id:"r-n5-20", lvl:"N5", title:"カフェで", mins:1,
   paras:[
     {jp:"わたしは しゅうまつ、よく カフェへ 行きます。", fu:"わたしは しゅうまつ、よく かふぇへ いきます。", es:"Los fines de semana suelo ir a una cafetería."},
     {jp:"あたたかい コーヒーを のみます。そして 本を 読みます。", fu:"あたたかい こーひーを のみます。そして ほんを よみます。", es:"Bebo un café caliente. Y leo un libro."},
     {jp:"しずかで、とても いい 時間です。", fu:"しずかで、とても いい じかんです。", es:"Es tranquilo, un rato muy agradable."}
   ],
   gloss:[
     {w:"しゅうまつ", r:"しゅうまつ", m:"fin de semana"},
     {w:"カフェ", r:"カフェ", m:"cafetería"},
     {w:"あたたかい", r:"あたたかい", m:"caliente · templado"},
     {w:"しずか", r:"しずか", m:"tranquilo · silencioso"},
     {w:"時間", r:"じかん", m:"tiempo · rato"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は しゅうまつ どこへ <ruby>行<rt>い</rt></ruby>きますか。", o:["カフェ","<ruby>会社<rt>かいしゃ</rt></ruby>","<ruby>学校<rt>がっこう</rt></ruby>"], a:0},
     {q:"カフェで <ruby>何<rt>なに</rt></ruby>を のみますか。", o:["おちゃ","コーヒー","ジュース"], a:1}
   ]
 }

];
