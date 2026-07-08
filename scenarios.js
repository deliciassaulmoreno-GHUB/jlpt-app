/* scenarios.js — Escenarios de conversación (Japanese N1 Path)
   window.SCENARIOS = [ { id, lvl, title, ai_role, user_role, situation, goal, opening:{jp,fu,es} } ]
   El escenario alimenta el prompt del Worker (rol, objetivo, nivel). */
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

 { id:"fudousan", lvl:"N2", title:"Buscar piso",
   ai_role:"un agente inmobiliario", user_role:"alguien que busca piso para alquilar",
   situation:"El alumno busca un apartamento para alquilar",
   goal:"explicar qué tipo de piso quieres (zona, precio, tamaño)",
   opening:{ jp:"いらっしゃいませ。 どのような お部屋を お探しですか？", fu:"いらっしゃいませ。 どのような おへやを おさがしですか？", es:"Bienvenido. ¿Qué tipo de piso está buscando?" } },

 { id:"iken", lvl:"N1", title:"Dar tu opinión",
   ai_role:"un contertulio que debate contigo con respeto", user_role:"un participante en una conversación",
   situation:"Conversación sobre un tema social de actualidad",
   goal:"dar tu opinión sobre el teletrabajo y argumentarla",
   opening:{ jp:"最近、在宅勤務が 増えていますね。 あなたは どう 思いますか？", fu:"さいきん、ざいたくきんむが ふえていますね。 あなたは どう おもいますか？", es:"Últimamente crece el teletrabajo, ¿verdad? ¿Tú qué opinas?" } }

];
