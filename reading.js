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
 },
 { id:"r-n4-11", lvl:"N4", title:"富士山に登る", mins:2,
   paras:[
     {jp:"去年の 夏、私は 友だちと 富士山に 登りました。", fu:"きょねんの なつ、わたしは ともだちと ふじさんに のぼりました。", es:"El verano pasado subí al monte Fuji con un amigo."},
     {jp:"富士山は 日本で いちばん 高い 山です。登るのは 大変でしたが、けしきは とても きれいでした。", fu:"ふじさんは にほんで いちばん たかい やまです。のぼるのは たいへんでしたが、けしきは とても きれいでした。", es:"El Fuji es la montaña más alta de Japón. Subir fue duro, pero el paisaje era precioso."},
     {jp:"頂上で 朝日を 見ました。みんな 感動して、写真を たくさん とりました。", fu:"ちょうじょうで あさひを みました。みんな かんどうして、しゃしんを たくさん とりました。", es:"En la cima vimos el amanecer. Todos nos emocionamos y sacamos muchas fotos."},
     {jp:"足は 痛かったですが、また 登りたいと 思います。", fu:"あしは いたかったですが、また のぼりたいと おもいます。", es:"Me dolían los pies, pero quiero volver a subir."}
   ],
   gloss:[
     {w:"登りました", r:"のぼりました", m:"subí · escalé (登る)"},
     {w:"けしき", r:"けしき", m:"paisaje"},
     {w:"頂上", r:"ちょうじょう", m:"cima · cumbre"},
     {w:"朝日", r:"あさひ", m:"sol naciente · amanecer"},
     {w:"感動して", r:"かんどうして", m:"emocionarse (感動する)"}
   ],
   q:[
     {q:"<ruby>富士山<rt>ふじさん</rt></ruby>は どんな <ruby>山<rt>やま</rt></ruby>ですか。", o:["<ruby>日本<rt>にほん</rt></ruby>で いちばん <ruby>高<rt>たか</rt></ruby>い","<ruby>日本<rt>にほん</rt></ruby>で いちばん <ruby>低<rt>ひく</rt></ruby>い","<ruby>海<rt>うみ</rt></ruby>の <ruby>近<rt>ちか</rt></ruby>く"], a:0},
     {q:"<ruby>頂上<rt>ちょうじょう</rt></ruby>で <ruby>何<rt>なに</rt></ruby>を <ruby>見<rt>み</rt></ruby>ましたか。", o:["<ruby>朝日<rt>あさひ</rt></ruby>","<ruby>雪<rt>ゆき</rt></ruby>","<ruby>海<rt>うみ</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n4-12", lvl:"N4", title:"日本のコンビニ", mins:2,
   paras:[
     {jp:"日本には コンビニが たくさん あります。町の どこでも 見つけられます。", fu:"にほんには こんびにが たくさん あります。まちの どこでも みつけられます。", es:"En Japón hay muchos konbini. Puedes encontrarlos en cualquier parte de la ciudad."},
     {jp:"コンビニでは 買い物だけでなく、お金を おろしたり、料金を 払ったり できます。", fu:"こんびにでは かいものだけでなく、おかねを おろしたり、りょうきんを はらったり できます。", es:"En el konbini no solo puedes comprar, sino también sacar dinero o pagar recibos."},
     {jp:"24時間 あいているので、夜中でも 便利です。", fu:"にじゅうよじかん あいているので、よなかでも べんりです。", es:"Como están abiertos 24 horas, resultan cómodos incluso de madrugada."},
     {jp:"私は よく コンビニで おべんとうを 買って、家で 食べます。", fu:"わたしは よく こんびにで おべんとうを かって、いえで たべます。", es:"Yo suelo comprar un bento en el konbini y comerlo en casa."}
   ],
   gloss:[
     {w:"コンビニ", r:"コンビニ", m:"tienda de conveniencia (konbini)"},
     {w:"見つけられます", r:"みつけられます", m:"poder encontrar (見つける)"},
     {w:"料金", r:"りょうきん", m:"tarifa · importe (de un recibo)"},
     {w:"夜中", r:"よなか", m:"medianoche · madrugada"},
     {w:"おべんとう", r:"おべんとう", m:"bento (comida para llevar)"}
   ],
   q:[
     {q:"コンビニで できない ことは <ruby>何<rt>なに</rt></ruby>ですか。", o:["お<ruby>金<rt>かね</rt></ruby>を おろす","<ruby>料金<rt>りょうきん</rt></ruby>を <ruby>払<rt>はら</rt></ruby>う","<ruby>車<rt>くるま</rt></ruby>を <ruby>買<rt>か</rt></ruby>う"], a:2},
     {q:"コンビニは なぜ <ruby>便利<rt>べんり</rt></ruby>ですか。", o:["<ruby>安<rt>やす</rt></ruby>いから","24<ruby>時間<rt>じかん</rt></ruby> あいているから","<ruby>広<rt>ひろ</rt></ruby>いから"], a:1}
   ]
 },
 { id:"r-n4-13", lvl:"N4", title:"漢字の勉強", mins:2,
   paras:[
     {jp:"日本語の 勉強の 中で、漢字は いちばん むずかしいと 思います。", fu:"にほんごの べんきょうの なかで、かんじは いちばん むずかしいと おもいます。", es:"De todo el estudio del japonés, creo que el kanji es lo más difícil."},
     {jp:"漢字は 数が 多くて、読み方も いくつも あります。", fu:"かんじは かずが おおくて、よみかたも いくつも あります。", es:"Los kanji son muchos y además tienen varias lecturas."},
     {jp:"私は 毎日 新しい 漢字を 五つ おぼえるように しています。", fu:"わたしは まいにち あたらしい かんじを いつつ おぼえるように しています。", es:"Intento aprender cinco kanji nuevos cada día."},
     {jp:"なんども 書いて 練習すると、少しずつ おぼえられます。", fu:"なんども かいて れんしゅうすると、すこしずつ おぼえられます。", es:"Si practico escribiéndolos muchas veces, poco a poco los memorizo."}
   ],
   gloss:[
     {w:"漢字", r:"かんじ", m:"kanji (caracteres)"},
     {w:"読み方", r:"よみかた", m:"forma de leer · lectura"},
     {w:"おぼえる", r:"おぼえる", m:"memorizar · aprender"},
     {w:"練習する", r:"れんしゅうする", m:"practicar"},
     {w:"少しずつ", r:"すこしずつ", m:"poco a poco"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は <ruby>毎日<rt>まいにち</rt></ruby> いくつ <ruby>漢字<rt>かんじ</rt></ruby>を おぼえますか。", o:["<ruby>三<rt>みっ</rt></ruby>つ","<ruby>五<rt>いつ</rt></ruby>つ","<ruby>十<rt>とお</rt></ruby>"], a:1},
     {q:"<ruby>漢字<rt>かんじ</rt></ruby>を おぼえる ために <ruby>何<rt>なに</rt></ruby>を しますか。", o:["なんども <ruby>書<rt>か</rt></ruby>く","<ruby>音楽<rt>おんがく</rt></ruby>を きく","はやく <ruby>読<rt>よ</rt></ruby>む"], a:0}
   ]
 },
 { id:"r-n4-14", lvl:"N4", title:"運動を始める", mins:2,
   paras:[
     {jp:"最近、運動不足なので、毎朝 走ることに しました。", fu:"さいきん、うんどうぶそくなので、まいあさ はしることに しました。", es:"Últimamente me falta ejercicio, así que decidí correr cada mañana."},
     {jp:"初めは 5分でも つらかったですが、少しずつ 長く 走れるように なりました。", fu:"はじめは ごふんでも つらかったですが、すこしずつ ながく はしれるように なりました。", es:"Al principio, aunque fueran 5 minutos, era duro, pero poco a poco pude correr más rato."},
     {jp:"運動を すると、気持ちが よくて、よく ねむれます。", fu:"うんどうを すると、きもちが よくて、よく ねむれます。", es:"Cuando hago ejercicio, me siento bien y duermo mejor."},
     {jp:"これからも 続けたいと 思います。", fu:"これからも つづけたいと おもいます。", es:"Quiero seguir haciéndolo de ahora en adelante."}
   ],
   gloss:[
     {w:"運動不足", r:"うんどうぶそく", m:"falta de ejercicio"},
     {w:"つらかった", r:"つらかった", m:"fue duro · penoso (つらい)"},
     {w:"走れる", r:"はしれる", m:"poder correr (走る)"},
     {w:"気持ち", r:"きもち", m:"sensación · ánimo"},
     {w:"続けたい", r:"つづけたい", m:"querer continuar (続ける)"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は なぜ <ruby>走<rt>はし</rt></ruby>ることに しましたか。", o:["<ruby>運動不足<rt>うんどうぶそく</rt></ruby>だから","<ruby>友<rt>とも</rt></ruby>だちに さそわれたから","やせたいから"], a:0},
     {q:"<ruby>運動<rt>うんどう</rt></ruby>を すると どう なりますか。", o:["よく ねむれる","おなかが すく","つかれて <ruby>寝<rt>ね</rt></ruby>られない"], a:0}
   ]
 },
 { id:"r-n4-15", lvl:"N4", title:"犬を飼う", mins:2,
   paras:[
     {jp:"私の 家では 犬を 一ぴき 飼っています。名前は マロンです。", fu:"わたしの いえでは いぬを いっぴき かっています。なまえは まろんです。", es:"En mi casa tenemos un perro. Se llama Maron."},
     {jp:"マロンは とても 元気で、毎日 さんぽに 行きたがります。", fu:"まろんは とても げんきで、まいにち さんぽに いきたがります。", es:"Maron es muy activo y cada día quiere ir a pasear."},
     {jp:"朝と 夜、私が さんぽに 連れて行きます。", fu:"あさと よる、わたしが さんぽに つれていきます。", es:"Por la mañana y por la noche yo lo llevo a pasear."},
     {jp:"世話は 大変ですが、マロンが いると 家が にぎやかで、楽しいです。", fu:"せわは たいへんですが、まろんが いると いえが にぎやかで、たのしいです。", es:"Cuidarlo cuesta, pero con Maron la casa está animada y es divertido."}
   ],
   gloss:[
     {w:"飼っています", r:"かっています", m:"tener (un animal) (飼う)"},
     {w:"行きたがります", r:"いきたがります", m:"(él) quiere ir (行きたがる)"},
     {w:"連れて行きます", r:"つれていきます", m:"llevar (a alguien) (連れて行く)"},
     {w:"世話", r:"せわ", m:"cuidado · atención"},
     {w:"にぎやか", r:"にぎやか", m:"animado · bullicioso"}
   ],
   q:[
     {q:"マロンは <ruby>何<rt>なに</rt></ruby>が すきですか。", o:["さんぽ","おふろ","<ruby>音楽<rt>おんがく</rt></ruby>"], a:0},
     {q:"<ruby>犬<rt>いぬ</rt></ruby>が いると <ruby>家<rt>いえ</rt></ruby>は どう なりますか。", o:["しずかに なる","にぎやかに なる","くらく なる"], a:1}
   ]
 },
 { id:"r-n4-16", lvl:"N4", title:"温泉旅行", mins:2,
   paras:[
     {jp:"先週、家族と 温泉に 行きました。山の 中の 古い 旅館に 泊まりました。", fu:"せんしゅう、かぞくと おんせんに いきました。やまの なかの ふるい りょかんに とまりました。", es:"La semana pasada fui a un onsen con mi familia. Nos alojamos en una posada antigua en la montaña."},
     {jp:"温泉に 入ると、体が あたたまって、つかれが とれました。", fu:"おんせんに はいると、からだが あたたまって、つかれが とれました。", es:"Al entrar en el onsen, el cuerpo se calentó y se me quitó el cansancio."},
     {jp:"夕ごはんは その 土地の りょうりで、とても おいしかったです。", fu:"ゆうごはんは その とちの りょうりで、とても おいしかったです。", es:"La cena era comida local y estaba muy rica."},
     {jp:"久しぶりに ゆっくり できて、いい 旅行でした。", fu:"ひさしぶりに ゆっくり できて、いい りょこうでした。", es:"Pude relajarme después de mucho tiempo; fue un buen viaje."}
   ],
   gloss:[
     {w:"温泉", r:"おんせん", m:"aguas termales · onsen"},
     {w:"旅館", r:"りょかん", m:"posada tradicional japonesa"},
     {w:"泊まりました", r:"とまりました", m:"me alojé (泊まる)"},
     {w:"あたたまって", r:"あたたまって", m:"calentarse (温まる)"},
     {w:"久しぶり", r:"ひさしぶり", m:"después de mucho tiempo"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は どこに <ruby>泊<rt>と</rt></ruby>まりましたか。", o:["ホテル","<ruby>旅館<rt>りょかん</rt></ruby>","<ruby>友<rt>とも</rt></ruby>だちの <ruby>家<rt>いえ</rt></ruby>"], a:1},
     {q:"<ruby>温泉<rt>おんせん</rt></ruby>に <ruby>入<rt>はい</rt></ruby>ると どう なりましたか。", o:["つかれが とれた","おなかが すいた","ねむく なった"], a:0}
   ]
 },
 { id:"r-n4-17", lvl:"N4", title:"お正月", mins:2,
   paras:[
     {jp:"日本では お正月が いちばん 大切な 行事です。", fu:"にほんでは おしょうがつが いちばん たいせつな ぎょうじです。", es:"En Japón, el Año Nuevo es la celebración más importante."},
     {jp:"家族が 集まって、いっしょに おせちりょうりを 食べます。", fu:"かぞくが あつまって、いっしょに おせちりょうりを たべます。", es:"La familia se reúne y comen juntos la comida osechi."},
     {jp:"子どもは 大人から お年玉を もらえるので、とても うれしそうです。", fu:"こどもは おとなから おとしだまを もらえるので、とても うれしそうです。", es:"Los niños reciben el otoshidama de los adultos, así que parecen muy contentos."},
     {jp:"神社に 行って、今年も いい 年に なるように おいのりします。", fu:"じんじゃに いって、ことしも いい としに なるように おいのりします。", es:"Van al santuario y rezan para que este año también sea bueno."}
   ],
   gloss:[
     {w:"お正月", r:"おしょうがつ", m:"Año Nuevo (japonés)"},
     {w:"行事", r:"ぎょうじ", m:"evento · celebración"},
     {w:"集まって", r:"あつまって", m:"reunirse (集まる)"},
     {w:"お年玉", r:"おとしだま", m:"dinero de Año Nuevo para los niños"},
     {w:"神社", r:"じんじゃ", m:"santuario sintoísta"}
   ],
   q:[
     {q:"<ruby>子<rt>こ</rt></ruby>どもは なぜ うれしそうですか。", o:["お<ruby>年玉<rt>としだま</rt></ruby>を もらえるから","<ruby>学校<rt>がっこう</rt></ruby>が <ruby>休<rt>やす</rt></ruby>みだから","プレゼントが あるから"], a:0},
     {q:"<ruby>家族<rt>かぞく</rt></ruby>は <ruby>正月<rt>しょうがつ</rt></ruby>に <ruby>何<rt>なに</rt></ruby>を <ruby>食<rt>た</rt></ruby>べますか。", o:["おせちりょうり","ラーメン","カレー"], a:0}
   ]
 },
 { id:"r-n4-18", lvl:"N4", title:"スマートフォン", mins:2,
   paras:[
     {jp:"今、ほとんどの 人が スマートフォンを 持っています。", fu:"いま、ほとんどの ひとが すまーとふぉんを もっています。", es:"Hoy en día casi todo el mundo tiene un smartphone."},
     {jp:"スマホが あれば、いつでも れんらくが できるし、地図も 見られます。", fu:"すまほが あれば、いつでも れんらくが できるし、ちずも みられます。", es:"Si tienes móvil, puedes comunicarte en cualquier momento y también ver mapas."},
     {jp:"でも、長い 時間 使いすぎると、目が つかれて しまいます。", fu:"でも、ながい じかん つかいすぎると、めが つかれて しまいます。", es:"Pero si lo usas demasiado tiempo, se te cansan los ojos."},
     {jp:"使う 時間を 決めて、上手に 使うことが 大切だと 思います。", fu:"つかう じかんを きめて、じょうずに つかうことが たいせつだと おもいます。", es:"Creo que es importante fijar un tiempo de uso y usarlo con moderación."}
   ],
   gloss:[
     {w:"スマートフォン", r:"スマートフォン", m:"smartphone"},
     {w:"れんらく", r:"れんらく", m:"contacto · comunicación"},
     {w:"地図", r:"ちず", m:"mapa"},
     {w:"使いすぎる", r:"つかいすぎる", m:"usar demasiado (使う + すぎる)"},
     {w:"決めて", r:"きめて", m:"decidir · fijar (決める)"}
   ],
   q:[
     {q:"スマホを <ruby>使<rt>つか</rt></ruby>いすぎると どう なりますか。", o:["<ruby>目<rt>め</rt></ruby>が つかれる","<ruby>元気<rt>げんき</rt></ruby>に なる","<ruby>頭<rt>あたま</rt></ruby>が よく なる"], a:0},
     {q:"この<ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>が <ruby>大切<rt>たいせつ</rt></ruby>だと <ruby>言<rt>い</rt></ruby>っていますか。", o:["<ruby>使<rt>つか</rt></ruby>う <ruby>時間<rt>じかん</rt></ruby>を <ruby>決<rt>き</rt></ruby>める","<ruby>新<rt>あたら</rt></ruby>しい スマホを <ruby>買<rt>か</rt></ruby>う","スマホを <ruby>使<rt>つか</rt></ruby>わない"], a:0}
   ]
 },
 { id:"r-n4-19", lvl:"N4", title:"将来の夢", mins:2,
   paras:[
     {jp:"私の 将来の 夢は 医者に なることです。", fu:"わたしの しょうらいの ゆめは いしゃに なることです。", es:"Mi sueño para el futuro es ser médico."},
     {jp:"子どもの ころ、病気の 私を 助けて くれた 医者に あこがれました。", fu:"こどもの ころ、びょうきの わたしを たすけて くれた いしゃに あこがれました。", es:"De niño admiré al médico que me ayudó cuando estaba enfermo."},
     {jp:"医者に なるためには、たくさん 勉強しなければ なりません。", fu:"いしゃに なるためには、たくさん べんきょうしなければ なりません。", es:"Para ser médico hay que estudiar mucho."},
     {jp:"大変ですが、夢を かなえるために がんばります。", fu:"たいへんですが、ゆめを かなえるために がんばります。", es:"Es duro, pero me esforzaré para cumplir mi sueño."}
   ],
   gloss:[
     {w:"将来", r:"しょうらい", m:"futuro"},
     {w:"夢", r:"ゆめ", m:"sueño"},
     {w:"あこがれました", r:"あこがれました", m:"admiré · sentí admiración (あこがれる)"},
     {w:"助けて", r:"たすけて", m:"ayudar (助ける)"},
     {w:"かなえる", r:"かなえる", m:"hacer realidad · cumplir (un sueño)"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>の <ruby>夢<rt>ゆめ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>医者<rt>いしゃ</rt></ruby>に なること","<ruby>先生<rt>せんせい</rt></ruby>に なること","<ruby>歌手<rt>かしゅ</rt></ruby>に なること"], a:0},
     {q:"なぜ その <ruby>夢<rt>ゆめ</rt></ruby>を もちましたか。", o:["<ruby>子<rt>こ</rt></ruby>どもの ころ <ruby>医者<rt>いしゃ</rt></ruby>に <ruby>助<rt>たす</rt></ruby>けられたから","お<ruby>金<rt>かね</rt></ruby>が ほしいから","<ruby>親<rt>おや</rt></ruby>に <ruby>言<rt>い</rt></ruby>われたから"], a:0}
   ]
 },
 { id:"r-n4-20", lvl:"N4", title:"カラオケ", mins:2,
   paras:[
     {jp:"週末、私は 友だちと カラオケに 行きました。", fu:"しゅうまつ、わたしは ともだちと からおけに いきました。", es:"El fin de semana fui al karaoke con mis amigos."},
     {jp:"みんなで 好きな 歌を 歌ったり、おどったり して 楽しみました。", fu:"みんなで すきな うたを うたったり、おどったり して たのしみました。", es:"Cantamos las canciones que nos gustan, bailamos y lo pasamos bien."},
     {jp:"私は 日本の 歌を おぼえたかったので、何回も 練習しました。", fu:"わたしは にほんの うたを おぼえたかったので、なんかいも れんしゅうしました。", es:"Como quería aprender canciones japonesas, las practiqué muchas veces."},
     {jp:"声が かれるまで 歌って、とても 楽しい 一日でした。", fu:"こえが かれるまで うたって、とても たのしい いちにちでした。", es:"Cantamos hasta quedarnos afónicos; fue un día muy divertido."}
   ],
   gloss:[
     {w:"カラオケ", r:"カラオケ", m:"karaoke"},
     {w:"歌ったり", r:"うたったり", m:"cantar, entre otras cosas (歌う)"},
     {w:"おどったり", r:"おどったり", m:"bailar, entre otras cosas (踊る)"},
     {w:"何回も", r:"なんかいも", m:"muchas veces"},
     {w:"声", r:"こえ", m:"voz"}
   ],
   q:[
     {q:"カラオケで <ruby>何<rt>なに</rt></ruby>を しましたか。", o:["<ruby>歌<rt>うた</rt></ruby>ったり おどったり した","<ruby>勉強<rt>べんきょう</rt></ruby>した","ねた"], a:0},
     {q:"この<ruby>人<rt>ひと</rt></ruby>は なぜ <ruby>何回<rt>なんかい</rt></ruby>も <ruby>練習<rt>れんしゅう</rt></ruby>しましたか。", o:["<ruby>日本<rt>にほん</rt></ruby>の <ruby>歌<rt>うた</rt></ruby>を おぼえたかったから","<ruby>友<rt>とも</rt></ruby>だちに かちたかったから","ひまだったから"], a:0}
   ]
 },
 { id:"r-n3-11", lvl:"N3", title:"ストレスとのつきあい方", mins:3,
   paras:[
     {jp:"現代の 社会では、多くの 人が ストレスを 感じながら 生活しています。", fu:"げんだいの しゃかいでは、おおくの ひとが すとれすを かんじながら せいかつしています。", es:"En la sociedad actual, mucha gente vive sintiendo estrés."},
     {jp:"仕事や 人間関係が 原因で、心が つかれて しまう ことも 少なく ありません。", fu:"しごとや にんげんかんけいが げんいんで、こころが つかれて しまう ことも すくなく ありません。", es:"No es raro que el trabajo o las relaciones personales acaben agotando la mente."},
     {jp:"ストレスを ためないためには、運動したり、趣味を 楽しんだり する ことが 大切です。", fu:"すとれすを ためないためには、うんどうしたり、しゅみを たのしんだり する ことが たいせつです。", es:"Para no acumular estrés, es importante hacer ejercicio o disfrutar de las aficiones."},
     {jp:"自分に 合った 方法を 見つけて、上手に つきあって いきたいものです。", fu:"じぶんに あった ほうほうを みつけて、じょうずに つきあって いきたいものです。", es:"Conviene encontrar un método que te vaya bien y aprender a llevarlo con soltura."}
   ],
   gloss:[
     {w:"現代", r:"げんだい", m:"época actual · modernidad"},
     {w:"ストレス", r:"ストレス", m:"estrés"},
     {w:"人間関係", r:"にんげんかんけい", m:"relaciones humanas"},
     {w:"原因", r:"げんいん", m:"causa"},
     {w:"ためない", r:"ためない", m:"no acumular (ためる)"},
     {w:"方法", r:"ほうほう", m:"método · forma"}
   ],
   q:[
     {q:"<ruby>多<rt>おお</rt></ruby>くの <ruby>人<rt>ひと</rt></ruby>が ストレスを <ruby>感<rt>かん</rt></ruby>じる <ruby>原因<rt>げんいん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>仕事<rt>しごと</rt></ruby>や <ruby>人間関係<rt>にんげんかんけい</rt></ruby>","<ruby>天気<rt>てんき</rt></ruby>","<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>は ストレスに どう <ruby>対応<rt>たいおう</rt></ruby>すれば よいと <ruby>言<rt>い</rt></ruby>っていますか。", o:["<ruby>自分<rt>じぶん</rt></ruby>に <ruby>合<rt>あ</rt></ruby>った <ruby>方法<rt>ほうほう</rt></ruby>を <ruby>見<rt>み</rt></ruby>つける","<ruby>薬<rt>くすり</rt></ruby>を <ruby>飲<rt>の</rt></ruby>む","<ruby>何<rt>なに</rt></ruby>も しない"], a:0}
   ]
 },
 { id:"r-n3-12", lvl:"N3", title:"スマートフォンと子ども", mins:3,
   paras:[
     {jp:"最近、スマートフォンを 使う 子どもが 増えて きました。", fu:"さいきん、すまーとふぉんを つかう こどもが ふえて きました。", es:"Últimamente ha aumentado el número de niños que usan smartphone."},
     {jp:"スマホは 便利ですが、使いすぎると 勉強に 集中できなく なる 心配が あります。", fu:"すまほは べんりですが、つかいすぎると べんきょうに しゅうちゅうできなく なる しんぱいが あります。", es:"El móvil es cómodo, pero si se usa en exceso, hay riesgo de no poder concentrarse en el estudio."},
     {jp:"また、夜おそくまで 画面を 見ていると、目や 体にも よくありません。", fu:"また、よるおそくまで がめんを みていると、めや からだにも よくありません。", es:"Además, mirar la pantalla hasta tarde tampoco es bueno para los ojos ni para el cuerpo."},
     {jp:"家庭で 使う 時間の ルールを 決める ことが 必要だと 言われています。", fu:"かていで つかう じかんの るーるを きめる ことが ひつようだと いわれています。", es:"Se dice que es necesario fijar en casa reglas sobre el tiempo de uso."}
   ],
   gloss:[
     {w:"増えて", r:"ふえて", m:"aumentar (増える)"},
     {w:"使いすぎる", r:"つかいすぎる", m:"usar demasiado"},
     {w:"集中できなく", r:"しゅうちゅうできなく", m:"no poder concentrarse (集中する)"},
     {w:"画面", r:"がめん", m:"pantalla"},
     {w:"家庭", r:"かてい", m:"hogar · familia"},
     {w:"必要", r:"ひつよう", m:"necesario"}
   ],
   q:[
     {q:"スマホを <ruby>使<rt>つか</rt></ruby>いすぎると どんな <ruby>心配<rt>しんぱい</rt></ruby>が ありますか。", o:["<ruby>勉強<rt>べんきょう</rt></ruby>に <ruby>集中<rt>しゅうちゅう</rt></ruby>できなく なる","お<ruby>金<rt>かね</rt></ruby>が なくなる","<ruby>友<rt>とも</rt></ruby>だちが へる"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>が <ruby>必要<rt>ひつよう</rt></ruby>だと <ruby>言<rt>い</rt></ruby>っていますか。", o:["<ruby>使<rt>つか</rt></ruby>う <ruby>時間<rt>じかん</rt></ruby>の ルール","<ruby>新<rt>あたら</rt></ruby>しいスマホ","スマホを <ruby>捨<rt>す</rt></ruby>てる こと"], a:0}
   ]
 },
 { id:"r-n3-13", lvl:"N3", title:"食生活の変化", mins:3,
   paras:[
     {jp:"昔に くらべて、日本人の 食生活は 大きく 変わりました。", fu:"むかしに くらべて、にほんじんの しょくせいかつは おおきく かわりました。", es:"Comparado con antes, la alimentación de los japoneses ha cambiado mucho."},
     {jp:"以前は 魚や 野菜が 中心でしたが、今では 肉や パンを 食べる 人が 増えています。", fu:"いぜんは さかなや やさいが ちゅうしんでしたが、いまでは にくや ぱんを たべる ひとが ふえています。", es:"Antes se basaba en pescado y verdura, pero ahora aumenta la gente que come carne y pan."},
     {jp:"便利な 食べ物が 増えた 一方で、栄養の かたよりが 問題に なっています。", fu:"べんりな たべものが ふえた いっぽうで、えいようの かたよりが もんだいに なっています。", es:"Por un lado han aumentado las comidas prácticas, pero el desequilibrio nutricional se ha vuelto un problema."},
     {jp:"健康の ためには、バランスの よい 食事を 心がける ことが 大切です。", fu:"けんこうの ためには、ばらんすの よい しょくじを こころがける ことが たいせつです。", es:"Para la salud es importante procurar una dieta equilibrada."}
   ],
   gloss:[
     {w:"食生活", r:"しょくせいかつ", m:"hábitos alimentarios"},
     {w:"以前", r:"いぜん", m:"antes · anteriormente"},
     {w:"中心", r:"ちゅうしん", m:"centro · base"},
     {w:"栄養", r:"えいよう", m:"nutrición"},
     {w:"かたより", r:"かたより", m:"desequilibrio · sesgo"},
     {w:"心がける", r:"こころがける", m:"procurar · tener presente"}
   ],
   q:[
     {q:"<ruby>昔<rt>むかし</rt></ruby>の <ruby>日本人<rt>にほんじん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>中心<rt>ちゅうしん</rt></ruby>に <ruby>食<rt>た</rt></ruby>べていましたか。", o:["<ruby>魚<rt>さかな</rt></ruby>や <ruby>野菜<rt>やさい</rt></ruby>","<ruby>肉<rt>にく</rt></ruby>や パン","<ruby>果物<rt>くだもの</rt></ruby>"], a:0},
     {q:"<ruby>今<rt>いま</rt></ruby>、<ruby>何<rt>なに</rt></ruby>が <ruby>問題<rt>もんだい</rt></ruby>に なっていますか。", o:["<ruby>栄養<rt>えいよう</rt></ruby>の かたより","<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>が <ruby>足<rt>た</rt></ruby>りない こと","<ruby>値段<rt>ねだん</rt></ruby>が <ruby>安<rt>やす</rt></ruby>い こと"], a:0}
   ]
 },
 { id:"r-n3-14", lvl:"N3", title:"ボランティア活動", mins:3,
   paras:[
     {jp:"私は 先月から、地域の ボランティア活動に 参加しています。", fu:"わたしは せんげつから、ちいきの ぼらんてぃあかつどうに さんかしています。", es:"Desde el mes pasado participo en actividades de voluntariado de mi zona."},
     {jp:"毎週 土曜日に、公園や 川の まわりの ごみを 拾っています。", fu:"まいしゅう どようびに、こうえんや かわの まわりの ごみを ひろっています。", es:"Cada sábado recojo la basura alrededor del parque y del río."},
     {jp:"はじめは 大変でしたが、町が きれいに なると、うれしい 気持ちに なります。", fu:"はじめは たいへんでしたが、まちが きれいに なると、うれしい きもちに なります。", es:"Al principio costaba, pero cuando la ciudad queda limpia me siento contento."},
     {jp:"この 活動を 通して、たくさんの 人と 知り合う ことも できました。", fu:"この かつどうを とおして、たくさんの ひとと しりあう ことも できました。", es:"A través de esta actividad también pude conocer a mucha gente."}
   ],
   gloss:[
     {w:"地域", r:"ちいき", m:"zona · región"},
     {w:"参加して", r:"さんかして", m:"participar (参加する)"},
     {w:"拾って", r:"ひろって", m:"recoger (拾う)"},
     {w:"まわり", r:"まわり", m:"alrededor"},
     {w:"活動", r:"かつどう", m:"actividad"},
     {w:"知り合う", r:"しりあう", m:"conocerse · trabar amistad"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は ボランティアで <ruby>何<rt>なに</rt></ruby>を していますか。", o:["ごみを <ruby>拾<rt>ひろ</rt></ruby>う","<ruby>木<rt>き</rt></ruby>を <ruby>植<rt>う</rt></ruby>える","<ruby>子<rt>こ</rt></ruby>どもに <ruby>教<rt>おし</rt></ruby>える"], a:0},
     {q:"<ruby>活動<rt>かつどう</rt></ruby>を <ruby>通<rt>とお</rt></ruby>して <ruby>何<rt>なに</rt></ruby>が できましたか。", o:["<ruby>多<rt>おお</rt></ruby>くの <ruby>人<rt>ひと</rt></ruby>と <ruby>知<rt>し</rt></ruby>り<ruby>合<rt>あ</rt></ruby>う","お<ruby>金<rt>かね</rt></ruby>を もうける","<ruby>有名<rt>ゆうめい</rt></ruby>に なる"], a:0}
   ]
 },
 { id:"r-n3-15", lvl:"N3", title:"睡眠の大切さ", mins:3,
   paras:[
     {jp:"よい 睡眠は 健康な 生活の ために とても 重要です。", fu:"よい すいみんは けんこうな せいかつの ために とても じゅうようです。", es:"Un buen sueño es muy importante para una vida sana."},
     {jp:"睡眠が 足りないと、集中力が 下がり、体の 調子も 悪く なります。", fu:"すいみんが たりないと、しゅうちゅうりょくが さがり、からだの ちょうしも わるく なります。", es:"Si no se duerme lo suficiente, baja la concentración y el cuerpo se resiente."},
     {jp:"寝る前に スマホを 見る 習慣は、ねむりの 質を 下げると 言われています。", fu:"ねるまえに すまほを みる しゅうかんは、ねむりの しつを さげると いわれています。", es:"Se dice que el hábito de mirar el móvil antes de dormir reduce la calidad del sueño."},
     {jp:"早く 寝て、じゅうぶんな 睡眠を とる ことを 心がけましょう。", fu:"はやく ねて、じゅうぶんな すいみんを とる ことを こころがけましょう。", es:"Procuremos acostarnos pronto y dormir lo suficiente."}
   ],
   gloss:[
     {w:"睡眠", r:"すいみん", m:"sueño (acción de dormir)"},
     {w:"重要", r:"じゅうよう", m:"importante"},
     {w:"集中力", r:"しゅうちゅうりょく", m:"capacidad de concentración"},
     {w:"調子", r:"ちょうし", m:"estado · forma (física)"},
     {w:"質", r:"しつ", m:"calidad"},
     {w:"じゅうぶんな", r:"じゅうぶんな", m:"suficiente"}
   ],
   q:[
     {q:"<ruby>睡眠<rt>すいみん</rt></ruby>が <ruby>足<rt>た</rt></ruby>りないと どう なりますか。", o:["<ruby>集中力<rt>しゅうちゅうりょく</rt></ruby>が <ruby>下<rt>さ</rt></ruby>がる","<ruby>元気<rt>げんき</rt></ruby>に なる","<ruby>頭<rt>あたま</rt></ruby>が よく なる"], a:0},
     {q:"<ruby>寝<rt>ね</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>の <ruby>何<rt>なに</rt></ruby>が ねむりの <ruby>質<rt>しつ</rt></ruby>を <ruby>下<rt>さ</rt></ruby>げますか。", o:["スマホを <ruby>見<rt>み</rt></ruby>る こと","<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>む こと","おふろに <ruby>入<rt>はい</rt></ruby>る こと"], a:0}
   ]
 },
 { id:"r-n3-16", lvl:"N3", title:"日本のアニメ文化", mins:3,
   paras:[
     {jp:"日本の アニメは 今、世界中で 人気が あります。", fu:"にほんの あにめは いま、せかいじゅうで にんきが あります。", es:"El anime japonés hoy es popular en todo el mundo."},
     {jp:"アニメを きっかけに、日本語や 日本の 文化に 興味を もつ 外国人も 多いです。", fu:"あにめを きっかけに、にほんごや にほんの ぶんかに きょうみを もつ がいこくじんも おおいです。", es:"Muchos extranjeros se interesan por el japonés y su cultura a raíz del anime."},
     {jp:"アニメには、友情や 努力など、心に のこる テーマが たくさん あります。", fu:"あにめには、ゆうじょうや どりょくなど、こころに のこる てーまが たくさん あります。", es:"El anime tiene muchos temas que dejan huella, como la amistad o el esfuerzo."},
     {jp:"アニメは 日本を 代表する 文化の 一つに なったと 言えるでしょう。", fu:"あにめは にほんを だいひょうする ぶんかの ひとつに なったと いえるでしょう。", es:"Se puede decir que el anime se ha convertido en una de las culturas representativas de Japón."}
   ],
   gloss:[
     {w:"世界中", r:"せかいじゅう", m:"en todo el mundo"},
     {w:"きっかけ", r:"きっかけ", m:"motivo · ocasión que da pie a algo"},
     {w:"興味", r:"きょうみ", m:"interés"},
     {w:"友情", r:"ゆうじょう", m:"amistad"},
     {w:"のこる", r:"のこる", m:"quedar · permanecer"},
     {w:"代表する", r:"だいひょうする", m:"representar"}
   ],
   q:[
     {q:"<ruby>外国人<rt>がいこくじん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を きっかけに <ruby>日本<rt>にほん</rt></ruby>に <ruby>興味<rt>きょうみ</rt></ruby>を もちますか。", o:["アニメ","<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>","スポーツ"], a:0},
     {q:"アニメには どんな テーマが <ruby>多<rt>おお</rt></ruby>いですか。", o:["<ruby>友情<rt>ゆうじょう</rt></ruby>や <ruby>努力<rt>どりょく</rt></ruby>","お<ruby>金<rt>かね</rt></ruby>","<ruby>戦争<rt>せんそう</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n3-17", lvl:"N3", title:"節約する生活", mins:3,
   paras:[
     {jp:"物の 値段が 上がって いるので、節約を 意識する 人が 増えています。", fu:"ものの ねだんが あがって いるので、せつやくを いしきする ひとが ふえています。", es:"Como los precios suben, aumenta la gente que es consciente del ahorro."},
     {jp:"例えば、電気を こまめに 消したり、いらない 物を 買わないように したり します。", fu:"たとえば、でんきを こまめに けしたり、いらない ものを かわないように したり します。", es:"Por ejemplo, apagan la luz con frecuencia o procuran no comprar cosas innecesarias."},
     {jp:"外食を へらして、自分で 料理を すれば、お金だけでなく 健康にも いいです。", fu:"がいしょくを へらして、じぶんで りょうりを すれば、おかねだけでなく けんこうにも いいです。", es:"Si reduces las comidas fuera y cocinas tú, es bueno no solo para el bolsillo sino para la salud."},
     {jp:"むりを しないで、少しずつ 続けられる 工夫が 大切です。", fu:"むりを しないで、すこしずつ つづけられる くふうが たいせつです。", es:"Es importante buscar apaños que puedas mantener poco a poco, sin forzarte."}
   ],
   gloss:[
     {w:"値段", r:"ねだん", m:"precio"},
     {w:"節約", r:"せつやく", m:"ahorro"},
     {w:"意識する", r:"いしきする", m:"ser consciente de"},
     {w:"こまめに", r:"こまめに", m:"con frecuencia · diligentemente"},
     {w:"外食", r:"がいしょく", m:"comer fuera de casa"},
     {w:"工夫", r:"くふう", m:"ingenio · apaño"}
   ],
   q:[
     {q:"なぜ <ruby>節約<rt>せつやく</rt></ruby>する <ruby>人<rt>ひと</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>えていますか。", o:["<ruby>物<rt>もの</rt></ruby>の <ruby>値段<rt>ねだん</rt></ruby>が <ruby>上<rt>あ</rt></ruby>がっているから","きゅうりょうが <ruby>上<rt>あ</rt></ruby>がったから","ひまだから"], a:0},
     {q:"<ruby>外食<rt>がいしょく</rt></ruby>を へらすと <ruby>何<rt>なに</rt></ruby>に いいと <ruby>言<rt>い</rt></ruby>っていますか。", o:["お<ruby>金<rt>かね</rt></ruby>と <ruby>健康<rt>けんこう</rt></ruby>","<ruby>時間<rt>じかん</rt></ruby>","<ruby>友<rt>とも</rt></ruby>だち"], a:0}
   ]
 },
 { id:"r-n3-18", lvl:"N3", title:"高齢化社会", mins:3,
   paras:[
     {jp:"日本では 高齢化が 進み、お年よりの 数が 増え続けています。", fu:"にほんでは こうれいかが すすみ、おとしよりの かずが ふえつづけています。", es:"En Japón avanza el envejecimiento y el número de ancianos sigue creciendo."},
     {jp:"その 一方で、生まれる 子どもの 数は 減っています。", fu:"その いっぽうで、うまれる こどもの かずは へっています。", es:"Por otro lado, el número de niños que nacen está disminuyendo."},
     {jp:"そのため、はたらく 人が 少なく なり、社会を ささえる ことが むずかしく なると 心配されています。", fu:"そのため、はたらく ひとが すくなく なり、しゃかいを ささえる ことが むずかしく なると しんぱいされています。", es:"Por eso se teme que, al haber menos trabajadores, resulte difícil sostener la sociedad."},
     {jp:"お年よりが 安心して 暮らせる しくみを 作る ことが 求められています。", fu:"おとしよりが あんしんして くらせる しくみを つくる ことが もとめられています。", es:"Se reclama crear un sistema en el que los mayores puedan vivir con tranquilidad."}
   ],
   gloss:[
     {w:"高齢化", r:"こうれいか", m:"envejecimiento (de la población)"},
     {w:"お年より", r:"おとしより", m:"personas mayores"},
     {w:"減って", r:"へって", m:"disminuir (減る)"},
     {w:"ささえる", r:"ささえる", m:"sostener · apoyar"},
     {w:"安心して", r:"あんしんして", m:"con tranquilidad (安心する)"},
     {w:"しくみ", r:"しくみ", m:"sistema · mecanismo"}
   ],
   q:[
     {q:"<ruby>日本<rt>にほん</rt></ruby>で <ruby>増<rt>ふ</rt></ruby>え<ruby>続<rt>つづ</rt></ruby>けているのは <ruby>何<rt>なに</rt></ruby>ですか。", o:["お<ruby>年<rt>とし</rt></ruby>よりの <ruby>数<rt>かず</rt></ruby>","<ruby>子<rt>こ</rt></ruby>どもの <ruby>数<rt>かず</rt></ruby>","はたらく <ruby>人<rt>ひと</rt></ruby>の <ruby>数<rt>かず</rt></ruby>"], a:0},
     {q:"<ruby>何<rt>なに</rt></ruby>が <ruby>心配<rt>しんぱい</rt></ruby>されていますか。", o:["<ruby>社会<rt>しゃかい</rt></ruby>を ささえる ことが むずかしく なる","<ruby>物<rt>もの</rt></ruby>が <ruby>高<rt>たか</rt></ruby>く なる","<ruby>学校<rt>がっこう</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>える"], a:0}
   ]
 },
 { id:"r-n3-19", lvl:"N3", title:"一人暮らし", mins:3,
   paras:[
     {jp:"大学に 入って、私は 初めて 一人暮らしを 始めました。", fu:"だいがくに はいって、わたしは はじめて ひとりぐらしを はじめました。", es:"Al entrar en la universidad empecé a vivir solo por primera vez."},
     {jp:"料理も せんたくも 自分で しなければ ならないので、最初は 大変でした。", fu:"りょうりも せんたくも じぶんで しなければ ならないので、さいしょは たいへんでした。", es:"Como tenía que cocinar y lavar la ropa yo mismo, al principio fue duro."},
     {jp:"でも、生活に なれるに つれて、自由な 時間の よさも 感じるように なりました。", fu:"でも、せいかつに なれるに つれて、じゆうな じかんの よさも かんじるように なりました。", es:"Pero a medida que me acostumbré, empecé a apreciar lo bueno del tiempo libre."},
     {jp:"一人暮らしを して、家族の ありがたさが よく わかりました。", fu:"ひとりぐらしを して、かぞくの ありがたさが よく わかりました。", es:"Al vivir solo, comprendí bien lo mucho que hay que agradecer a la familia."}
   ],
   gloss:[
     {w:"一人暮らし", r:"ひとりぐらし", m:"vivir solo"},
     {w:"最初", r:"さいしょ", m:"al principio"},
     {w:"なれる", r:"なれる", m:"acostumbrarse (慣れる)"},
     {w:"自由", r:"じゆう", m:"libertad · libre"},
     {w:"よさ", r:"よさ", m:"lo bueno · las ventajas"},
     {w:"ありがたさ", r:"ありがたさ", m:"valor de algo que se agradece"}
   ],
   q:[
     {q:"<ruby>一人暮<rt>ひとりぐ</rt></ruby>らしを <ruby>始<rt>はじ</rt></ruby>めて <ruby>最初<rt>さいしょ</rt></ruby>は どうでしたか。", o:["<ruby>大変<rt>たいへん</rt></ruby>だった","<ruby>楽<rt>らく</rt></ruby>だった","ひまだった"], a:0},
     {q:"<ruby>一人暮<rt>ひとりぐ</rt></ruby>らしを して <ruby>何<rt>なに</rt></ruby>が わかりましたか。", o:["<ruby>家族<rt>かぞく</rt></ruby>の ありがたさ","<ruby>料理<rt>りょうり</rt></ruby>の レシピ","お<ruby>金<rt>かね</rt></ruby>の <ruby>大切<rt>たいせつ</rt></ruby>さ"], a:0}
   ]
 },
 { id:"r-n3-20", lvl:"N3", title:"キャッシュレス社会", mins:3,
   paras:[
     {jp:"最近、現金を 使わずに 買い物を する 人が 増えて きました。", fu:"さいきん、げんきんを つかわずに かいものを する ひとが ふえて きました。", es:"Últimamente ha aumentado la gente que compra sin usar efectivo."},
     {jp:"スマホや カードで 払えば、財布を 持たなくても よく、とても 便利です。", fu:"すまほや かーどで はらえば、さいふを もたなくても よく、とても べんりです。", es:"Si pagas con el móvil o con tarjeta, no hace falta llevar cartera y es muy cómodo."},
     {jp:"しかし、お金を 使っている 感覚が うすく なり、使いすぎて しまう 人も います。", fu:"しかし、おかねを つかっている かんかくが うすく なり、つかいすぎて しまう ひとも います。", es:"Sin embargo, la sensación de estar gastando se vuelve más débil y algunos gastan de más."},
     {jp:"便利さと 注意点の 両方を 知って、上手に 使う ことが 大切です。", fu:"べんりさと ちゅういてんの りょうほうを しって、じょうずに つかう ことが たいせつです。", es:"Es importante conocer tanto las ventajas como los cuidados, y usarlo con cabeza."}
   ],
   gloss:[
     {w:"現金", r:"げんきん", m:"efectivo · dinero en metálico"},
     {w:"財布", r:"さいふ", m:"cartera · monedero"},
     {w:"感覚", r:"かんかく", m:"sensación"},
     {w:"うすく", r:"うすく", m:"débil · tenue (薄い)"},
     {w:"注意点", r:"ちゅういてん", m:"puntos a tener en cuenta"},
     {w:"両方", r:"りょうほう", m:"ambos · ambas cosas"}
   ],
   q:[
     {q:"<ruby>現金<rt>げんきん</rt></ruby>を <ruby>使<rt>つか</rt></ruby>わないと <ruby>何<rt>なに</rt></ruby>が <ruby>便利<rt>べんり</rt></ruby>ですか。", o:["<ruby>財布<rt>さいふ</rt></ruby>を <ruby>持<rt>も</rt></ruby>たなくても よい","お<ruby>金<rt>かね</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>える","<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>が <ruby>安<rt>やす</rt></ruby>く なる"], a:0},
     {q:"キャッシュレスの <ruby>注意点<rt>ちゅういてん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>使<rt>つか</rt></ruby>いすぎて しまう こと","おつりが でない こと","<ruby>時間<rt>じかん</rt></ruby>が かかる こと"], a:0}
   ]
 }

];
