/* scenarios.js — Escenarios de conversación (Japanese N1 Path)
   window.SCENARIOS = [ { id, lvl, title, ai_role, user_role, situation, goal, opening:{jp,fu,es} } ]
   El escenario alimenta el prompt del Worker (rol, objetivo, nivel).
   Cada nivel incluye "Conversación libre": charla sin guion que evoluciona a donde quieras. */
window.SCENARIOS = [

 { id:"cafe", lvl:"N5", title:"En una cafetería",
   ai_role:"un camarero amable de una cafetería en Japón", user_role:"un cliente",
   situation:"El alumno entra en una cafetería y pide algo de beber",
   goal:"pedir una bebida y preguntar el precio",
   opening:{ jp:"いらっしゃいませ！ ご注文は お決まりですか？", fu:"いらっしゃいませ！ ごちゅうもんは おきまりですか？", es:"¡Bienvenido! ¿Ya ha decidido su pedido?" } },

 { id:"jiko", lvl:"N5", title:"Presentarse",
   ai_role:"un compañero de clase japonés simpático", user_role:"un estudiante nuevo",
   situation:"Primer día de clase; os presentáis",
   goal:"decir tu nombre, tu país y una afición",
   opening:{ jp:"はじめまして！ お名前は 何ですか？", fu:"はじめまして！ おなまえは なんですか？", es:"¡Encantado! ¿Cómo te llamas?" } },

 { id:"mise", lvl:"N5", title:"En una tienda",
   ai_role:"un dependiente amable de una tienda", user_role:"un cliente",
   situation:"El alumno compra algo en una tienda",
   goal:"encontrar un producto, preguntar el precio y pagar",
   opening:{ jp:"いらっしゃいませ。 何を お探しですか？", fu:"いらっしゃいませ。 なにを おさがしですか？", es:"Bienvenido. ¿Qué está buscando?" } },

 { id:"libre-n5", lvl:"N5", title:"Conversación libre",
   ai_role:"un amigo japonés simpático y curioso", user_role:"tú mismo",
   situation:"Charla informal sin tema fijo; el tema puede cambiar libremente según la conversación",
   goal:"charlar con naturalidad de lo que surja",
   opening:{ jp:"こんにちは！ 今日は 何を しましたか？", fu:"こんにちは！ きょうは なにを しましたか？", es:"¡Hola! ¿Qué has hecho hoy?" } },

 { id:"michi", lvl:"N4", title:"Preguntar el camino",
   ai_role:"un transeúnte japonés servicial", user_role:"un turista un poco perdido",
   situation:"El alumno para a alguien por la calle para llegar a la estación",
   goal:"preguntar cómo llegar a la estación y entender la respuesta",
   opening:{ jp:"はい、どうしましたか？", fu:"はい、どうしましたか？", es:"Sí, ¿qué ocurre?" } },

 { id:"byouin", lvl:"N4", title:"En la clínica",
   ai_role:"la recepcionista de una clínica", user_role:"un paciente",
   situation:"El alumno va al médico porque no se encuentra bien",
   goal:"explicar los síntomas y pedir una cita",
   opening:{ jp:"こんにちは。 今日は どう されましたか？", fu:"こんにちは。 きょうは どう されましたか？", es:"Hola. ¿Qué le trae hoy por aquí?" } },

 { id:"libre-n4", lvl:"N4", title:"Conversación libre",
   ai_role:"un amigo japonés con quien hablas de tu día, aficiones o planes", user_role:"tú mismo",
   situation:"Una charla informal sin guion: el tema lo pones tú y puede cambiar cuando quieras",
   goal:"charlar libremente",
   opening:{ jp:"やあ！ 最近 どう？ 何か おもしろい ことが あった？", fu:"やあ！ さいきん どう？ なにか おもしろい ことが あった？", es:"¡Ey! ¿Qué tal últimamente? ¿Ha pasado algo interesante?" } },

 { id:"yoyaku", lvl:"N3", title:"Reservar por teléfono",
   ai_role:"el empleado de un restaurante que atiende el teléfono", user_role:"un cliente que reserva",
   situation:"El alumno llama para reservar una mesa",
   goal:"reservar una mesa indicando día, hora y número de personas",
   opening:{ jp:"お電話 ありがとうございます。 ご予約でしょうか？", fu:"おでんわ ありがとうございます。 ごよやくでしょうか？", es:"Gracias por llamar. ¿Desea hacer una reserva?" } },

 { id:"mensetsu", lvl:"N3", title:"Entrevista sencilla",
   ai_role:"un entrevistador amable de una empresa", user_role:"un candidato",
   situation:"Una entrevista de trabajo sencilla",
   goal:"presentarte y hablar de tus puntos fuertes",
   opening:{ jp:"では、始めましょう。 まず、自己紹介を お願いします。", fu:"では、はじめましょう。 まず、じこしょうかいを おねがいします。", es:"Bien, empecemos. Primero, preséntese, por favor." } },

 { id:"libre-n3", lvl:"N3", title:"Conversación libre",
   ai_role:"un conocido japonés con quien charlas con naturalidad sobre cualquier tema", user_role:"tú mismo",
   situation:"Una charla informal sin guion: el tema lo pones tú y puede cambiar cuando quieras",
   goal:"charlar libremente",
   opening:{ jp:"こんにちは。最近、何かに はまっていますか？", fu:"こんにちは。さいきん、なにかに はまっていますか？", es:"Hola. ¿Hay algo que te tenga enganchado últimamente?" } },

 { id:"fudousan", lvl:"N2", title:"Buscar piso",
   ai_role:"un agente inmobiliario", user_role:"alguien que busca piso para alquilar",
   situation:"El alumno busca un apartamento para alquilar",
   goal:"explicar qué tipo de piso quieres (zona, precio, tamaño)",
   opening:{ jp:"いらっしゃいませ。 どのような お部屋を お探しですか？", fu:"いらっしゃいませ。 どのような おへやを おさがしですか？", es:"Bienvenido. ¿Qué tipo de piso está buscando?" } },

 { id:"libre-n2", lvl:"N2", title:"Conversación libre",
   ai_role:"un amigo japonés culto con quien conversas de temas cotidianos o de actualidad", user_role:"tú mismo",
   situation:"Una charla sin guion que puede derivar hacia donde quieras",
   goal:"charlar libremente",
   opening:{ jp:"お疲れさま。今日は どんな 一日でしたか？", fu:"おつかれさま。きょうは どんな いちにちでしたか？", es:"¡Buenas! ¿Qué tal ha ido el día?" } },

 { id:"iken", lvl:"N1", title:"Dar tu opinión",
   ai_role:"un contertulio que debate contigo con respeto", user_role:"un participante en una conversación",
   situation:"Conversación sobre un tema social de actualidad",
   goal:"dar tu opinión sobre el teletrabajo y argumentarla",
   opening:{ jp:"最近、在宅勤務が 増えていますね。 あなたは どう 思いますか？", fu:"さいきん、ざいたくきんむが ふえていますね。 あなたは どう おもいますか？", es:"Últimamente crece el teletrabajo, ¿verdad? ¿Tú qué opinas?" } },

 { id:"libre-n1", lvl:"N1", title:"Conversación libre",
   ai_role:"un interlocutor japonés con quien puedes conversar en profundidad de cualquier tema", user_role:"tú mismo",
   situation:"Una conversación adulta sin guion, del día a día o de temas complejos, según prefieras",
   goal:"charlar libremente",
   opening:{ jp:"こんにちは。今日は 何について 話しましょうか。お任せしますよ。", fu:"こんにちは。きょうは なにについて はなしましょうか。おまかせしますよ。", es:"Hola. ¿De qué hablamos hoy? Lo dejo en tus manos." } }

];
