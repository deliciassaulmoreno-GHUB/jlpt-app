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
 },
 { id:"r-n2-1", lvl:"N2", title:"リモートワーク", mins:4,
   paras:[
     {jp:"近年、インターネットの 普及に 伴い、自宅で 仕事を する「リモートワーク」が 広がっている。", fu:"きんねん、いんたーねっとの ふきゅうに ともない、じたくで しごとを する「りもーとわーく」が ひろがっている。", es:"En los últimos años, con la difusión de internet, se ha extendido el 'teletrabajo', trabajar desde casa."},
     {jp:"通勤の 必要が なくなり、時間を 有効に 使えるという 利点が ある。", fu:"つうきんの ひつようが なくなり、じかんを ゆうこうに つかえるという りてんが ある。", es:"Tiene la ventaja de que ya no hace falta desplazarse y se puede aprovechar mejor el tiempo."},
     {jp:"一方で、同僚との コミュニケーションが 減り、孤独を 感じる 人も 少なくない。", fu:"いっぽうで、どうりょうとの こみゅにけーしょんが へり、こどくを かんじる ひとも すくなくない。", es:"Por otro lado, la comunicación con los compañeros disminuye y no son pocos los que se sienten solos."},
     {jp:"働き方が 多様化する 中で、それぞれに 合った 方法を 選ぶ ことが 求められている。", fu:"はたらきかたが たようかする なかで、それぞれに あった ほうほうを えらぶ ことが もとめられている。", es:"A medida que las formas de trabajar se diversifican, se pide elegir el método que le va a cada uno."}
   ],
   gloss:[
     {w:"普及", r:"ふきゅう", m:"difusión · propagación"},
     {w:"通勤", r:"つうきん", m:"desplazamiento al trabajo"},
     {w:"利点", r:"りてん", m:"ventaja"},
     {w:"同僚", r:"どうりょう", m:"compañero de trabajo"},
     {w:"孤独", r:"こどく", m:"soledad"},
     {w:"多様化", r:"たようか", m:"diversificación"}
   ],
   q:[
     {q:"リモートワークの <ruby>利点<rt>りてん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>通勤<rt>つうきん</rt></ruby>が いらない","<ruby>給料<rt>きゅうりょう</rt></ruby>が <ruby>上<rt>あ</rt></ruby>がる","<ruby>同僚<rt>どうりょう</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>える"], a:0},
     {q:"<ruby>問題点<rt>もんだいてん</rt></ruby>として <ruby>挙<rt>あ</rt></ruby>げられているのは？", o:["<ruby>孤独<rt>こどく</rt></ruby>を <ruby>感<rt>かん</rt></ruby>じる","<ruby>時間<rt>じかん</rt></ruby>が たりない","お<ruby>金<rt>かね</rt></ruby>が かかる"], a:0}
   ]
 },
 { id:"r-n2-2", lvl:"N2", title:"少子化", mins:4,
   paras:[
     {jp:"日本では、生まれる 子どもの 数が 年々 減り続けている。これを「少子化」と 呼ぶ。", fu:"にほんでは、うまれる こどもの かずが ねんねん へりつづけている。これを「しょうしか」と よぶ。", es:"En Japón, el número de niños que nacen disminuye año tras año. A esto se le llama 'descenso de la natalidad'."},
     {jp:"主な 原因として、結婚や 出産に 対する 価値観の 変化や、子育てに かかる 費用の 高さが 挙げられる。", fu:"おもな げんいんとして、けっこんや しゅっさんに たいする かちかんの へんかや、こそだてに かかる ひようの たかさが あげられる。", es:"Entre las causas principales están el cambio de mentalidad hacia el matrimonio y el parto, y el alto coste de criar hijos."},
     {jp:"少子化が 進むと、将来の 労働力が 不足し、経済にも 大きな 影響を 与える。", fu:"しょうしかが すすむと、しょうらいの ろうどうりょくが ふそくし、けいざいにも おおきな えいきょうを あたえる。", es:"Si avanza el descenso de natalidad, faltará mano de obra en el futuro y tendrá un gran impacto en la economía."},
     {jp:"政府は 育児支援を 強化しているが、状況は なかなか 改善していない。", fu:"せいふは いくじしえんを きょうかしているが、じょうきょうは なかなか かいぜんしていない。", es:"El gobierno refuerza el apoyo a la crianza, pero la situación no acaba de mejorar."}
   ],
   gloss:[
     {w:"少子化", r:"しょうしか", m:"descenso de la natalidad"},
     {w:"価値観", r:"かちかん", m:"valores · mentalidad"},
     {w:"費用", r:"ひよう", m:"coste · gastos"},
     {w:"労働力", r:"ろうどうりょく", m:"mano de obra"},
     {w:"影響", r:"えいきょう", m:"influencia · impacto"},
     {w:"育児", r:"いくじ", m:"crianza de los hijos"}
   ],
   q:[
     {q:"「<ruby>少子化<rt>しょうしか</rt></ruby>」とは <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>子<rt>こ</rt></ruby>どもの <ruby>数<rt>かず</rt></ruby>が <ruby>減<rt>へ</rt></ruby>ること","<ruby>高齢者<rt>こうれいしゃ</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>えること","<ruby>人口<rt>じんこう</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>えること"], a:0},
     {q:"<ruby>少子化<rt>しょうしか</rt></ruby>が <ruby>進<rt>すす</rt></ruby>むと <ruby>何<rt>なに</rt></ruby>が <ruby>心配<rt>しんぱい</rt></ruby>されますか。", o:["<ruby>労働力<rt>ろうどうりょく</rt></ruby>の <ruby>不足<rt>ふそく</rt></ruby>","<ruby>物価<rt>ぶっか</rt></ruby>の <ruby>低下<rt>ていか</rt></ruby>","<ruby>学校<rt>がっこう</rt></ruby>の <ruby>増加<rt>ぞうか</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n2-3", lvl:"N2", title:"再生可能エネルギー", mins:4,
   paras:[
     {jp:"地球温暖化を 防ぐため、再生可能エネルギーへの 関心が 世界的に 高まっている。", fu:"ちきゅうおんだんかを ふせぐため、さいせいかのうえねるぎーへの かんしんが せかいてきに たかまっている。", es:"Para prevenir el calentamiento global, el interés por las energías renovables crece en todo el mundo."},
     {jp:"太陽光や 風力は、二酸化炭素を ほとんど 出さないという 点で 注目されている。", fu:"たいようこうや ふうりょくは、にさんかたんそを ほとんど ださないという てんで ちゅうもくされている。", es:"La energía solar y la eólica destacan porque apenas emiten dióxido de carbono."},
     {jp:"しかし、天候に 左右されやすく、安定した 供給が 難しいという 課題も ある。", fu:"しかし、てんこうに さゆうされやすく、あんていした きょうきゅうが むずかしいという かだいも ある。", es:"Sin embargo, dependen mucho del tiempo y tienen el reto de un suministro estable difícil."},
     {jp:"今後は、技術の 進歩によって こうした 問題を 解決していく 必要が ある。", fu:"こんごは、ぎじゅつの しんぽに よって こうした もんだいを かいけつしていく ひつようが ある。", es:"De ahora en adelante hay que ir resolviendo estos problemas mediante el avance de la tecnología."}
   ],
   gloss:[
     {w:"再生可能エネルギー", r:"さいせいかのうエネルギー", m:"energía renovable"},
     {w:"温暖化", r:"おんだんか", m:"calentamiento (global)"},
     {w:"注目", r:"ちゅうもく", m:"atención · foco"},
     {w:"供給", r:"きょうきゅう", m:"suministro"},
     {w:"課題", r:"かだい", m:"reto · asunto pendiente"},
     {w:"技術", r:"ぎじゅつ", m:"tecnología · técnica"}
   ],
   q:[
     {q:"<ruby>太陽光<rt>たいようこう</rt></ruby>や <ruby>風力<rt>ふうりょく</rt></ruby>が <ruby>注目<rt>ちゅうもく</rt></ruby>される <ruby>理由<rt>りゆう</rt></ruby>は？", o:["<ruby>二酸化炭素<rt>にさんかたんそ</rt></ruby>を ほとんど <ruby>出<rt>だ</rt></ruby>さない","<ruby>安<rt>やす</rt></ruby>い","どこでも <ruby>使<rt>つか</rt></ruby>える"], a:0},
     {q:"<ruby>再生可能<rt>さいせいかのう</rt></ruby>エネルギーの <ruby>課題<rt>かだい</rt></ruby>は <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>安定<rt>あんてい</rt></ruby>した <ruby>供給<rt>きょうきゅう</rt></ruby>が <ruby>難<rt>むずか</rt></ruby>しい","<ruby>危険<rt>きけん</rt></ruby>である","<ruby>場所<rt>ばしょ</rt></ruby>を とる"], a:0}
   ]
 },
 { id:"r-n2-4", lvl:"N2", title:"SNSとの付き合い方", mins:4,
   paras:[
     {jp:"今日、多くの 人が SNSを 通じて 情報を 得たり、友人と 交流したり している。", fu:"こんにち、おおくの ひとが えすえぬえすを つうじて じょうほうを えたり、ゆうじんと こうりゅうしたり している。", es:"Hoy, mucha gente obtiene información y se relaciona con amigos a través de las redes sociales."},
     {jp:"便利な 反面、他人と 自分を 比べて 落ち込んだり、うその 情報に 惑わされたり する 危険も ある。", fu:"べんりな はんめん、たにんと じぶんを くらべて おちこんだり、うその じょうほうに まどわされたり する きけんも ある。", es:"Aunque es cómodo, también hay riesgo de deprimirse comparándose con otros o de dejarse engañar por información falsa."},
     {jp:"特に 若い 世代への 影響が 心配されており、使い方の 教育が 重要に なっている。", fu:"とくに わかい せだいへの えいきょうが しんぱいされており、つかいかたの きょういくが じゅうように なっている。", es:"Preocupa sobre todo el efecto en las generaciones jóvenes, y la educación sobre su uso se vuelve importante."},
     {jp:"SNSと 上手に 付き合うには、情報を 冷静に 判断する 力が 欠かせない。", fu:"えすえぬえすと じょうずに つきあうには、じょうほうを れいせいに はんだんする ちからが かかせない。", es:"Para llevarse bien con las redes, es imprescindible la capacidad de juzgar la información con calma."}
   ],
   gloss:[
     {w:"情報", r:"じょうほう", m:"información"},
     {w:"交流", r:"こうりゅう", m:"intercambio · trato"},
     {w:"世代", r:"せだい", m:"generación"},
     {w:"判断", r:"はんだん", m:"juicio · decisión"},
     {w:"冷静", r:"れいせい", m:"calma · serenidad"},
     {w:"欠かせない", r:"かかせない", m:"imprescindible (欠かす)"}
   ],
   q:[
     {q:"SNSの <ruby>危険<rt>きけん</rt></ruby>として <ruby>挙<rt>あ</rt></ruby>げられているのは？", o:["うその <ruby>情報<rt>じょうほう</rt></ruby>に <ruby>惑<rt>まど</rt></ruby>わされる","<ruby>目<rt>め</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>くなる","お<ruby>金<rt>かね</rt></ruby>が かかる"], a:0},
     {q:"SNSと <ruby>上手<rt>じょうず</rt></ruby>に <ruby>付<rt>つ</rt></ruby>き<ruby>合<rt>あ</rt></ruby>うには <ruby>何<rt>なに</rt></ruby>が <ruby>必要<rt>ひつよう</rt></ruby>ですか。", o:["<ruby>情報<rt>じょうほう</rt></ruby>を <ruby>冷静<rt>れいせい</rt></ruby>に <ruby>判断<rt>はんだん</rt></ruby>する <ruby>力<rt>ちから</rt></ruby>","<ruby>高<rt>たか</rt></ruby>いスマホ","<ruby>多<rt>おお</rt></ruby>くの <ruby>友<rt>とも</rt></ruby>だち"], a:0}
   ]
 },
 { id:"r-n2-5", lvl:"N2", title:"外国人労働者の受け入れ", mins:4,
   paras:[
     {jp:"労働力の 不足を 背景に、日本で 働く 外国人が 年々 増えている。", fu:"ろうどうりょくの ふそくを はいけいに、にほんで はたらく がいこくじんが ねんねん ふえている。", es:"Ante la falta de mano de obra, cada año aumentan los extranjeros que trabajan en Japón."},
     {jp:"彼らは 介護や 建設など、人手が 足りない 分野で 重要な 役割を 果たしている。", fu:"かれらは かいごや けんせつ など、ひとでが たりない ぶんやで じゅうような やくわりを はたしている。", es:"Desempeñan un papel importante en sectores con falta de personal, como los cuidados o la construcción."},
     {jp:"一方で、言葉の 壁や 文化の 違いから、生活面で 苦労する 人も 多い。", fu:"いっぽうで、ことばの かべや ぶんかの ちがいから、せいかつめんで くろうする ひとも おおい。", es:"Por otro lado, muchos sufren en su día a día por la barrera del idioma y las diferencias culturales."},
     {jp:"外国人が 安心して 暮らせる 社会を つくる ことが、今後の 課題と なっている。", fu:"がいこくじんが あんしんして くらせる しゃかいを つくる ことが、こんごの かだいと なっている。", es:"Crear una sociedad en la que los extranjeros vivan con tranquilidad es un reto de futuro."}
   ],
   gloss:[
     {w:"労働力", r:"ろうどうりょく", m:"mano de obra"},
     {w:"分野", r:"ぶんや", m:"campo · sector"},
     {w:"役割", r:"やくわり", m:"papel · función"},
     {w:"果たして", r:"はたして", m:"desempeñar · cumplir (役割を果たす)"},
     {w:"壁", r:"かべ", m:"muro · barrera"},
     {w:"苦労", r:"くろう", m:"penalidades · esfuerzo"}
   ],
   q:[
     {q:"<ruby>外国人労働者<rt>がいこくじんろうどうしゃ</rt></ruby>が <ruby>増<rt>ふ</rt></ruby>えている <ruby>背景<rt>はいけい</rt></ruby>は？", o:["<ruby>労働力<rt>ろうどうりょく</rt></ruby>の <ruby>不足<rt>ふそく</rt></ruby>","<ruby>給料<rt>きゅうりょう</rt></ruby>の <ruby>高<rt>たか</rt></ruby>さ","<ruby>観光<rt>かんこう</rt></ruby>の <ruby>人気<rt>にんき</rt></ruby>"], a:0},
     {q:"<ruby>外国人<rt>がいこくじん</rt></ruby>が <ruby>生活面<rt>せいかつめん</rt></ruby>で <ruby>苦労<rt>くろう</rt></ruby>する <ruby>理由<rt>りゆう</rt></ruby>は？", o:["<ruby>言葉<rt>ことば</rt></ruby>や <ruby>文化<rt>ぶんか</rt></ruby>の <ruby>違<rt>ちが</rt></ruby>い","<ruby>仕事<rt>しごと</rt></ruby>が ない","<ruby>給料<rt>きゅうりょう</rt></ruby>が <ruby>安<rt>やす</rt></ruby>い"], a:0}
   ]
 },
 { id:"r-n2-6", lvl:"N2", title:"食品ロス", mins:4,
   paras:[
     {jp:"まだ 食べられるのに 捨てられて しまう 食品を「食品ロス」という。", fu:"まだ たべられるのに すてられて しまう しょくひんを「しょくひんろす」という。", es:"A los alimentos que se tiran aun pudiéndose comer se les llama 'desperdicio alimentario'."},
     {jp:"日本では 毎年、大量の 食品が 家庭や 飲食店から 捨てられている。", fu:"にほんでは まいとし、たいりょうの しょくひんが かていや いんしょくてんから すてられている。", es:"En Japón, cada año se desecha una gran cantidad de alimentos de hogares y restaurantes."},
     {jp:"これは 資源の むだで あるだけでなく、環境への 負担にも つながる。", fu:"これは しげんの むだで あるだけでなく、かんきょうへの ふたんにも つながる。", es:"Esto no solo es un desperdicio de recursos, sino que supone una carga para el medio ambiente."},
     {jp:"買いすぎを 控えたり、残さず 食べたりと、一人ひとりの 心がけが 大切だ。", fu:"かいすぎを ひかえたり、のこさず たべたりと、ひとりひとりの こころがけが たいせつだ。", es:"Es importante que cada persona ponga de su parte: no comprar de más, no dejar comida."}
   ],
   gloss:[
     {w:"食品", r:"しょくひん", m:"alimentos · productos alimenticios"},
     {w:"大量", r:"たいりょう", m:"gran cantidad"},
     {w:"資源", r:"しげん", m:"recursos"},
     {w:"むだ", r:"むだ", m:"desperdicio · inútil"},
     {w:"負担", r:"ふたん", m:"carga · peso"},
     {w:"控えたり", r:"ひかえたり", m:"moderar · abstenerse (控える)"}
   ],
   q:[
     {q:"「<ruby>食品<rt>しょくひん</rt></ruby>ロス」とは <ruby>何<rt>なに</rt></ruby>ですか。", o:["まだ <ruby>食<rt>た</rt></ruby>べられる <ruby>物<rt>もの</rt></ruby>を <ruby>捨<rt>す</rt></ruby>てること","<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>が <ruby>足<rt>た</rt></ruby>りないこと","<ruby>値段<rt>ねだん</rt></ruby>が <ruby>高<rt>たか</rt></ruby>いこと"], a:0},
     {q:"<ruby>食品<rt>しょくひん</rt></ruby>ロスを <ruby>減<rt>へ</rt></ruby>らすために <ruby>大切<rt>たいせつ</rt></ruby>なのは？", o:["<ruby>買<rt>か</rt></ruby>いすぎを <ruby>控<rt>ひか</rt></ruby>える","たくさん <ruby>買<rt>か</rt></ruby>う","<ruby>外食<rt>がいしょく</rt></ruby>を <ruby>増<rt>ふ</rt></ruby>やす"], a:0}
   ]
 },
 { id:"r-n2-7", lvl:"N2", title:"AIと働き方", mins:4,
   paras:[
     {jp:"近年、AIの 技術が 急速に 発展し、さまざまな 仕事に 取り入れられている。", fu:"きんねん、えーあいの ぎじゅつが きゅうそくに はってんし、さまざまな しごとに とりいれられている。", es:"En los últimos años, la tecnología de la IA ha avanzado rápido y se incorpora a diversos trabajos."},
     {jp:"単純な 作業は AIに 任せ、人間は より 創造的な 仕事に 集中できるように なると 期待されている。", fu:"たんじゅんな さぎょうは えーあいに まかせ、にんげんは より そうぞうてきな しごとに しゅうちゅうできるように なると きたいされている。", es:"Se espera que las tareas simples se dejen a la IA y las personas puedan centrarse en trabajos más creativos."},
     {jp:"一方で、AIに 仕事を 奪われるのではないかと 不安を 感じる 人も 少なくない。", fu:"いっぽうで、えーあいに しごとを うばわれるのではないかと ふあんを かんじる ひとも すくなくない。", es:"Por otro lado, no son pocos los que temen que la IA les quite el trabajo."},
     {jp:"これからは、AIを うまく 活用する 能力が、いっそう 求められるだろう。", fu:"これからは、えーあいを うまく かつようする のうりょくが、いっそう もとめられるだろう。", es:"De ahora en adelante se exigirá aún más la capacidad de aprovechar bien la IA."}
   ],
   gloss:[
     {w:"発展", r:"はってん", m:"desarrollo · avance"},
     {w:"単純", r:"たんじゅん", m:"simple · sencillo"},
     {w:"創造的", r:"そうぞうてき", m:"creativo"},
     {w:"奪われる", r:"うばわれる", m:"ser arrebatado (奪う)"},
     {w:"不安", r:"ふあん", m:"inquietud · ansiedad"},
     {w:"活用", r:"かつよう", m:"aprovechamiento · uso"}
   ],
   q:[
     {q:"AIによって <ruby>人間<rt>にんげん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>に <ruby>集中<rt>しゅうちゅう</rt></ruby>できると <ruby>期待<rt>きたい</rt></ruby>されていますか。", o:["<ruby>創造的<rt>そうぞうてき</rt></ruby>な <ruby>仕事<rt>しごと</rt></ruby>","<ruby>単純<rt>たんじゅん</rt></ruby>な <ruby>作業<rt>さぎょう</rt></ruby>","<ruby>休<rt>やす</rt></ruby>むこと"], a:0},
     {q:"<ruby>人々<rt>ひとびと</rt></ruby>が <ruby>不安<rt>ふあん</rt></ruby>に <ruby>感<rt>かん</rt></ruby>じているのはなぜですか。", o:["<ruby>仕事<rt>しごと</rt></ruby>を <ruby>奪<rt>うば</rt></ruby>われるかもしれない","<ruby>給料<rt>きゅうりょう</rt></ruby>が <ruby>下<rt>さ</rt></ruby>がる","AIが <ruby>高<rt>たか</rt></ruby>い"], a:0}
   ]
 },
 { id:"r-n2-8", lvl:"N2", title:"地方の過疎化", mins:4,
   paras:[
     {jp:"若者が 仕事を 求めて 都市へ 移り、地方では 人口の 減少が 深刻に なっている。", fu:"わかものが しごとを もとめて としへ うつり、ちほうでは じんこうの げんしょうが しんこくに なっている。", es:"Los jóvenes se mudan a las ciudades buscando trabajo, y en las zonas rurales el descenso de población es grave."},
     {jp:"人が 減った 地域では、学校や 病院、店などが 次々に 閉鎖されている。", fu:"ひとが へった ちいきでは、がっこうや びょういん、みせ などが つぎつぎに へいさされている。", es:"En las zonas donde ha disminuido la gente, escuelas, hospitales y tiendas van cerrando una tras otra."},
     {jp:"残された 高齢者の 生活は 不便に なり、地域の 活気も 失われつつある。", fu:"のこされた こうれいしゃの せいかつは ふべんに なり、ちいきの かっきも うしなわれつつある。", es:"La vida de los ancianos que quedan se vuelve incómoda y la vitalidad de la zona se va perdiendo."},
     {jp:"地方を 元気に するため、移住を 支援する 取り組みなどが 進められている。", fu:"ちほうを げんきに するため、いじゅうを しえんする とりくみ などが すすめられている。", es:"Para revitalizar las zonas rurales, se impulsan iniciativas como apoyar la mudanza allí."}
   ],
   gloss:[
     {w:"地方", r:"ちほう", m:"región · provincias"},
     {w:"減少", r:"げんしょう", m:"disminución"},
     {w:"深刻", r:"しんこく", m:"grave · serio"},
     {w:"閉鎖", r:"へいさ", m:"cierre · clausura"},
     {w:"活気", r:"かっき", m:"vitalidad · animación"},
     {w:"移住", r:"いじゅう", m:"mudanza · migración"}
   ],
   q:[
     {q:"<ruby>地方<rt>ちほう</rt></ruby>で <ruby>人口<rt>じんこう</rt></ruby>が <ruby>減<rt>へ</rt></ruby>っているのはなぜですか。", o:["<ruby>若者<rt>わかもの</rt></ruby>が <ruby>都市<rt>とし</rt></ruby>へ <ruby>移<rt>うつ</rt></ruby>るから","<ruby>物価<rt>ぶっか</rt></ruby>が <ruby>高<rt>たか</rt></ruby>いから","<ruby>気候<rt>きこう</rt></ruby>が <ruby>悪<rt>わる</rt></ruby>いから"], a:0},
     {q:"<ruby>地方<rt>ちほう</rt></ruby>を <ruby>元気<rt>げんき</rt></ruby>にするために <ruby>何<rt>なに</rt></ruby>が <ruby>行<rt>おこな</rt></ruby>われていますか。", o:["<ruby>移住<rt>いじゅう</rt></ruby>の <ruby>支援<rt>しえん</rt></ruby>","<ruby>税金<rt>ぜいきん</rt></ruby>の <ruby>増加<rt>ぞうか</rt></ruby>","<ruby>学校<rt>がっこう</rt></ruby>の <ruby>閉鎖<rt>へいさ</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n2-9", lvl:"N2", title:"健康寿命", mins:4,
   paras:[
     {jp:"平均寿命が のびる 中で、「健康寿命」という 言葉が 注目されている。", fu:"へいきんじゅみょうが のびる なかで、「けんこうじゅみょう」という ことばが ちゅうもくされている。", es:"Mientras crece la esperanza de vida, la expresión 'esperanza de vida saludable' atrae atención."},
     {jp:"これは、介護を 必要と せず、自立して 生活できる 期間を 指す。", fu:"これは、かいごを ひつようと せず、じりつして せいかつできる きかんを さす。", es:"Se refiere al periodo en que uno puede vivir de forma independiente, sin necesitar cuidados."},
     {jp:"健康寿命を のばすには、適度な 運動や バランスの よい 食事が 欠かせないと される。", fu:"けんこうじゅみょうを のばすには、てきどな うんどうや ばらんすの よい しょくじが かかせないと される。", es:"Para alargar la vida saludable, se considera imprescindible el ejercicio moderado y una dieta equilibrada."},
     {jp:"年を とっても 生き生きと 暮らせる 社会が、これから ますます 求められている。", fu:"としを とっても いきいきと くらせる しゃかいが、これから ますます もとめられている。", es:"Cada vez se busca más una sociedad en la que se pueda vivir con vitalidad aun envejeciendo."}
   ],
   gloss:[
     {w:"平均", r:"へいきん", m:"media · promedio"},
     {w:"寿命", r:"じゅみょう", m:"esperanza de vida"},
     {w:"介護", r:"かいご", m:"cuidados (a mayores o enfermos)"},
     {w:"自立", r:"じりつ", m:"independencia · autonomía"},
     {w:"期間", r:"きかん", m:"periodo · plazo"},
     {w:"適度", r:"てきど", m:"moderado · adecuado"}
   ],
   q:[
     {q:"「<ruby>健康寿命<rt>けんこうじゅみょう</rt></ruby>」とは <ruby>何<rt>なに</rt></ruby>を <ruby>指<rt>さ</rt></ruby>しますか。", o:["<ruby>自立<rt>じりつ</rt></ruby>して <ruby>生活<rt>せいかつ</rt></ruby>できる <ruby>期間<rt>きかん</rt></ruby>","<ruby>生<rt>う</rt></ruby>まれてからの <ruby>年数<rt>ねんすう</rt></ruby>","<ruby>病院<rt>びょういん</rt></ruby>にいる <ruby>期間<rt>きかん</rt></ruby>"], a:0},
     {q:"<ruby>健康寿命<rt>けんこうじゅみょう</rt></ruby>を のばすために <ruby>必要<rt>ひつよう</rt></ruby>なのは？", o:["<ruby>運動<rt>うんどう</rt></ruby>と バランスの よい <ruby>食事<rt>しょくじ</rt></ruby>","<ruby>薬<rt>くすり</rt></ruby>","<ruby>睡眠<rt>すいみん</rt></ruby>だけ"], a:0}
   ]
 },
 { id:"r-n2-10", lvl:"N2", title:"観光公害", mins:4,
   paras:[
     {jp:"有名な 観光地に 旅行者が 集中し、地元の 生活に 悪影響を 与える 問題が 起きている。", fu:"ゆうめいな かんこうちに りょこうしゃが しゅうちゅうし、じもとの せいかつに あくえいきょうを あたえる もんだいが おきている。", es:"En destinos turísticos famosos se concentran los viajeros y surge el problema de perjudicar la vida local."},
     {jp:"ごみの 増加や 交通の 混雑、騒音などが 住民を 悩ませている。", fu:"ごみの ぞうかや こうつうの こんざつ、そうおん などが じゅうみんを なやませている。", es:"El aumento de basura, los atascos y el ruido, entre otros, agobian a los vecinos."},
     {jp:"こうした 状況は「観光公害」と 呼ばれ、世界 各地で 問題と なっている。", fu:"こうした じょうきょうは「かんこうこうがい」と よばれ、せかい かくちで もんだいと なっている。", es:"Esta situación se llama 'contaminación turística' y es un problema en muchas partes del mundo."},
     {jp:"観光による 利益と 住民の 生活の バランスを どう とるかが、課題と なっている。", fu:"かんこうに よる りえきと じゅうみんの せいかつの ばらんすを どう とるかが、かだいと なっている。", es:"El reto es cómo equilibrar los beneficios del turismo y la vida de los residentes."}
   ],
   gloss:[
     {w:"観光地", r:"かんこうち", m:"lugar turístico"},
     {w:"悪影響", r:"あくえいきょう", m:"efecto negativo"},
     {w:"混雑", r:"こんざつ", m:"aglomeración · atasco"},
     {w:"騒音", r:"そうおん", m:"ruido"},
     {w:"住民", r:"じゅうみん", m:"vecinos · residentes"},
     {w:"利益", r:"りえき", m:"beneficio · ganancia"}
   ],
   q:[
     {q:"「<ruby>観光公害<rt>かんこうこうがい</rt></ruby>」で <ruby>住民<rt>じゅうみん</rt></ruby>を <ruby>悩<rt>なや</rt></ruby>ませているのは？", o:["ごみや <ruby>騒音<rt>そうおん</rt></ruby>","<ruby>物価<rt>ぶっか</rt></ruby>の <ruby>低下<rt>ていか</rt></ruby>","<ruby>観光客<rt>かんこうきゃく</rt></ruby>の <ruby>減少<rt>げんしょう</rt></ruby>"], a:0},
     {q:"<ruby>今<rt>いま</rt></ruby>、<ruby>課題<rt>かだい</rt></ruby>となっているのは <ruby>何<rt>なに</rt></ruby>ですか。", o:["<ruby>利益<rt>りえき</rt></ruby>と <ruby>生活<rt>せいかつ</rt></ruby>の バランス","<ruby>観光<rt>かんこう</rt></ruby>の <ruby>宣伝<rt>せんでん</rt></ruby>","ホテルの <ruby>建設<rt>けんせつ</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n2-11", lvl:"N2", title:"電子書籍と紙の本", mins:4,
   paras:[
     {jp:"スマートフォンや タブレットの 普及により、電子書籍で 本を 読む 人が 増えている。", fu:"すまーとふぉんや たぶれっとの ふきゅうにより、でんししょせきで ほんを よむ ひとが ふえている。", es:"Con la difusión de los smartphones y las tabletas, aumenta la gente que lee en libros electrónicos."},
     {jp:"電子書籍は 場所を とらず、何冊でも 持ち運べるという 便利さが ある。", fu:"でんししょせきは ばしょを とらず、なんさつでも もちはこべるという べんりさが ある。", es:"Los libros electrónicos tienen la comodidad de no ocupar espacio y poder llevar cuantos quieras."},
     {jp:"一方、紙の 本の ほうが 記憶に 残りやすいと 感じる 人も 多い。", fu:"いっぽう、かみの ほんの ほうが きおくに のこりやすいと かんじる ひとも おおい。", es:"Por otro lado, muchos sienten que el libro en papel se retiene mejor en la memoria."},
     {jp:"それぞれの 長所を 生かし、目的に 応じて 使い分ける ことが 大切だろう。", fu:"それぞれの ちょうしょを いかし、もくてきに おうじて つかいわける ことが たいせつだろう。", es:"Conviene aprovechar las ventajas de cada uno y usarlos según el propósito."}
   ],
   gloss:[
     {w:"電子書籍", r:"でんししょせき", m:"libro electrónico"},
     {w:"普及", r:"ふきゅう", m:"difusión · propagación"},
     {w:"持ち運べる", r:"もちはこべる", m:"poder transportar (持ち運ぶ)"},
     {w:"記憶", r:"きおく", m:"memoria"},
     {w:"長所", r:"ちょうしょ", m:"punto fuerte · ventaja"},
     {w:"使い分ける", r:"つかいわける", m:"usar según el caso"}
   ],
   q:[
     {q:"<ruby>電子書籍<rt>でんししょせき</rt></ruby>の <ruby>便利<rt>べんり</rt></ruby>な <ruby>点<rt>てん</rt></ruby>は？", o:["<ruby>場所<rt>ばしょ</rt></ruby>を とらない","<ruby>安<rt>やす</rt></ruby>い","<ruby>目<rt>め</rt></ruby>に いい"], a:0},
     {q:"<ruby>紙<rt>かみ</rt></ruby>の <ruby>本<rt>ほん</rt></ruby>の <ruby>長所<rt>ちょうしょ</rt></ruby>として <ruby>挙<rt>あ</rt></ruby>げられているのは？", o:["<ruby>記憶<rt>きおく</rt></ruby>に <ruby>残<rt>のこ</rt></ruby>りやすい","<ruby>軽<rt>かる</rt></ruby>い","<ruby>安<rt>やす</rt></ruby>い"], a:0}
   ]
 },
 { id:"r-n2-12", lvl:"N2", title:"地震への備え", mins:4,
   paras:[
     {jp:"日本は 地震が 多い 国であり、日ごろからの 備えが 欠かせない。", fu:"にほんは じしんが おおい くにであり、ひごろからの そなえが かかせない。", es:"Japón es un país con muchos terremotos, y la preparación cotidiana es imprescindible."},
     {jp:"家庭では、水や 食料、懐中電灯などを 用意しておくと よい。", fu:"かていでは、みずや しょくりょう、かいちゅうでんとう などを よういしておくと よい。", es:"En casa conviene tener preparados agua, comida, una linterna, etc."},
     {jp:"また、地震が 起きたとき、どこへ 避難するかを 家族で 確認しておく ことが 重要だ。", fu:"また、じしんが おきたとき、どこへ ひなんするかを かぞくで かくにんしておく ことが じゅうようだ。", es:"Además, es importante confirmar en familia adónde evacuar cuando ocurra un terremoto."},
     {jp:"日ごろの 準備が、いざという ときに 命を 守る ことに つながる。", fu:"ひごろの じゅんびが、いざという ときに いのちを まもる ことに つながる。", es:"La preparación diaria acaba protegiendo la vida en el momento crítico."}
   ],
   gloss:[
     {w:"地震", r:"じしん", m:"terremoto"},
     {w:"備え", r:"そなえ", m:"preparación · provisión"},
     {w:"食料", r:"しょくりょう", m:"víveres · alimentos"},
     {w:"懐中電灯", r:"かいちゅうでんとう", m:"linterna"},
     {w:"避難", r:"ひなん", m:"evacuación"},
     {w:"命", r:"いのち", m:"vida"}
   ],
   q:[
     {q:"<ruby>家庭<rt>かてい</rt></ruby>で <ruby>用意<rt>ようい</rt></ruby>しておくと よい <ruby>物<rt>もの</rt></ruby>は？", o:["<ruby>水<rt>みず</rt></ruby>や <ruby>食料<rt>しょくりょう</rt></ruby>","<ruby>本<rt>ほん</rt></ruby>","げんきん"], a:0},
     {q:"<ruby>家族<rt>かぞく</rt></ruby>で <ruby>確認<rt>かくにん</rt></ruby>しておくべきことは？", o:["どこへ <ruby>避難<rt>ひなん</rt></ruby>するか","<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>の リスト","<ruby>旅行<rt>りょこう</rt></ruby>の <ruby>計画<rt>けいかく</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n2-13", lvl:"N2", title:"外来語の増加", mins:4,
   paras:[
     {jp:"現代の 日本語には、外国から 入ってきた「外来語」が あふれている。", fu:"げんだいの にほんごには、がいこくから はいってきた「がいらいご」が あふれている。", es:"El japonés actual está lleno de 'préstamos lingüísticos' que han entrado del extranjero."},
     {jp:"特に 英語から 来た 言葉が 多く、カタカナで 表記される。", fu:"とくに えいごから きた ことばが おおく、かたかなで ひょうきされる。", es:"Sobre todo hay muchas palabras venidas del inglés, que se escriben en katakana."},
     {jp:"便利で 新しい 印象を 与える 一方、意味が わかりにくいと 感じる 人も いる。", fu:"べんりで あたらしい いんしょうを あたえる いっぽう、いみが わかりにくいと かんじる ひとも いる。", es:"Aunque dan una impresión práctica y moderna, hay quien siente que el significado es difícil de entender."},
     {jp:"特に 高齢者にとっては、外来語の 多い 説明が 負担に なる ことも ある。", fu:"とくに こうれいしゃにとっては、がいらいごの おおい せつめいが ふたんに なる ことも ある。", es:"En especial para los mayores, las explicaciones con muchos préstamos pueden ser una carga."}
   ],
   gloss:[
     {w:"外来語", r:"がいらいご", m:"palabra de origen extranjero · préstamo"},
     {w:"あふれて", r:"あふれて", m:"rebosar · estar lleno (あふれる)"},
     {w:"表記", r:"ひょうき", m:"escritura · notación"},
     {w:"印象", r:"いんしょう", m:"impresión"},
     {w:"意味", r:"いみ", m:"significado"},
     {w:"負担", r:"ふたん", m:"carga · peso"}
   ],
   q:[
     {q:"<ruby>外来語<rt>がいらいご</rt></ruby>は <ruby>主<rt>おも</rt></ruby>に どの <ruby>言語<rt>げんご</rt></ruby>から <ruby>来<rt>き</rt></ruby>ていますか。", o:["<ruby>英語<rt>えいご</rt></ruby>","<ruby>中国語<rt>ちゅうごくご</rt></ruby>","フランス<ruby>語<rt>ご</rt></ruby>"], a:0},
     {q:"<ruby>外来語<rt>がいらいご</rt></ruby>について <ruby>心配<rt>しんぱい</rt></ruby>されていることは？", o:["<ruby>意味<rt>いみ</rt></ruby>が わかりにくい","<ruby>数<rt>かず</rt></ruby>が <ruby>少<rt>すく</rt></ruby>ない","<ruby>書<rt>か</rt></ruby>けない"], a:0}
   ]
 },
 { id:"r-n2-14", lvl:"N2", title:"若者の車離れ", mins:4,
   paras:[
     {jp:"近年、車を 持たない 若者が 増え、「車離れ」と 言われている。", fu:"きんねん、くるまを もたない わかものが ふえ、「くるまばなれ」と いわれている。", es:"En los últimos años aumentan los jóvenes que no tienen coche; se habla de 'alejamiento del coche'."},
     {jp:"都市では 公共交通機関が 発達しており、車が なくても 生活に 困らない。", fu:"としでは こうきょうこうつうきかんが はったつしており、くるまが なくても せいかつに こまらない。", es:"En las ciudades el transporte público está desarrollado y no hay problemas para vivir sin coche."},
     {jp:"また、車の 購入や 維持には 多くの 費用が かかることも 理由の 一つだ。", fu:"また、くるまの こうにゅうや いじには おおくの ひようが かかることも りゆうの ひとつだ。", es:"Además, una razón es que comprar y mantener un coche cuesta mucho dinero."},
     {jp:"価値観の 変化とともに、「所有」から「利用」へと 意識が 移りつつある。", fu:"かちかんの へんかとともに、「しょゆう」から「りよう」へと いしきが うつりつつある。", es:"Junto al cambio de valores, la mentalidad va pasando de 'poseer' a 'usar'."}
   ],
   gloss:[
     {w:"若者", r:"わかもの", m:"gente joven"},
     {w:"公共交通機関", r:"こうきょうこうつうきかん", m:"transporte público"},
     {w:"発達", r:"はったつ", m:"desarrollo"},
     {w:"購入", r:"こうにゅう", m:"compra · adquisición"},
     {w:"維持", r:"いじ", m:"mantenimiento"},
     {w:"所有", r:"しょゆう", m:"posesión"}
   ],
   q:[
     {q:"<ruby>都市<rt>とし</rt></ruby>で <ruby>車<rt>くるま</rt></ruby>が なくても <ruby>困<rt>こま</rt></ruby>らない <ruby>理由<rt>りゆう</rt></ruby>は？", o:["<ruby>公共交通機関<rt>こうきょうこうつうきかん</rt></ruby>が <ruby>発達<rt>はったつ</rt></ruby>","<ruby>道<rt>みち</rt></ruby>が <ruby>広<rt>ひろ</rt></ruby>い","<ruby>車<rt>くるま</rt></ruby>が <ruby>安<rt>やす</rt></ruby>い"], a:0},
     {q:"<ruby>若者<rt>わかもの</rt></ruby>の <ruby>意識<rt>いしき</rt></ruby>は どう <ruby>変<rt>か</rt></ruby>わりつつありますか。", o:["「<ruby>所有<rt>しょゆう</rt></ruby>」から「<ruby>利用<rt>りよう</rt></ruby>」へ","「<ruby>利用<rt>りよう</rt></ruby>」から「<ruby>所有<rt>しょゆう</rt></ruby>」へ","<ruby>変<rt>か</rt></ruby>わっていない"], a:0}
   ]
 },
 { id:"r-n2-15", lvl:"N2", title:"副業の広がり", mins:4,
   paras:[
     {jp:"働き方が 多様化する 中で、本業の ほかに 副業を 持つ 人が 増えている。", fu:"はたらきかたが たようかする なかで、ほんぎょうの ほかに ふくぎょうを もつ ひとが ふえている。", es:"Con la diversificación del trabajo, aumenta la gente que tiene un empleo secundario además del principal."},
     {jp:"収入を 増やせるだけでなく、新しい 技能を 身につけられるという 利点も ある。", fu:"しゅうにゅうを ふやせるだけでなく、あたらしい ぎのうを みにつけられるという りてんも ある。", es:"No solo permite aumentar los ingresos, sino que tiene la ventaja de adquirir nuevas habilidades."},
     {jp:"一方で、働きすぎて 体を こわす 危険も 指摘されている。", fu:"いっぽうで、はたらきすぎて からだを こわす きけんも してきされている。", es:"Por otro lado, se señala el riesgo de trabajar en exceso y dañar la salud."},
     {jp:"会社も 副業を 認める 動きが 広がり、働き方は ますます 自由に なってきた。", fu:"かいしゃも ふくぎょうを みとめる うごきが ひろがり、はたらきかたは ますます じゆうに なってきた。", es:"También crece el movimiento de empresas que permiten el pluriempleo, y el trabajo se vuelve cada vez más libre."}
   ],
   gloss:[
     {w:"本業", r:"ほんぎょう", m:"empleo principal"},
     {w:"副業", r:"ふくぎょう", m:"empleo secundario · pluriempleo"},
     {w:"収入", r:"しゅうにゅう", m:"ingresos"},
     {w:"技能", r:"ぎのう", m:"habilidad · destreza"},
     {w:"指摘", r:"してき", m:"señalamiento · indicación"},
     {w:"認める", r:"みとめる", m:"reconocer · admitir"}
   ],
   q:[
     {q:"<ruby>副業<rt>ふくぎょう</rt></ruby>の <ruby>利点<rt>りてん</rt></ruby>として <ruby>挙<rt>あ</rt></ruby>げられているのは？", o:["<ruby>新<rt>あたら</rt></ruby>しい <ruby>技能<rt>ぎのう</rt></ruby>が <ruby>身<rt>み</rt></ruby>につく","<ruby>休<rt>やす</rt></ruby>みが <ruby>増<rt>ふ</rt></ruby>える","<ruby>通勤<rt>つうきん</rt></ruby>が <ruby>楽<rt>らく</rt></ruby>"], a:0},
     {q:"<ruby>副業<rt>ふくぎょう</rt></ruby>の <ruby>危険<rt>きけん</rt></ruby>として <ruby>指摘<rt>してき</rt></ruby>されているのは？", o:["<ruby>働<rt>はたら</rt></ruby>きすぎ","お<ruby>金<rt>かね</rt></ruby>の <ruby>使<rt>つか</rt></ruby>いすぎ","<ruby>寝坊<rt>ねぼう</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n2-16", lvl:"N2", title:"プラスチックごみ問題", mins:4,
   paras:[
     {jp:"海に 流れ出た プラスチックごみが、世界的な 環境問題と なっている。", fu:"うみに ながれでた ぷらすちっくごみが、せかいてきな かんきょうもんだいと なっている。", es:"La basura plástica que llega al mar se ha convertido en un problema ambiental mundial."},
     {jp:"分解されずに 長く 残り、魚などの 生き物に 悪影響を 与える。", fu:"ぶんかいされずに ながく のこり、さかななどの いきものに あくえいきょうを あたえる。", es:"No se descompone y permanece mucho tiempo, perjudicando a seres vivos como los peces."},
     {jp:"そのため、多くの 国で レジ袋の 有料化や 使い捨て 製品の 削減が 進められている。", fu:"そのため、おおくの くにで れじぶくろの ゆうりょうかや つかいすて せいひんの さくげんが すすめられている。", es:"Por eso, en muchos países se avanza en cobrar por las bolsas y reducir los productos de un solo uso."},
     {jp:"私たち 一人ひとりが ごみを 減らす 努力を する ことが 求められている。", fu:"わたしたち ひとりひとりが ごみを へらす どりょくを する ことが もとめられている。", es:"Se nos pide que cada uno de nosotros haga el esfuerzo de reducir la basura."}
   ],
   gloss:[
     {w:"流れ出た", r:"ながれでた", m:"salir fluyendo · verterse (流れ出る)"},
     {w:"分解", r:"ぶんかい", m:"descomposición"},
     {w:"生き物", r:"いきもの", m:"ser vivo"},
     {w:"有料化", r:"ゆうりょうか", m:"hacer de pago"},
     {w:"使い捨て", r:"つかいすて", m:"de un solo uso · desechable"},
     {w:"削減", r:"さくげん", m:"reducción · recorte"}
   ],
   q:[
     {q:"プラスチックごみが <ruby>問題<rt>もんだい</rt></ruby>なのはなぜですか。", o:["<ruby>分解<rt>ぶんかい</rt></ruby>されず <ruby>長<rt>なが</rt></ruby>く <ruby>残<rt>のこ</rt></ruby>る","<ruby>高<rt>たか</rt></ruby>い","<ruby>重<rt>おも</rt></ruby>い"], a:0},
     {q:"<ruby>多<rt>おお</rt></ruby>くの <ruby>国<rt>くに</rt></ruby>で <ruby>行<rt>おこな</rt></ruby>われていることは？", o:["レジ<ruby>袋<rt>ぶくろ</rt></ruby>の <ruby>有料化<rt>ゆうりょうか</rt></ruby>","プラスチックの <ruby>増産<rt>ぞうさん</rt></ruby>","<ruby>海<rt>うみ</rt></ruby>の <ruby>掃除<rt>そうじ</rt></ruby>の <ruby>禁止<rt>きんし</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n2-17", lvl:"N2", title:"オンライン教育", mins:4,
   paras:[
     {jp:"インターネットの 発達により、オンラインで 学べる 環境が 整ってきた。", fu:"いんたーねっとの はったつにより、おんらいんで まなべる かんきょうが ととのってきた。", es:"Con el desarrollo de internet, se ha ido preparando un entorno para aprender en línea."},
     {jp:"場所や 時間に しばられず、自分の ペースで 学習できる 点が 大きな 魅力だ。", fu:"ばしょや じかんに しばられず、じぶんの ぺーすで がくしゅうできる てんが おおきな みりょくだ。", es:"Su gran atractivo es poder estudiar a tu ritmo, sin estar atado al lugar ni al tiempo."},
     {jp:"しかし、直接 質問しにくかったり、集中力を 保ちにくかったりする 課題も ある。", fu:"しかし、ちょくせつ しつもんしにくかったり、しゅうちゅうりょくを たもちにくかったり する かだいも ある。", es:"Pero tiene retos como que cuesta preguntar directamente o mantener la concentración."},
     {jp:"対面と オンラインの 両方の 良さを 組み合わせる 学び方が 広がっている。", fu:"たいめんと おんらいんの りょうほうの よさを くみあわせる まなびかたが ひろがっている。", es:"Se extiende una forma de aprender que combina lo bueno de lo presencial y lo online."}
   ],
   gloss:[
     {w:"発達", r:"はったつ", m:"desarrollo"},
     {w:"整って", r:"ととのって", m:"prepararse · quedar en orden (整う)"},
     {w:"しばられず", r:"しばられず", m:"sin estar atado (しばる)"},
     {w:"魅力", r:"みりょく", m:"atractivo · encanto"},
     {w:"集中力", r:"しゅうちゅうりょく", m:"capacidad de concentración"},
     {w:"対面", r:"たいめん", m:"cara a cara · presencial"}
   ],
   q:[
     {q:"オンライン<ruby>教育<rt>きょういく</rt></ruby>の <ruby>魅力<rt>みりょく</rt></ruby>は？", o:["<ruby>自分<rt>じぶん</rt></ruby>の ペースで <ruby>学<rt>まな</rt></ruby>べる","<ruby>安<rt>やす</rt></ruby>い","<ruby>友<rt>とも</rt></ruby>だちが できる"], a:0},
     {q:"オンライン<ruby>教育<rt>きょういく</rt></ruby>の <ruby>課題<rt>かだい</rt></ruby>として <ruby>挙<rt>あ</rt></ruby>げられているのは？", o:["<ruby>集中力<rt>しゅうちゅうりょく</rt></ruby>を <ruby>保<rt>たも</rt></ruby>ちにくい","お<ruby>金<rt>かね</rt></ruby>が かかる","<ruby>時間<rt>じかん</rt></ruby>が かかる"], a:0}
   ]
 },
 { id:"r-n2-18", lvl:"N2", title:"ゲーム依存", mins:4,
   paras:[
     {jp:"スマートフォンの ゲームに 夢中に なり、生活に 支障を きたす 人が 問題に なっている。", fu:"すまーとふぉんの げーむに むちゅうに なり、せいかつに ししょうを きたす ひとが もんだいに なっている。", es:"Se ha vuelto un problema la gente que se obsesiona con los juegos del móvil y perjudica su vida diaria."},
     {jp:"特に 子どもの 場合、勉強や 睡眠の 時間が 削られる ことが 心配される。", fu:"とくに こどもの ばあい、べんきょうや すいみんの じかんが けずられる ことが しんぱいされる。", es:"En el caso de los niños, preocupa que se les recorte el tiempo de estudio y de sueño."},
     {jp:"長時間の 使用は 目の 疲れや 運動不足にも つながりやすい。", fu:"ちょうじかんの しようは めの つかれや うんどうぶそくにも つながりやすい。", es:"El uso prolongado tiende a provocar también fatiga ocular y falta de ejercicio."},
     {jp:"使う 時間を 決め、家族で ルールを つくる ことが 対策として 有効だ。", fu:"つかう じかんを きめ、かぞくで るーるを つくる ことが たいさくとして ゆうこうだ。", es:"Fijar el tiempo de uso y hacer reglas en familia es eficaz como medida."}
   ],
   gloss:[
     {w:"夢中", r:"むちゅう", m:"absorto · obsesionado"},
     {w:"支障", r:"ししょう", m:"obstáculo · perjuicio"},
     {w:"削られる", r:"けずられる", m:"ser recortado (削る)"},
     {w:"使用", r:"しよう", m:"uso"},
     {w:"対策", r:"たいさく", m:"medida · contramedida"},
     {w:"有効", r:"ゆうこう", m:"eficaz · válido"}
   ],
   q:[
     {q:"<ruby>子<rt>こ</rt></ruby>どもの <ruby>場合<rt>ばあい</rt></ruby>、<ruby>何<rt>なに</rt></ruby>が <ruby>削<rt>けず</rt></ruby>られると <ruby>心配<rt>しんぱい</rt></ruby>されますか。", o:["<ruby>勉強<rt>べんきょう</rt></ruby>や <ruby>睡眠<rt>すいみん</rt></ruby>の <ruby>時間<rt>じかん</rt></ruby>","お<ruby>金<rt>かね</rt></ruby>","<ruby>友<rt>とも</rt></ruby>だち"], a:0},
     {q:"<ruby>対策<rt>たいさく</rt></ruby>として <ruby>有効<rt>ゆうこう</rt></ruby>だとされているのは？", o:["<ruby>使<rt>つか</rt></ruby>う <ruby>時間<rt>じかん</rt></ruby>を <ruby>決<rt>き</rt></ruby>める","ゲームを <ruby>買<rt>か</rt></ruby>わない","スマホを <ruby>捨<rt>す</rt></ruby>てる"], a:0}
   ]
 },
 { id:"r-n2-19", lvl:"N2", title:"地産地消", mins:4,
   paras:[
     {jp:"その 土地で とれた 食材を、その 地域で 消費する「地産地消」が 注目されている。", fu:"その とちで とれた しょくざいを、その ちいきで しょうひする「ちさんちしょう」が ちゅうもくされている。", es:"Atrae atención el 'consumo local', usar en la zona los alimentos producidos allí mismo."},
     {jp:"輸送の 距離が 短いため、新鮮な 食材を 手に入れられる。", fu:"ゆそうの きょりが みじかいため、しんせんな しょくざいを てに いれられる。", es:"Como la distancia de transporte es corta, se pueden conseguir alimentos frescos."},
     {jp:"また、地元の 農業を 支え、地域の 経済を 活性化する 効果も 期待できる。", fu:"また、じもとの のうぎょうを ささえ、ちいきの けいざいを かっせいかする こうかも きたいできる。", es:"Además, cabe esperar el efecto de sostener la agricultura local y dinamizar la economía de la zona."},
     {jp:"環境への 負担も 少なく、持続可能な 社会に つながると 考えられている。", fu:"かんきょうへの ふたんも すくなく、じぞくかのうな しゃかいに つながると かんがえられている。", es:"Supone menos carga ambiental y se considera que conduce a una sociedad sostenible."}
   ],
   gloss:[
     {w:"食材", r:"しょくざい", m:"ingredientes · alimentos"},
     {w:"消費", r:"しょうひ", m:"consumo"},
     {w:"輸送", r:"ゆそう", m:"transporte"},
     {w:"新鮮", r:"しんせん", m:"fresco"},
     {w:"農業", r:"のうぎょう", m:"agricultura"},
     {w:"持続可能", r:"じぞくかのう", m:"sostenible"}
   ],
   q:[
     {q:"「<ruby>地産地消<rt>ちさんちしょう</rt></ruby>」とは <ruby>何<rt>なに</rt></ruby>ですか。", o:["その <ruby>地域<rt>ちいき</rt></ruby>で とれた <ruby>物<rt>もの</rt></ruby>を そこで <ruby>消費<rt>しょうひ</rt></ruby>する","<ruby>外国<rt>がいこく</rt></ruby>から <ruby>輸入<rt>ゆにゅう</rt></ruby>する","<ruby>安<rt>やす</rt></ruby>く <ruby>売<rt>う</rt></ruby>る"], a:0},
     {q:"<ruby>地産地消<rt>ちさんちしょう</rt></ruby>の <ruby>効果<rt>こうか</rt></ruby>として <ruby>期待<rt>きたい</rt></ruby>されるのは？", o:["<ruby>地域<rt>ちいき</rt></ruby>の <ruby>経済<rt>けいざい</rt></ruby>の <ruby>活性化<rt>かっせいか</rt></ruby>","<ruby>物価<rt>ぶっか</rt></ruby>の <ruby>上昇<rt>じょうしょう</rt></ruby>","<ruby>人口<rt>じんこう</rt></ruby>の <ruby>減少<rt>げんしょう</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n2-20", lvl:"N2", title:"動物の保護", mins:4,
   paras:[
     {jp:"開発や 環境の 変化により、絶滅の 危機に ある 動物が 増えている。", fu:"かいはつや かんきょうの へんかにより、ぜつめつの ききに ある どうぶつが ふえている。", es:"Por el desarrollo y los cambios ambientales, aumentan los animales en peligro de extinción."},
     {jp:"森林の 減少や 密猟が、多くの 生き物の 生存を 脅かしている。", fu:"しんりんの げんしょうや みつりょうが、おおくの いきものの せいぞんを おびやかしている。", es:"La reducción de los bosques y la caza furtiva amenazan la supervivencia de muchos seres vivos."},
     {jp:"各国は 保護区を 設けたり、法律で 取引を 規制したりして 対応している。", fu:"かっこくは ほごくを もうけたり、ほうりつで とりひきを きせいしたりして たいおうしている。", es:"Los países responden creando reservas o regulando el comercio por ley."},
     {jp:"生き物の 多様性を 守る ことは、私たち 人間の 未来にも かかわっている。", fu:"いきものの たようせいを まもる ことは、わたしたち にんげんの みらいにも かかわっている。", es:"Proteger la diversidad de los seres vivos atañe también al futuro de nosotros los humanos."}
   ],
   gloss:[
     {w:"絶滅", r:"ぜつめつ", m:"extinción"},
     {w:"密猟", r:"みつりょう", m:"caza furtiva"},
     {w:"生存", r:"せいぞん", m:"supervivencia"},
     {w:"脅かして", r:"おびやかして", m:"amenazar (脅かす)"},
     {w:"規制", r:"きせい", m:"regulación · restricción"},
     {w:"多様性", r:"たようせい", m:"diversidad"}
   ],
   q:[
     {q:"<ruby>動物<rt>どうぶつ</rt></ruby>が <ruby>絶滅<rt>ぜつめつ</rt></ruby>の <ruby>危機<rt>きき</rt></ruby>に ある <ruby>原因<rt>げんいん</rt></ruby>は？", o:["<ruby>森林<rt>しんりん</rt></ruby>の <ruby>減少<rt>げんしょう</rt></ruby>や <ruby>密猟<rt>みつりょう</rt></ruby>","<ruby>観光<rt>かんこう</rt></ruby>","<ruby>雨<rt>あめ</rt></ruby>"], a:0},
     {q:"<ruby>各国<rt>かっこく</rt></ruby>は どう <ruby>対応<rt>たいおう</rt></ruby>していますか。", o:["<ruby>保護区<rt>ほごく</rt></ruby>を <ruby>設<rt>もう</rt></ruby>けたり <ruby>取引<rt>とりひき</rt></ruby>を <ruby>規制<rt>きせい</rt></ruby>","<ruby>動物<rt>どうぶつ</rt></ruby>を <ruby>売<rt>う</rt></ruby>る","<ruby>何<rt>なに</rt></ruby>も しない"], a:0}
   ]
 },
 { id:"r-n1-1", lvl:"N1", title:"終身雇用の終わり", mins:5,
   paras:[
     {jp:"かつて日本の企業では、一つの会社に定年まで勤める「終身雇用」が当たり前とされてきた。", fu:"かつてにほんのきぎょうでは、ひとつのかいしゃにていねんまでつとめる「しゅうしんこよう」があたりまえとされてきた。", es:"Antes, en las empresas japonesas se daba por hecho el 'empleo vitalicio': trabajar en una misma compañía hasta la jubilación."},
     {jp:"しかし、経済の停滞や産業構造の変化に伴い、この制度は崩れつつある。", fu:"しかし、けいざいのていたいやさんぎょうこうぞうのへんかにともない、このせいどはくずれつつある。", es:"Sin embargo, con el estancamiento económico y el cambio de la estructura industrial, este sistema se está desmoronando."},
     {jp:"企業は柔軟な雇用を求め、労働者もまた、転職を通じて自らの価値を高めようとしている。もはや会社に人生を預ける時代ではないと言わざるを得ない。", fu:"きぎょうはじゅうなんなこようをもとめ、ろうどうしゃもまた、てんしょくをつうじてみずからのかちをたかめようとしている。もはやかいしゃにじんせいをあずけるじだいではないといわざるをえない。", es:"Las empresas buscan contratación flexible y los trabajadores intentan aumentar su valor cambiando de empleo. No queda más remedio que admitir que ya no es época de confiar la vida a una empresa."},
     {jp:"とはいえ、雇用の安定が失われることへの不安も根強い。個人の自由と生活の保障をどう両立させるかが、今後の課題であろう。", fu:"とはいえ、こようのあんていがうしなわれることへのふあんもねづよい。こじんのじゆうとせいかつのほしょうをどうりょうりつさせるかが、こんごのかだいであろう。", es:"Aun así, persiste la inquietud por perder la estabilidad laboral. El reto será compatibilizar la libertad individual con la garantía de sustento."}
   ],
   gloss:[
     {w:"終身雇用", r:"しゅうしんこよう", m:"empleo vitalicio"},
     {w:"停滞", r:"ていたい", m:"estancamiento"},
     {w:"柔軟", r:"じゅうなん", m:"flexible"},
     {w:"転職", r:"てんしょく", m:"cambio de trabajo"},
     {w:"根強い", r:"ねづよい", m:"arraigado · persistente"},
     {w:"両立", r:"りょうりつ", m:"compatibilizar ambas cosas"}
   ],
   q:[
     {q:"<ruby>終身雇用<rt>しゅうしんこよう</rt></ruby>が <ruby>崩<rt>くず</rt></ruby>れつつある <ruby>背景<rt>はいけい</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>経済<rt>けいざい</rt></ruby>の<ruby>停滞<rt>ていたい</rt></ruby>と<ruby>産業構造<rt>さんぎょうこうぞう</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>","<ruby>若者<rt>わかもの</rt></ruby>の<ruby>怠惰<rt>たいだ</rt></ruby>","<ruby>法律<rt>ほうりつ</rt></ruby>の<ruby>禁止<rt>きんし</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>が<ruby>述<rt>の</rt></ruby>べる<ruby>今後<rt>こんご</rt></ruby>の<ruby>課題<rt>かだい</rt></ruby>はどれか。", o:["<ruby>自由<rt>じゆう</rt></ruby>と<ruby>保障<rt>ほしょう</rt></ruby>の<ruby>両立<rt>りょうりつ</rt></ruby>","<ruby>終身雇用<rt>しゅうしんこよう</rt></ruby>の<ruby>復活<rt>ふっかつ</rt></ruby>","<ruby>転職<rt>てんしょく</rt></ruby>の<ruby>禁止<rt>きんし</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-2", lvl:"N1", title:"言葉は乱れているのか", mins:5,
   paras:[
     {jp:"「最近の若者の言葉は乱れている」という嘆きは、いつの時代にも聞かれるものである。", fu:"「さいきんのわかもののことばはみだれている」というなげきは、いつのじだいにもきかれるものである。", es:"El lamento de que 'el habla de los jóvenes de hoy está corrompida' se oye en todas las épocas."},
     {jp:"しかし言語学の立場から見れば、それは乱れというより変化にほかならない。", fu:"しかしげんごがくのたちばからみれば、それはみだれというよりへんかにほかならない。", es:"Pero desde la lingüística, eso no es corrupción sino, sencillamente, cambio."},
     {jp:"現在「正しい」とされる言葉遣いも、かつては新奇な表現として批判された歴史を持つ。言葉は生き物であり、固定することなど不可能なのだ。", fu:"げんざい「ただしい」とされることばづかいも、かつてはしんきなひょうげんとしてひはんされたれきしをもつ。ことばはいきものであり、こていすることなどふかのうなのだ。", es:"Incluso el lenguaje hoy considerado 'correcto' fue criticado en su día como expresión novedosa. La lengua es un ser vivo; fijarla es imposible."},
     {jp:"むろん、場面に応じた言葉遣いの使い分けは重要である。変化を認めることと、無秩序を容認することは、別の問題だからである。", fu:"むろん、ばめんにおうじたことばづかいのつかいわけはじゅうようである。へんかをみとめることと、むちつじょをようにんすることは、べつのもんだいだからである。", es:"Por supuesto, es importante adaptar el registro a cada situación: aceptar el cambio y tolerar el desorden son cuestiones distintas."}
   ],
   gloss:[
     {w:"乱れて", r:"みだれて", m:"corromperse · desordenarse (乱れる)"},
     {w:"嘆き", r:"なげき", m:"lamento"},
     {w:"言語学", r:"げんごがく", m:"lingüística"},
     {w:"新奇", r:"しんき", m:"novedoso · inusual"},
     {w:"言葉遣い", r:"ことばづかい", m:"manera de hablar · registro"},
     {w:"容認", r:"ようにん", m:"tolerancia · aceptación"}
   ],
   q:[
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>は<ruby>若者<rt>わかもの</rt></ruby><ruby>言葉<rt>ことば</rt></ruby>をどう<ruby>捉<rt>とら</rt></ruby>えているか。", o:["<ruby>乱<rt>みだ</rt></ruby>れではなく<ruby>変化<rt>へんか</rt></ruby>である","<ruby>直<rt>なお</rt></ruby>すべき<ruby>誤<rt>あやま</rt></ruby>りである","<ruby>無視<rt>むし</rt></ruby>すべきものである"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>が<ruby>重要<rt>じゅうよう</rt></ruby>だと<ruby>述<rt>の</rt></ruby>べていることは<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>場面<rt>ばめん</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じた<ruby>使<rt>つか</rt></ruby>い<ruby>分<rt>わ</rt></ruby>け","<ruby>古<rt>ふる</rt></ruby>い<ruby>言葉<rt>ことば</rt></ruby>の<ruby>復活<rt>ふっかつ</rt></ruby>","<ruby>新語<rt>しんご</rt></ruby>の<ruby>禁止<rt>きんし</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-3", lvl:"N1", title:"匿名の代償", mins:5,
   paras:[
     {jp:"インターネットの匿名性は、自由な発言を可能にする一方で、深刻な問題を生み出している。", fu:"いんたーねっとのとくめいせいは、じゆうなはつげんをかのうにするいっぽうで、しんこくなもんだいをうみだしている。", es:"El anonimato de internet permite expresarse con libertad, pero a la vez genera problemas graves."},
     {jp:"名前を明かさずに済むという安心感が、時として攻撃的な言動を助長するのである。", fu:"なまえをあかさずにすむというあんしんかんが、ときとしてこうげきてきなげんどうをじょちょうするのである。", es:"La tranquilidad de no tener que revelar el nombre a veces alienta conductas agresivas."},
     {jp:"誹謗中傷によって心を病み、命を絶つ人さえいる現実を前に、我々は匿名の代償の大きさを認識せざるを得ない。", fu:"ひぼうちゅうしょうによってこころをやみ、いのちをたつひとさえいるげんじつをまえに、われわれはとくめいのだいしょうのおおきさをにんしきせざるをえない。", es:"Ante la realidad de que hay quien enferma e incluso se quita la vida por las difamaciones, no podemos sino reconocer el alto precio del anonimato."},
     {jp:"規制の強化を求める声もあるが、それが表現の自由を脅かす恐れも否定できない。技術ではなく、使い手の倫理こそが問われている。", fu:"きせいのきょうかをもとめるこえもあるが、それがひょうげんのじゆうをおびやかすおそれもひていできない。ぎじゅつではなく、つかいてのりんりこそがとわれている。", es:"Hay quien pide endurecer la regulación, pero no puede negarse el riesgo de que eso amenace la libertad de expresión. Lo que está en cuestión no es la técnica, sino la ética de quien la usa."}
   ],
   gloss:[
     {w:"匿名性", r:"とくめいせい", m:"anonimato"},
     {w:"助長", r:"じょちょう", m:"fomentar · alentar (algo malo)"},
     {w:"誹謗中傷", r:"ひぼうちゅうしょう", m:"difamación e injurias"},
     {w:"代償", r:"だいしょう", m:"precio · contrapartida"},
     {w:"規制", r:"きせい", m:"regulación"},
     {w:"倫理", r:"りんり", m:"ética"}
   ],
   q:[
     {q:"<ruby>匿名性<rt>とくめいせい</rt></ruby>が<ruby>助長<rt>じょちょう</rt></ruby>するものとして<ruby>挙<rt>あ</rt></ruby>げられているのは。", o:["<ruby>攻撃的<rt>こうげきてき</rt></ruby>な<ruby>言動<rt>げんどう</rt></ruby>","<ruby>自由<rt>じゆう</rt></ruby>な<ruby>研究<rt>けんきゅう</rt></ruby>","<ruby>親切<rt>しんせつ</rt></ruby>な<ruby>行動<rt>こうどう</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>が<ruby>最<rt>もっと</rt></ruby>も<ruby>問<rt>と</rt></ruby>われていると<ruby>考<rt>かんが</rt></ruby>えるものは。", o:["<ruby>使<rt>つか</rt></ruby>い<ruby>手<rt>て</rt></ruby>の<ruby>倫理<rt>りんり</rt></ruby>","<ruby>技術<rt>ぎじゅつ</rt></ruby>の<ruby>進歩<rt>しんぽ</rt></ruby>","<ruby>規制<rt>きせい</rt></ruby>の<ruby>撤廃<rt>てっぱい</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-4", lvl:"N1", title:"伝統工芸の岐路", mins:5,
   paras:[
     {jp:"日本各地に伝わる伝統工芸が、後継者不足という深刻な問題に直面している。", fu:"にほんかくちにつたわるでんとうこうげいが、こうけいしゃぶそくというしんこくなもんだいにちょくめんしている。", es:"La artesanía tradicional de todo Japón afronta el grave problema de la falta de sucesores."},
     {jp:"何十年もの修業を要する厳しい世界に、あえて飛び込もうとする若者は少ない。", fu:"なんじゅうねんものしゅぎょうをようするきびしいせかいに、あえてとびこもうとするわかものはすくない。", es:"Pocos jóvenes se atreven a lanzarse a un mundo exigente que requiere décadas de aprendizaje."},
     {jp:"職人の高齢化が進み、このままでは技そのものが失われることを余儀なくされるだろう。", fu:"しょくにんのこうれいかがすすみ、このままではわざそのものがうしなわれることをよぎなくされるだろう。", es:"Los artesanos envejecen y, de seguir así, las propias técnicas se verán condenadas a perderse."},
     {jp:"一方で、伝統に現代的なデザインを取り入れ、海外市場を開拓する動きも生まれている。守ることと変わることは、必ずしも矛盾しないのかもしれない。", fu:"いっぽうで、でんとうにげんだいてきなでざいんをとりいれ、かいがいしじょうをかいたくするうごきもうまれている。まもることとかわることは、かならずしもむじゅんしないのかもしれない。", es:"Por otro lado, surgen iniciativas que incorporan diseño actual a la tradición y abren mercados en el extranjero. Quizá conservar y cambiar no sean necesariamente contradictorios."}
   ],
   gloss:[
     {w:"伝統工芸", r:"でんとうこうげい", m:"artesanía tradicional"},
     {w:"後継者", r:"こうけいしゃ", m:"sucesor"},
     {w:"修業", r:"しゅぎょう", m:"aprendizaje · formación (de oficio)"},
     {w:"職人", r:"しょくにん", m:"artesano"},
     {w:"開拓", r:"かいたく", m:"apertura (de mercados) · roturación"},
     {w:"矛盾", r:"むじゅん", m:"contradicción"}
   ],
   q:[
     {q:"<ruby>伝統工芸<rt>でんとうこうげい</rt></ruby>が<ruby>直面<rt>ちょくめん</rt></ruby>する<ruby>問題<rt>もんだい</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>後継者<rt>こうけいしゃ</rt></ruby><ruby>不足<rt>ぶそく</rt></ruby>","<ruby>材料<rt>ざいりょう</rt></ruby>の<ruby>値上<rt>ねあ</rt></ruby>がり","<ruby>観光客<rt>かんこうきゃく</rt></ruby>の<ruby>減少<rt>げんしょう</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>えに<ruby>最<rt>もっと</rt></ruby>も<ruby>近<rt>ちか</rt></ruby>いものはどれか。", o:["<ruby>守<rt>まも</rt></ruby>ることと<ruby>変<rt>か</rt></ruby>わることは<ruby>両立<rt>りょうりつ</rt></ruby>しうる","<ruby>伝統<rt>でんとう</rt></ruby>は<ruby>変<rt>か</rt></ruby>えてはならない","<ruby>海外<rt>かいがい</rt></ruby><ruby>進出<rt>しんしゅつ</rt></ruby>は<ruby>危険<rt>きけん</rt></ruby>だ"], a:0}
   ]
 },
 { id:"r-n1-5", lvl:"N1", title:"ゲノム編集と倫理", mins:5,
   paras:[
     {jp:"遺伝子を自在に書き換えるゲノム編集技術は、医療に革命をもたらしうると期待されている。", fu:"いでんしをじざいにかきかえるげのむへんしゅうぎじゅつは、いりょうにかくめいをもたらしうるときたいされている。", es:"La edición genómica, que reescribe los genes a voluntad, promete revolucionar la medicina."},
     {jp:"難病の治療に道を開く一方で、この技術は重大な倫理的問題をはらんでいる。", fu:"なんびょうのちりょうにみちをひらくいっぽうで、このぎじゅつはじゅうだいなりんりてきもんだいをはらんでいる。", es:"Aunque abre camino al tratamiento de enfermedades incurables, esta técnica encierra graves problemas éticos."},
     {jp:"受精卵の段階で遺伝子を操作すれば、その影響は本人のみならず子孫にまで及ぶ。能力や容姿を「設計」する行為を、我々は許容すべきなのだろうか。", fu:"じゅせいらんのだんかいでいでんしをそうさすれば、そのえいきょうはほんにんのみならずしそんにまでおよぶ。のうりょくやようしを「せっけい」するこういを、われわれはきょようすべきなのだろうか。", es:"Si se manipulan los genes en el embrión, el efecto alcanza no solo al individuo sino a su descendencia. ¿Debemos permitir 'diseñar' capacidades o apariencia?"},
     {jp:"科学の進歩を止めることはできまい。だからこそ、技術が可能にすることと、社会が許すべきことの線引きについて、議論を尽くす必要がある。", fu:"かがくのしんぽをとめることはできまい。だからこそ、ぎじゅつがかのうにすることと、しゃかいがゆるすべきことのせんびきについて、ぎろんをつくすひつようがある。", es:"No se podrá frenar el avance científico. Precisamente por eso hay que agotar el debate sobre dónde trazar la línea entre lo técnicamente posible y lo socialmente admisible."}
   ],
   gloss:[
     {w:"遺伝子", r:"いでんし", m:"gen"},
     {w:"難病", r:"なんびょう", m:"enfermedad incurable o rara"},
     {w:"はらんで", r:"はらんで", m:"encerrar · contener (un riesgo) (はらむ)"},
     {w:"受精卵", r:"じゅせいらん", m:"óvulo fecundado · embrión"},
     {w:"子孫", r:"しそん", m:"descendencia"},
     {w:"線引き", r:"せんびき", m:"trazar el límite"}
   ],
   q:[
     {q:"ゲノム<ruby>編集<rt>へんしゅう</rt></ruby>の<ruby>倫理的<rt>りんりてき</rt></ruby><ruby>問題<rt>もんだい</rt></ruby>として<ruby>挙<rt>あ</rt></ruby>げられているのは。", o:["<ruby>影響<rt>えいきょう</rt></ruby>が<ruby>子孫<rt>しそん</rt></ruby>にまで<ruby>及<rt>およ</rt></ruby>ぶこと","<ruby>費用<rt>ひよう</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いこと","<ruby>時間<rt>じかん</rt></ruby>がかかること"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>だと<ruby>述<rt>の</rt></ruby>べていることは。", o:["<ruby>線引<rt>せんび</rt></ruby>きについて<ruby>議論<rt>ぎろん</rt></ruby>を<ruby>尽<rt>つ</rt></ruby>くすこと","<ruby>研究<rt>けんきゅう</rt></ruby>の<ruby>全面禁止<rt>ぜんめんきんし</rt></ruby>","<ruby>技術<rt>ぎじゅつ</rt></ruby>の<ruby>自由化<rt>じゆうか</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-6", lvl:"N1", title:"無縁社会", mins:5,
   paras:[
     {jp:"家族、地域、職場。かつて人々を支えていた縁が、急速に細りつつある。", fu:"かぞく、ちいき、しょくば。かつてひとびとをささえていたえんが、きゅうそくにほそりつつある。", es:"Familia, barrio, trabajo. Los lazos que antaño sostenían a las personas se están debilitando a gran velocidad."},
     {jp:"単身世帯が増加し、誰にも看取られずに亡くなる「孤独死」は、もはや珍しい出来事ではなくなった。", fu:"たんしんせたいがぞうかし、だれにもみとられずになくなる「こどくし」は、もはやめずらしいできごとではなくなった。", es:"Con el aumento de los hogares unipersonales, morir sin nadie al lado —la 'muerte solitaria'— ya no es un suceso raro."},
     {jp:"こうした「無縁社会」の到来は、個人の自由を尊重してきた社会の、いわば裏の顔にほかならない。", fu:"こうした「むえんしゃかい」のとうらいは、こじんのじゆうをそんちょうしてきたしゃかいの、いわばうらのかおにほかならない。", es:"La llegada de esta 'sociedad sin vínculos' no es sino la otra cara de una sociedad que ha primado la libertad individual."},
     {jp:"求められているのは、昔ながらの共同体への回帰ではなく、緩やかにつながり直すための新たな仕組みであろう。", fu:"もとめられているのは、むかしながらのきょうどうたいへのかいきではなく、ゆるやかにつながりなおすためのあらたなしくみであろう。", es:"Lo que se necesita no es volver a la comunidad de antaño, sino nuevos mecanismos para reconectarse de forma más laxa."}
   ],
   gloss:[
     {w:"縁", r:"えん", m:"lazo · vínculo"},
     {w:"単身世帯", r:"たんしんせたい", m:"hogar unipersonal"},
     {w:"看取られ", r:"みとられ", m:"ser acompañado en la muerte (看取る)"},
     {w:"孤独死", r:"こどくし", m:"muerte en soledad"},
     {w:"共同体", r:"きょうどうたい", m:"comunidad"},
     {w:"回帰", r:"かいき", m:"retorno · regreso"}
   ],
   q:[
     {q:"「<ruby>無縁社会<rt>むえんしゃかい</rt></ruby>」は<ruby>何<rt>なに</rt></ruby>の「<ruby>裏<rt>うら</rt></ruby>の<ruby>顔<rt>かお</rt></ruby>」だと<ruby>述<rt>の</rt></ruby>べられているか。", o:["<ruby>個人<rt>こじん</rt></ruby>の<ruby>自由<rt>じゆう</rt></ruby>を<ruby>尊重<rt>そんちょう</rt></ruby>する<ruby>社会<rt>しゃかい</rt></ruby>","<ruby>経済<rt>けいざい</rt></ruby><ruby>成長<rt>せいちょう</rt></ruby>","<ruby>技術<rt>ぎじゅつ</rt></ruby>の<ruby>発展<rt>はってん</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>が<ruby>求<rt>もと</rt></ruby>めるものはどれか。", o:["<ruby>緩<rt>ゆる</rt></ruby>やかにつながる<ruby>新<rt>あら</rt></ruby>たな<ruby>仕組<rt>しく</rt></ruby>み","<ruby>昔<rt>むかし</rt></ruby>の<ruby>共同体<rt>きょうどうたい</rt></ruby>への<ruby>回帰<rt>かいき</rt></ruby>","<ruby>単身世帯<rt>たんしんせたい</rt></ruby>の<ruby>禁止<rt>きんし</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-7", lvl:"N1", title:"活字離れを憂う前に", mins:5,
   paras:[
     {jp:"若者の読書量の減少、いわゆる「活字離れ」を憂う声は多い。", fu:"わかもののどくしょりょうのげんしょう、いわゆる「かつじばなれ」をうれうこえはおおい。", es:"Son muchas las voces que lamentan el descenso de la lectura entre los jóvenes, el llamado 'alejamiento de la letra impresa'."},
     {jp:"しかし、彼らが文字を読まなくなったわけではない。スマートフォンの画面を通じて、膨大な量の文章に日々接している。", fu:"しかし、かれらがもじをよまなくなったわけではない。すまーとふぉんのがめんをつうじて、ぼうだいなりょうのぶんしょうにひびせっしている。", es:"Pero no es que hayan dejado de leer: a través de la pantalla del móvil están en contacto diario con cantidades ingentes de texto."},
     {jp:"問われるべきは量ではなく質、すなわち、断片的な情報の消費と、一冊の本と向き合う深い読書との違いであろう。", fu:"とわれるべきはりょうではなくしつ、すなわち、だんぺんてきなじょうほうのしょうひと、いっさつのほんとむきあうふかいどくしょとのちがいであろう。", es:"Lo que debe cuestionarse no es la cantidad sino la calidad: la diferencia entre consumir información fragmentaria y la lectura profunda de un libro."},
     {jp:"長い文章を読み通す体力は、思考の持久力に通じる。それを育てる機会をどう保障するかこそ、大人が考えるべき問題である。", fu:"ながいぶんしょうをよみとおすたいりょくは、しこうのじきゅうりょくにつうじる。それをそだてるきかいをどうほしょうするかこそ、おとながかんがえるべきもんだいである。", es:"La resistencia para leer textos largos se traduce en resistencia para pensar. Cómo garantizar ocasiones de cultivarla es lo que los adultos deberían plantearse."}
   ],
   gloss:[
     {w:"活字離れ", r:"かつじばなれ", m:"alejamiento de la letra impresa"},
     {w:"憂う", r:"うれう", m:"lamentar · preocuparse por"},
     {w:"膨大", r:"ぼうだい", m:"enorme · ingente"},
     {w:"断片的", r:"だんぺんてき", m:"fragmentario"},
     {w:"読み通す", r:"よみとおす", m:"leer hasta el final"},
     {w:"持久力", r:"じきゅうりょく", m:"resistencia · aguante"}
   ],
   q:[
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>によれば、<ruby>問<rt>と</rt></ruby>われるべきものは<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>読書<rt>どくしょ</rt></ruby>の<ruby>質<rt>しつ</rt></ruby>","<ruby>読書<rt>どくしょ</rt></ruby>の<ruby>量<rt>りょう</rt></ruby>","<ruby>本<rt>ほん</rt></ruby>の<ruby>値段<rt>ねだん</rt></ruby>"], a:0},
     {q:"<ruby>長<rt>なが</rt></ruby>い<ruby>文章<rt>ぶんしょう</rt></ruby>を<ruby>読<rt>よ</rt></ruby>み<ruby>通<rt>とお</rt></ruby>す<ruby>力<rt>ちから</rt></ruby>は<ruby>何<rt>なに</rt></ruby>に<ruby>通<rt>つう</rt></ruby>じるか。", o:["<ruby>思考<rt>しこう</rt></ruby>の<ruby>持久力<rt>じきゅうりょく</rt></ruby>","<ruby>視力<rt>しりょく</rt></ruby>の<ruby>向上<rt>こうじょう</rt></ruby>","<ruby>記憶力<rt>きおくりょく</rt></ruby>の<ruby>低下<rt>ていか</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-8", lvl:"N1", title:"気候変動と個人の責任", mins:5,
   paras:[
     {jp:"気候変動への対策として、個人のライフスタイルの見直しが盛んに呼びかけられている。", fu:"きこうへんどうへのたいさくとして、こじんのらいふすたいるのみなおしがさかんによびかけられている。", es:"Como medida contra el cambio climático, se insta constantemente a revisar el estilo de vida individual."},
     {jp:"むろん、一人ひとりの心がけに意味がないわけではない。", fu:"むろん、ひとりひとりのこころがけにいみがないわけではない。", es:"Por supuesto, no es que el esfuerzo de cada persona carezca de sentido."},
     {jp:"しかし、排出量の大半を占めるのは一部の産業であり、個人の努力のみに責任を帰するのは、問題の本質から目をそらすことにもなりかねない。", fu:"しかし、はいしゅつりょうのたいはんをしめるのはいちぶのさんぎょうであり、こじんのどりょくのみにせきにんをきするのは、もんだいのほんしつからめをそらすことにもなりかねない。", es:"Pero la mayor parte de las emisiones procede de ciertas industrias, y cargar la responsabilidad solo sobre el esfuerzo individual puede desviar la mirada del fondo del problema."},
     {jp:"個人の行動と、制度や構造の変革。この両輪がそろって初めて、実効性のある対策となるのではないだろうか。", fu:"こじんのこうどうと、せいどやこうぞうのへんかく。このりょうりんがそろってはじめて、じっこうせいのあるたいさくとなるのではないだろうか。", es:"Acción individual y transformación de sistemas y estructuras: solo cuando ambas ruedas giran juntas la respuesta se vuelve realmente eficaz."}
   ],
   gloss:[
     {w:"気候変動", r:"きこうへんどう", m:"cambio climático"},
     {w:"見直し", r:"みなおし", m:"revisión · replanteamiento"},
     {w:"排出量", r:"はいしゅつりょう", m:"volumen de emisiones"},
     {w:"帰する", r:"きする", m:"atribuir (responsabilidad)"},
     {w:"変革", r:"へんかく", m:"transformación · reforma"},
     {w:"実効性", r:"じっこうせい", m:"eficacia real"}
   ],
   q:[
     {q:"<ruby>排出量<rt>はいしゅつりょう</rt></ruby>の<ruby>大半<rt>たいはん</rt></ruby>を<ruby>占<rt>し</rt></ruby>めるのは<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>一部<rt>いちぶ</rt></ruby>の<ruby>産業<rt>さんぎょう</rt></ruby>","<ruby>家庭<rt>かてい</rt></ruby>","<ruby>自動車<rt>じどうしゃ</rt></ruby><ruby>個人<rt>こじん</rt></ruby><ruby>利用<rt>りよう</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>の<ruby>主張<rt>しゅちょう</rt></ruby>に<ruby>最<rt>もっと</rt></ruby>も<ruby>近<rt>ちか</rt></ruby>いものは。", o:["<ruby>個人<rt>こじん</rt></ruby>の<ruby>行動<rt>こうどう</rt></ruby>と<ruby>構造<rt>こうぞう</rt></ruby>の<ruby>変革<rt>へんかく</rt></ruby>の<ruby>両方<rt>りょうほう</rt></ruby>が<ruby>必要<rt>ひつよう</rt></ruby>","<ruby>個人<rt>こじん</rt></ruby>の<ruby>努力<rt>どりょく</rt></ruby>だけで<ruby>十分<rt>じゅうぶん</rt></ruby>","<ruby>対策<rt>たいさく</rt></ruby>は<ruby>不要<rt>ふよう</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-9", lvl:"N1", title:"グローバル化と文化の均質化", mins:5,
   paras:[
     {jp:"世界のどの都市を訪れても、同じ看板、同じ店、同じ音楽に出会う。", fu:"せかいのどのとしをおとずれても、おなじかんばん、おなじみせ、おなじおんがくにであう。", es:"Visites la ciudad del mundo que visites, te encuentras los mismos carteles, las mismas tiendas, la misma música."},
     {jp:"グローバル化がもたらした利便性は計り知れないが、その陰で、地域固有の文化が均質化の波にのまれつつある。", fu:"ぐろーばるかがもたらしたりべんせいははかりしれないが、そのかげで、ちいきこゆうのぶんかがきんしつかのなみにのまれつつある。", es:"La comodidad que ha traído la globalización es incalculable, pero a su sombra las culturas propias de cada lugar están siendo engullidas por la ola de homogeneización."},
     {jp:"言語の消滅はその象徴である。数千あるとされる言語の多くが、今世紀中に話し手を失うと予測されている。", fu:"げんごのしょうめつはそのしょうちょうである。すうせんあるとされるげんごのおおくが、こんせいきちゅうにはなしてをうしなうとよそくされている。", es:"La desaparición de lenguas es su símbolo: se prevé que muchas de las miles que existen pierdan a sus hablantes este siglo."},
     {jp:"多様性の喪失は、人類全体の選択肢の喪失にほかならない。効率と引き換えに何を失いつつあるのか、立ち止まって考える時期に来ている。", fu:"たようせいのそうしつは、じんるいぜんたいのせんたくしのそうしつにほかならない。こうりつとひきかえになにをうしないつつあるのか、たちどまってかんがえるじきにきている。", es:"Perder diversidad no es sino perder opciones para toda la humanidad. Es hora de detenerse a pensar qué estamos perdiendo a cambio de la eficiencia."}
   ],
   gloss:[
     {w:"利便性", r:"りべんせい", m:"comodidad · conveniencia"},
     {w:"固有", r:"こゆう", m:"propio · característico"},
     {w:"均質化", r:"きんしつか", m:"homogeneización"},
     {w:"消滅", r:"しょうめつ", m:"desaparición · extinción"},
     {w:"喪失", r:"そうしつ", m:"pérdida"},
     {w:"引き換え", r:"ひきかえ", m:"a cambio"}
   ],
   q:[
     {q:"<ruby>文化<rt>ぶんか</rt></ruby>の<ruby>均質化<rt>きんしつか</rt></ruby>の<ruby>象徴<rt>しょうちょう</rt></ruby>として<ruby>挙<rt>あ</rt></ruby>げられているのは。", o:["<ruby>言語<rt>げんご</rt></ruby>の<ruby>消滅<rt>しょうめつ</rt></ruby>","<ruby>人口<rt>じんこう</rt></ruby>の<ruby>増加<rt>ぞうか</rt></ruby>","<ruby>貿易<rt>ぼうえき</rt></ruby>の<ruby>拡大<rt>かくだい</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>によれば、<ruby>多様性<rt>たようせい</rt></ruby>の<ruby>喪失<rt>そうしつ</rt></ruby>とは<ruby>何<rt>なに</rt></ruby>の<ruby>喪失<rt>そうしつ</rt></ruby>か。", o:["<ruby>人類<rt>じんるい</rt></ruby>の<ruby>選択肢<rt>せんたくし</rt></ruby>","<ruby>経済<rt>けいざい</rt></ruby><ruby>成長<rt>せいちょう</rt></ruby>","<ruby>観光<rt>かんこう</rt></ruby><ruby>資源<rt>しげん</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-10", lvl:"N1", title:"デジタル化の陰で", mins:5,
   paras:[
     {jp:"行政手続きから買い物まで、あらゆるサービスのデジタル化が急速に進んでいる。", fu:"ぎょうせいてつづきからかいものまで、あらゆるさーびすのでじたるかがきゅうそくにすすんでいる。", es:"De los trámites administrativos a las compras, la digitalización de todos los servicios avanza a gran velocidad."},
     {jp:"効率化の恩恵は大きい。しかし、機器の操作に不慣れな高齢者などが、必要なサービスから締め出される事態も生じている。", fu:"こうりつかのおんけいはおおきい。しかし、ききのそうさにふなれなこうれいしゃなどが、ひつようなさーびすからしめだされるじたいもしょうじている。", es:"El beneficio en eficiencia es grande. Pero también ocurre que personas poco habituadas a los dispositivos, como los mayores, quedan excluidas de servicios necesarios."},
     {jp:"「使えない側」の自己責任として片付けるのは容易だが、それは社会の側の想像力の欠如を示すものと言えなくもない。", fu:"「つかえないがわ」のじこせきにんとしてかたづけるのはよういだが、それはしゃかいのがわのそうぞうりょくのけつじょをしめすものといえなくもない。", es:"Es fácil despacharlo como responsabilidad de 'quien no sabe usarlo', pero cabría decir que eso revela una falta de imaginación por parte de la sociedad."},
     {jp:"技術は本来、人を排除するためではなく、包摂するためにある。誰一人取り残さないデジタル化こそが、真の進歩と呼ぶに値するだろう。", fu:"ぎじゅつはほんらい、ひとをはいじょするためではなく、ほうせつするためにある。だれひとりとりのこさないでじたるかこそが、しんのしんぽとよぶにあたいするだろう。", es:"La tecnología existe, en origen, no para excluir sino para incluir. Solo una digitalización que no deje a nadie atrás merecerá llamarse verdadero progreso."}
   ],
   gloss:[
     {w:"行政手続き", r:"ぎょうせいてつづき", m:"trámites administrativos"},
     {w:"恩恵", r:"おんけい", m:"beneficio · favor"},
     {w:"不慣れ", r:"ふなれ", m:"poco habituado"},
     {w:"締め出される", r:"しめだされる", m:"quedar excluido (締め出す)"},
     {w:"欠如", r:"けつじょ", m:"carencia · falta"},
     {w:"包摂", r:"ほうせつ", m:"inclusión"}
   ],
   q:[
     {q:"デジタル<ruby>化<rt>か</rt></ruby>で<ruby>生<rt>しょう</rt></ruby>じている<ruby>事態<rt>じたい</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>高齢者<rt>こうれいしゃ</rt></ruby>などがサービスから<ruby>締<rt>し</rt></ruby>め<ruby>出<rt>だ</rt></ruby>される","<ruby>料金<rt>りょうきん</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がる","<ruby>手続<rt>てつづ</rt></ruby>きが<ruby>遅<rt>おそ</rt></ruby>くなる"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>が「<ruby>真<rt>しん</rt></ruby>の<ruby>進歩<rt>しんぽ</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>ぶものは。", o:["<ruby>誰一人<rt>だれひとり</rt></ruby><ruby>取<rt>と</rt></ruby>り<ruby>残<rt>のこ</rt></ruby>さないデジタル<ruby>化<rt>か</rt></ruby>","<ruby>最速<rt>さいそく</rt></ruby>のデジタル<ruby>化<rt>か</rt></ruby>","<ruby>紙<rt>かみ</rt></ruby>への<ruby>回帰<rt>かいき</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-11", lvl:"N1", title:"人工知能は創造できるか", mins:5,
   paras:[
     {jp:"人工知能が絵を描き、曲を作り、小説さえ書く時代が到来した。", fu:"じんこうちのうがえをかき、きょくをつくり、しょうせつさえかくじだいがとうらいした。", es:"Ha llegado la era en que la inteligencia artificial pinta, compone e incluso escribe novelas."},
     {jp:"その出来栄えは、専門家をもうならせるほどの水準に達しつつある。", fu:"そのできばえは、せんもんかをもうならせるほどのすいじゅんにたっしつつある。", es:"Su factura está alcanzando un nivel que impresiona incluso a los especialistas."},
     {jp:"だが、それを「創造」と呼べるかどうかは議論の分かれるところである。過去の作品の膨大な模倣の先に、真の新しさは生まれうるのか。", fu:"だが、それを「そうぞう」とよべるかどうかはぎろんのわかれるところである。かこのさくひんのぼうだいなもほうのさきに、しんのあたらしさはうまれうるのか。", es:"Pero si eso puede llamarse 'creación' es discutible. ¿Puede nacer verdadera novedad de la imitación masiva de obras del pasado?"},
     {jp:"皮肉なことに、機械が器用に作れば作るほど、人間にしか生み出せないものとは何かという問いが、かえって鮮明になってくるのである。", fu:"ひにくなことに、きかいがきようにつくればつくるほど、にんげんにしかうみだせないものとはなにかというといが、かえってせんめいになってくるのである。", es:"Irónicamente, cuanto más hábilmente produce la máquina, más nítida se vuelve la pregunta de qué es aquello que solo el ser humano puede crear."}
   ],
   gloss:[
     {w:"人工知能", r:"じんこうちのう", m:"inteligencia artificial"},
     {w:"出来栄え", r:"できばえ", m:"factura · acabado"},
     {w:"水準", r:"すいじゅん", m:"nivel · estándar"},
     {w:"模倣", r:"もほう", m:"imitación"},
     {w:"皮肉", r:"ひにく", m:"ironía"},
     {w:"鮮明", r:"せんめい", m:"nítido · claro"}
   ],
   q:[
     {q:"<ruby>議論<rt>ぎろん</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かれているのはどんな<ruby>点<rt>てん</rt></ruby>か。", o:["AIの<ruby>作品<rt>さくひん</rt></ruby>を「<ruby>創造<rt>そうぞう</rt></ruby>」と<ruby>呼<rt>よ</rt></ruby>べるか","AIの<ruby>速度<rt>そくど</rt></ruby>","AIの<ruby>価格<rt>かかく</rt></ruby>"], a:0},
     {q:"<ruby>機械<rt>きかい</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>に<ruby>作<rt>つく</rt></ruby>るほど、<ruby>何<rt>なに</rt></ruby>が<ruby>鮮明<rt>せんめい</rt></ruby>になるか。", o:["<ruby>人間<rt>にんげん</rt></ruby>にしか<ruby>生<rt>う</rt></ruby>み<ruby>出<rt>だ</rt></ruby>せないものへの<ruby>問<rt>と</rt></ruby>い","<ruby>機械<rt>きかい</rt></ruby>の<ruby>欠点<rt>けってん</rt></ruby>","<ruby>芸術<rt>げいじゅつ</rt></ruby>の<ruby>無意味<rt>むいみ</rt></ruby>さ"], a:0}
   ]
 },
 { id:"r-n1-12", lvl:"N1", title:"敬語は何のためにあるのか", mins:5,
   paras:[
     {jp:"敬語は面倒だ、廃止すべきだという意見を耳にすることがある。", fu:"けいごはめんどうだ、はいしすべきだといういけんをみみにすることがある。", es:"A veces se oye que el keigo es un engorro y debería abolirse."},
     {jp:"確かに、複雑な敬語体系は学習者のみならず母語話者をも悩ませている。", fu:"たしかに、ふくざつなけいごたいけいはがくしゅうしゃのみならずぼごわしゃをもなやませている。", es:"Es cierto que su complejo sistema atormenta no solo a los estudiantes sino también a los hablantes nativos."},
     {jp:"しかし敬語の本質は、単なる上下関係の表現ではなく、相手との距離を調整する装置にある。親しさと礼儀を状況に応じて使い分けることで、円滑な人間関係が保たれるのである。", fu:"しかしけいごのほんしつは、たんなるじょうげかんけいのひょうげんではなく、あいてとのきょりをちょうせいするそうちにある。したしさとれいぎをじょうきょうにおうじてつかいわけることで、えんかつなにんげんかんけいがたもたれるのである。", es:"Pero la esencia del keigo no es expresar jerarquía sin más, sino ajustar la distancia con el interlocutor. Alternando cercanía y cortesía según la situación se mantienen relaciones fluidas."},
     {jp:"形は時代とともに簡略化されようとも、距離への配慮という機能そのものは、失われることはあるまい。", fu:"かたちはじだいとともにかんりゃくかされようとも、きょりへのはいりょというきのうそのものは、うしなわれることはあるまい。", es:"Aunque sus formas se simplifiquen con el tiempo, la función misma —la atención a la distancia— difícilmente se perderá."}
   ],
   gloss:[
     {w:"廃止", r:"はいし", m:"abolición"},
     {w:"体系", r:"たいけい", m:"sistema"},
     {w:"母語話者", r:"ぼごわしゃ", m:"hablante nativo"},
     {w:"装置", r:"そうち", m:"dispositivo · mecanismo"},
     {w:"円滑", r:"えんかつ", m:"fluido · sin fricciones"},
     {w:"配慮", r:"はいりょ", m:"consideración · atención"}
   ],
   q:[
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>によれば、<ruby>敬語<rt>けいご</rt></ruby>の<ruby>本質<rt>ほんしつ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>相手<rt>あいて</rt></ruby>との<ruby>距離<rt>きょり</rt></ruby>を<ruby>調整<rt>ちょうせい</rt></ruby>する<ruby>装置<rt>そうち</rt></ruby>","<ruby>上下関係<rt>じょうげかんけい</rt></ruby>の<ruby>強調<rt>きょうちょう</rt></ruby>","<ruby>古<rt>ふる</rt></ruby>い<ruby>伝統<rt>でんとう</rt></ruby>の<ruby>維持<rt>いじ</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>は<ruby>敬語<rt>けいご</rt></ruby>の<ruby>将来<rt>しょうらい</rt></ruby>をどう<ruby>見<rt>み</rt></ruby>ているか。", o:["<ruby>形<rt>かたち</rt></ruby>は<ruby>変<rt>か</rt></ruby>わっても<ruby>機能<rt>きのう</rt></ruby>は<ruby>残<rt>のこ</rt></ruby>る","<ruby>完全<rt>かんぜん</rt></ruby>に<ruby>消<rt>き</rt></ruby>える","<ruby>複雑<rt>ふくざつ</rt></ruby>になる<ruby>一方<rt>いっぽう</rt></ruby>だ"], a:0}
   ]
 },
 { id:"r-n1-13", lvl:"N1", title:"食料自給率を考える", mins:5,
   paras:[
     {jp:"日本の食料自給率は、主要先進国の中でも際立って低い水準にとどまっている。", fu:"にほんのしょくりょうじきゅうりつは、しゅようせんしんこくのなかでもきわだってひくいすいじゅんにとどまっている。", es:"La tasa de autosuficiencia alimentaria de Japón se mantiene en un nivel llamativamente bajo entre los países desarrollados."},
     {jp:"平時には輸入に頼ればよいとしても、国際情勢の悪化や災害により供給が途絶える可能性は否定できない。", fu:"へいじにはゆにゅうにたよればよいとしても、こくさいじょうせいのあっかやさいがいによりきょうきゅうがとだえるかのうせいはひていできない。", es:"Aunque en tiempos normales baste con importar, no puede descartarse que el suministro se corte por crisis internacionales o desastres."},
     {jp:"農業従事者の高齢化と耕作放棄地の増加は、この問題に拍車をかけている。", fu:"のうぎょうじゅうじしゃのこうれいかとこうさくほうきちのぞうかは、このもんだいにはくしゃをかけている。", es:"El envejecimiento de los agricultores y el aumento de tierras abandonadas aceleran el problema."},
     {jp:"食の安全保障は、単なる農業政策ではなく、国民全体の課題として捉え直されるべきであろう。", fu:"しょくのあんぜんほしょうは、たんなるのうぎょうせいさくではなく、こくみんぜんたいのかだいとしてとらえなおされるべきであろう。", es:"La seguridad alimentaria debería replantearse no como mera política agraria, sino como asunto de toda la ciudadanía."}
   ],
   gloss:[
     {w:"自給率", r:"じきゅうりつ", m:"tasa de autosuficiencia"},
     {w:"際立って", r:"きわだって", m:"llamativamente · marcadamente"},
     {w:"途絶える", r:"とだえる", m:"interrumpirse · cortarse"},
     {w:"耕作放棄地", r:"こうさくほうきち", m:"tierras de cultivo abandonadas"},
     {w:"拍車をかけて", r:"はくしゃをかけて", m:"espolear · acelerar (拍車をかける)"},
     {w:"安全保障", r:"あんぜんほしょう", m:"seguridad (nacional, alimentaria)"}
   ],
   q:[
     {q:"<ruby>供給<rt>きょうきゅう</rt></ruby>が<ruby>途絶<rt>とだ</rt></ruby>える<ruby>原因<rt>げんいん</rt></ruby>として<ruby>挙<rt>あ</rt></ruby>げられているのは。", o:["<ruby>国際情勢<rt>こくさいじょうせい</rt></ruby>の<ruby>悪化<rt>あっか</rt></ruby>や<ruby>災害<rt>さいがい</rt></ruby>","<ruby>消費<rt>しょうひ</rt></ruby>の<ruby>減少<rt>げんしょう</rt></ruby>","<ruby>価格<rt>かかく</rt></ruby>の<ruby>低下<rt>ていか</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>は<ruby>食<rt>しょく</rt></ruby>の<ruby>安全保障<rt>あんぜんほしょう</rt></ruby>をどう<ruby>捉<rt>とら</rt></ruby>えるべきだと<ruby>述<rt>の</rt></ruby>べているか。", o:["<ruby>国民<rt>こくみん</rt></ruby><ruby>全体<rt>ぜんたい</rt></ruby>の<ruby>課題<rt>かだい</rt></ruby>として","<ruby>農家<rt>のうか</rt></ruby>だけの<ruby>問題<rt>もんだい</rt></ruby>として","<ruby>輸入<rt>ゆにゅう</rt></ruby><ruby>拡大<rt>かくだい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>として"], a:0}
   ]
 },
 { id:"r-n1-14", lvl:"N1", title:"宇宙開発は無駄遣いか", mins:5,
   paras:[
     {jp:"莫大な費用を要する宇宙開発に対しては、「地上の問題を先に解決すべきだ」という批判が絶えない。", fu:"ばくだいなひようをようするうちゅうかいはつにたいしては、「ちじょうのもんだいをさきにかいけつすべきだ」というひはんがたえない。", es:"Contra la exploración espacial, que exige costes enormes, no cesa la crítica de que 'primero habría que resolver los problemas en la Tierra'."},
     {jp:"その主張には一理あるが、宇宙開発がもたらしてきた恩恵を見落とすべきではない。", fu:"そのしゅちょうにはいちりあるが、うちゅうかいはつがもたらしてきたおんけいをみおとすべきではない。", es:"El argumento tiene su parte de razón, pero no deben pasarse por alto los beneficios que ha traído."},
     {jp:"気象衛星による災害予測、通信技術、医療機器。今日の生活を支える技術の多くは、宇宙開発の副産物として生まれたものである。", fu:"きしょうえいせいによるさいがいよそく、つうしんぎじゅつ、いりょうきき。こんにちのせいかつをささえるぎじゅつのおおくは、うちゅうかいはつのふくさんぶつとしてうまれたものである。", es:"La predicción de desastres por satélite, las telecomunicaciones, los equipos médicos: muchas tecnologías que sostienen la vida actual nacieron como subproductos de la carrera espacial."},
     {jp:"目先の効率のみで科学の価値を測るなら、我々は未来への投資を放棄することになりかねない。", fu:"めさきのこうりつのみでかがくのかちをはかるなら、われわれはみらいへのとうしをほうきすることになりかねない。", es:"Si medimos el valor de la ciencia solo por la eficiencia inmediata, corremos el riesgo de renunciar a invertir en el futuro."}
   ],
   gloss:[
     {w:"莫大", r:"ばくだい", m:"enorme (coste, suma)"},
     {w:"一理", r:"いちり", m:"parte de razón"},
     {w:"見落とす", r:"みおとす", m:"pasar por alto"},
     {w:"気象衛星", r:"きしょうえいせい", m:"satélite meteorológico"},
     {w:"副産物", r:"ふくさんぶつ", m:"subproducto"},
     {w:"目先", r:"めさき", m:"lo inmediato · corto plazo"}
   ],
   q:[
     {q:"<ruby>宇宙開発<rt>うちゅうかいはつ</rt></ruby>への<ruby>批判<rt>ひはん</rt></ruby>はどんなものか。", o:["<ruby>地上<rt>ちじょう</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>先<rt>さき</rt></ruby>に<ruby>解決<rt>かいけつ</rt></ruby>すべきだ","<ruby>危険<rt>きけん</rt></ruby>すぎる","<ruby>遅<rt>おそ</rt></ruby>すぎる"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>の<ruby>主張<rt>しゅちょう</rt></ruby>に<ruby>最<rt>もっと</rt></ruby>も<ruby>近<rt>ちか</rt></ruby>いものは。", o:["<ruby>目先<rt>めさき</rt></ruby>の<ruby>効率<rt>こうりつ</rt></ruby>だけで<ruby>科学<rt>かがく</rt></ruby>を<ruby>測<rt>はか</rt></ruby>るべきではない","<ruby>宇宙開発<rt>うちゅうかいはつ</rt></ruby>は<ruby>中止<rt>ちゅうし</rt></ruby>すべきだ","<ruby>費用<rt>ひよう</rt></ruby>は<ruby>問題<rt>もんだい</rt></ruby>ではない"], a:0}
   ]
 },
 { id:"r-n1-15", lvl:"N1", title:"長時間労働の見直し", mins:5,
   paras:[
     {jp:"長く働くことを美徳とみなす風潮は、日本の職場に根強く残っている。", fu:"ながくはたらくことをびとくとみなすふうちょうは、にほんのしょくばにねづよくのこっている。", es:"La tendencia a considerar virtud el trabajar muchas horas sigue muy arraigada en las empresas japonesas."},
     {jp:"しかし、労働時間の長さと成果は必ずしも比例しないことが、数々の調査で明らかになっている。", fu:"しかし、ろうどうじかんのながさとせいかはかならずしもひれいしないことが、かずかずのちょうさであきらかになっている。", es:"Sin embargo, numerosos estudios muestran que horas y resultados no son necesariamente proporcionales."},
     {jp:"疲弊した頭脳から、優れた発想が生まれるはずもない。休息は怠惰ではなく、生産性を支える投資なのである。", fu:"ひへいしたずのうから、すぐれたはっそうがうまれるはずもない。きゅうそくはたいだではなく、せいさんせいをささえるとうしなのである。", es:"De una mente agotada no pueden salir buenas ideas. El descanso no es pereza, sino una inversión que sostiene la productividad."},
     {jp:"働き方の見直しとは、単に労働時間を削ることではなく、時間あたりの価値を高めるという発想の転換にほかならない。", fu:"はたらきかたのみなおしとは、たんにろうどうじかんをけずることではなく、じかんあたりのかちをたかめるというはっそうのてんかんにほかならない。", es:"Replantear el trabajo no es simplemente recortar horas, sino un cambio de mentalidad: elevar el valor de cada hora."}
   ],
   gloss:[
     {w:"美徳", r:"びとく", m:"virtud"},
     {w:"風潮", r:"ふうちょう", m:"tendencia · corriente social"},
     {w:"比例", r:"ひれい", m:"proporción"},
     {w:"疲弊", r:"ひへい", m:"agotamiento"},
     {w:"怠惰", r:"たいだ", m:"pereza"},
     {w:"転換", r:"てんかん", m:"giro · cambio"}
   ],
   q:[
     {q:"<ruby>調査<rt>ちょうさ</rt></ruby>で<ruby>明<rt>あき</rt></ruby>らかになっていることは<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>労働時間<rt>ろうどうじかん</rt></ruby>と<ruby>成果<rt>せいか</rt></ruby>は<ruby>比例<rt>ひれい</rt></ruby>するとは<ruby>限<rt>かぎ</rt></ruby>らない","<ruby>長<rt>なが</rt></ruby>く<ruby>働<rt>はたら</rt></ruby>くほど<ruby>成果<rt>せいか</rt></ruby>が<ruby>出<rt>で</rt></ruby>る","<ruby>休<rt>やす</rt></ruby>むと<ruby>成果<rt>せいか</rt></ruby>が<ruby>下<rt>さ</rt></ruby>がる"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>にとって<ruby>休息<rt>きゅうそく</rt></ruby>とは<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>生産性<rt>せいさんせい</rt></ruby>を<ruby>支<rt>ささ</rt></ruby>える<ruby>投資<rt>とうし</rt></ruby>","<ruby>怠惰<rt>たいだ</rt></ruby>の<ruby>証拠<rt>しょうこ</rt></ruby>","<ruby>時間<rt>じかん</rt></ruby>の<ruby>無駄<rt>むだ</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-16", lvl:"N1", title:"方言は消えるべきか", mins:5,
   paras:[
     {jp:"テレビやインターネットの普及により、方言を話す機会は着実に減っている。", fu:"てれびやいんたーねっとのふきゅうにより、ほうげんをはなすきかいはちゃくじつにへっている。", es:"Con la difusión de la televisión e internet, las ocasiones de hablar en dialecto disminuyen sin pausa."},
     {jp:"かつて方言は「田舎くさい」と恥じられ、標準語への矯正が教育の場で行われた時代さえあった。", fu:"かつてほうげんは「いなかくさい」とはじられ、ひょうじゅんごへのきょうせいがきょういくのばでおこなわれたじだいさえあった。", es:"Hubo incluso una época en que el dialecto era motivo de vergüenza por 'pueblerino' y en la escuela se corregía hacia la lengua estándar."},
     {jp:"だが方言は、その土地の歴史と暮らしが刻み込まれた、かけがえのない文化遺産である。", fu:"だがほうげんは、そのとちのれきしとくらしがきざみこまれた、かけがえのないぶんかいさんである。", es:"Pero el dialecto es un patrimonio cultural insustituible, donde están grabadas la historia y la vida de su tierra."},
     {jp:"近年、方言を地域の魅力として見直す動きが広がりつつあるのは、救いと言えよう。言葉の多様性は、守るに値する豊かさなのだ。", fu:"きんねん、ほうげんをちいきのみりょくとしてみなおすうごきがひろがりつつあるのは、すくいといえよう。ことばのたようせいは、まもるにあたいするゆたかさなのだ。", es:"Que en los últimos años se extienda la revalorización del dialecto como atractivo local es un alivio. La diversidad lingüística es una riqueza que merece protegerse."}
   ],
   gloss:[
     {w:"方言", r:"ほうげん", m:"dialecto"},
     {w:"着実に", r:"ちゃくじつに", m:"con paso firme · sin pausa"},
     {w:"矯正", r:"きょうせい", m:"corrección (forzada)"},
     {w:"刻み込まれた", r:"きざみこまれた", m:"grabado · inscrito (刻み込む)"},
     {w:"かけがえのない", r:"かけがえのない", m:"insustituible"},
     {w:"値する", r:"あたいする", m:"merecer · ser digno de"}
   ],
   q:[
     {q:"かつて<ruby>教育<rt>きょういく</rt></ruby>の<ruby>場<rt>ば</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>われたことは<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>標準語<rt>ひょうじゅんご</rt></ruby>への<ruby>矯正<rt>きょうせい</rt></ruby>","<ruby>方言<rt>ほうげん</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>","<ruby>外国語<rt>がいこくご</rt></ruby>の<ruby>禁止<rt>きんし</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>は<ruby>方言<rt>ほうげん</rt></ruby>をどう<ruby>捉<rt>とら</rt></ruby>えているか。", o:["<ruby>守<rt>まも</rt></ruby>るに<ruby>値<rt>あたい</rt></ruby>する<ruby>文化遺産<rt>ぶんかいさん</rt></ruby>","<ruby>消<rt>き</rt></ruby>えるべき<ruby>古<rt>ふる</rt></ruby>い<ruby>習慣<rt>しゅうかん</rt></ruby>","<ruby>教育<rt>きょういく</rt></ruby>の<ruby>邪魔<rt>じゃま</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-17", lvl:"N1", title:"科学的とは何か", mins:5,
   paras:[
     {jp:"「科学的に証明された」という宣伝文句が、真偽の疑わしい商品にまで氾濫している。", fu:"「かがくてきにしょうめいされた」というせんでんもんくが、しんぎのうたがわしいしょうひんにまではんらんしている。", es:"El reclamo 'científicamente probado' inunda hasta productos de dudosa veracidad."},
     {jp:"科学の権威を借りた疑似科学は、時に人々の健康や財産に実害を及ぼす。", fu:"かがくのけんいをかりたぎじかがくは、ときにひとびとのけんこうやざいさんにじつがいをおよぼす。", es:"La pseudociencia, que toma prestada la autoridad de la ciencia, a veces causa daños reales a la salud y al bolsillo."},
     {jp:"本来、科学的な態度とは、結論を疑い、検証を重ね、誤りが示されれば潔く修正することにある。断定と宣伝は、むしろ科学から最も遠い振る舞いである。", fu:"ほんらい、かがくてきなたいどとは、けつろんをうたがい、けんしょうをかさね、あやまりがしめされればいさぎよくしゅうせいすることにある。だんていとせんでんは、むしろかがくからもっともとおいふるまいである。", es:"La actitud científica consiste, en origen, en dudar de las conclusiones, verificar una y otra vez, y corregir con honestidad cuando se demuestra el error. La afirmación rotunda y la propaganda son justo lo más alejado de la ciencia."},
     {jp:"情報があふれる時代だからこそ、鵜呑みにせず自ら確かめる姿勢、すなわち科学リテラシーが、すべての人に求められている。", fu:"じょうほうがあふれるじだいだからこそ、うのみにせずみずからたしかめるしせい、すなわちかがくりてらしーが、すべてのひとにもとめられている。", es:"Precisamente en una era desbordada de información, a todos se nos exige la actitud de comprobar por nosotros mismos sin tragar sin masticar: la alfabetización científica."}
   ],
   gloss:[
     {w:"真偽", r:"しんぎ", m:"veracidad (verdadero o falso)"},
     {w:"氾濫", r:"はんらん", m:"inundación · proliferación"},
     {w:"疑似科学", r:"ぎじかがく", m:"pseudociencia"},
     {w:"検証", r:"けんしょう", m:"verificación"},
     {w:"潔く", r:"いさぎよく", m:"con honestidad · sin excusas"},
     {w:"鵜呑み", r:"うのみ", m:"tragarse algo sin cuestionarlo"}
   ],
   q:[
     {q:"<ruby>疑似科学<rt>ぎじかがく</rt></ruby>は<ruby>何<rt>なに</rt></ruby>に<ruby>実害<rt>じつがい</rt></ruby>を<ruby>及<rt>およ</rt></ruby>ぼすか。", o:["<ruby>健康<rt>けんこう</rt></ruby>や<ruby>財産<rt>ざいさん</rt></ruby>","<ruby>天気<rt>てんき</rt></ruby>","<ruby>交通<rt>こうつう</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>によれば、<ruby>科学的<rt>かがくてき</rt></ruby>な<ruby>態度<rt>たいど</rt></ruby>とは<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>疑<rt>うたが</rt></ruby>い、<ruby>検証<rt>けんしょう</rt></ruby>し、<ruby>誤<rt>あやま</rt></ruby>りを<ruby>修正<rt>しゅうせい</rt></ruby>すること","<ruby>断定<rt>だんてい</rt></ruby>すること","<ruby>宣伝<rt>せんでん</rt></ruby>すること"], a:0}
   ]
 },
 { id:"r-n1-18", lvl:"N1", title:"少数意見の価値", mins:5,
   paras:[
     {jp:"民主主義は多数決を基本とするが、多数の意見が常に正しいとは限らない。", fu:"みんしゅしゅぎはたすうけつをきほんとするが、たすうのいけんがつねにただしいとはかぎらない。", es:"La democracia se basa en la mayoría, pero la opinión mayoritaria no siempre es la correcta."},
     {jp:"歴史を振り返れば、当初は少数派の主張にすぎなかった考えが、後に社会を大きく前進させた例は枚挙にいとまがない。", fu:"れきしをふりかえれば、とうしょはしょうすうはのしゅちょうにすぎなかったかんがえが、のちにしゃかいをおおきくぜんしんさせたれいはまいきょにいとまがない。", es:"Mirando la historia, abundan los casos en que ideas al principio minoritarias hicieron avanzar después a la sociedad."},
     {jp:"多数決の効率に安住し、異論を封じる空気が生まれるとき、社会は自らの誤りを正す機会を失う。", fu:"たすうけつのこうりつにあんじゅうし、いろんをふうじるくうきがうまれるとき、しゃかいはみずからのあやまりをただすきかいをうしなう。", es:"Cuando nos acomodamos en la eficiencia de la mayoría y surge un clima que silencia la discrepancia, la sociedad pierde la ocasión de corregir sus propios errores."},
     {jp:"少数意見に耳を傾ける寛容さは、単なる美徳ではなく、民主主義が機能するための条件そのものなのである。", fu:"しょうすういけんにみみをかたむけるかんようさは、たんなるびとくではなく、みんしゅしゅぎがきのうするためのじょうけんそのものなのである。", es:"La tolerancia de escuchar a la minoría no es una simple virtud: es condición misma para que la democracia funcione."}
   ],
   gloss:[
     {w:"多数決", r:"たすうけつ", m:"decisión por mayoría"},
     {w:"少数派", r:"しょうすうは", m:"minoría"},
     {w:"枚挙にいとまがない", r:"まいきょにいとまがない", m:"ser incontables (los ejemplos)"},
     {w:"安住", r:"あんじゅう", m:"acomodarse"},
     {w:"異論", r:"いろん", m:"objeción · discrepancia"},
     {w:"寛容", r:"かんよう", m:"tolerancia"}
   ],
   q:[
     {q:"<ruby>異論<rt>いろん</rt></ruby>を<ruby>封<rt>ふう</rt></ruby>じるとき、<ruby>社会<rt>しゃかい</rt></ruby>は<ruby>何<rt>なに</rt></ruby>を<ruby>失<rt>うしな</rt></ruby>うか。", o:["<ruby>誤<rt>あやま</rt></ruby>りを<ruby>正<rt>ただ</rt></ruby>す<ruby>機会<rt>きかい</rt></ruby>","<ruby>経済力<rt>けいざいりょく</rt></ruby>","<ruby>効率<rt>こうりつ</rt></ruby>"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>にとって<ruby>少数意見<rt>しょうすういけん</rt></ruby>への<ruby>寛容<rt>かんよう</rt></ruby>さとは。", o:["<ruby>民主主義<rt>みんしゅしゅぎ</rt></ruby>が<ruby>機能<rt>きのう</rt></ruby>する<ruby>条件<rt>じょうけん</rt></ruby>","<ruby>単<rt>たん</rt></ruby>なる<ruby>礼儀<rt>れいぎ</rt></ruby>","<ruby>時間<rt>じかん</rt></ruby>の<ruby>無駄<rt>むだ</rt></ruby>"], a:0}
   ]
 },
 { id:"r-n1-19", lvl:"N1", title:"災害の記憶を伝える", mins:5,
   paras:[
     {jp:"大きな災害の経験は、時とともに風化していく。", fu:"おおきなさいがいのけいけんは、ときとともにふうかしていく。", es:"La experiencia de los grandes desastres se va desvaneciendo con el tiempo."},
     {jp:"被災を直接知る世代が減るにつれ、教訓の継承は年々難しくなっている。", fu:"ひさいをちょくせつしるせだいがへるにつれ、きょうくんのけいしょうはねんねんむずかしくなっている。", es:"A medida que disminuyen las generaciones que vivieron la catástrofe, transmitir sus lecciones se vuelve cada año más difícil."},
     {jp:"石碑や資料館、語り部の活動は、忘却に抗うための営みである。過去の犠牲を無駄にしないためには、記憶を「自分ごと」として受け継ぐ仕組みが欠かせない。", fu:"せきひやしりょうかん、かたりべのかつどうは、ぼうきゃくにあらがうためのいとなみである。かこのぎせいをむだにしないためには、きおくを「じぶんごと」としてうけつぐしくみがかかせない。", es:"Las estelas, los museos y los narradores son esfuerzos por resistir al olvido. Para que los sacrificios del pasado no sean en vano, es imprescindible un mecanismo que haga heredar la memoria como algo propio."},
     {jp:"次の災害は必ず来る。備えの第一歩は、過去に学ぶ謙虚さにあると言っても過言ではない。", fu:"つぎのさいがいはかならずくる。そなえのだいいっぽは、かこにまなぶけんきょさにあるといってもかごんではない。", es:"El próximo desastre llegará sin falta. No es exagerado decir que el primer paso de la preparación es la humildad de aprender del pasado."}
   ],
   gloss:[
     {w:"風化", r:"ふうか", m:"desvanecerse (la memoria) · erosión"},
     {w:"教訓", r:"きょうくん", m:"lección · enseñanza"},
     {w:"継承", r:"けいしょう", m:"transmisión · sucesión"},
     {w:"語り部", r:"かたりべ", m:"narrador (de la memoria)"},
     {w:"忘却", r:"ぼうきゃく", m:"olvido"},
     {w:"過言", r:"かごん", m:"exageración (al hablar)"}
   ],
   q:[
     {q:"<ruby>教訓<rt>きょうくん</rt></ruby>の<ruby>継承<rt>けいしょう</rt></ruby>が<ruby>難<rt>むずか</rt></ruby>しくなる<ruby>理由<rt>りゆう</rt></ruby>は。", o:["<ruby>被災<rt>ひさい</rt></ruby>を<ruby>直接<rt>ちょくせつ</rt></ruby><ruby>知<rt>し</rt></ruby>る<ruby>世代<rt>せだい</rt></ruby>が<ruby>減<rt>へ</rt></ruby>るから","<ruby>資料<rt>しりょう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>すぎるから","<ruby>災害<rt>さいがい</rt></ruby>が<ruby>減<rt>へ</rt></ruby>ったから"], a:0},
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>によれば、<ruby>備<rt>そな</rt></ruby>えの<ruby>第一歩<rt>だいいっぽ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>過去<rt>かこ</rt></ruby>に<ruby>学<rt>まな</rt></ruby>ぶ<ruby>謙虚<rt>けんきょ</rt></ruby>さ","<ruby>最新<rt>さいしん</rt></ruby><ruby>技術<rt>ぎじゅつ</rt></ruby>の<ruby>導入<rt>どうにゅう</rt></ruby>","<ruby>忘<rt>わす</rt></ruby>れること"], a:0}
   ]
 },
 { id:"r-n1-20", lvl:"N1", title:"機械翻訳の時代に学ぶ意味", mins:5,
   paras:[
     {jp:"機械翻訳の精度が飛躍的に向上し、「外国語学習はもはや不要だ」という声すら聞かれるようになった。", fu:"きかいほんやくのせいどがひやくてきにこうじょうし、「がいこくごがくしゅうはもはやふようだ」というこえすらきかれるようになった。", es:"La precisión de la traducción automática ha mejorado a saltos, hasta el punto de oírse que 'aprender idiomas ya no hace falta'."},
     {jp:"確かに、旅行や簡単な商談程度なら、翻訳機で事足りる場面は多いだろう。", fu:"たしかに、りょこうやかんたんなしょうだんていどなら、ほんやくきでことたりるばめんはおおいだろう。", es:"Es verdad que para viajar o para negociaciones sencillas, en muchos casos basta con un traductor."},
     {jp:"しかし、言語を学ぶことの本質は、情報の伝達にとどまらない。他者の思考の枠組みを内側から体験し、自らの世界の見方を相対化することにこそある。", fu:"しかし、げんごをまなぶことのほんしつは、じょうほうのでんたつにとどまらない。たしゃのしこうのわくぐみをうちがわからたいけんし、みずからのせかいのみかたをそうたいかすることにこそある。", es:"Pero la esencia de aprender una lengua no se queda en transmitir información: está en experimentar desde dentro el marco de pensamiento de otros y relativizar la propia forma de ver el mundo."},
     {jp:"翻訳機が言葉の壁を越えさせてくれる時代だからこそ、壁の向こうを深く理解しようとする学びの価値は、むしろ増していると言えよう。", fu:"ほんやくきがことばのかべをこえさせてくれるじだいだからこそ、かべのむこうをふかくりかいしようとするまなびのかちは、むしろましているといえよう。", es:"Precisamente porque las máquinas nos hacen cruzar la barrera del idioma, el valor de aprender para comprender a fondo lo que hay al otro lado no hace sino aumentar."}
   ],
   gloss:[
     {w:"機械翻訳", r:"きかいほんやく", m:"traducción automática"},
     {w:"飛躍的", r:"ひやくてき", m:"a saltos · espectacular"},
     {w:"事足りる", r:"ことたりる", m:"bastar · ser suficiente"},
     {w:"枠組み", r:"わくぐみ", m:"marco · estructura"},
     {w:"相対化", r:"そうたいか", m:"relativización"},
     {w:"増して", r:"まして", m:"aumentar (増す)"}
   ],
   q:[
     {q:"<ruby>筆者<rt>ひっしゃ</rt></ruby>によれば、<ruby>言語<rt>げんご</rt></ruby><ruby>学習<rt>がくしゅう</rt></ruby>の<ruby>本質<rt>ほんしつ</rt></ruby>は<ruby>何<rt>なに</rt></ruby>か。", o:["<ruby>他者<rt>たしゃ</rt></ruby>の<ruby>思考<rt>しこう</rt></ruby>を<ruby>内側<rt>うちがわ</rt></ruby>から<ruby>体験<rt>たいけん</rt></ruby>すること","<ruby>情報<rt>じょうほう</rt></ruby>を<ruby>速<rt>はや</rt></ruby>く<ruby>伝<rt>つた</rt></ruby>えること","<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>すること"], a:0},
     {q:"<ruby>翻訳機<rt>ほんやくき</rt></ruby>の<ruby>時代<rt>じだい</rt></ruby>に、<ruby>学<rt>まな</rt></ruby>びの<ruby>価値<rt>かち</rt></ruby>はどうなると<ruby>筆者<rt>ひっしゃ</rt></ruby>は<ruby>言<rt>い</rt></ruby>うか。", o:["むしろ<ruby>増<rt>ま</rt></ruby>している","なくなっている","<ruby>変<rt>か</rt></ruby>わらない"], a:0}
   ]
 }

];
