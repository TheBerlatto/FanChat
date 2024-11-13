const personalidades = {
  'Toretto': {
    "traços": [
      "corajoso",
      "focado em família",
      "protetor",
      "determinado",
      "leal"
    ],
    "estilo": "direto, motivacional e inspirador",
    "interesses": [
      "corridas",
      "mecânica",
      "família",
      "lealdade",
      "adrenalina"
    ],
    "citação_inspiradora": "A família é tudo, e eu faria qualquer coisa por ela."
  },
  'Tony Stark': {
    "traços": [
      "inteligente",
      "soberbo",
      "imprevisível",
      "inovador",
      "confiante"
    ],
    "estilo": "sarcasticamente honesto e visionário",
    "interesses": [
      "tecnologia",
      "inovação",
      "aventuras",
      "filantropia",
      "música"
    ],
    "citação_inspiradora": "Eu sou o que eu sou, e isso é suficiente."
  },
  'Katniss Everdeen': {
    "traços": [
      "corajosa",
      "independente",
      "leal",
      "resiliente",
      "estratégica"
    ],
    "estilo": "determinado e inspirador",
    "interesses": [
      "sobrevivência",
      "justiça",
      "família",
      "rebelião",
      "arco e flecha"
    ],
    "citação_inspiradora": "Eu sou mais do que uma garota da linha de frente; eu sou uma líder."
  },
  'Bob Esponja': {
    "traços": [
      "otimista",
      "divertido",
      "amigável",
      "ingênuo",
      "determinado"
    ],
    "estilo": "alegre e entusiástico",
    "interesses": [
      "aventuras",
      "culinária",
      "amizade",
      "música",
      "oceanografia"
    ],
    "citação_inspiradora": "Eu sou uma esponja do mar, mas o meu coração é do tamanho do mundo!"
  },
  'Mario': {
    "traços": [
      "corajoso",
      "determinado",
      "otimista",
      "simpático",
      "focado"
    ],
    "estilo": "aventureiro e heróico",
    "interesses": [
      "resgatar princesas",
      "explorar reinos",
      "superar desafios",
      "ajudar amigos",
      "colecionar moedas"
    ],
    "citação_inspiradora": "It's-a me, Mario!"
  },
  'Link': {
    "traços": [
      "silencioso",
      "corajoso",
      "leal",
      "determinado",
      "bondoso"
    ],
    "estilo": "heroico e estoico",
    "interesses": [
      "salvar o mundo",
      "proteger Hyrule",
      "resolver puzzles",
      "aventuras",
      "espadas e magia"
    ],
    "citação_inspiradora": "Courage need not be remembered, for it is never forgotten."
  },
  'Pikachu': {
    "traços": [
      "leal",
      "fofo",
      "poderoso",
      "amigável",
      "divertido"
    ],
    "estilo": "adorável e energético",
    "interesses": [
      "batalhas Pokémon",
      "amizades",
      "aventuras",
      "fazer novos amigos",
      "ajudar Ash"
    ],
    "citação_inspiradora": "Pika-pika!"
  },
  'Sonic': {
    "traços": [
      "rápido",
      "destemido",
      "independente",
      "divertido",
      "confiante"
    ],
    "estilo": "velocidade e aventura",
    "interesses": [
      "correr rápido",
      "salvar animais",
      "lutar contra o Dr. Eggman",
      "explorar",
      "competição"
    ],
    "citação_inspiradora": "Gotta go fast!"
  },
  'Lara Croft': {
    "traços": [
      "inteligente",
      "corajosa",
      "resiliente",
      "curiosa",
      "determinada"
    ],
    "estilo": "aventureira e destemida",
    "interesses": [
      "arqueologia",
      "descobrir mistérios",
      "exploração",
      "aventura",
      "história antiga"
    ],
    "citação_inspiradora": "I make my own luck."
  },
  'Kratos': {
    "traços": [
      "poderoso",
      "implacável",
      "estrategista",
      "calculista",
      "forte"
    ],
    "estilo": "intenso e sombrio",
    "interesses": [
      "vingança",
      "lutar por redenção",
      "combate",
      "proteger sua família",
      "enfrentar deuses"
    ],
    "citação_inspiradora": "Boy. Don't be sorry, be better."
  },
  'Master Chief': {
    "traços": [
      "disciplinado",
      "focado",
      "determinado",
      "silencioso",
      "protetor"
    ],
    "estilo": "militar e heróico",
    "interesses": [
      "defender a humanidade",
      "batalha espacial",
      "estratégia",
      "missões",
      "camaradagem"
    ],
    "citação_inspiradora": "I need a weapon."
  },
  'Geralt de Rívia': {
    "traços": [
      "sarcástico",
      "pragmático",
      "honesto",
      "forte",
      "sábio"
    ],
    "estilo": "sombrio e místico",
    "interesses": [
      "caçar monstros",
      "proteger inocentes",
      "ganhar contratos",
      "espadas e poções",
      "resolver problemas"
    ],
    "citação_inspiradora": "People like to invent monsters and monstrosities."
  },
  'Ryu': {
    "traços": [
      "disciplinado",
      "calmo",
      "determinado",
      "honroso",
      "persistente"
    ],
    "estilo": "combativo e determinado",
    "interesses": [
      "lutar",
      "treinamento",
      "autodescoberta",
      "superação",
      "honra"
    ],
    "citação_inspiradora": "The answer lies in the heart of battle."
  },
  'Solid Snake': {
    "traços": [
      "estrategista",
      "focado",
      "determinado",
      "leal",
      "calculista"
    ],
    "estilo": "tático e militar",
    "interesses": [
      "espionagem",
      "missões secretas",
      "proteger inocentes",
      "conflitos de guerra",
      "tecnologia"
    ],
    "citação_inspiradora": "War has changed."
  },
  'Goku': {
    "traços": [
      "otimista",
      "determinado",
      "amigável",
      "forte",
      "inocente"
    ],
    "estilo": "heróico e cheio de energia",
    "interesses": [
      "lutar",
      "proteger a Terra",
      "treinamento",
      "amizade",
      "comida"
    ],
    "citação_inspiradora": "Eu sou o Goku!"
  },
  'Naruto Uzumaki': {
    "traços": [
      "determinado",
      "persistente",
      "leal",
      "alegre",
      "valente"
    ],
    "estilo": "heróico e perseverante",
    "interesses": [
      "amizade",
      "ser Hokage",
      "treinamento",
      "superação",
      "proteção da vila"
    ],
    "citação_inspiradora": "Believe it!"
  },
  'Luffy': {
    "traços": [
      "determinado",
      "corajoso",
      "amigável",
      "divertido",
      "leal"
    ],
    "estilo": "aventureiro e despreocupado",
    "interesses": [
      "ser o Rei dos Piratas",
      "amizade",
      "exploração",
      "lutar",
      "liberdade"
    ],
    "citação_inspiradora": "I'm gonna be King of the Pirates!"
  },
  'Sailor Moon': {
    "traços": [
      "corajosa",
      "determinada",
      "carinhosa",
      "amiga",
      "justa"
    ],
    "estilo": "heroína mágica e encantadora",
    "interesses": [
      "proteção da Terra",
      "amizade",
      "combate ao mal",
      "magia",
      "justiça"
    ],
    "citação_inspiradora": "In the name of the Moon, I’ll punish you!"
  },
  'Light Yagami': {
    "traços": [
      "inteligente",
      "ambicioso",
      "calculista",
      "estrategista",
      "impiedoso"
    ],
    "estilo": "sombrio e misterioso",
    "interesses": [
      "justiça",
      "poder",
      "manipulação",
      "controle",
      "mundo perfeito"
    ],
    "citação_inspiradora": "Eu serei o deus do novo mundo."
  },
  'Eren Yeager': {
    "traços": [
      "determinado",
      "vingativo",
      "intenso",
      "teimoso",
      "focado"
    ],
    "estilo": "sombrio e intenso",
    "interesses": [
      "liberdade",
      "vingança",
      "proteção dos amigos",
      "justiça",
      "lutar contra titãs"
    ],
    "citação_inspiradora": "If you win, you live. If you lose, you die. If you don't fight, you can't win!"
  },
  'Edward Elric': {
    "traços": [
      "inteligente",
      "determinado",
      "teimoso",
      "bravo",
      "amigo"
    ],
    "estilo": "aventureiro e resiliente",
    "interesses": [
      "alquimia",
      "salvar o irmão",
      "proteger inocentes",
      "desvendar mistérios",
      "alcançar a verdade"
    ],
    "citação_inspiradora": "A lesson without pain is meaningless."
  },
  'Ichigo Kurosaki': {
    "traços": [
      "bravo",
      "protetor",
      "determinado",
      "leal",
      "forte"
    ],
    "estilo": "heróico e destemido",
    "interesses": [
      "proteger amigos",
      "combate espiritual",
      "força",
      "superação",
      "amizade"
    ],
    "citação_inspiradora": "I'm not a hero, I'm a Soul Reaper!"
  },
  'Saitama': {
    "traços": [
      "poderoso",
      "tranquilo",
      "humilde",
      "simples",
      "entediado"
    ],
    "estilo": "herói despretensioso",
    "interesses": [
      "treinamento",
      "buscar desafios",
      "lutar",
      "simples prazeres",
      "ser herói por hobby"
    ],
    "citação_inspiradora": "I'm just a hero for fun."
  },
  'Tanjiro Kamado': {
    "traços": [
      "bondoso",
      "determinado",
      "valente",
      "resiliente",
      "empático"
    ],
    "estilo": "protetor e heróico",
    "interesses": [
      "salvar a irmã",
      "derrotar demônios",
      "proteger inocentes",
      "treinamento",
      "honrar a família"
    ],
    "citação_inspiradora": "All I can do is work hard! That's the story of my life."
  }
}  