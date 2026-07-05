/* listening.js — Comprensión oral (Japanese N1 Path)
   Mismo esquema que reading.js. El audio se genera con el Worker TTS a partir de paras[].jp.
   { id, lvl, title, mins, paras:[{jp, fu, es}], gloss:[{w, r, m}], q:[{q, o:[...], a}] }
   - gloss[].w debe aparecer literal en algún paras[].jp (para el subrayado al ver la transcripción).
   - En "modo escucha" la transcripción y el vocabulario están ocultos hasta que se pulsa "Ver transcripción". */
window.LISTENING = [

 { id:"l-n5-1", lvl:"N5", title:"自己紹介", mins:1,
   paras:[
     {jp:"はじめまして。わたしは たなかです。", fu:"はじめまして。わたしは たなかです。", es:"Encantado. Yo soy Tanaka."},
     {jp:"だいがくで にほんごを べんきょうして います。", fu:"だいがくで にほんごを べんきょうして います。", es:"Estudio japonés en la universidad."},
     {jp:"しゅみは えいがを みる ことです。どうぞ よろしく おねがいします。", fu:"しゅみは えいがを みる ことです。どうぞ よろしく おねがいします。", es:"Mi afición es ver películas. Encantado de conoceros."}
   ],
   gloss:[
     {w:"だいがく", r:"だいがく", m:"universidad"},
     {w:"にほんご", r:"にほんご", m:"japonés (idioma)"},
     {w:"べんきょうして", r:"べんきょうして", m:"estudiar (勉強する)"},
     {w:"しゅみ", r:"しゅみ", m:"afición"},
     {w:"えいが", r:"えいが", m:"película"}
   ],
   q:[
     {q:"この<ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>勉強<rt>べんきょう</rt></ruby>して いますか。", o:["<ruby>日本語<rt>にほんご</rt></ruby>","<ruby>英語<rt>えいご</rt></ruby>","<ruby>中国語<rt>ちゅうごくご</rt></ruby>"], a:0},
     {q:"この<ruby>人<rt>ひと</rt></ruby>の しゅみは <ruby>何<rt>なに</rt></ruby>ですか。", o:["えいがを <ruby>見<rt>み</rt></ruby>る こと","<ruby>本<rt>ほん</rt></ruby>を <ruby>読<rt>よ</rt></ruby>む こと","<ruby>料理<rt>りょうり</rt></ruby>"], a:0}
   ]
 },

 { id:"l-n4-1", lvl:"N4", title:"駅のアナウンス", mins:1,
   paras:[
     {jp:"まもなく、3番線に 電車が まいります。", fu:"まもなく、さんばんせんに でんしゃが まいります。", es:"En breve llegará el tren a la vía 3."},
     {jp:"危ないですから、白い 線の 内側で お待ちください。", fu:"あぶないですから、しろい せんの うちがわで おまちください。", es:"Como es peligroso, esperen por dentro de la línea blanca."},
     {jp:"この 電車は 各駅停車、東京行きです。", fu:"この でんしゃは かくえきていしゃ、とうきょういきです。", es:"Este tren para en todas las estaciones y va a Tokio."},
     {jp:"次は 新宿に とまります。", fu:"つぎは しんじゅくに とまります。", es:"La próxima parada es Shinjuku."}
   ],
   gloss:[
     {w:"まもなく", r:"まもなく", m:"en breve · dentro de poco"},
     {w:"内側", r:"うちがわ", m:"lado interior"},
     {w:"各駅停車", r:"かくえきていしゃ", m:"tren que para en todas las estaciones"},
     {w:"東京行き", r:"とうきょういき", m:"con destino a Tokio"},
     {w:"次", r:"つぎ", m:"siguiente"}
   ],
   q:[
     {q:"この <ruby>電車<rt>でんしゃ</rt></ruby>は どこ<ruby>行<rt>い</rt></ruby>きですか。", o:["<ruby>東京<rt>とうきょう</rt></ruby>","<ruby>新宿<rt>しんじゅく</rt></ruby>","<ruby>大阪<rt>おおさか</rt></ruby>"], a:0},
     {q:"<ruby>次<rt>つぎ</rt></ruby>に とまる <ruby>駅<rt>えき</rt></ruby>は どこですか。", o:["<ruby>新宿<rt>しんじゅく</rt></ruby>","<ruby>東京<rt>とうきょう</rt></ruby>","<ruby>渋谷<rt>しぶや</rt></ruby>"], a:0}
   ]
 },

 { id:"l-n3-1", lvl:"N3", title:"留守番電話のメッセージ", mins:1,
   paras:[
     {jp:"もしもし、山田です。明日の 会議の 件で 連絡しました。", fu:"もしもし、やまだです。あしたの かいぎの けんで れんらくしました。", es:"Hola, soy Yamada. Te llamo por lo de la reunión de mañana."},
     {jp:"時間が 3時から 4時に 変わりました。", fu:"じかんが さんじから よじに かわりました。", es:"La hora ha cambiado de las 3 a las 4."},
     {jp:"場所は 変わらず、会議室Aです。", fu:"ばしょは かわらず、かいぎしつエーです。", es:"El lugar no cambia: sala de reuniones A."},
     {jp:"すみませんが、資料を 10部 持って きて ください。", fu:"すみませんが、しりょうを じゅうぶ もって きて ください。", es:"Perdona, pero trae 10 copias del material."}
   ],
   gloss:[
     {w:"会議", r:"かいぎ", m:"reunión"},
     {w:"連絡しました", r:"れんらくしました", m:"avisar · contactar (連絡する)"},
     {w:"変わりました", r:"かわりました", m:"cambió (変わる)"},
     {w:"場所", r:"ばしょ", m:"lugar"},
     {w:"資料", r:"しりょう", m:"documentación · material"}
   ],
   q:[
     {q:"<ruby>会議<rt>かいぎ</rt></ruby>は <ruby>何時<rt>なんじ</rt></ruby>に なりましたか。", o:["4<ruby>時<rt>じ</rt></ruby>","3<ruby>時<rt>じ</rt></ruby>","5<ruby>時<rt>じ</rt></ruby>"], a:0},
     {q:"<ruby>何<rt>なに</rt></ruby>を <ruby>持<rt>も</rt></ruby>って くる ように <ruby>言<rt>い</rt></ruby>って いますか。", o:["<ruby>資料<rt>しりょう</rt></ruby>を 10<ruby>部<rt>ぶ</rt></ruby>","パソコン","お<ruby>金<rt>かね</rt></ruby>"], a:0}
   ]
 },

 { id:"l-n2-1", lvl:"N2", title:"天気予報", mins:1,
   paras:[
     {jp:"続いて、天気予報です。", fu:"つづいて、てんきよほうです。", es:"A continuación, el pronóstico del tiempo."},
     {jp:"今日は 全国的に 晴れるでしょう。", fu:"きょうは ぜんこくてきに はれるでしょう。", es:"Hoy estará despejado en todo el país."},
     {jp:"ただ、夕方から 西の 地方では 雨が 降る 恐れが あります。", fu:"ただ、ゆうがたから にしの ちほうでは あめが ふる おそれが あります。", es:"Pero, desde la tarde, en las regiones del oeste hay riesgo de lluvia."},
     {jp:"明日は 気温が 下がり、冬らしい 寒さと なる 見込みです。", fu:"あしたは きおんが さがり、ふゆらしい さむさと なる みこみです。", es:"Mañana bajará la temperatura y se prevé un frío propio del invierno."}
   ],
   gloss:[
     {w:"全国的", r:"ぜんこくてき", m:"a nivel nacional"},
     {w:"地方", r:"ちほう", m:"región · zona"},
     {w:"恐れ", r:"おそれ", m:"riesgo · temor"},
     {w:"気温", r:"きおん", m:"temperatura"},
     {w:"見込み", r:"みこみ", m:"previsión · expectativa"}
   ],
   q:[
     {q:"<ruby>夕方<rt>ゆうがた</rt></ruby>から <ruby>西<rt>にし</rt></ruby>の <ruby>地方<rt>ちほう</rt></ruby>は どう なりますか。", o:["<ruby>雨<rt>あめ</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>る","<ruby>晴<rt>は</rt></ruby>れる","<ruby>雪<rt>ゆき</rt></ruby>が <ruby>降<rt>ふ</rt></ruby>る"], a:0},
     {q:"<ruby>明日<rt>あした</rt></ruby>は どう なる <ruby>見込<rt>みこ</rt></ruby>みですか。", o:["<ruby>気温<rt>きおん</rt></ruby>が <ruby>下<rt>さ</rt></ruby>がる","<ruby>暑<rt>あつ</rt></ruby>く なる","<ruby>変<rt>か</rt></ruby>わらない"], a:0}
   ]
 },

 { id:"l-n1-1", lvl:"N1", title:"館内アナウンス", mins:1,
   paras:[
     {jp:"本日は ご来館 いただき、誠に ありがとうございます。", fu:"ほんじつは ごらいかん いただき、まことに ありがとうございます。", es:"Muchísimas gracias por visitarnos hoy."},
     {jp:"当館では ただいま、特別展を 開催して おります。", fu:"とうかんでは ただいま、とくべつてんを かいさいして おります。", es:"En este museo celebramos en este momento una exposición especial."},
     {jp:"館内での 写真撮影は、一部の 作品を 除き、可能で ございます。", fu:"かんないでの しゃしんさつえいは、いちぶの さくひんを のぞき、かのうで ございます。", es:"Se pueden hacer fotos dentro, salvo en algunas obras."},
     {jp:"フラッシュの 使用は、ご遠慮くださいますよう、お願い申し上げます。", fu:"フラッシュの しようは、ごえんりょ くださいますよう、おねがい もうしあげます。", es:"Les rogamos que se abstengan de usar el flash."}
   ],
   gloss:[
     {w:"来館", r:"らいかん", m:"visita (a un museo o edificio)"},
     {w:"開催", r:"かいさい", m:"celebración (de un evento)"},
     {w:"撮影", r:"さつえい", m:"tomar fotos o vídeo"},
     {w:"除き", r:"のぞき", m:"salvo · exceptuando (除く)"},
     {w:"遠慮", r:"えんりょ", m:"abstenerse · contenerse"}
   ],
   q:[
     {q:"<ruby>写真撮影<rt>しゃしんさつえい</rt></ruby>に ついて <ruby>正<rt>ただ</rt></ruby>しいのは どれですか。", o:["<ruby>一部<rt>いちぶ</rt></ruby>を <ruby>除<rt>のぞ</rt></ruby>き <ruby>可能<rt>かのう</rt></ruby>","<ruby>全<rt>すべ</rt></ruby>て <ruby>禁止<rt>きんし</rt></ruby>","どこでも <ruby>自由<rt>じゆう</rt></ruby>"], a:0},
     {q:"フラッシュに ついて どう <ruby>言<rt>い</rt></ruby>って いますか。", o:["<ruby>遠慮<rt>えんりょ</rt></ruby>して ほしい","<ruby>自由<rt>じゆう</rt></ruby>に <ruby>使<rt>つか</rt></ruby>える","<ruby>受付<rt>うけつけ</rt></ruby>で <ruby>借<rt>か</rt></ruby>りる"], a:0}
   ]
 }

];
