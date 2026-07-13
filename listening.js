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
 },

 { id:"l-n5-2", lvl:"N5", title:"わたしの かぞく", mins:1,
   paras:[
     { jp:"わたしの かぞくは 四人です。", fu:"わたしの かぞくは よにんです。", es:"Mi familia somos cuatro." },
     { jp:"ちちは かいしゃいんで、ははは いしゃです。", fu:"ちちは かいしゃいんで、ははは いしゃです。", es:"Mi padre es empleado de empresa y mi madre es médica." },
     { jp:"いもうとは じゅうごさいで、こうこうせいです。", fu:"いもうとは じゅうごさいで、こうこうせいです。", es:"Mi hermana pequeña tiene 15 años y es estudiante de instituto." },
     { jp:"にちようびは みんなで こうえんへ いきます。", fu:"にちようびは みんなで こうえんへ いきます。", es:"Los domingos vamos todos al parque." }
   ],
   gloss:[
     { w:"かぞく", r:"かぞく", m:"familia" },
     { w:"かいしゃいん", r:"かいしゃいん", m:"empleado de empresa" },
     { w:"いしゃ", r:"いしゃ", m:"médico" },
     { w:"いもうと", r:"いもうと", m:"hermana menor" },
     { w:"こうこうせい", r:"こうこうせい", m:"estudiante de instituto" }
   ],
   q:[
     { q:"かぞくは <ruby>何人<rt>なんにん</rt></ruby>ですか。", o:["<ruby>三人<rt>さんにん</rt></ruby>","<ruby>四人<rt>よにん</rt></ruby>","<ruby>五人<rt>ごにん</rt></ruby>"], a:1 },
     { q:"おかあさんの しごとは <ruby>何<rt>なん</rt></ruby>ですか。", o:["いしゃ","かいしゃいん","せんせい"], a:0 }
   ]
 },

 { id:"l-n5-3", lvl:"N5", title:"スーパーの アナウンス", mins:1,
   paras:[
     { jp:"いらっしゃいませ。ただいま、くだものが やすく なって います。", fu:"いらっしゃいませ。ただいま、くだものが やすく なって います。", es:"Bienvenidos. Ahora mismo la fruta está rebajada." },
     { jp:"りんごは 三つで 二百円です。", fu:"りんごは みっつで にひゃくえんです。", es:"Las manzanas, tres por 200 yenes." },
     { jp:"バナナは 一ふさ 百円です。", fu:"ばななは ひとふさ ひゃくえんです。", es:"Los plátanos, 100 yenes el racimo." },
     { jp:"みなさま、どうぞ 二かいへ おこしください。", fu:"みなさま、どうぞ にかいへ おこしください。", es:"Vengan todos a la segunda planta, por favor." }
   ],
   gloss:[
     { w:"ただいま", r:"ただいま", m:"ahora mismo" },
     { w:"くだもの", r:"くだもの", m:"fruta" },
     { w:"やすく", r:"やすく", m:"barato (安い)" },
     { w:"一ふさ", r:"ひとふさ", m:"un racimo" },
     { w:"二かい", r:"にかい", m:"segunda planta" }
   ],
   q:[
     { q:"りんごは いくらですか。", o:["<ruby>三<rt>みっ</rt></ruby>つで 200<ruby>円<rt>えん</rt></ruby>","<ruby>一<rt>ひと</rt></ruby>つで 200<ruby>円<rt>えん</rt></ruby>","<ruby>三<rt>みっ</rt></ruby>つで 100<ruby>円<rt>えん</rt></ruby>"], a:0 },
     { q:"くだものは <ruby>何<rt>なん</rt></ruby>かいに ありますか。", o:["<ruby>一<rt>いっ</rt></ruby>かい","<ruby>二<rt>に</rt></ruby>かい","<ruby>三<rt>さん</rt></ruby>かい"], a:1 }
   ]
 },

 { id:"l-n5-4", lvl:"N5", title:"わたしの いちにち", mins:1,
   paras:[
     { jp:"わたしは まいあさ 七じに おきます。", fu:"わたしは まいあさ しちじに おきます。", es:"Me levanto cada mañana a las siete." },
     { jp:"あさごはんを たべてから、じてんしゃで がっこうへ いきます。", fu:"あさごはんを たべてから、じてんしゃで がっこうへ いきます。", es:"Después de desayunar, voy a la escuela en bici." },
     { jp:"ごご 四じに うちへ かえって、しゅくだいを します。", fu:"ごご よじに うちへ かえって、しゅくだいを します。", es:"Vuelvo a casa a las cuatro de la tarde y hago los deberes." },
     { jp:"よる 十じに ねます。", fu:"よる じゅうじに ねます。", es:"Me acuesto a las diez de la noche." }
   ],
   gloss:[
     { w:"まいあさ", r:"まいあさ", m:"cada mañana" },
     { w:"あさごはん", r:"あさごはん", m:"desayuno" },
     { w:"じてんしゃ", r:"じてんしゃ", m:"bicicleta" },
     { w:"しゅくだい", r:"しゅくだい", m:"deberes" },
     { w:"ねます", r:"ねます", m:"dormir · acostarse (寝る)" }
   ],
   q:[
     { q:"<ruby>何<rt>なん</rt></ruby>で がっこうへ いきますか。", o:["じてんしゃ","バス","でんしゃ"], a:0 },
     { q:"<ruby>何時<rt>なんじ</rt></ruby>に ねますか。", o:["<ruby>九<rt>く</rt></ruby>じ","<ruby>十<rt>じゅう</rt></ruby>じ","<ruby>十一<rt>じゅういち</rt></ruby>じ"], a:1 }
   ]
 },

 { id:"l-n4-2", lvl:"N4", title:"図書館の 利用案内", mins:1,
   paras:[
     { jp:"こちらは 市立図書館です。開館時間は 朝 九時から 夜 八時までです。", fu:"こちらは しりつとしょかんです。かいかんじかんは あさ くじから よる はちじまでです。", es:"Esta es la biblioteca municipal. El horario es de nueve de la mañana a ocho de la noche." },
     { jp:"本は 一人 十さつまで、二週間 借りる ことが できます。", fu:"ほんは ひとり じっさつまで、にしゅうかん かりる ことが できます。", es:"Se pueden tomar prestados hasta diez libros por persona, durante dos semanas." },
     { jp:"月曜日は お休みですので、ご注意ください。", fu:"げつようびは おやすみですので、ごちゅういください。", es:"Los lunes cerramos; tengan cuidado." },
     { jp:"館内では、けいたい電話での 通話は ごえんりょください。", fu:"かんないでは、けいたいでんわでの つうわは ごえんりょください。", es:"Dentro del recinto, absténganse de hablar por el móvil." }
   ],
   gloss:[
     { w:"開館時間", r:"かいかんじかん", m:"horario de apertura" },
     { w:"借りる", r:"かりる", m:"tomar prestado" },
     { w:"ご注意", r:"ごちゅうい", m:"atención · cuidado" },
     { w:"館内", r:"かんない", m:"interior del edificio" },
     { w:"通話", r:"つうわ", m:"llamada (telefónica)" }
   ],
   q:[
     { q:"<ruby>本<rt>ほん</rt></ruby>は <ruby>何<rt>なん</rt></ruby>さつまで <ruby>借<rt>か</rt></ruby>りられますか。", o:["<ruby>五<rt>ご</rt></ruby>さつ","<ruby>十<rt>じっ</rt></ruby>さつ","<ruby>二十<rt>にじっ</rt></ruby>さつ"], a:1 },
     { q:"<ruby>休<rt>やす</rt></ruby>みは <ruby>何曜日<rt>なんようび</rt></ruby>ですか。", o:["<ruby>月曜日<rt>げつようび</rt></ruby>","<ruby>日曜日<rt>にちようび</rt></ruby>","<ruby>金曜日<rt>きんようび</rt></ruby>"], a:0 }
   ]
 },

 { id:"l-n4-3", lvl:"N4", title:"友だちへの 伝言", mins:1,
   paras:[
     { jp:"もしもし、けんたです。あしたの サッカーの 練習の ことだけど。", fu:"もしもし、けんたです。あしたの さっかーの れんしゅうの ことだけど。", es:"Hola, soy Kenta. Es sobre el entrenamiento de fútbol de mañana." },
     { jp:"場所が 学校の グラウンドから 川の そばの 公園に 変わったよ。", fu:"ばしょが がっこうの ぐらうんどから かわの そばの こうえんに かわったよ。", es:"El lugar ha cambiado: del campo de la escuela al parque junto al río." },
     { jp:"時間は 同じ、朝 十時からだよ。", fu:"じかんは おなじ、あさ じゅうじからだよ。", es:"La hora es la misma, desde las diez de la mañana." },
     { jp:"ボールは ぼくが 持って いくから、きみは 水だけ 持って きてね。", fu:"ぼーるは ぼくが もって いくから、きみは みずだけ もって きてね。", es:"El balón lo llevo yo, así que tú trae solo agua." }
   ],
   gloss:[
     { w:"場所", r:"ばしょ", m:"lugar · sitio" },
     { w:"練習", r:"れんしゅう", m:"entrenamiento · práctica" },
     { w:"グラウンド", r:"グラウンド", m:"campo (deportivo)" },
     { w:"そば", r:"そば", m:"junto a · al lado" },
     { w:"同じ", r:"おなじ", m:"igual · el mismo" }
   ],
   q:[
     { q:"<ruby>練習<rt>れんしゅう</rt></ruby>の <ruby>場所<rt>ばしょ</rt></ruby>は どこに <ruby>変<rt>か</rt></ruby>わりましたか。", o:["<ruby>川<rt>かわ</rt></ruby>の そばの <ruby>公園<rt>こうえん</rt></ruby>","<ruby>学校<rt>がっこう</rt></ruby>の グラウンド","<ruby>体育館<rt>たいいくかん</rt></ruby>"], a:0 },
     { q:"<ruby>聞<rt>き</rt></ruby>いた<ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>持<rt>も</rt></ruby>って いきますか。", o:["<ruby>水<rt>みず</rt></ruby>","ボール","おべんとう"], a:0 }
   ]
 },

 { id:"l-n4-4", lvl:"N4", title:"バスの 車内アナウンス", mins:1,
   paras:[
     { jp:"本日は ご乗車 ありがとうございます。この バスは 中央病院行きです。", fu:"ほんじつは ごじょうしゃ ありがとうございます。この ばすは ちゅうおうびょういんいきです。", es:"Gracias por viajar con nosotros. Este autobús se dirige al Hospital Central." },
     { jp:"次は 市役所前、市役所前です。", fu:"つぎは しやくしょまえ、しやくしょまえです。", es:"Próxima parada: Ayuntamiento." },
     { jp:"お降りの 方は、ボタンを 押して お知らせください。", fu:"おおりの かたは、ぼたんを おして おしらせください。", es:"Quien vaya a bajar, avise pulsando el botón." },
     { jp:"バスが 止まってから、席を お立ちください。", fu:"ばすが とまってから、せきを おたちください。", es:"Levántense del asiento solo cuando el autobús se haya detenido." }
   ],
   gloss:[
     { w:"乗車", r:"じょうしゃ", m:"subir (a un vehículo)" },
     { w:"市役所", r:"しやくしょ", m:"ayuntamiento" },
     { w:"お降り", r:"おおり", m:"bajada (del vehículo)" },
     { w:"押して", r:"おして", m:"pulsar (押す)" },
     { w:"席", r:"せき", m:"asiento" }
   ],
   q:[
     { q:"この バスは どこ<ruby>行<rt>い</rt></ruby>きですか。", o:["<ruby>中央病院<rt>ちゅうおうびょういん</rt></ruby>","<ruby>市役所<rt>しやくしょ</rt></ruby>","<ruby>駅<rt>えき</rt></ruby>"], a:0 },
     { q:"<ruby>降<rt>お</rt></ruby>りる<ruby>人<rt>ひと</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を しますか。", o:["ボタンを <ruby>押<rt>お</rt></ruby>す","<ruby>手<rt>て</rt></ruby>を あげる","<ruby>運転手<rt>うんてんしゅ</rt></ruby>に <ruby>言<rt>い</rt></ruby>う"], a:0 }
   ]
 },

 { id:"l-n3-2", lvl:"N3", title:"朝礼での 連絡", mins:1,
   paras:[
     { jp:"おはようございます。今日の 連絡は 二つ あります。", fu:"おはようございます。きょうの れんらくは ふたつ あります。", es:"Buenos días. Hoy hay dos avisos." },
     { jp:"まず、来週の 火曜日に 避難訓練を 行います。十時に 始まりますので、遅れないように してください。", fu:"まず、らいしゅうの かようびに ひなんくんれんを おこないます。じゅうじに はじまりますので、おくれないように してください。", es:"Primero, el martes que viene haremos un simulacro de evacuación. Empieza a las diez; no lleguen tarde." },
     { jp:"次に、社員食堂が 工事のため、今週は 使えません。", fu:"つぎに、しゃいんしょくどうが こうじのため、こんしゅうは つかえません。", es:"Segundo, el comedor de empleados no puede usarse esta semana por obras." },
     { jp:"お弁当を 持って くるか、近くの 店を 利用してください。以上です。", fu:"おべんとうを もって くるか、ちかくの みせを りようしてください。いじょうです。", es:"Traigan su comida o usen las tiendas cercanas. Eso es todo." }
   ],
   gloss:[
     { w:"連絡", r:"れんらく", m:"aviso · comunicación" },
     { w:"避難訓練", r:"ひなんくんれん", m:"simulacro de evacuación" },
     { w:"社員食堂", r:"しゃいんしょくどう", m:"comedor de empleados" },
     { w:"工事", r:"こうじ", m:"obras" },
     { w:"利用して", r:"りようして", m:"utilizar (利用する)" }
   ],
   q:[
     { q:"<ruby>避難訓練<rt>ひなんくんれん</rt></ruby>は いつ ありますか。", o:["<ruby>来週<rt>らいしゅう</rt></ruby>の <ruby>火曜日<rt>かようび</rt></ruby>","<ruby>今週<rt>こんしゅう</rt></ruby>の <ruby>火曜日<rt>かようび</rt></ruby>","<ruby>明日<rt>あした</rt></ruby>"], a:0 },
     { q:"<ruby>食堂<rt>しょくどう</rt></ruby>が <ruby>使<rt>つか</rt></ruby>えない <ruby>理由<rt>りゆう</rt></ruby>は <ruby>何<rt>なん</rt></ruby>ですか。", o:["<ruby>工事<rt>こうじ</rt></ruby>のため","<ruby>休<rt>やす</rt></ruby>みのため","<ruby>人<rt>ひと</rt></ruby>が <ruby>足<rt>た</rt></ruby>りないため"], a:0 }
   ]
 },

 { id:"l-n3-3", lvl:"N3", title:"特売の お知らせ", mins:1,
   paras:[
     { jp:"ご来店の みなさまに お知らせいたします。", fu:"ごらいてんの みなさまに おしらせいたします。", es:"Aviso para todos los clientes." },
     { jp:"ただいまより 三十分間、二階の 衣料品売り場で タイムセールを 行います。", fu:"ただいまより さんじゅっぷんかん、にかいの いりょうひんうりばで たいむせーるを おこないます。", es:"Desde ahora y durante 30 minutos, venta flash en la sección de ropa de la segunda planta." },
     { jp:"冬物の コートと セーターが、表示価格から さらに 半額と なります。", fu:"ふゆものの こーとと せーたーが、ひょうじかかくから さらに はんがくと なります。", es:"Abrigos y jerséis de invierno, a mitad del precio marcado." },
     { jp:"数に 限りが ございますので、お早めに お求めください。", fu:"かずに かぎりが ございますので、おはやめに おもとめください。", es:"Las existencias son limitadas; no tarden en comprar." }
   ],
   gloss:[
     { w:"来店", r:"らいてん", m:"visita a la tienda" },
     { w:"衣料品", r:"いりょうひん", m:"prendas de vestir" },
     { w:"表示価格", r:"ひょうじかかく", m:"precio marcado" },
     { w:"半額", r:"はんがく", m:"mitad de precio" },
     { w:"限り", r:"かぎり", m:"límite" }
   ],
   q:[
     { q:"タイムセールは どこで <ruby>行<rt>おこな</rt></ruby>われますか。", o:["<ruby>二階<rt>にかい</rt></ruby>の <ruby>衣料品売<rt>いりょうひんう</rt></ruby>り<ruby>場<rt>ば</rt></ruby>","<ruby>一階<rt>いっかい</rt></ruby>の <ruby>食品売<rt>しょくひんう</rt></ruby>り<ruby>場<rt>ば</rt></ruby>","<ruby>三階<rt>さんがい</rt></ruby>の おもちゃ<ruby>売<rt>う</rt></ruby>り<ruby>場<rt>ば</rt></ruby>"], a:0 },
     { q:"<ruby>冬物<rt>ふゆもの</rt></ruby>は いくらに なりますか。", o:["<ruby>表示価格<rt>ひょうじかかく</rt></ruby>の <ruby>半額<rt>はんがく</rt></ruby>","<ruby>表示価格<rt>ひょうじかかく</rt></ruby>のまま","<ruby>十<rt>じゅっ</rt></ruby>パーセント<ruby>引<rt>び</rt></ruby>き"], a:0 }
   ]
 },

 { id:"l-n3-4", lvl:"N3", title:"市民マラソンの 案内", mins:1,
   paras:[
     { jp:"来月 十日の 日曜日、市民マラソン大会が 開かれます。", fu:"らいげつ とおかの にちようび、しみんまらそんたいかいが ひらかれます。", es:"El domingo 10 del mes que viene se celebra el maratón ciudadano." },
     { jp:"コースは 五キロと 十キロの 二つで、どなたでも 参加できます。", fu:"こーすは ごきろと じゅっきろの ふたつで、どなたでも さんかできます。", es:"Hay dos recorridos, de 5 y 10 km, y puede participar cualquiera." },
     { jp:"参加を 希望する 方は、今週の 金曜日までに 市役所で お申し込みください。", fu:"さんかを きぼうする かたは、こんしゅうの きんようびまでに しやくしょで おもうしこみください。", es:"Quien desee participar, que se inscriba en el ayuntamiento antes del viernes de esta semana." },
     { jp:"当日は、動きやすい 服装で お越しください。", fu:"とうじつは、うごきやすい ふくそうで おこしください。", es:"El día del evento, vengan con ropa cómoda." }
   ],
   gloss:[
     { w:"大会", r:"たいかい", m:"competición · certamen" },
     { w:"参加", r:"さんか", m:"participación" },
     { w:"希望する", r:"きぼうする", m:"desear" },
     { w:"申し込み", r:"もうしこみ", m:"inscripción · solicitud" },
     { w:"服装", r:"ふくそう", m:"vestimenta" }
   ],
   q:[
     { q:"<ruby>申<rt>もう</rt></ruby>し<ruby>込<rt>こ</rt></ruby>みは いつまでですか。", o:["<ruby>今週<rt>こんしゅう</rt></ruby>の <ruby>金曜日<rt>きんようび</rt></ruby>","<ruby>来月<rt>らいげつ</rt></ruby> <ruby>十日<rt>とおか</rt></ruby>","<ruby>今日<rt>きょう</rt></ruby>"], a:0 },
     { q:"コースは どれですか。", o:["5キロと 10キロ","3キロと 5キロ","10キロだけ"], a:0 }
   ]
 },

 { id:"l-n2-2", lvl:"N2", title:"空港の アナウンス", mins:1,
   paras:[
     { jp:"ご搭乗の みなさまに ご案内 申し上げます。", fu:"ごとうじょうの みなさまに ごあんない もうしあげます。", es:"Aviso para todos los pasajeros." },
     { jp:"大阪行き 302便は、機材整備のため、出発が 一時間ほど 遅れる 見込みです。", fu:"おおさかゆき さんまるにびんは、きざいせいびのため、しゅっぱつが いちじかんほど おくれる みこみです。", es:"El vuelo 302 con destino a Osaka prevé retrasar su salida alrededor de una hora por mantenimiento del aparato." },
     { jp:"新しい 搭乗時刻は、決まり次第、あらためて お知らせいたします。", fu:"あたらしい とうじょうじこくは、きまりしだい、あらためて おしらせいたします。", es:"La nueva hora de embarque se anunciará en cuanto se decida." },
     { jp:"お急ぎの ところ ご迷惑を おかけし、誠に 申し訳ございません。", fu:"おいそぎの ところ ごめいわくを おかけし、まことに もうしわけございません。", es:"Lamentamos sinceramente las molestias causadas." }
   ],
   gloss:[
     { w:"搭乗", r:"とうじょう", m:"embarque" },
     { w:"機材整備", r:"きざいせいび", m:"mantenimiento del aparato" },
     { w:"見込み", r:"みこみ", m:"previsión" },
     { w:"次第", r:"しだい", m:"en cuanto (se decida)" },
     { w:"迷惑", r:"めいわく", m:"molestia" }
   ],
   q:[
     { q:"302<ruby>便<rt>びん</rt></ruby>は なぜ <ruby>遅<rt>おく</rt></ruby>れますか。", o:["<ruby>機材整備<rt>きざいせいび</rt></ruby>のため","<ruby>天候<rt>てんこう</rt></ruby>のため","<ruby>乗客<rt>じょうきゃく</rt></ruby>が <ruby>遅<rt>おく</rt></ruby>れたため"], a:0 },
     { q:"どのくらい <ruby>遅<rt>おく</rt></ruby>れる <ruby>見込<rt>みこ</rt></ruby>みですか。", o:["<ruby>一時間<rt>いちじかん</rt></ruby>ほど","<ruby>三十分<rt>さんじゅっぷん</rt></ruby>ほど","<ruby>二時間<rt>にじかん</rt></ruby>ほど"], a:0 }
   ]
 },

 { id:"l-n2-3", lvl:"N2", title:"新製品の 説明", mins:1,
   paras:[
     { jp:"こちらが、今月 発売された 新しい 掃除機で ございます。", fu:"こちらが、こんげつ はつばいされた あたらしい そうじきで ございます。", es:"Esta es la nueva aspiradora que ha salido a la venta este mes." },
     { jp:"従来の 製品に 比べて、重さが 三割 軽く なり、音も 静かに なりました。", fu:"じゅうらいの せいひんに くらべて、おもさが さんわり かるく なり、おとも しずかに なりました。", es:"Comparada con el modelo anterior, pesa un 30% menos y es más silenciosa." },
     { jp:"バッテリーは 一回の 充電で 約 六十分 使用できます。", fu:"ばってりーは いっかいの じゅうでんで やく ろくじゅっぷん しようできます。", es:"La batería permite unos 60 minutos de uso con una carga." },
     { jp:"ただいま ご購入いただくと、交換用の フィルターを 一つ プレゼントして おります。", fu:"ただいま ごこうにゅういただくと、こうかんようの ふぃるたーを ひとつ ぷれぜんとして おります。", es:"Si lo compra ahora, regalamos un filtro de recambio." }
   ],
   gloss:[
     { w:"発売", r:"はつばい", m:"salida a la venta" },
     { w:"従来", r:"じゅうらい", m:"hasta ahora · convencional" },
     { w:"三割", r:"さんわり", m:"un 30%" },
     { w:"充電", r:"じゅうでん", m:"carga (de batería)" },
     { w:"購入", r:"こうにゅう", m:"compra" }
   ],
   q:[
     { q:"<ruby>新<rt>あたら</rt></ruby>しい <ruby>掃除機<rt>そうじき</rt></ruby>は <ruby>従来<rt>じゅうらい</rt></ruby>より どう なりましたか。", o:["<ruby>三割<rt>さんわり</rt></ruby> <ruby>軽<rt>かる</rt></ruby>く なった","<ruby>三割<rt>さんわり</rt></ruby> <ruby>安<rt>やす</rt></ruby>く なった","<ruby>大<rt>おお</rt></ruby>きく なった"], a:0 },
     { q:"<ruby>今<rt>いま</rt></ruby> <ruby>買<rt>か</rt></ruby>うと <ruby>何<rt>なに</rt></ruby>が もらえますか。", o:["<ruby>交換用<rt>こうかんよう</rt></ruby>の フィルター","バッテリー","<ruby>割引券<rt>わりびきけん</rt></ruby>"], a:0 }
   ]
 },

 { id:"l-n2-4", lvl:"N2", title:"講演会の 案内", mins:1,
   paras:[
     { jp:"本日は「健康と 食事」を テーマに、田中先生に ご講演いただきます。", fu:"ほんじつは「けんこうと しょくじ」を てーまに、たなかせんせいに ごこうえんいただきます。", es:"Hoy el profesor Tanaka dará una conferencia sobre 'Salud y alimentación'." },
     { jp:"講演は 二時から 三時半までで、その後 三十分間、質疑応答の 時間を 設けて おります。", fu:"こうえんは にじから さんじはんまでで、そのご さんじゅっぷんかん、しつぎおうとうの じかんを もうけて おります。", es:"La charla es de dos a tres y media, y después habrá 30 minutos de turno de preguntas." },
     { jp:"ご質問の ある 方は、お手元の 用紙に ご記入の うえ、係の 者に お渡しください。", fu:"ごしつもんの ある かたは、おてもとの ようしに ごきにゅうの うえ、かかりの ものに おわたしください。", es:"Quien tenga preguntas, que las escriba en la hoja que tiene a mano y la entregue al personal." },
     { jp:"なお、会場内での 録音・録画は かたく お断りいたします。", fu:"なお、かいじょうないでの ろくおん・ろくがは かたく おことわりいたします。", es:"Asimismo, queda estrictamente prohibido grabar audio o vídeo en la sala." }
   ],
   gloss:[
     { w:"講演", r:"こうえん", m:"conferencia" },
     { w:"質疑応答", r:"しつぎおうとう", m:"turno de preguntas y respuestas" },
     { w:"記入", r:"きにゅう", m:"rellenar (por escrito)" },
     { w:"係", r:"かかり", m:"encargado · personal" },
     { w:"お断り", r:"おことわり", m:"negativa · prohibición (cortés)" }
   ],
   q:[
     { q:"<ruby>質問<rt>しつもん</rt></ruby>は どうやって しますか。", o:["<ruby>用紙<rt>ようし</rt></ruby>に <ruby>書<rt>か</rt></ruby>いて <ruby>係<rt>かかり</rt></ruby>に <ruby>渡<rt>わた</rt></ruby>す","<ruby>手<rt>て</rt></ruby>を あげて <ruby>直接<rt>ちょくせつ</rt></ruby> <ruby>聞<rt>き</rt></ruby>く","メールで <ruby>送<rt>おく</rt></ruby>る"], a:0 },
     { q:"<ruby>会場<rt>かいじょう</rt></ruby>で <ruby>禁止<rt>きんし</rt></ruby>されている ことは <ruby>何<rt>なん</rt></ruby>ですか。", o:["<ruby>録音<rt>ろくおん</rt></ruby>と <ruby>録画<rt>ろくが</rt></ruby>","<ruby>質問<rt>しつもん</rt></ruby>","メモを <ruby>取<rt>と</rt></ruby>ること"], a:0 }
   ]
 },

 { id:"l-n1-2", lvl:"N1", title:"経済ニュース", mins:1,
   paras:[
     { jp:"続いて、経済の ニュースです。", fu:"つづいて、けいざいの にゅーすです。", es:"A continuación, las noticias económicas." },
     { jp:"円安の 進行を 受け、輸入品の 価格が 上昇し、家計への 負担が 増して います。", fu:"えんやすの しんこうを うけ、ゆにゅうひんの かかくが じょうしょうし、かけいへの ふたんが まして います。", es:"Con el avance de la depreciación del yen, suben los precios de las importaciones y crece la carga para los hogares." },
     { jp:"一方、輸出企業の 業績は 好調で、株価は 三日連続で 値上がりしました。", fu:"いっぽう、ゆしゅつきぎょうの ぎょうせきは こうちょうで、かぶかは みっかれんぞくで ねあがりしました。", es:"En cambio, los resultados de las empresas exportadoras van bien y la bolsa subió por tercer día consecutivo." },
     { jp:"政府は、物価高の 影響を 受けやすい 世帯への 支援策を 検討する 方針です。", fu:"せいふは、ぶっかだかの えいきょうを うけやすい せたいへの しえんさくを けんとうする ほうしんです。", es:"El gobierno tiene previsto estudiar medidas de apoyo para los hogares más expuestos a la carestía." }
   ],
   gloss:[
     { w:"円安", r:"えんやす", m:"yen débil · depreciación del yen" },
     { w:"上昇", r:"じょうしょう", m:"subida" },
     { w:"家計", r:"かけい", m:"economía doméstica" },
     { w:"業績", r:"ぎょうせき", m:"resultados (empresariales)" },
     { w:"支援策", r:"しえんさく", m:"medidas de apoyo" },
     { w:"方針", r:"ほうしん", m:"línea de actuación · política" }
   ],
   q:[
     { q:"<ruby>円安<rt>えんやす</rt></ruby>で <ruby>何<rt>なに</rt></ruby>が <ruby>上昇<rt>じょうしょう</rt></ruby>しましたか。", o:["<ruby>輸入品<rt>ゆにゅうひん</rt></ruby>の <ruby>価格<rt>かかく</rt></ruby>","<ruby>給料<rt>きゅうりょう</rt></ruby>","<ruby>輸出<rt>ゆしゅつ</rt></ruby>の <ruby>税金<rt>ぜいきん</rt></ruby>"], a:0 },
     { q:"<ruby>政府<rt>せいふ</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>検討<rt>けんとう</rt></ruby>しますか。", o:["<ruby>世帯<rt>せたい</rt></ruby>への <ruby>支援策<rt>しえんさく</rt></ruby>","<ruby>株価<rt>かぶか</rt></ruby>の <ruby>引<rt>ひ</rt></ruby>き<ruby>下<rt>さ</rt></ruby>げ","<ruby>輸出<rt>ゆしゅつ</rt></ruby>の <ruby>禁止<rt>きんし</rt></ruby>"], a:0 }
   ]
 },

 { id:"l-n1-3", lvl:"N1", title:"社内研修の 説明", mins:1,
   paras:[
     { jp:"それでは、来期の 研修制度に ついて ご説明いたします。", fu:"それでは、らいきの けんしゅうせいどに ついて ごせつめいいたします。", es:"A continuación explicaré el sistema de formación del próximo periodo." },
     { jp:"従来の 集合研修に 加え、オンラインでも 受講できるように いたしました。", fu:"じゅうらいの しゅうごうけんしゅうに くわえ、おんらいんでも じゅこうできるように いたしました。", es:"Además de la formación presencial habitual, ahora también se podrá cursar en línea." },
     { jp:"受講を 希望される 方は、月末までに 人事部へ 申請書を ご提出ください。", fu:"じゅこうを きぼうされる かたは、げつまつまでに じんじぶへ しんせいしょを ごていしゅつください。", es:"Quien desee inscribirse, presente la solicitud a Recursos Humanos antes de fin de mes." },
     { jp:"なお、業務の 都合で 参加が 難しい 場合は、事前に 上司に ご相談の うえ、日程を 調整して ください。", fu:"なお、ぎょうむの つごうで さんかが むずかしい ばあいは、じぜんに じょうしに ごそうだんの うえ、にっていを ちょうせいして ください。", es:"Si por motivos de trabajo resulta difícil asistir, consúltenlo antes con su superior y ajusten el calendario." }
   ],
   gloss:[
     { w:"研修", r:"けんしゅう", m:"formación (en la empresa)" },
     { w:"受講", r:"じゅこう", m:"asistir a un curso" },
     { w:"人事部", r:"じんじぶ", m:"departamento de RR. HH." },
     { w:"申請書", r:"しんせいしょ", m:"formulario de solicitud" },
     { w:"上司", r:"じょうし", m:"superior · jefe" },
     { w:"日程", r:"にってい", m:"calendario · fechas" }
   ],
   q:[
     { q:"<ruby>研修<rt>けんしゅう</rt></ruby>は <ruby>何<rt>なに</rt></ruby>が <ruby>新<rt>あたら</rt></ruby>しく なりましたか。", o:["オンラインでも <ruby>受講<rt>じゅこう</rt></ruby>できる","<ruby>無料<rt>むりょう</rt></ruby>に なった","<ruby>義務<rt>ぎむ</rt></ruby>に なった"], a:0 },
     { q:"<ruby>申請書<rt>しんせいしょ</rt></ruby>は いつまでに <ruby>出<rt>だ</rt></ruby>しますか。", o:["<ruby>月末<rt>げつまつ</rt></ruby>まで","<ruby>来週<rt>らいしゅう</rt></ruby>まで","<ruby>今日<rt>きょう</rt></ruby>まで"], a:0 }
   ]
 },

 { id:"l-n1-4", lvl:"N1", title:"美術館の 音声ガイド", mins:1,
   paras:[
     { jp:"こちらの 作品は、江戸時代 後期に 描かれた 屏風絵で ございます。", fu:"こちらの さくひんは、えどじだい こうきに えがかれた びょうぶえで ございます。", es:"Esta obra es una pintura de biombo realizada a finales del periodo Edo." },
     { jp:"金箔を 背景に、四季の 移ろいが 右から 左へと 描かれて います。", fu:"きんぱくを はいけいに、しきの うつろいが みぎから ひだりへと えがかれて います。", es:"Sobre un fondo de pan de oro, el paso de las cuatro estaciones se despliega de derecha a izquierda." },
     { jp:"注目していただきたいのは、あえて 余白を 大きく 残す ことで、静けさを 表現している 点です。", fu:"ちゅうもくしていただきたいのは、あえて よはくを おおきく のこす ことで、しずけさを ひょうげんしている てんです。", es:"Fíjense en cómo, dejando adrede grandes espacios vacíos, expresa la quietud." },
     { jp:"描かずに 語る。この 引き算の 美学こそ、日本美術の 真髄と 言えるでしょう。", fu:"えがかずに かたる。この ひきざんの びがくこそ、にほんびじゅつの しんずいと いえるでしょう。", es:"Hablar sin pintar: esta estética de la sustracción es, podría decirse, la esencia del arte japonés." }
   ],
   gloss:[
     { w:"屏風絵", r:"びょうぶえ", m:"pintura de biombo" },
     { w:"金箔", r:"きんぱく", m:"pan de oro" },
     { w:"移ろい", r:"うつろい", m:"tránsito · cambio (de las estaciones)" },
     { w:"余白", r:"よはく", m:"espacio en blanco" },
     { w:"引き算", r:"ひきざん", m:"sustracción · resta" },
     { w:"真髄", r:"しんずい", m:"esencia · quintaesencia" }
   ],
   q:[
     { q:"この <ruby>作品<rt>さくひん</rt></ruby>は <ruby>何<rt>なに</rt></ruby>を <ruby>表現<rt>ひょうげん</rt></ruby>していますか。", o:["<ruby>余白<rt>よはく</rt></ruby>で <ruby>静<rt>しず</rt></ruby>けさを","<ruby>色<rt>いろ</rt></ruby>で にぎやかさを","<ruby>人物<rt>じんぶつ</rt></ruby>で <ruby>歴史<rt>れきし</rt></ruby>を"], a:0 },
     { q:"<ruby>四季<rt>しき</rt></ruby>は どの<ruby>方向<rt>ほうこう</rt></ruby>へ <ruby>描<rt>えが</rt></ruby>かれて いますか。", o:["<ruby>右<rt>みぎ</rt></ruby>から <ruby>左<rt>ひだり</rt></ruby>へ","<ruby>左<rt>ひだり</rt></ruby>から <ruby>右<rt>みぎ</rt></ruby>へ","<ruby>上<rt>うえ</rt></ruby>から <ruby>下<rt>した</rt></ruby>へ"], a:0 }
   ]
 },

 { id:"l-n5-5", lvl:"N5", title:"レストランで", mins:1,
   paras:[
     { jp:"いらっしゃいませ。なんめいさまですか。", fu:"いらっしゃいませ。なんめいさまですか。", es:"Bienvenido. ¿Para cuántas personas?" },
     { jp:"ふたりです。", fu:"ふたりです。", es:"Para dos personas." },
     { jp:"かしこまりました。こちらへ どうぞ。", fu:"かしこまりました。こちらへ どうぞ。", es:"Entendido. Por aquí, por favor." },
     { jp:"すみません、メニューを ください。", fu:"すみません、メニューを ください。", es:"Disculpe, ¿me da el menú?" }
   ],
   gloss:[
     { w:"なんめいさま", r:"なんめいさま", m:"cuántas personas (cortés)" },
     { w:"ふたり", r:"ふたり", m:"dos personas" },
     { w:"かしこまりました", r:"かしこまりました", m:"entendido (muy cortés)" },
     { w:"メニュー", r:"メニュー", m:"menú" }
   ],
   q:[
     { q:"なんにんで レストランに はいりましたか。", o:["ふたり","ひとり","さんにん"], a:0 },
     { q:"お客さんは 何を たのみましたか。", o:["メニュー","おかね","みず"], a:0 }
   ]
 },

 { id:"l-n5-6", lvl:"N5", title:"天気の話", mins:1,
   paras:[
     { jp:"きょうは いい てんきですね。", fu:"きょうは いい てんきですね。", es:"Hoy hace buen tiempo, ¿verdad?" },
     { jp:"そうですね。でも あしたは あめが ふるそうです。", fu:"そうですね。でも あしたは あめが ふるそうです。", es:"Sí. Pero dicen que mañana lloverá." },
     { jp:"じゃ、かさを もって いった ほうが いいですね。", fu:"じゃ、かさを もって いった ほうが いいですね。", es:"Entonces será mejor llevar paraguas." },
     { jp:"はい、そう おもいます。", fu:"はい、そう おもいます。", es:"Sí, eso creo." }
   ],
   gloss:[
     { w:"てんき", r:"てんき", m:"tiempo (clima)" },
     { w:"あめ", r:"あめ", m:"lluvia" },
     { w:"かさ", r:"かさ", m:"paraguas" }
   ],
   q:[
     { q:"きょうの てんきは どうですか。", o:["いい てんき","あめ","ゆき"], a:0 },
     { q:"あしたは どう なりますか。", o:["あめが ふる","はれる","ゆきが ふる"], a:0 }
   ]
 },

 { id:"l-n5-7", lvl:"N5", title:"駅で道をきく", mins:1,
   paras:[
     { jp:"すみません、ゆうびんきょくは どこですか。", fu:"すみません、ゆうびんきょくは どこですか。", es:"Disculpe, ¿dónde está la oficina de correos?" },
     { jp:"この みちを まっすぐ いって ください。", fu:"この みちを まっすぐ いって ください。", es:"Vaya recto por esta calle." },
     { jp:"つぎの かどを みぎに まがると、ひだりに あります。", fu:"つぎの かどを みぎに まがると、ひだりに あります。", es:"Al girar a la derecha en la siguiente esquina, está a la izquierda." },
     { jp:"わかりました。ありがとうございます。", fu:"わかりました。ありがとうございます。", es:"Entendido. Muchas gracias." }
   ],
   gloss:[
     { w:"ゆうびんきょく", r:"ゆうびんきょく", m:"oficina de correos" },
     { w:"まっすぐ", r:"まっすぐ", m:"recto, directo" },
     { w:"かど", r:"かど", m:"esquina" },
     { w:"まがる", r:"まがる", m:"girar" }
   ],
   q:[
     { q:"どこを さがして いますか。", o:["ゆうびんきょく","えき","がっこう"], a:0 },
     { q:"つぎの かどを どちらに まがりますか。", o:["みぎ","ひだり","まっすぐ"], a:0 }
   ]
 },

 { id:"l-n5-8", lvl:"N5", title:"買い物", mins:1,
   paras:[
     { jp:"このシャツは いくらですか。", fu:"このシャツは いくらですか。", es:"¿Cuánto cuesta esta camisa?" },
     { jp:"それは にせんえんです。", fu:"それは にせんえんです。", es:"Esa cuesta 2000 yenes." },
     { jp:"じゃあ、これを ください。", fu:"じゃあ、これを ください。", es:"Entonces me llevo esta." },
     { jp:"ありがとうございます。カードで おはらいですか。", fu:"ありがとうございます。カードで おはらいですか。", es:"Gracias. ¿Paga con tarjeta?" },
     { jp:"いいえ、げんきんで はらいます。", fu:"いいえ、げんきんで はらいます。", es:"No, pago en efectivo." }
   ],
   gloss:[
     { w:"シャツ", r:"シャツ", m:"camisa" },
     { w:"にせんえん", r:"にせんえん", m:"2000 yenes" },
     { w:"カード", r:"カード", m:"tarjeta" },
     { w:"げんきん", r:"げんきん", m:"efectivo" }
   ],
   q:[
     { q:"シャツは いくらでしたか。", o:["にせんえん","せんえん","さんぜんえん"], a:0 },
     { q:"どうやって はらいましたか。", o:["げんきんで","カードで","こぎってで"], a:0 }
   ]
 },

 { id:"l-n5-9", lvl:"N5", title:"電話で約束", mins:1,
   paras:[
     { jp:"もしもし、田中です。", fu:"もしもし、たなかです。", es:"¿Diga? Soy Tanaka." },
     { jp:"あ、田中さん。こんにちは。", fu:"あ、たなかさん。こんにちは。", es:"Ah, Tanaka. Buenas tardes." },
     { jp:"あした 三時に あえますか。", fu:"あした さんじに あえますか。", es:"¿Podemos vernos mañana a las tres?" },
     { jp:"はい、だいじょうぶです。えきの まえで あいましょう。", fu:"はい、だいじょうぶです。えきの まえで あいましょう。", es:"Sí, está bien. Nos vemos delante de la estación." }
   ],
   gloss:[
     { w:"もしもし", r:"もしもし", m:"¿diga? (al teléfono)" },
     { w:"あした", r:"あした", m:"mañana" },
     { w:"三時", r:"さんじ", m:"las tres" },
     { w:"えき", r:"えき", m:"estación" }
   ],
   q:[
     { q:"あした なんじに あいますか。", o:["三時","二時","四時"], a:0 },
     { q:"どこで あいますか。", o:["えきの まえ","がっこうの まえ","うち"], a:0 }
   ]
 },

 { id:"l-n5-10", lvl:"N5", title:"びょういんの予約", mins:1,
   paras:[
     { jp:"すみません、よやくを したいです。", fu:"すみません、よやくを したいです。", es:"Disculpe, quiero hacer una reserva (cita)." },
     { jp:"はい、いつが いいですか。", fu:"はい、いつが いいですか。", es:"Sí, ¿qué día le viene bien?" },
     { jp:"あしたの ごぜんちゅうが いいです。", fu:"あしたの ごぜんちゅうが いいです。", es:"Mañana por la mañana estaría bien." },
     { jp:"では、あさ 十じは どうですか。", fu:"では、あさ じゅうじは どうですか。", es:"Entonces, ¿las diez de la mañana le parece bien?" },
     { jp:"はい、それで おねがいします。", fu:"はい、それで おねがいします。", es:"Sí, así por favor." }
   ],
   gloss:[
     { w:"よやく", r:"よやく", m:"reserva, cita" },
     { w:"ごぜんちゅう", r:"ごぜんちゅう", m:"durante la mañana" },
     { w:"十じ", r:"じゅうじ", m:"las diez" }
   ],
   q:[
     { q:"いつ よやくしましたか。", o:["あしたの あさ 十じ","きょうの ごご","あさっての よる"], a:0 },
     { q:"どこに でんわして いますか。", o:["びょういん","レストラン","がっこう"], a:0 }
   ]
 },

 { id:"l-n5-11", lvl:"N5", title:"きょうしつで", mins:1,
   paras:[
     { jp:"みなさん、きょうかしょの 十ページを あけて ください。", fu:"みなさん、きょうかしょの じゅっぺーじを あけて ください。", es:"Todos, abran la página 10 del libro de texto." },
     { jp:"つぎに、ノートを だして ください。", fu:"つぎに、ノートを だして ください。", es:"A continuación, saquen el cuaderno." },
     { jp:"きょうは かんじの べんきょうを します。", fu:"きょうは かんじの べんきょうを します。", es:"Hoy vamos a estudiar kanji." },
     { jp:"しつもんが あったら、てを あげて ください。", fu:"しつもんが あったら、てを あげて ください。", es:"Si tienen preguntas, levanten la mano." }
   ],
   gloss:[
     { w:"きょうかしょ", r:"きょうかしょ", m:"libro de texto" },
     { w:"ノート", r:"ノート", m:"cuaderno" },
     { w:"かんじ", r:"かんじ", m:"kanji" },
     { w:"しつもん", r:"しつもん", m:"pregunta" }
   ],
   q:[
     { q:"きょうは 何を べんきょうしますか。", o:["かんじ","えいご","すうがく"], a:0 },
     { q:"しつもんが あったら、どう しますか。", o:["てを あげる","たちあがる","こえを だす"], a:0 }
   ]
 },

 { id:"l-n5-12", lvl:"N5", title:"友達との約束", mins:1,
   paras:[
     { jp:"にちようびに いっしょに えいがを みませんか。", fu:"にちようびに いっしょに えいがを みませんか。", es:"¿Vemos una película juntos el domingo?" },
     { jp:"いいですね。なんじに あいましょうか。", fu:"いいですね。なんじに あいましょうか。", es:"Buena idea. ¿A qué hora quedamos?" },
     { jp:"ごご 二じは どうですか。", fu:"ごご にじは どうですか。", es:"¿Qué tal a las dos de la tarde?" },
     { jp:"だいじょうぶです。えいがかんの まえで あいましょう。", fu:"だいじょうぶです。えいがかんの まえで あいましょう。", es:"Está bien. Nos vemos delante del cine." }
   ],
   gloss:[
     { w:"にちようび", r:"にちようび", m:"domingo" },
     { w:"えいが", r:"えいが", m:"película" },
     { w:"えいがかん", r:"えいがかん", m:"cine" }
   ],
   q:[
     { q:"いつ あいますか。", o:["にちようび","どようび","げつようび"], a:0 },
     { q:"どこで あいますか。", o:["えいがかんの まえ","えきの まえ","がっこうの まえ"], a:0 }
   ]
 },

 { id:"l-n5-13", lvl:"N5", title:"朝のニュース", mins:1,
   paras:[
     { jp:"きょうの てんきよほうです。", fu:"きょうの てんきよほうです。", es:"Aquí el pronóstico del tiempo de hoy." },
     { jp:"あさは くもりですが、ひるから はれるでしょう。", fu:"あさは くもりですが、ひるから はれるでしょう。", es:"Por la mañana estará nublado, pero despejará desde el mediodía." },
     { jp:"きおんは 二十ど ぐらいに なるでしょう。", fu:"きおんは にじゅうど ぐらいに なるでしょう。", es:"La temperatura rondará los 20 grados." },
     { jp:"がいしゅつする かたは、きを つけて ください。", fu:"がいしゅつする かたは、きを つけて ください。", es:"Quienes salgan, tengan cuidado." }
   ],
   gloss:[
     { w:"てんきよほう", r:"てんきよほう", m:"pronóstico del tiempo" },
     { w:"くもり", r:"くもり", m:"nublado" },
     { w:"きおん", r:"きおん", m:"temperatura" }
   ],
   q:[
     { q:"あさの てんきは どうですか。", o:["くもり","あめ","ゆき"], a:0 },
     { q:"きょうの きおんは どのくらいですか。", o:["二十ど ぐらい","十ど ぐらい","三十ど ぐらい"], a:0 }
   ]
 },

 { id:"l-n5-14", lvl:"N5", title:"郵便局で", mins:1,
   paras:[
     { jp:"すみません、この てがみを おくりたいです。", fu:"すみません、この てがみを おくりたいです。", es:"Disculpe, quiero enviar esta carta." },
     { jp:"どちらまで おくりますか。", fu:"どちらまで おくりますか。", es:"¿A dónde la envía?" },
     { jp:"スペインまで おねがいします。", fu:"スペインまで おねがいします。", es:"A España, por favor." },
     { jp:"では、きっては 百二十円です。", fu:"では、きっては ひゃくにじゅうえんです。", es:"Entonces el sello cuesta 120 yenes." }
   ],
   gloss:[
     { w:"てがみ", r:"てがみ", m:"carta" },
     { w:"おくりたい", r:"おくりたい", m:"querer enviar (おくる)" },
     { w:"きって", r:"きって", m:"sello (postal)" }
   ],
   q:[
     { q:"どこに てがみを おくりますか。", o:["スペイン","にほん","アメリカ"], a:0 },
     { q:"きっては いくらですか。", o:["百二十円","百円","二百円"], a:0 }
   ]
 },

 { id:"l-n5-15", lvl:"N5", title:"誕生日のパーティー", mins:1,
   paras:[
     { jp:"あしたは 妹の たんじょうびです。", fu:"あしたは いもうとの たんじょうびです。", es:"Mañana es el cumpleaños de mi hermana pequeña." },
     { jp:"かぞくで パーティーを します。", fu:"かぞくで パーティーを します。", es:"Vamos a hacer una fiesta en familia." },
     { jp:"ケーキと プレゼントを かいました。", fu:"ケーキと プレゼントを かいました。", es:"Compramos tarta y un regalo." },
     { jp:"妹は とても よろこぶと おもいます。", fu:"いもうとは とても よろこぶと おもいます。", es:"Creo que mi hermana se alegrará mucho." }
   ],
   gloss:[
     { w:"妹", r:"いもうと", m:"hermana menor" },
     { w:"たんじょうび", r:"たんじょうび", m:"cumpleaños" },
     { w:"プレゼント", r:"プレゼント", m:"regalo" }
   ],
   q:[
     { q:"あしたは だれの たんじょうびですか。", o:["妹","わたし","母"], a:0 },
     { q:"何を かいましたか。", o:["ケーキと プレゼント","はなと ほん","ふくと くつ"], a:0 }
   ]
 },

 { id:"l-n4-5", lvl:"N4", title:"天気予報", mins:1,
   paras:[
     { jp:"あしたの 天気予報です。", fu:"あしたの てんきよほうです。", es:"Aquí el pronóstico del tiempo de mañana." },
     { jp:"午前中は 晴れますが、午後から 雨が 降るでしょう。", fu:"ごぜんちゅうは はれますが、ごごから あめが ふるでしょう。", es:"Por la mañana estará despejado, pero desde la tarde lloverá." },
     { jp:"風も 強くなる 見込みです。", fu:"かぜも つよく なる みこみです。", es:"También se prevé que el viento se intensifique." },
     { jp:"傘を 忘れずに お出かけください。", fu:"かさを わすれずに おでかけください。", es:"No olviden el paraguas al salir." }
   ],
   gloss:[
     { w:"天気予報", r:"てんきよほう", m:"pronóstico del tiempo" },
     { w:"午前中", r:"ごぜんちゅう", m:"durante la mañana" },
     { w:"見込み", r:"みこみ", m:"previsión" },
     { w:"忘れずに", r:"わすれずに", m:"sin olvidar" }
   ],
   q:[
     { q:"午後の 天気は どうなりますか。", o:["雨が降る","晴れる","雪が降る"], a:0 },
     { q:"何を 忘れないように 言っていますか。", o:["傘","かばん","財布"], a:0 }
   ]
 },

 { id:"l-n4-6", lvl:"N4", title:"会社の電話", mins:1,
   paras:[
     { jp:"はい、山田商事でございます。", fu:"はい、やまだしょうじで ございます。", es:"Sí, aquí Comercial Yamada." },
     { jp:"すみません、営業部の 佐藤さんを お願いします。", fu:"すみません、えいぎょうぶの さとうさんを おねがいします。", es:"Disculpe, ¿me pone con el señor Sato del departamento de ventas?" },
     { jp:"申し訳ございません、佐藤は ただいま 席を 外しております。", fu:"もうしわけございません、さとうは ただいま せきを はずしております。", es:"Lo siento, Sato no está en su puesto ahora mismo." },
     { jp:"では、後ほど かけ直します。", fu:"では、のちほど かけなおします。", es:"Entonces volveré a llamar más tarde." }
   ],
   gloss:[
     { w:"営業部", r:"えいぎょうぶ", m:"departamento de ventas" },
     { w:"外しております", r:"はずしております", m:"no está en su puesto (席を外す)" },
     { w:"かけ直します", r:"かけなおします", m:"volver a llamar" }
   ],
   q:[
     { q:"佐藤さんは 今 どこに いますか。", o:["席にいない","会議中","出張中"], a:0 },
     { q:"電話した人は このあと 何をしますか。", o:["後で かけ直す","待つ","伝言を頼む"], a:0 }
   ]
 },

 { id:"l-n4-7", lvl:"N4", title:"病院の受付", mins:1,
   paras:[
     { jp:"初めてですか。保険証を お持ちですか。", fu:"はじめてですか。ほけんしょうを おもちですか。", es:"¿Es su primera vez? ¿Trae su tarjeta del seguro médico?" },
     { jp:"はい、あります。これです。", fu:"はい、あります。これです。", es:"Sí, la tengo. Aquí está." },
     { jp:"ありがとうございます。こちらの 用紙に ご記入ください。", fu:"ありがとうございます。こちらの ようしに ごきにゅうください。", es:"Gracias. Por favor rellene este formulario." },
     { jp:"分かりました。ペンを 借りても いいですか。", fu:"わかりました。ペンを かりても いいですか。", es:"Entendido. ¿Puedo pedir prestado un bolígrafo?" }
   ],
   gloss:[
     { w:"保険証", r:"ほけんしょう", m:"tarjeta del seguro médico" },
     { w:"用紙", r:"ようし", m:"formulario" },
     { w:"ご記入ください", r:"ごきにゅうください", m:"por favor rellene" }
   ],
   q:[
     { q:"患者は 何を 持っていますか。", o:["保険証","診察券","お金"], a:0 },
     { q:"受付は 何を お願いしましたか。", o:["用紙に記入すること","待つこと","予約すること"], a:0 }
   ]
 },

 { id:"l-n4-8", lvl:"N4", title:"友達とのメッセージ", mins:1,
   paras:[
     { jp:"今度の 土曜日、暇？", fu:"こんどの どようび、ひま？", es:"¿Estás libre este sábado?" },
     { jp:"うん、暇だよ。何か 予定 あるの？", fu:"うん、ひまだよ。なにか よてい あるの？", es:"Sí, estoy libre. ¿Tienes algún plan?" },
     { jp:"新しい カフェが できたから、一緒に 行かない？", fu:"あたらしい カフェが できたから、いっしょに いかない？", es:"Han abierto una cafetería nueva, ¿vamos juntos?" },
     { jp:"いいね！何時に 集合する？", fu:"いいね！なんじに しゅうごうする？", es:"¡Genial! ¿A qué hora quedamos?" }
   ],
   gloss:[
     { w:"暇", r:"ひま", m:"tiempo libre" },
     { w:"予定", r:"よてい", m:"plan, previsión" },
     { w:"集合する", r:"しゅうごうする", m:"reunirse, quedar" }
   ],
   q:[
     { q:"何を 誘っていますか。", o:["新しいカフェに行くこと","映画に行くこと","旅行に行くこと"], a:0 },
     { q:"いつの 話をしていますか。", o:["今度の土曜日","今日","来週の日曜日"], a:0 }
   ]
 },

 { id:"l-n4-9", lvl:"N4", title:"引っ越しの相談", mins:1,
   paras:[
     { jp:"来月、引っ越しを することに なりました。", fu:"らいげつ、ひっこしを することに なりました。", es:"El mes que viene voy a mudarme." },
     { jp:"へえ、どこに 引っ越すんですか。", fu:"へえ、どこに ひっこすんですか。", es:"Vaya, ¿a dónde te mudas?" },
     { jp:"駅から 近い アパートに 決めました。", fu:"えきから ちかい アパートに きめました。", es:"He decidido un apartamento cerca de la estación." },
     { jp:"それは 便利ですね。手伝いが 必要なら 言ってください。", fu:"それは べんりですね。てつだいが ひつようなら いってください。", es:"Eso es conveniente. Si necesitas ayuda, dímelo." }
   ],
   gloss:[
     { w:"引っ越し", r:"ひっこし", m:"mudanza" },
     { w:"アパート", r:"アパート", m:"apartamento" },
     { w:"手伝い", r:"てつだい", m:"ayuda" }
   ],
   q:[
     { q:"いつ 引っ越しますか。", o:["来月","来週","来年"], a:0 },
     { q:"新しい 家は どこですか。", o:["駅から近いアパート","駅から遠い家","会社の近く"], a:0 }
   ]
 },

 { id:"l-n4-10", lvl:"N4", title:"レストランの予約電話", mins:1,
   paras:[
     { jp:"もしもし、今晩 七時に 三人で 予約したいんですが。", fu:"もしもし、こんばん しちじに さんにんで よやくしたいんですが。", es:"Hola, quisiera reservar para hoy a las siete para tres personas." },
     { jp:"申し訳ございません、七時は 満席でして。八時なら 空いております。", fu:"もうしわけございません、しちじは まんせきでして。はちじなら あいております。", es:"Lo siento, a las siete está completo. A las ocho hay disponibilidad." },
     { jp:"では、八時で お願いします。", fu:"では、はちじで おねがいします。", es:"Entonces a las ocho, por favor." },
     { jp:"かしこまりました。お名前を お願いできますか。", fu:"かしこまりました。おなまえを おねがいできますか。", es:"Entendido. ¿Me da su nombre, por favor?" }
   ],
   gloss:[
     { w:"満席", r:"まんせき", m:"completo (sin plazas)" },
     { w:"空いております", r:"あいております", m:"hay disponibilidad" },
     { w:"予約したいんですが", r:"よやくしたいんですが", m:"quisiera reservar" }
   ],
   q:[
     { q:"最初に 何時を 希望しましたか。", o:["七時","八時","六時"], a:0 },
     { q:"結局 何時に 予約しましたか。", o:["八時","七時","九時"], a:0 }
   ]
 },

 { id:"l-n4-11", lvl:"N4", title:"忘れ物の届け出", mins:1,
   paras:[
     { jp:"すみません、電車の中に かばんを 忘れてしまいました。", fu:"すみません、でんしゃの なかに かばんを わすれて しまいました。", es:"Disculpe, me he dejado la bolsa en el tren." },
     { jp:"何色の かばんですか。", fu:"なにいろの かばんですか。", es:"¿De qué color es la bolsa?" },
     { jp:"黒い かばんで、中に 本と 財布が 入っています。", fu:"くろい かばんで、なかに ほんと さいふが はいって います。", es:"Es una bolsa negra, dentro hay un libro y una cartera." },
     { jp:"分かりました。確認して、後ほど ご連絡します。", fu:"わかりました。かくにんして、のちほど ごれんらくします。", es:"Entendido. Lo comprobaremos y le contactaremos más tarde." }
   ],
   gloss:[
     { w:"忘れてしまいました", r:"わすれてしまいました", m:"se me olvidó (lamentablemente)" },
     { w:"財布", r:"さいふ", m:"cartera" },
     { w:"確認して", r:"かくにんして", m:"confirmar, comprobar" }
   ],
   q:[
     { q:"かばんは 何色ですか。", o:["黒","白","茶色"], a:0 },
     { q:"かばんの中に 何が 入っていますか。", o:["本と財布","服と靴","かさと手袋"], a:0 }
   ]
 },

 { id:"l-n4-12", lvl:"N4", title:"アルバイトの面接", mins:1,
   paras:[
     { jp:"では、志望動機を 教えてください。", fu:"では、しぼうどうきを おしえてください。", es:"Bien, cuénteme el motivo de su solicitud." },
     { jp:"接客の 経験を 積みたいと 思ったからです。", fu:"せっきゃくの けいけんを つみたいと おもったからです。", es:"Porque quería ganar experiencia en atención al cliente." },
     { jp:"週に 何日くらい 働けますか。", fu:"しゅうに なんにちくらい はたらけますか。", es:"¿Cuántos días a la semana puede trabajar?" },
     { jp:"週に 三日か 四日、働けます。", fu:"しゅうに みっかか よっか、はたらけます。", es:"Puedo trabajar tres o cuatro días a la semana." }
   ],
   gloss:[
     { w:"志望動機", r:"しぼうどうき", m:"motivo de la solicitud" },
     { w:"接客", r:"せっきゃく", m:"atención al cliente" },
     { w:"積みたい", r:"つみたい", m:"querer ganar/acumular (経験を積む)" }
   ],
   q:[
     { q:"志望動機は 何ですか。", o:["接客の経験を積みたいから","給料が高いから","家から近いから"], a:0 },
     { q:"週に 何日 働けますか。", o:["三日か四日","一日か二日","毎日"], a:0 }
   ]
 },

 { id:"l-n4-13", lvl:"N4", title:"荷物の配達", mins:1,
   paras:[
     { jp:"宅配便です。荷物を お届けに 参りました。", fu:"たくはいびんです。にもつを おとどけに まいりました。", es:"Somos el servicio de mensajería. Venimos a entregarle un paquete." },
     { jp:"あ、はい。今 開けます。", fu:"あ、はい。いま あけます。", es:"Ah, sí. Ahora abro." },
     { jp:"こちらに サインを お願いします。", fu:"こちらに サインを おねがいします。", es:"Firme aquí, por favor." },
     { jp:"はい、これで いいですか。ありがとうございました。", fu:"はい、これで いいですか。ありがとうございました。", es:"Sí, ¿así está bien? Muchas gracias." }
   ],
   gloss:[
     { w:"宅配便", r:"たくはいびん", m:"servicio de mensajería/paquetería" },
     { w:"参りました", r:"まいりました", m:"vine (muy cortés, 来る)" },
     { w:"サイン", r:"サイン", m:"firma" }
   ],
   q:[
     { q:"誰が 来ましたか。", o:["宅配便の人","郵便局の人","近所の人"], a:0 },
     { q:"何を お願いされましたか。", o:["サイン","お金","電話番号"], a:0 }
   ]
 },

 { id:"l-n4-14", lvl:"N4", title:"ダイエットの話", mins:1,
   paras:[
     { jp:"最近、少し 太ってきたので、ダイエットを 始めました。", fu:"さいきん、すこし ふとってきたので、ダイエットを はじめました。", es:"Últimamente he engordado un poco, así que empecé una dieta." },
     { jp:"へえ、どんな ダイエットを しているんですか。", fu:"へえ、どんな ダイエットを しているんですか。", es:"Vaya, ¿qué tipo de dieta estás haciendo?" },
     { jp:"毎朝 三十分 走って、間食を 減らしています。", fu:"まいあさ さんじゅっぷん はしって、かんしょくを へらして います。", es:"Corro treinta minutos cada mañana y he reducido los snacks entre comidas." },
     { jp:"すごいですね。効果は 出ていますか。", fu:"すごいですね。こうかは でていますか。", es:"Qué impresionante. ¿Está dando resultado?" }
   ],
   gloss:[
     { w:"太ってきた", r:"ふとってきた", m:"he ido engordando" },
     { w:"間食", r:"かんしょく", m:"comer entre horas" },
     { w:"効果", r:"こうか", m:"efecto, resultado" }
   ],
   q:[
     { q:"何を 始めましたか。", o:["ダイエット","新しい仕事","スポーツジム"], a:0 },
     { q:"毎朝 何を していますか。", o:["三十分走る","水泳をする","自転車に乗る"], a:0 }
   ]
 },

 { id:"l-n4-15", lvl:"N4", title:"旅行の計画", mins:1,
   paras:[
     { jp:"夏休みに 家族で 沖縄へ 旅行に 行く 予定です。", fu:"なつやすみに かぞくで おきなわへ りょこうに いく よていです。", es:"En vacaciones de verano tenemos previsto ir de viaje a Okinawa en familia." },
     { jp:"いいですね！何日間 行くんですか。", fu:"いいですね！なんにちかん いくんですか。", es:"¡Qué bien! ¿Cuántos días vais?" },
     { jp:"三泊四日の 予定です。海で 泳いだり、おいしい物を 食べたりしたいです。", fu:"さんぱくよっかの よていです。うみで およいだり、おいしい ものを たべたりしたいです。", es:"Está previsto ser tres noches y cuatro días. Quiero nadar en el mar y comer cosas ricas." },
     { jp:"楽しそうですね。ホテルは もう 決めましたか。", fu:"たのしそうですね。ホテルは もう きめましたか。", es:"Suena divertido. ¿Ya habéis decidido el hotel?" }
   ],
   gloss:[
     { w:"三泊四日", r:"さんぱくよっか", m:"tres noches y cuatro días" },
     { w:"泳いだり", r:"およいだり", m:"nadar (entre otras cosas)" },
     { w:"決めましたか", r:"きめましたか", m:"¿ya decidieron?" }
   ],
   q:[
     { q:"どこに 旅行に 行きますか。", o:["沖縄","北海道","京都"], a:0 },
     { q:"何日間の 旅行ですか。", o:["三泊四日","二泊三日","四泊五日"], a:0 }
   ]
 },

 { id:"l-n3-5", lvl:"N3", title:"会議の司会", mins:1,
   paras:[
     { jp:"それでは、定例会議を 始めさせていただきます。", fu:"それでは、ていれいかいぎを はじめさせて いただきます。", es:"Bien, vamos a empezar la reunión periódica." },
     { jp:"本日の 議題は 三つ ございます。まず 一つ目から 参りましょう。", fu:"ほんじつの ぎだいは みっつ ございます。まず ひとつめから まいりましょう。", es:"Hoy tenemos tres puntos en la agenda. Empecemos por el primero." },
     { jp:"予算に関する 資料は 皆様の お手元に あるかと 思います。", fu:"よさんに かんする しりょうは みなさまの おてもとに あるかと おもいます。", es:"Creo que ya tienen en sus manos el material sobre el presupuesto." },
     { jp:"ご質問が あれば、後ほど 時間を 設けます。", fu:"ごしつもんが あれば、のちほど じかんを もうけます。", es:"Si tienen preguntas, dejaremos tiempo para eso más tarde." }
   ],
   gloss:[
     { w:"定例会議", r:"ていれいかいぎ", m:"reunión periódica" },
     { w:"議題", r:"ぎだい", m:"tema de agenda" },
     { w:"お手元", r:"おてもと", m:"en sus manos, a mano" }
   ],
   q:[
     { q:"本日の 議題は いくつ ありますか。", o:["三つ","二つ","四つ"], a:0 },
     { q:"質問は いつ できますか。", o:["後ほど","今すぐ","会議の後で個別に"], a:0 }
   ]
 },

 { id:"l-n3-6", lvl:"N3", title:"引っ越しの案内放送", mins:1,
   paras:[
     { jp:"エレベーターは 本日 点検の ため、午前中 ご利用いただけません。", fu:"エレベーターは ほんじつ てんけんの ため、ごぜんちゅう ごりよう いただけません。", es:"Debido a la inspección de hoy, el ascensor no se podrá usar durante la mañana." },
     { jp:"ご不便を おかけしますが、階段を ご利用ください。", fu:"ごふべんを おかけしますが、かいだんを ごりよう ください。", es:"Sentimos las molestias, por favor usen las escaleras." },
     { jp:"点検は 正午までに 終了する 予定です。", fu:"てんけんは しょうごまでに しゅうりょうする よていです。", es:"La inspección está prevista terminar antes del mediodía." },
     { jp:"ご協力の ほど、よろしく お願いいたします。", fu:"ごきょうりょくの ほど、よろしく おねがいいたします。", es:"Agradecemos de antemano su colaboración." }
   ],
   gloss:[
     { w:"点検", r:"てんけん", m:"inspección" },
     { w:"ご不便", r:"ごふべん", m:"molestias, inconveniente" },
     { w:"正午", r:"しょうご", m:"mediodía" }
   ],
   q:[
     { q:"エレベーターが 使えないのは いつまでですか。", o:["午前中","一日中","夕方まで"], a:0 },
     { q:"住民は 何を するように 言われていますか。", o:["階段を使う","苦情を言う","外出を控える"], a:0 }
   ]
 },

 { id:"l-n3-7", lvl:"N3", title:"転職の相談", mins:1,
   paras:[
     { jp:"実は、今の 会社を 辞めようか どうか 迷っているんです。", fu:"じつは、いまの かいしゃを やめようか どうか まよって いるんです。", es:"En realidad, estoy dudando si dejar mi empresa actual." },
     { jp:"何か きっかけが あったんですか。", fu:"なにか きっかけが あったんですか。", es:"¿Hubo algo que lo detonara?" },
     { jp:"人間関係に 疲れてしまって。それに、もっと 成長できる 環境で 働きたいんです。", fu:"にんげんかんけいに つかれて しまって。それに、もっと せいちょう できる かんきょうで はたらきたいんです。", es:"Me he cansado de las relaciones interpersonales. Además, quiero trabajar en un entorno donde pueda crecer más." },
     { jp:"なるほど。焦らず、じっくり 考えた ほうが いいと 思いますよ。", fu:"なるほど。あせらず、じっくり かんがえた ほうが いいと おもいますよ。", es:"Ya veo. Creo que es mejor pensarlo con calma, sin precipitarse." }
   ],
   gloss:[
     { w:"迷っている", r:"まよっている", m:"estar dudando" },
     { w:"人間関係", r:"にんげんかんけい", m:"relaciones interpersonales" },
     { w:"焦らず", r:"あせらず", m:"sin precipitarse" }
   ],
   q:[
     { q:"何に 悩んでいますか。", o:["会社を辞めるかどうか","結婚するかどうか","引っ越すかどうか"], a:0 },
     { q:"悩んでいる 理由の 一つは 何ですか。", o:["人間関係に疲れたこと","給料が安いこと","通勤が遠いこと"], a:0 }
   ]
 },

 { id:"l-n3-8", lvl:"N3", title:"地域のお知らせ", mins:1,
   paras:[
     { jp:"来月から、ごみの 収集日が 変更に なります。", fu:"らいげつから、ごみの しゅうしゅうびが へんこうに なります。", es:"A partir del mes que viene, cambiará el día de recogida de basura." },
     { jp:"燃えるごみは 火曜日と 金曜日、燃えないごみは 第二・第四水曜日です。", fu:"もえるごみは かようびと きんようび、もえないごみは だいに・だいよんすいようびです。", es:"La basura combustible se recogerá los martes y viernes; la no combustible, el segundo y cuarto miércoles." },
     { jp:"詳細は 配布された チラシを ご覧ください。", fu:"しょうさいは はいふされた チラシを ごらんください。", es:"Para más detalles, consulten el folleto que se ha repartido." },
     { jp:"ご不明な 点が あれば、区役所まで お問い合わせください。", fu:"ごふめいな てんが あれば、くやくしょまで おといあわせください。", es:"Si tienen alguna duda, contacten con la oficina del distrito." }
   ],
   gloss:[
     { w:"収集日", r:"しゅうしゅうび", m:"día de recogida" },
     { w:"燃えるごみ", r:"もえるごみ", m:"basura combustible" },
     { w:"区役所", r:"くやくしょ", m:"oficina del distrito/ayuntamiento" }
   ],
   q:[
     { q:"何が 変更に なりますか。", o:["ごみの収集日","バスの時刻表","図書館の休館日"], a:0 },
     { q:"燃えるごみは いつ 出しますか。", o:["火曜日と金曜日","月曜日と木曜日","毎日"], a:0 }
   ]
 },

 { id:"l-n3-9", lvl:"N3", title:"健康診断の結果説明", mins:1,
   paras:[
     { jp:"健康診断の 結果ですが、全体的には 問題ありません。", fu:"けんこうしんだんの けっかですが、ぜんたいてきには もんだい ありません。", es:"En cuanto al resultado del chequeo médico, en general no hay problema." },
     { jp:"ただ、血圧が 少し 高めなので、塩分を 控えた ほうが いいでしょう。", fu:"ただ、けつあつが すこし たかめなので、えんぶんを ひかえた ほうが いいでしょう。", es:"Sin embargo, la tensión está un poco alta, así que sería mejor moderar la sal." },
     { jp:"それから、定期的な 運動も おすすめします。", fu:"それから、ていきてきな うんどうも おすすめします。", es:"Además, también recomiendo hacer ejercicio de forma regular." },
     { jp:"来年も 忘れずに 検診を 受けてください。", fu:"らいねんも わすれずに けんしんを うけて ください。", es:"El próximo año también, no olvide hacerse la revisión." }
   ],
   gloss:[
     { w:"健康診断", r:"けんこうしんだん", m:"chequeo médico" },
     { w:"血圧", r:"けつあつ", m:"tensión arterial" },
     { w:"控えた", r:"ひかえた", m:"moderar, contener (控える)" }
   ],
   q:[
     { q:"何が 少し 高めですか。", o:["血圧","体温","体重"], a:0 },
     { q:"何を するように 勧められましたか。", o:["塩分を控えて運動すること","毎日病院に行くこと","薬を飲むこと"], a:0 }
   ]
 },

 { id:"l-n3-10", lvl:"N3", title:"就職活動の悩み", mins:1,
   paras:[
     { jp:"就職活動、順調ですか。", fu:"しゅうしょくかつどう、じゅんちょうですか。", es:"¿Va bien la búsqueda de empleo?" },
     { jp:"それが、なかなか 内定が もらえなくて 焦っています。", fu:"それが、なかなか ないていが もらえなくて あせっています。", es:"Pues la verdad es que no consigo una oferta de trabajo y estoy nervioso." },
     { jp:"面接では 何を 聞かれることが 多いですか。", fu:"めんせつでは なにを きかれる ことが おおいですか。", es:"¿Qué es lo que más te preguntan en las entrevistas?" },
     { jp:"志望動機と、これまでの 経験を よく 聞かれます。", fu:"しぼうどうきと、これまでの けいけんを よく きかれます。", es:"Me preguntan mucho el motivo de la candidatura y mi experiencia hasta ahora." }
   ],
   gloss:[
     { w:"就職活動", r:"しゅうしょくかつどう", m:"búsqueda de empleo" },
     { w:"内定", r:"ないてい", m:"oferta/promesa de contratación" },
     { w:"焦っています", r:"あせっています", m:"estar nervioso, impaciente" }
   ],
   q:[
     { q:"何に 悩んでいますか。", o:["内定がもらえないこと","給料が低いこと","会社の場所"], a:0 },
     { q:"面接で よく 聞かれることは 何ですか。", o:["志望動機と経験","趣味と特技","家族構成"], a:0 }
   ]
 },

 { id:"l-n3-11", lvl:"N3", title:"新商品の紹介", mins:1,
   paras:[
     { jp:"本日は、当社の 新商品を ご紹介いたします。", fu:"ほんじつは、とうしゃの しんしょうひんを ごしょうかい いたします。", es:"Hoy les presentamos el nuevo producto de nuestra empresa." },
     { jp:"従来の 製品より 軽量化に 成功し、持ち運びが 楽に なりました。", fu:"じゅうらいの せいひんより けいりょうかに せいこうし、もちはこびが らくに なりました。", es:"Hemos logrado aligerarlo más que el producto anterior, siendo más fácil de transportar." },
     { jp:"バッテリーの 持ちも 従来品の 二倍に なっています。", fu:"バッテリーの もちも じゅうらいひんの にばいに なっています。", es:"La duración de la batería también se ha duplicado respecto al producto anterior." },
     { jp:"発売は 来月の 十五日を 予定しております。", fu:"はつばいは らいげつの じゅうごにちを よてい しております。", es:"El lanzamiento está previsto para el día quince del mes que viene." }
   ],
   gloss:[
     { w:"軽量化", r:"けいりょうか", m:"aligeramiento de peso" },
     { w:"持ち運び", r:"もちはこび", m:"transporte, llevarlo consigo" },
     { w:"従来品", r:"じゅうらいひん", m:"producto anterior" }
   ],
   q:[
     { q:"新商品の 特徴は 何ですか。", o:["軽くてバッテリーが長持ちすること","値段が安いこと","色が豊富なこと"], a:0 },
     { q:"発売は いつですか。", o:["来月十五日","今月末","来年"], a:0 }
   ]
 },

 { id:"l-n3-12", lvl:"N3", title:"子育ての相談", mins:1,
   paras:[
     { jp:"最近、子どもが 野菜を 全然 食べてくれなくて。", fu:"さいきん、こどもが やさいを ぜんぜん たべて くれなくて。", es:"Últimamente mi hijo no come verduras en absoluto." },
     { jp:"うちも そうでした。細かく 切って、料理に 混ぜると 食べやすいですよ。", fu:"うちも そうでした。こまかく きって、りょうりに まぜると たべやすいですよ。", es:"En mi casa pasaba lo mismo. Si las cortas muy pequeñas y las mezclas en la comida, es más fácil que las coma." },
     { jp:"なるほど、それは いい 方法ですね。試してみます。", fu:"なるほど、それは いい ほうほうですね。ためしてみます。", es:"Ya veo, es un buen método. Lo probaré." },
     { jp:"無理に 食べさせようとしないで、少しずつで いいと 思いますよ。", fu:"むりに たべさせようとしないで、すこしずつで いいと おもいますよ。", es:"No intentes obligarlo a comer, creo que está bien ir poco a poco." }
   ],
   gloss:[
     { w:"細かく", r:"こまかく", m:"finamente, en trozos pequeños" },
     { w:"混ぜると", r:"まぜると", m:"si se mezcla" },
     { w:"無理に", r:"むりに", m:"a la fuerza" }
   ],
   q:[
     { q:"何に 悩んでいますか。", o:["子どもが野菜を食べないこと","子どもが寝ないこと","子どもが勉強しないこと"], a:0 },
     { q:"どんな アドバイスを もらいましたか。", o:["野菜を細かく切って混ぜること","毎日叱ること","デザートを与えないこと"], a:0 }
   ]
 },

 { id:"l-n3-13", lvl:"N3", title:"美術館の音声ガイド", mins:1,
   paras:[
     { jp:"皆様、当美術館へ ようこそ お越しくださいました。", fu:"みなさま、とうびじゅつかんへ ようこそ おこしくださいました。", es:"Bienvenidos todos a nuestro museo." },
     { jp:"こちらの 作品は、十九世紀に 描かれた 風景画です。", fu:"こちらの さくひんは、じゅうきゅうせいきに えがかれた ふうけいがです。", es:"Esta obra es un paisaje pintado en el siglo diecinueve." },
     { jp:"作者は 光と 影の 対比を 巧みに 表現した ことで 知られています。", fu:"さくしゃは ひかりと かげの たいひを たくみに ひょうげんした ことで しられています。", es:"El autor es conocido por expresar con maestría el contraste entre luz y sombra." },
     { jp:"次の 部屋には、同じ 作者の 別の 作品が 展示されています。", fu:"つぎの へやには、おなじ さくしゃの べつの さくひんが てんじされています。", es:"En la siguiente sala se exhiben otras obras del mismo autor." }
   ],
   gloss:[
     { w:"風景画", r:"ふうけいが", m:"pintura paisajística" },
     { w:"対比", r:"たいひ", m:"contraste" },
     { w:"展示されています", r:"てんじされています", m:"se exhiben" }
   ],
   q:[
     { q:"この 作品は いつ 描かれましたか。", o:["十九世紀","十八世紀","二十世紀"], a:0 },
     { q:"作者は 何で 知られていますか。", o:["光と影の対比を表現すること","色彩の豊かさ","人物画の巧みさ"], a:0 }
   ]
 },

 { id:"l-n3-14", lvl:"N3", title:"環境問題についての講演", mins:1,
   paras:[
     { jp:"本日は、身近な 環境問題について お話しさせていただきます。", fu:"ほんじつは、みぢかな かんきょうもんだいに ついて おはなし させて いただきます。", es:"Hoy hablaré sobre problemas medioambientales cercanos a nosotros." },
     { jp:"プラスチックごみの 削減は、私たち 一人一人の 意識から 始まります。", fu:"プラスチックごみの さくげんは、わたしたち ひとりひとりの いしきから はじまります。", es:"La reducción de residuos plásticos empieza con la conciencia de cada uno de nosotros." },
     { jp:"買い物袋を 持参する だけでも、大きな 効果が あります。", fu:"かいものぶくろを じさんする だけでも、おおきな こうかが あります。", es:"Incluso solo llevar bolsa de compra propia tiene un gran efecto." },
     { jp:"小さな 行動の 積み重ねが、未来を 変える 力に なるのです。", fu:"ちいさな こうどうの つみかさねが、みらいを かえる ちからに なるのです。", es:"La acumulación de pequeñas acciones se convierte en el poder de cambiar el futuro." }
   ],
   gloss:[
     { w:"削減", r:"さくげん", m:"reducción" },
     { w:"持参する", r:"じさんする", m:"llevar consigo" },
     { w:"積み重ね", r:"つみかさね", m:"acumulación" }
   ],
   q:[
     { q:"何についての 講演ですか。", o:["環境問題","経済問題","健康問題"], a:0 },
     { q:"何を 持参すると 効果が ありますか。", o:["買い物袋","水筒","タオル"], a:0 }
   ]
 },

 { id:"l-n3-15", lvl:"N3", title:"友人との久しぶりの再会", mins:1,
   paras:[
     { jp:"久しぶり！全然 変わってないね。", fu:"ひさしぶり！ぜんぜん かわって ないね。", es:"¡Cuánto tiempo! No has cambiado nada." },
     { jp:"そっちこそ！何年ぶりだろう。五年くらい？", fu:"そっちこそ！なんねん ぶりだろう。ごねん くらい？", es:"¡Tú tampoco! ¿Cuántos años habrán pasado? ¿Unos cinco?" },
     { jp:"そうだね。あの頃は 学生だったのに、もう お互い 社会人だもんね。", fu:"そうだね。あの ころは がくせい だったのに、もう おたがい しゃかいじん だもんね。", es:"Es verdad. En aquella época éramos estudiantes, y ahora ya los dos somos trabajadores." },
     { jp:"時間が経つのは 早いなあ。今度、ゆっくり 昔話でも しよう。", fu:"じかんが たつのは はやいなあ。こんど、ゆっくり むかしばなしでも しよう。", es:"Qué rápido pasa el tiempo. La próxima vez charlemos con calma sobre los viejos tiempos." }
   ],
   gloss:[
     { w:"久しぶり", r:"ひさしぶり", m:"cuánto tiempo (sin verse)" },
     { w:"社会人", r:"しゃかいじん", m:"persona que trabaja (adulto en sociedad)" },
     { w:"昔話", r:"むかしばなし", m:"recuerdos, historias del pasado" }
   ],
   q:[
     { q:"二人は 何年ぶりに 会いましたか。", o:["五年くらい","一年くらい","十年くらい"], a:0 },
     { q:"あの頃、二人は 何でしたか。", o:["学生","社会人","子ども"], a:0 }
   ]
 }

];
