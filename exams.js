/* exams.js — Mini exámenes por área (Japanese N1 Path)
   window.EXAMS = [ { id, lvl, area, title, desc, questions:[...] } ]
   Pregunta: { q, o:[...], a, exp }  (+ passage para 読解, + audio para 聴解)
     - exp: explicación que se muestra al corregir (gramática, vocabulario o frase clave). */
window.EXAMS = [

 { id:"e-n5-moji", lvl:"N5", area:"文字・語彙", title:"文字・語彙", desc:"Kanji y vocabulario",
   questions:[
     { q:"つぎの ことばの よみかたは どれですか。　<u>先生</u>", o:["せんせい","せいせい","せんせえ","せんせ"], a:0, exp:"<b>先生 → せんせい</b> ('profesor'). Vocal larga せん-せい; no confundir con せんせ." },
     { q:"つぎの ことばの よみかたは どれですか。　<u>毎朝</u> コーヒーを のみます。", o:["まいあさ","まいばん","まいにち","まいしゅう"], a:0, exp:"<b>毎朝 → まいあさ</b> ('cada mañana'). 毎=cada, 朝=mañana. まいばん = 毎晩 (cada noche)." },
     { q:"「やま」を 漢字で かくと どれですか。", o:["山","川","田","石"], a:0, exp:"<b>山 (やま)</b> = 'montaña'. 川=río, 田=arrozal, 石=piedra." },
     { q:"「みみ」を 漢字で かくと どれですか。", o:["耳","目","口","手"], a:0, exp:"<b>耳 (みみ)</b> = 'oreja'. 目=ojo, 口=boca, 手=mano." },
     { q:"（　）に 入る ことばは どれですか。　「へやが くらいので、でんきを （　）。」", o:["つけます","けします","あけます","しめます"], a:0, exp:"Si está oscuro, se <b>enciende</b> la luz: 電気をつける. けす=apagar, あける=abrir, しめる=cerrar." },
     { q:"「ときどき えいがを 見ます。」に いちばん 近い いみは どれですか。", o:["たまに","いつも","まいにち","ぜんぜん"], a:0, exp:"<b>ときどき ≈ たまに</b> ('a veces'). いつも=siempre, まいにち=cada día, ぜんぜん=(para nada)." }
   ]
 },

 { id:"e-n5-bunpou", lvl:"N5", area:"文法", title:"文法", desc:"Gramática",
   questions:[
     { q:"わたしは 学校（　）行きます。", o:["へ","を","が","の"], a:0, exp:"<b>へ</b> (se lee 'e') marca la dirección del movimiento: 学校へ行く. を=objeto, が=sujeto." },
     { q:"これは だれ（　）本ですか。", o:["の","が","を","に"], a:0, exp:"<b>の</b> une dos sustantivos e indica posesión: だれの本 ('el libro de quién')." },
     { q:"きのう 友だち（　）会いました。", o:["に","を","へ","で"], a:0, exp:"会う pide <b>に</b>: 友だちに会う. No se dice 友だちを会う." },
     { q:"へやで 音楽（　）聞きます。", o:["を","が","に","へ"], a:0, exp:"聞く es transitivo; su objeto lleva <b>を</b>: 音楽を聞く." },
     { q:"朝 六時（　）起きます。", o:["に","で","を","へ"], a:0, exp:"<b>に</b> marca la hora puntual del reloj: 六時に ('a las seis')." },
     { q:"ただしい 文を えらんで ください。", o:["わたしは 日本語を 勉強します。","わたしは 日本語が 勉強します。","わたしは 日本語に 勉強します。","わたしを 日本語は 勉強します。"], a:0, exp:"勉強する lleva <b>を</b> para el objeto: 日本語を勉強する. Las demás usan mal las partículas." }
   ]
 },

 { id:"e-n5-dokkai", lvl:"N5", area:"読解", title:"読解", desc:"Comprensión lectora",
   questions:[
     { passage:"わたしは 朝 六時に おきます。それから、朝ごはんを 食べて、七時半に いえを 出ます。", q:"この 人は 何時に いえを 出ますか。", o:["六時","七時","七時半","八時"], a:2, exp:"El texto dice <b>七時半に いえを 出ます</b> → sale a las 7:30. Las 6 es cuando se levanta." },
     { passage:"あした 友だちと えいがを 見に 行きます。でも、雨が ふったら、いえで 本を 読みます。", q:"雨が ふったら、何を しますか。", o:["えいがを 見る","本を 読む","かいものを する","ねる"], a:1, exp:"<b>雨がふったら、いえで本を読みます</b> → si llueve, lee en casa." },
     { passage:"きょうは 日よう日です。わたしは こうえんで さんぽを しました。とても きもちが よかったです。", q:"この 人は きょう 何を しましたか。", o:["さんぽ","かいもの","勉強","しごと"], a:0, exp:"<b>こうえんで さんぽを しました</b> → hizo un paseo en el parque." },
     { passage:"わたしの へやには つくえと ベッドが あります。まどから 山が 見えます。", q:"へやの まどから 何が 見えますか。", o:["山","海","川","こうえん"], a:0, exp:"<b>まどから 山が 見えます</b> → desde la ventana se ve la montaña." }
   ]
 },

 { id:"e-n5-choukai", lvl:"N5", area:"聴解", title:"聴解", desc:"Comprensión auditiva",
   questions:[
     { audio:"すみません、トイレは どこですか。　あそこの エレベーターの 右です。", q:"トイレは どこですか。", o:["エレベーターの 右","エレベーターの 左","トイレの 前","二かい"], a:0, exp:"Dice <b>あそこの エレベーターの 右です</b> → a la derecha del ascensor." },
     { audio:"あした 何時に 会いましょうか。　じゃあ、十時に えきで 会いましょう。", q:"あした 何時に 会いますか。", o:["九時","十時","十一時","十二時"], a:1, exp:"<b>十時に えきで 会いましょう</b> → quedan a las diez." },
     { audio:"りんごを 三つと バナナを 二つ ください。", q:"バナナを いくつ 買いましたか。", o:["一つ","二つ","三つ","四つ"], a:1, exp:"<b>バナナを 二つ ください</b> → dos plátanos (las manzanas son tres)." },
     { audio:"わたしは 犬が すきです。でも、ねこは すきじゃ ありません。", q:"この 人は 何が すきですか。", o:["犬","ねこ","とり","さかな"], a:0, exp:"<b>犬が すきです。でも、ねこは すきじゃ ありません</b> → le gustan los perros, no los gatos." }
   ]
 },

 { id:"e-n4-moji", lvl:"N4", area:"文字・語彙", title:"文字・語彙", desc:"Kanji y vocabulario",
   questions:[
     { q:"つぎの ことばの よみかたは？　<u>電車</u>で 会社に 行きます。", o:["でんしゃ","でんしや","てんしゃ","でんちゃ"], a:0, exp:"<b>電車 → でんしゃ</b> ('tren'). しゃ es ゃ pequeña, no しや." },
     { q:"つぎの ことばの よみかたは？　妹は <u>親切</u>です。", o:["しんせつ","しんせち","おやせつ","しんぜつ"], a:0, exp:"<b>親切 → しんせつ</b> ('amable'), adjetivo-な. 親=しん, 切=せつ." },
     { q:"「あんぜん」を 漢字で かくと どれですか。", o:["安全","安金","案全","安泉"], a:0, exp:"<b>安全 (あんぜん)</b> = 'seguridad/seguro'. 安=あん, 全=ぜん." },
     { q:"（　）に 入る ことばは？　「約束の 時間に （　）ように、早く 家を 出た。」", o:["おくれない","つかれない","わからない","たりない"], a:0, exp:"<b>遅れない (おくれない)</b> = 'no llegar tarde'. 約束の時間に遅れないように = para no llegar tarde a la cita." },
     { q:"「この へやは せまいです。」に いちばん 近い いみは？", o:["広くないです","きたないです","あかるいです","しずかです"], a:0, exp:"<b>せまい ('estrecho') = 広くない</b> ('no espacioso'). Es lo contrario de 広い." },
     { q:"（　）に 入る ことばは？　「弟は サッカーが とても （　）です。」", o:["じょうず","べんり","ゆうめい","たいへん"], a:0, exp:"<b>上手 (じょうず)</b> = 'hábil'; se usa con が: サッカーが上手. べんり=cómodo, ゆうめい=famoso." }
   ]
 },

 { id:"e-n4-bunpou", lvl:"N4", area:"文法", title:"文法", desc:"Gramática",
   questions:[
     { q:"日本語が 話せる（　）に なりました。", o:["よう","こと","もの","ところ"], a:0, exp:"<b>V-potencial + ようになる</b> = llegar a poder: 話せるようになった ('llegué a poder hablar')." },
     { q:"雨が ふって いる（　）、しあいは 中止です。", o:["ので","のに","でも","まで"], a:0, exp:"<b>ので</b> = 'porque' (causa objetiva). のに sería 'aunque' (contradicción)." },
     { q:"母に へやを そうじ（　）。", o:["させられました","されました","させます","していました"], a:0, exp:"<b>Causativo-pasivo 〜させられる</b> = 'ser obligado a'. 母に そうじさせられた ('mi madre me hizo limpiar')." },
     { q:"この りょうりは かんたんな（　）、おいしいです。", o:["のに","ために","ように","ところ"], a:0, exp:"<b>のに</b> = 'aunque'. Tras adj-な: かんたんなのに ('aunque es simple, está rico')." },
     { q:"つかれた（　）、少し 休みましょう。", o:["から","のに","ても","まで"], a:0, exp:"<b>から</b> = 'porque'. 'Como estamos cansados, descansemos' (la 2ª parte propone algo)." },
     { q:"ただしい 文を えらんで ください。", o:["山田さんは 先生に ほめられました。","山田さんは 先生を ほめられました。","山田さんは 先生に ほめました。","山田さんが 先生は ほめられました。"], a:0, exp:"<b>Pasiva</b>: 先生に ほめられる ('ser elogiado por el profesor'). El agente va con に." }
   ]
 },

 { id:"e-n4-dokkai", lvl:"N4", area:"読解", title:"読解", desc:"Comprensión lectora",
   questions:[
     { passage:"わたしは 先週、友だちと 京都へ 旅行に 行きました。お寺を 見たり、おいしい ものを 食べたり しました。とても 楽しかったので、また 行きたいです。", q:"この 人は 京都で 何を しましたか。", o:["お寺を 見た","山に のぼった","海で およいだ","買い物だけ した"], a:0, exp:"<b>お寺を 見たり、…食べたり</b> → entre otras cosas, visitó templos." },
     { passage:"あした 会議が あるので、今日は 早く 帰って 資料を 作らなければ なりません。だから、今夜は 友だちの さそいを ことわりました。", q:"この 人は なぜ さそいを ことわりましたか。", o:["資料を 作るから","びょうきだから","お金が ないから","つかれたから"], a:0, exp:"<b>資料を 作らなければ ならない</b> → rechaza la invitación porque debe preparar el material." },
     { passage:"デパートで かばんを 買いました。でも、家に 帰ってから、色が 気に入らない ことに 気づきました。あした、店に 行って 交換して もらう つもりです。", q:"この 人は あした 何を しますか。", o:["かばんを 交換する","かばんを すてる","新しい かばんを 買う","店で はたらく"], a:0, exp:"<b>交換して もらう つもり</b> → piensa que se lo cambien (交換 = canje)." },
     { passage:"わたしの 町には 大きな 図書館が あります。本を 借りる だけでなく、しずかに 勉強も できるので、週末は いつも 混んで います。", q:"図書館は なぜ 週末に 混みますか。", o:["勉強も できるから","カフェが あるから","むりょうだから","新しいから"], a:0, exp:"<b>勉強も できるので…混んで います</b> → se llena porque también se puede estudiar allí." }
   ]
 },

 { id:"e-n4-choukai", lvl:"N4", area:"聴解", title:"聴解", desc:"Comprensión auditiva",
   questions:[
     { audio:"すみません、この 近くに 銀行は ありますか。　ええ、あの 信号を 右に まがると、左に あります。", q:"銀行は どこに ありますか。", o:["信号を 右に まがって 左","信号を 左に まがって 右","まっすぐ 行った ところ","駅の 前"], a:0, exp:"<b>信号を 右に まがると、左に あります</b> → giras a la derecha en el semáforo y está a la izquierda." },
     { audio:"週末、いっしょに 映画を 見に 行きませんか。　いいですね。でも、土曜日は 用事が あるので、日曜日は どうですか。", q:"二人は いつ 映画を 見に 行きますか。", o:["土曜日","日曜日","金曜日","行かない"], a:1, exp:"<b>土曜日は 用事が あるので、日曜日は どうですか</b> → el sábado tiene planes; quedan el domingo." },
     { audio:"ご注文を お願いします。　はい。コーヒーを 二つと、ケーキを 一つ ですね。　あ、コーヒーは 一つに して ください。", q:"コーヒーを いくつ 注文しましたか。", o:["一つ","二つ","三つ","四つ"], a:0, exp:"Rectifica al final: <b>コーヒーは 一つに して ください</b> → un solo café." },
     { audio:"あしたの 天気は くもりで、午後から 雨が 降るでしょう。かさを 持って 出かけて ください。", q:"あした、午後は どんな 天気ですか。", o:["雨","晴れ","くもり","雪"], a:0, exp:"<b>午後から 雨が 降るでしょう</b> → por la tarde lloverá." }
   ]
 }

];
