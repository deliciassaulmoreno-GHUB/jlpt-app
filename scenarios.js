/* scenarios.js — Escenarios de conversación (Japanese N1 Path)
   window.SCENARIOS = [ { id, lvl, title, ai_role, user_role, situation, goal, opening:{jp,fu,es} } ,
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

,
{id:"konbini",lvl:"N5",title:"En la tienda de conveniencia",ai_role:"un dependiente de una konbini",user_role:"un cliente",situation:"El alumno compra algo de comer y bebe en una tienda de conveniencia",goal:"pedir que calienten algo y pagar",opening:{jp:"いらっしゃいませ。 お弁当、 温めますか？",fu:"いらっしゃいませ。 おべんとう、 あたためますか？",es:"Bienvenido. ¿Le caliento el bento?"}},
{id:"eki-kippu",lvl:"N5",title:"Comprar un billete de tren",ai_role:"un empleado de la estación",user_role:"un pasajero",situation:"El alumno quiere comprar un billete de tren para ir a otra ciudad",goal:"pedir un billete indicando el destino y la hora",opening:{jp:"いらっしゃいませ。 どちらまで 行かれますか？",fu:"いらっしゃいませ。 どちらまで いかれますか？",es:"Bienvenido. ¿Hasta dónde va usted?"}},
{id:"toshokan",lvl:"N5",title:"En la biblioteca",ai_role:"un bibliotecario",user_role:"un usuario nuevo",situation:"El alumno quiere hacerse socio de la biblioteca y pedir prestado un libro",goal:"preguntar cómo hacerse socio y pedir un libro prestado",opening:{jp:"こんにちは。 図書館は 初めてですか？",fu:"こんにちは。 としょかんは はじめてですか？",es:"Buenas tardes. ¿Es su primera vez en la biblioteca?"}},
{id:"tenki-hanashi",lvl:"N5",title:"Hablar del tiempo con un vecino",ai_role:"un vecino amable",user_role:"un vecino",situation:"El alumno se encuentra con un vecino y charla brevemente sobre el tiempo",goal:"comentar el tiempo y despedirte con cortesía",opening:{jp:"こんにちは！ 今日は いい 天気ですね。",fu:"こんにちは！ きょうは いい てんきですね。",es:"¡Buenas tardes! Hoy hace buen tiempo, ¿verdad?"}},
{id:"takushii",lvl:"N5",title:"En un taxi",ai_role:"un taxista",user_role:"un pasajero",situation:"El alumno toma un taxi y le indica al conductor a dónde quiere ir",goal:"decir tu destino y preguntar cuánto tardará",opening:{jp:"いらっしゃいませ。 どちらまで ですか？",fu:"いらっしゃいませ。 どちらまで ですか？",es:"Bienvenido. ¿A dónde vamos?"}}
,
{id:"kaimono-fuku",lvl:"N4",title:"Comprar ropa",ai_role:"un dependiente de una tienda de ropa",user_role:"un cliente",situation:"El alumno busca una talla y color concretos de una prenda",goal:"pedir una talla diferente y preguntar si puedes probártela",opening:{jp:"いらっしゃいませ。 何か お探しですか？",fu:"いらっしゃいませ。 なにか おさがしですか？",es:"Bienvenido. ¿Busca algo en particular?"}},
{id:"yakusoku-henkou",lvl:"N4",title:"Cambiar una cita",ai_role:"un amigo japonés",user_role:"un amigo",situation:"El alumno necesita cambiar la hora de una cita que ya habían quedado",goal:"disculparte y proponer un nuevo día u hora",opening:{jp:"もしもし、明日の 約束の ことなんだけど。",fu:"もしもし、あしたの やくそくの ことなんだけど。",es:"¿Diga? Es sobre la cita de mañana."}},
{id:"apaato-kuujou",lvl:"N4",title:"Quejarte sobre el apartamento",ai_role:"el encargado del edificio de apartamentos",user_role:"un inquilino",situation:"El alumno tiene un problema en su apartamento (calefacción, ruido, agua) y llama al encargado",goal:"explicar el problema y pedir que lo solucionen",opening:{jp:"はい、管理人室です。 どうしましたか？",fu:"はい、かんりにんしつです。 どうしましたか？",es:"Sí, oficina del encargado. ¿Qué ocurre?"}},
{id:"toshokan-kaesu",lvl:"N4",title:"Devolver un libro con retraso",ai_role:"un bibliotecario",user_role:"un usuario",situation:"El alumno devuelve un libro de la biblioteca fuera de plazo y tiene que disculparse",goal:"disculparte por el retraso y preguntar si hay multa",opening:{jp:"あ、この本、返却期限を 過ぎていますね。",fu:"あ、このほん、へんきゃくきげんを すぎていますね。",es:"Ah, este libro ha pasado la fecha de devolución."}},
{id:"byoin-shoujou",lvl:"N4",title:"Describir síntomas en el médico",ai_role:"un médico",user_role:"un paciente",situation:"El alumno va al médico porque no se encuentra bien y debe describir sus síntomas",goal:"describir tus síntomas y desde cuándo los tienes",opening:{jp:"どうしましたか？ 今日は どんな 症状ですか？",fu:"どうしましたか？ きょうは どんな しょうじょうですか？",es:"¿Qué le pasa? ¿Qué síntomas tiene hoy?"}},
{id:"arubaito-mensetsu",lvl:"N4",title:"Entrevista para un trabajo a tiempo parcial",ai_role:"el encargado de una tienda que hace la entrevista",user_role:"un candidato",situation:"El alumno tiene una entrevista sencilla para un trabajo a tiempo parcial (arubaito)",goal:"decir por qué quieres el trabajo y qué días puedes trabajar",opening:{jp:"では、簡単な 質問を させて いただきますね。 まず、志望動機を 教えて ください。",fu:"では、かんたんな しつもんを させて いただきますね。 まず、しぼうどうきを おしえて ください。",es:"Bien, le voy a hacer unas preguntas sencillas. Primero, dígame el motivo de su solicitud."}}
,
{id:"kaisha-shoukai",lvl:"N3",title:"Presentar tu empresa",ai_role:"un cliente potencial en una reunión de negocios",user_role:"un empleado que presenta su empresa",situation:"El alumno tiene que explicar brevemente a qué se dedica su empresa en una reunión",goal:"explicar el sector y los servicios de tu empresa",opening:{jp:"本日は お時間を いただき、ありがとうございます。 早速ですが、御社について 教えて いただけますか？",fu:"ほんじつは おじかんを いただき、ありがとうございます。 さっそくですが、おんしゃに ついて おしえて いただけますか？",es:"Gracias por su tiempo hoy. Sin más preámbulos, ¿podría hablarme de su empresa?"}},
{id:"kinjo-toraburu",lvl:"N3",title:"Resolver un problema con un vecino",ai_role:"un vecino molesto por el ruido",user_role:"el vecino que ha causado el ruido",situation:"Un vecino se ha quejado del ruido y el alumno tiene que responder con calma",goal:"disculparte y explicar cómo vas a solucionarlo",opening:{jp:"すみません、昨夜 少し 音が うるさかったんですが。",fu:"すみません、ゆうべ すこし おとが うるさかったんですが。",es:"Disculpe, anoche hubo un poco de ruido."}},
{id:"tenshoku-soudan",lvl:"N3",title:"Consultar sobre un cambio de trabajo",ai_role:"un asesor de una agencia de empleo",user_role:"alguien que busca cambiar de trabajo",situation:"El alumno acude a una agencia de empleo para consultar sobre un posible cambio de trabajo",goal:"explicar por qué quieres cambiar de trabajo y qué buscas",opening:{jp:"本日は どのような ご相談で いらっしゃいましたか？",fu:"ほんじつは どのような ごそうだんで いらっしゃいましたか？",es:"¿Sobre qué le gustaría consultarnos hoy?"}},
{id:"hikkoshi-todoke",lvl:"N3",title:"Trámites de mudanza en el ayuntamiento",ai_role:"un funcionario del ayuntamiento",user_role:"alguien que se acaba de mudar",situation:"El alumno se ha mudado y tiene que hacer el trámite de cambio de domicilio",goal:"explicar que te has mudado y pedir los documentos necesarios",opening:{jp:"いらっしゃいませ。 本日は どのような ご用件でしょうか？",fu:"いらっしゃいませ。 ほんじつは どのような ごようけんでしょうか？",es:"Bienvenido. ¿En qué puedo ayudarle hoy?"}},
{id:"iken-taigai",lvl:"N3",title:"Expresar un desacuerdo con cortesía",ai_role:"un compañero de trabajo con una opinión distinta",user_role:"un compañero de trabajo",situation:"En una reunión de equipo, el alumno no está de acuerdo con una propuesta y quiere expresarlo con tacto",goal:"expresar tu desacuerdo de forma educada y proponer una alternativa",opening:{jp:"この 案で 進めようと 思うんですが、どう 思いますか？",fu:"この あんで すすめようと おもうんですが、どう おもいますか？",es:"Pienso que deberíamos seguir con esta propuesta. ¿Qué opinas?"}},
{id:"ryokou-toraburu",lvl:"N3",title:"Problema durante un viaje",ai_role:"el personal de recepción de un hotel",user_role:"un huésped con un problema",situation:"El alumno tiene un problema con su habitación de hotel (reserva equivocada, ruido, algo no funciona)",goal:"explicar el problema con claridad y pedir una solución",opening:{jp:"フロントで ございます。 何か 問題でも ございましたか？",fu:"フロントで ございます。 なにか もんだいでも ございましたか？",es:"Recepción, dígame. ¿Ha surgido algún problema?"}}
,
{id:"kaigi-teian",lvl:"N2",title:"Proponer una idea en una reunión",ai_role:"un jefe de equipo que escucha propuestas",user_role:"un empleado con una idea nueva",situation:"El alumno presenta una propuesta nueva en una reunión de trabajo y debe defenderla",goal:"presentar tu propuesta y responder a preguntas sobre su viabilidad",opening:{jp:"何か 新しい 提案が あると 聞きましたが、聞かせて もらえますか？",fu:"なにか あたらしい ていあんが あると ききましたが、きかせて もらえますか？",es:"He oído que tienes una nueva propuesta. ¿Nos la cuentas?"}},
{id:"kujou-taiou",lvl:"N2",title:"Atender una reclamación de un cliente",ai_role:"un cliente insatisfecho con un servicio",user_role:"un empleado de atención al cliente",situation:"El alumno tiene que atender a un cliente enfadado por un problema con un pedido",goal:"disculparte, entender el problema y ofrecer una solución",opening:{jp:"先日 注文した 商品が 届いていないんですが、どういう ことですか？",fu:"せんじつ ちゅうもんした しょうひんが とどいて いないんですが、どういう ことですか？",es:"El producto que pedí el otro día no ha llegado, ¿qué está pasando?"}},
{id:"hoken-soudan",lvl:"N2",title:"Consulta sobre un seguro",ai_role:"un agente de seguros",user_role:"alguien que busca contratar un seguro",situation:"El alumno quiere contratar un seguro médico o de vida y necesita entender las condiciones",goal:"preguntar sobre la cobertura y el precio del seguro",opening:{jp:"本日は 保険の ご相談との ことですが、どのような 保険を お考えですか？",fu:"ほんじつは ほけんの ごそうだんとの ことですが、どのような ほけんを おかんがえですか？",es:"Tengo entendido que quiere consultar sobre un seguro. ¿Qué tipo de seguro tiene en mente?"}},
{id:"kouen-sanka",lvl:"N2",title:"Participar en un debate sobre educación",ai_role:"un moderador de un foro sobre educación",user_role:"un participante con opinión propia",situation:"El alumno participa en un foro sobre el sistema educativo y debe compartir su punto de vista",goal:"dar tu opinión sobre las ventajas y desventajas del sistema educativo actual",opening:{jp:"では、現在の 教育制度について、皆さんの ご意見を 伺いたいと 思います。",fu:"では、げんざいの きょういくせいどに ついて、みなさんの ごいけんを うかがいたいと おもいます。",es:"Bien, me gustaría escuchar las opiniones de todos sobre el sistema educativo actual."}},
{id:"souzoku-soudan",lvl:"N2",title:"Consulta sobre una herencia",ai_role:"un abogado especializado en herencias",user_role:"alguien que necesita asesoramiento familiar",situation:"El alumno consulta a un abogado sobre un tema de herencia familiar",goal:"explicar la situación familiar y preguntar los pasos a seguir",opening:{jp:"本日は 相続の ことで ご相談との ことですが、詳しく お聞かせ いただけますか？",fu:"ほんじつは そうぞくの ことで ごそうだんとの ことですが、くわしく おきかせ いただけますか？",es:"Tengo entendido que quiere consultar sobre una herencia. ¿Podría contarme los detalles?"}},
{id:"shokuba-ningenkankei",lvl:"N2",title:"Hablar de un problema de relaciones en el trabajo",ai_role:"un compañero de confianza que te escucha",user_role:"alguien con un problema en el trabajo",situation:"El alumno tiene un problema de relación con un compañero de trabajo y busca consejo",goal:"explicar el problema y pedir consejo sobre cómo actuar",opening:{jp:"最近 元気ないね。 何か あったの？",fu:"さいきん げんきないね。 なにか あったの？",es:"Últimamente te veo decaído. ¿Ha pasado algo?"}},
{id:"intabyuu-taiou",lvl:"N2",title:"Responder a una entrevista periodística",ai_role:"un periodista que entrevista sobre un tema profesional",user_role:"un profesional entrevistado",situation:"El alumno es entrevistado sobre su trabajo o su sector para un artículo",goal:"responder con claridad sobre tu experiencia y perspectiva profesional",opening:{jp:"本日は お忙しい中、取材に ご協力いただき ありがとうございます。 早速ですが、この業界に 入られた きっかけを 教えて ください。",fu:"ほんじつは おいそがしい なか、しゅざいに ごきょうりょく いただき ありがとうございます。 さっそくですが、この ぎょうかいに はいられた きっかけを おしえて ください。",es:"Gracias por colaborar con la entrevista a pesar de su ocupada agenda. Sin más, cuénteme qué le motivó a entrar en este sector."}}
,
{id:"gakkai-happyou",lvl:"N1",title:"Presentar una investigación",ai_role:"un asistente al congreso que hace preguntas críticas",user_role:"un investigador que presenta su trabajo",situation:"El alumno presenta los resultados de su investigación en un congreso académico y debe responder a preguntas exigentes",goal:"defender tu metodología y conclusiones ante preguntas críticas",opening:{jp:"ご発表、興味深く 拝聴いたしました。 一点 お伺いしたいのですが、この 分析手法を 選ばれた 根拠は 何でしょうか？",fu:"ごはっぴょう、きょうみぶかく はいちょう いたしました。 いってん おうかがい したいのですが、この ぶんせきしゅほうを えらばれた こんきょは なんでしょうか？",es:"He escuchado su presentación con mucho interés. Quisiera preguntarle una cosa: ¿cuál fue el fundamento para elegir este método de análisis?"}},
{id:"keiei-kaigi",lvl:"N1",title:"Reunión de dirección sobre una crisis",ai_role:"un director general preocupado por una crisis empresarial",user_role:"un directivo que propone soluciones",situation:"La empresa atraviesa una crisis (caída de ventas, escándalo) y el alumno debe proponer una estrategia en una reunión de alto nivel",goal:"analizar la situación y proponer una estrategia concreta con argumentos sólidos",opening:{jp:"このままでは 業績の 悪化に 歯止めが かかりません。 何か 具体的な 打開策は ありますか？",fu:"このままでは ぎょうせきの あっかに はどめが かかりません。 なにか ぐたいてきな だかいさくは ありますか？",es:"Si seguimos así, no podremos frenar el deterioro de los resultados. ¿Tiene alguna estrategia concreta para salir de esta situación?"}},
{id:"rongi-shakaimondai",lvl:"N1",title:"Debate sobre un dilema social complejo",ai_role:"un contertulio con una postura opuesta a la tuya",user_role:"un participante en un debate televisivo",situation:"El alumno participa en un debate sobre un tema social polémico (por ejemplo, la inteligencia artificial y el empleo) frente a alguien con opinión contraria",goal:"defender tu postura con matices y rebatir los argumentos contrarios con respeto",opening:{jp:"AIの 普及は 雇用を 奪うと 主張される方が いますが、私は 必ずしも そうとは 言えないと 考えます。 いかがでしょうか？",fu:"AIの ふきゅうは こようを うばうと しゅちょうされる かたが いますが、わたしは かならずしも そうとは いえないと かんがえます。 いかがでしょうか？",es:"Hay quienes sostienen que la difusión de la IA quitará empleos, pero yo creo que eso no es necesariamente así. ¿Qué opina usted?"}},
{id:"saiban-shougen",lvl:"N1",title:"Testificar en un juicio simulado",ai_role:"un abogado que interroga al testigo",user_role:"un testigo de un incidente",situation:"El alumno testifica en un juicio simulado sobre un incidente que presenció",goal:"describir con precisión lo que viste, sin dejarte llevar por las preguntas capciosas",opening:{jp:"証人は 当日、事故現場に いらっしゃったと 伺っておりますが、間違い ございませんか？",fu:"しょうにんは とうじつ、じこげんばに いらっしゃったと うかがって おりますが、まちがい ございませんか？",es:"Tengo entendido que el testigo se encontraba en la escena del accidente aquel día, ¿es correcto?"}},
{id:"bunka-hyouron",lvl:"N1",title:"Crítica cultural en una tertulia",ai_role:"un crítico cultural con una visión provocadora",user_role:"un invitado a una tertulia sobre arte y sociedad",situation:"El alumno participa en una tertulia sobre el papel del arte contemporáneo en la sociedad actual",goal:"expresar una opinión matizada sobre el valor del arte contemporáneo",opening:{jp:"昨今の 現代アートは、もはや 芸術性より 話題性が 優先されているのでは ないでしょうか。 ご意見を 伺いたいです。",fu:"さっこんの げんだいアートは、もはや げいじゅつせいより わだいせいが ゆうせん されているのでは ないでしょうか。 ごいけんを うかがいたいです。",es:"En el arte contemporáneo actual, ¿no cree que se prioriza más la repercusión mediática que el valor artístico en sí? Me gustaría conocer su opinión."}},
{id:"kokusai-kaigi",lvl:"N1",title:"Negociación internacional",ai_role:"un representante de una empresa extranjera en una negociación",user_role:"un negociador que defiende los intereses de su empresa",situation:"El alumno participa en una negociación comercial con una contraparte extranjera sobre las condiciones de un contrato",goal:"defender las condiciones favorables para tu empresa mientras buscas un acuerdo razonable",opening:{jp:"御社の ご提案は 理解いたしましたが、価格面で もう少し 譲歩して いただく ことは 可能でしょうか。",fu:"おんしゃの ごていあんは りかい いたしましたが、かかくめんで もうすこし じょうほして いただく ことは かのうでしょうか。",es:"He entendido su propuesta, pero ¿sería posible que cedieran un poco más en el precio?"}},
{id:"kisha-kaiken",lvl:"N1",title:"Rueda de prensa tras un anuncio importante",ai_role:"un periodista que hace preguntas incisivas",user_role:"un portavoz que responde a la prensa",situation:"El alumno, como portavoz de una organización, responde a preguntas de la prensa tras un anuncio importante y potencialmente controvertido",goal:"responder con transparencia y calma a preguntas difíciles sin comprometer a la organización",opening:{jp:"今回の 発表について、事前に 十分な 説明が なかったのでは ないかという 指摘が ありますが、いかが お考えですか。",fu:"こんかいの はっぴょうに ついて、じぜんに じゅうぶんな せつめいが なかったのでは ないかという してきが ありますが、いかが おかんがえですか。",es:"Hay quienes señalan que no hubo suficiente explicación previa sobre este anuncio. ¿Qué opina al respecto?"}}
];
