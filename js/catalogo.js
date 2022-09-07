const productos = [
  {
    id: "0",
    nombre: "Marcadores de Flores",
    tachado: "80.00",
    precio: "75.00",
    composicion: "Marcadores para crochet",
    peso: "4 pz",
    metros: "n/a",
    grosor: "n/a",
    agujas: "n/a",
    carpeta: "marcadores",
    imagenes: ["marcadores-flores-gr-2.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      ["No.1", 0, "marcadores-flores-gr-1.jpg", "#0C46A2"],
      ["No.2", 0, "marcadores-flores-gr-2.jpg", "#0C46A2"],
      ["No.3", 0, "marcadore-de-puntos-crochet-tejido-flores.jpg", "#0C46A2"],
    ],
  },
  {
    id: "1",
    nombre: "Manteles individuales - Yute",
    tachado: "",
    precio: "220.00",
    composicion:
      "Kit de 4 manteles individuales con perforaciones para tejer orilla con hilo de yute rústico (puede tener variaciones de grosor)",
    peso: "200 gr",
    metros: "n/a",
    grosor: "Fino",
    agujas: "2 a 3 mm",
    carpeta: "mantelitos",
    imagenes: ["manteles-individuales-mesa-orilla-crochet-blancoynegro.jpg"],
    enlace: "",
    categoria: "kits",
    colores: [
      [
        "Negro y rojo",
        1,
        "manteles-individuales-mesa-orilla-crochet-negroyrojo.jpg",
        "#0C46A2",
      ],
      [
        "Verde",
        1,
        "manteles-individuales-mesa-orilla-crochet-verde.jpg",
        "#0C46A2",
      ],
    ],
  },
  {
    id: "2",
    nombre: "Polynesia",
    tachado: "",
    precio: "110.00",
    composicion: "56% Algodón, 22% Lino y 22% Viscosa",
    peso: "50 gr.",
    metros: "165 m",
    grosor: "Ligero",
    agujas: "3.5  a 4.5 mm",
    carpeta: "polynesia",
    imagenes: ["Polynesia-01.jpg"],
    enlace: "https://bazarama.com.mx/products/polynesia",
    categoria: "algodon lino",
    colores: [
      [
        "Negro",
        5,
        "lana-hilo-polynesia-tejer-algodon-lino-viscosa-negro-primavera-verano-katia-72-g-corazolana.jpg",
        "#B9A89B",
      ],
      [
        "Verde agua",
        3,
        "lana-hilo-polynesia-tejer-algodon-lino-viscosa-verde-blanquecino-primavera-verano-katia-76-g-corazolana.jpg",
        "#BCD8DC",
      ],
      [
        "Mostaza",
        2,
        "lana-hilo-polynesia-tejer-algodon-lino-viscosa-negro-primavera-verano-katia-69-g-corazolana.jpg",
        "#FBC46A",
      ],
    ],
  },
  {
    id: "3",
    nombre: "Re-Tape",
    tachado: "",
    precio: "105.00",
    composicion:
      "52% Poliéster Reciclado de botellas de plástico - 48% Algodón",
    peso: "50 gr.",
    metros: "100 m",
    grosor: "Medium",
    agujas: "5 a 5.5 mm",
    carpeta: "re-tape",
    imagenes: ["Algodon-sostenible-Re-Tape-01.jpg"],
    enlace: "https://bazarama.com.mx/products/re-tape",
    categoria: "algodon PET",
    colores: [
      [
        "Tejano claro",
        5,
        "lana-hilo-retape-tejer-poliester-reciclado-de-botellas-de-plastico-algodon-tejano-claro-primavera-verano-katia-203-g.jpg",
        "#CADBF3",
      ],
      [
        "Tejano",
        4,
        "lana-hilo-retape-tejer-poliester-reciclado-de-botellas-de-plastico-algodon-tejano-primavera-verano-katia-204-g.jpg",
        "#C4CDEC",
      ],
      [
        "Mostaza",
        2,
        "lana-hilo-retape-tejer-poliester-reciclado-de-botellas-de-plastico-algodon-mostaza-primavera-verano-katia-206-g.jpg",
        "#FAEFC4",
      ],
    ],
  },
  {
    id: "4",
    nombre: "Libretas grandes",
    tachado: "",
    precio: "70.00",
    composicion:
      "Libreta (realizada por @crafty_valens), tamaño media carta con 50 hojas blancas, papel bond de 90 gr., con doble portada y laminado mate",
    peso: "50 hojas",
    metros: "Bond de 90 gr.",
    grosor: "Media carta",
    agujas: "",
    carpeta: "libretas",
    imagenes: ["libreta-crochet-tejido.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      ["Knit", 10, "libreta-knit-agujas-tejido.jpg", "#eaa6cd"],
      ["Crochet", 10, "libreta-crochet-tejido.jpg", "#C7E935"],
      ["Bordado", 7, "libreta-bordado-tejido.jpg", "#A5CBF7"],
    ],
  },
  {
    id: "5",
    nombre: "Marcadores Vintage",
    tachado: "",
    precio: "75.00",
    composicion:
      "Marcadores para tejido, color dorados, en frasco de cristal reutilizado.",
    peso: "30 pz",
    metros: "n/a",
    grosor: "n/a",
    agujas: "n/a",
    carpeta: "marcadores",
    imagenes: ["marcadores-vintage-2.jpg"],
    enlace: "",
    categoria: "",
    colores: [["Dorado", 3, "marcadores-vintage-1.jpg", "#0C46A2"]],
  },
  {
    id: "6",
    nombre: "Indiecita",
    tachado: "",
    precio: "240.00",
    composicion: "100% Baby Alpaca peruana (luxury)",
    peso: "50 gr.",
    metros: "112 m",
    grosor: "Ligero",
    agujas: "3.5  a 4.5 mm",
    carpeta: "indiecita",
    imagenes: [
      "hilo-lana-babyalpaca-alpaca-tejido-natural-textil-indiecita-paloderosa.jpg",
    ],
    enlace: "",
    categoria: "",
    colores: [
      [
        "Crudo",
        10,
        "hilo-lana-babyalpaca-alpaca-tejido-natural-textil-indiecita-crudo.jpg",
        "#f6ded4",
      ],
      [
        "Arena",
        4,
        "hilo-lana-babyalpaca-alpaca-tejido-natural-textil-indiecita-arena.jpg",
        "#f6ded4",
      ],
      [
        "Palo de rosa",
        8,
        "hilo-lana-babyalpaca-alpaca-tejido-natural-textil-indiecita-paloderosa.jpg",
        "#bfa6cd",
      ],
      [
        "Mostaza",
        10,
        "hilo-lana-babyalpaca-alpaca-tejido-natural-textil-indiecita-mostaza.jpg",
        "#b99758",
      ],
      [
        "Verde",
        6,
        "hilo-lana-babyalpaca-alpaca-tejido-natural-textil-indiecita-verde.jpg",
        "#4e685b",
      ],
    ],
  },
  {
    id: "7",
    nombre: "Cancas",
    tachado: "",
    precio: "118.00",
    composicion: "85% algodón Tanguis y 15% alpaca peruana",
    peso: "50 gr.",
    metros: "153 m",
    grosor: "Fino",
    agujas: "3 a 3.5 mm",
    carpeta: "cancas",
    imagenes: ["hilo-lana-algodon-tejido-natural-textil-cancas-beige.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      [
        "Crudo",
        9,
        "hilo-lana-algodon-tejido-natural-textil-cancas-blanco.jpg",
        "#eaebed",
      ],
      [
        "Beige",
        0,
        "hilo-lana-algodon-tejido-natural-textil-cancas-beige.jpg",
        "#f6ded4",
      ],
      [
        "Gris",
        6,
        "hilo-lana-algodon-tejido-natural-textil-cancas-gris.jpg",
        "#8e8d8f",
      ],
      [
        "Palo de Rosa",
        7,
        "hilo-lana-algodon-tejido-natural-textil-cancas-paloderosa.jpg",
        "#bfa6cd",
      ],
      [
        "Azul marino",
        6,
        "hilo-lana-algodon-tejido-natural-textil-cancas-azulmarino.jpg",
        "#0b122e",
      ],
      [
        "Verde",
        6,
        "hilo-lana-algodon-tejido-natural-textil-cancas-verde.jpg",
        "#46775a",
      ],
      ,
      [
        "Rojo",
        6,
        "hilo-lana-algodon-tejido-natural-textil-cancas-rojo.jpg",
        "#46775a",
      ],
    ],
  },
  {
    id: "8",
    nombre: "Sipan",
    tachado: "",
    precio: "100.00",
    composicion: "100% Algodón Pima peruana",
    peso: "50 gr.",
    metros: "169 m",
    grosor: "Fino",
    agujas: "3 a 3.5 mm",
    carpeta: "sipan",
    imagenes: [
      "hilo-lana-algodon-pima-tejido-natural-textil--peru-sipan-pistache.jpg",
    ],
    enlace: "",
    categoria: "",
    colores: [
      [
        "Negro",
        6,
        "hilo-lana-algodon-pima-tejido-natural-textil--peru-sipan-negro.jpg",
        "#8e8d8f",
      ],
      [
        "Palo de Rosa",
        4,
        "hilo-lana-algodon-pima-tejido-natural-textil--peru-sipan-paloderosa.jpg",
        "#bfa6cd",
      ],
      [
        "Coral",
        6,
        "hilo-lana-algodon-pima-tejido-natural-textil--peru-sipan-coral.jpg",
        "#ee618c",
      ],
      [
        "Rojo",
        6,
        "hilo-lana-algodon-pima-tejido-natural-textil--peru-sipan-rojo.jpg",
        "#a3b5a9",
      ],
      [
        "Pistache",
        8,
        "hilo-lana-algodon-pima-tejido-natural-textil--peru-sipan-pistache.jpg",
        "#a3b5a9",
      ],
      [
        "Hueso",
        4,
        "hilo-lana-algodon-pima-tejido-natural-textil--peru-sipan-hueso.jpg",
        "#eaebed",
      ],
      [
        "Blanco",
        5,
        "hilo-lana-algodon-pima-tejido-natural-textil--peru-sipan-blanco.jpg",
        "#a3b5a9",
      ],
    ],
  },
  {
    id: "9",
    nombre: "Cotton Merino Tweed",
    tachado: "",
    precio: "180.00",
    composicion:
      "53% Algodón Reciclado RCS - 25% Merino Extrafine - 22% Poliéster Reciclado RCS",
    peso: "50 gr",
    metros: "105 m",
    grosor: "Medium",
    agujas: "4.5 a 5 mm",
    carpeta: "cottonmerino",
    imagenes: [
      "lana-hilo-cottonmerinotweed-tejer-algodon-reciclado-rcs-merino-extrafine-poliester-reciclado-rcs-ocre-otono-invierno-katia-507.jpeg",
    ],
    enlace: "",
    categoria: "",
    colores: [
      [
        "Ocre",
        9,
        "lana-hilo-cottonmerinotweed-tejer-algodon-reciclado-rcs-merino-extrafine-poliester-reciclado-rcs-ocre-otono-invierno-katia-507.jpeg",
        "#0C46A2",
      ],
      [
        "Rojo anaranjado",
        3,
        "lana-hilo-cottonmerinotweed-tejer-algodon-reciclado-rcs-merino-extrafine-poliester-reciclado-rcs-rojo-anaranjado-otono-invierno-katia-501.jpeg",
        "#0C46A2",
      ],
      [
        "Turquesa oscuro",
        0,
        "lana-hilo-cottonmerinotweed-tejer-algodon-reciclado-rcs-merino-extrafine-poliester-reciclado-rcs-turquesa-oscuro-otono-invierno-katia-504.jpeg",
        "#0C46A2",
      ],
      [
        "Azul",
        10,
        "lana-hilo-cottonmerinotweed-tejer-algodon-reciclado-rcs-merino-extrafine-poliester-reciclado-rcs-azul-otono-invierno-katia-508.jpeg",
        "#0C46A2",
      ],
    ],
  },
  {
    id: "10",
    nombre: "Antifaz sueño entre nubes",
    tachado: "",
    precio: "226.00",
    composicion: "Algodón reciclado",
    peso: "n/a",
    metros: "n/a",
    grosor: "Fino",
    agujas: "3 a 3.5 mm",
    carpeta: "kit-nubes",
    imagenes: [
      "antifaz-nube-suenos-azulbebe.jpg",
      "antifaz-nube-suenos-blanco.jpg",
      "antifaz-nube-suenos-azulmarino.jpg",
    ],
    enlace: "https://bazarama.com.mx/products/kit-suenos-entre-nubes",
    categoria: "kits",
    colores: [
      ["Azul claro", 2, "antifaz-nube-suenos-azulbebe.jpg", "#C5C4C0"],
      ["Azul marino", 2, "antifaz-nube-suenos-azulmarino.jpg", "#C5C4C0"],
      ["Lila bebé", 4, "antifaz-nube-suenos-lilabebe.jpg", "#C5C4C0"],
      ["Blanco", 0, "antifaz-nube-suenos-blanco.jpg", "#C5C4C0"],
    ],
  },
  {
    id: "11",
    nombre: "Asa lisa",
    tachado: "",
    precio: "75.00",
    composicion: "Imitación piel",
    peso: "n/a",
    metros: "120 cm",
    grosor: "2 cm",
    agujas: "n/a",
    carpeta: "asa-lisa",
    imagenes: [
      "asas-120cm-01.jpg",
      "correas-16.jpg",
      "correas-18.jpg",
      "post-julio-10.jpg",
      "correas-17.jpg",
    ],
    enlace: "https://bazarama.com.mx/products/asa-lisa-120-cm",
    categoria: "asas",
    colores: [
      ["Crudo", 16, "correas-16.jpg", "#F6F7F7"],
      ["Camel", 12, "correas-18.jpg", "#F8D2F5"],
      ["Negro", 0, "post-julio-10.jpg", "#F7C82E"],
    ],
  },
  {
    id: "12",
    nombre: "Asa Clutch",
    tachado: "",
    precio: "60.00",
    composicion: "Imitación piel",
    peso: "n/a",
    metros: "15 cm",
    grosor: "2 cm",
    agujas: "n/a",
    carpeta: "asa-clutch",
    imagenes: [
      "asas-clutch-01.jpg",
      "asas-clutch-crudo.jpg",
      "asas-clutch-camel.jpg",
      "asas-clutch-negro.jpg",
    ],
    enlace: "https://bazarama.com.mx/products/asa-clutch",
    categoria: "asas",
    colores: [
      ["Negro", 11, "asas-clutch-negro.jpg", "#F7C82E"],
      ["Crudo", 13, "asas-clutch-crudo.jpg", "#69ECD2"],
      ["Camel", 12, "asas-clutch-camel.jpg", "#F8D2F5"],
    ],
  },
  {
    id: "13",
    nombre: "Asas para clutch",
    tachado: "",
    precio: "80.00",
    composicion: "Tela con textura imitación piel",
    peso: "n/a",
    metros: "20 cm",
    grosor: "2.8 cm",
    agujas: "n/a",
    carpeta: "asa-clutch",
    imagenes: ["asas-clutch-coral.jpg"],
    enlace: "",
    categoria: "",
    colores: [["Coral", 8, "asas-clutch-coral.jpg", "#0C46A2"]],
  },
  {
    id: "14",
    nombre: "Asa para coser",
    tachado: "",
    precio: "60.00",
    composicion: "Imitación piel",
    peso: "n/a",
    metros: "60 cm",
    grosor: "2 cm",
    agujas: "n/a",
    carpeta: "asa-coser",
    imagenes: [
      "asas-paracoser-01.jpg",
      "correas-camel.jpg",
      "correas-crudo.jpg",
      "correas-negras.jpg",
    ],
    enlace: "https://bazarama.com.mx/products/asa-lisa-con-ojales",
    categoria: "asas",
    colores: [
      ["Crudo", 6, "correas-crudo.jpg", "#B9F0EA"],
      ["Camel", 0, "correas-camel.jpg", "#F0D98C"],
      ["Negro", 0, "correas-negras.jpg", "#FDC8B2"],
    ],
  },
  {
    id: "15",
    nombre: "Asa Ajustable grande",
    tachado: "",
    precio: "160.00",
    composicion: "100% Algodón, imitación piel",
    peso: "n/a",
    metros: "130 cm de bandola a bandola",
    grosor: "3.3 cm",
    agujas: "n/a",
    carpeta: "asa-ajustable-gr",
    imagenes: [
      "asa-ajustable-gr.jpg",
      "asa-ajustable-verde-claro.jpg",
      "asa-ajustable-verde-militar.jpg",
      "asa-ajustable-cafe.jpg",
      "asa-ajustable-amarillo.jpg",
      "asa-ajustable-crudo.jpg",
      "asa-ajustable-azul-marino.jpg",
      "asa-ajustable-negro.jpg",
    ],
    enlace: "https://bazarama.com.mx/products/asa-ajustable-grande",
    categoria: "asas",
    colores: [["Crudo", 1, "asa-ajustable-crudo.jpg", "#9F8073"]],
  },
  {
    id: "16",
    nombre: "Asa Ajustable chica",
    tachado: "",
    precio: "140.00",
    composicion: "100% Algodón, imitación piel",
    peso: "n/a",
    metros: "100 cm",
    grosor: "3.3 cm",
    agujas: "n/a",
    carpeta: "asa-ajustable-ch",
    imagenes: [
      "asas-ajustables.jpg",
      "asa-ajustable-verde-claro.jpg",
      "asa-ajustable-verde-militar.jpg",
      "asa-ajustable-cafe.jpg",
      "asa-ajustable-amarillo.jpg",
      "asa-ajustable-crudo.jpg",
      "asa-ajustable-azul-marino.jpg",
      "asa-ajustable-negro.jpg",
    ],
    enlace: "https://bazarama.com.mx/products/asa-ajustables",
    categoria: "asas",
    colores: [["Amarillo", 1, "asa-ajustable-amarillo.jpg", "#FFFFFF"]],
  },
  {
    id: "17",
    nombre: "Marcadores Casitas",
    tachado: "",
    precio: "75.00",
    composicion: "Marcadores de puntos en forma de casitas",
    peso: "n/a",
    metros: "n/a",
    grosor: "Medium",
    agujas: "n/a",
    carpeta: "marcadores",
    imagenes: ["casitas.jpg"],
    enlace: "",
    categoria: "marcadores",
    colores: [
      [
        "Casita1 crochet",
        1,
        "marcadore-de-puntos-crochet-tejido-casitas1.jpg",
        "#0C46A2",
      ],
      [
        "Casita2 crochet",
        0,
        "marcadore-de-puntos-crochet-tejido-casitas2.jpg",
        "#0C46A2",
      ],
      [
        "Casita3 knit",
        2,
        "marcadore-de-puntos-crochet-tejido-casitas3.jpg",
        "#0C46A2",
      ],
      [
        "Casita4 knitt",
        0,
        "marcadore-de-puntos-crochet-tejido-casitas4.jpg",
        "#0C46A2",
      ],
    ],
  },
  {
    id: "18",
    nombre: "Misina - Lana Merino",
    tachado: "",
    precio: "150.00",
    composicion: "100% Lana Merino",
    peso: "50 gr.",
    metros: "100 m",
    grosor: "Medium",
    agujas: "5 mm",
    carpeta: "misina",
    imagenes: ["misina-crudo.jpg"],
    enlace: "https://bazarama.com/producto/5f87e4ef83f4a916a3335d35",
    categoria: "lana",
    colores: [["Crudo", 4, "misina-crudo.jpg", "#ECE8E5"]],
  },
  {
    id: "19",
    nombre: "Fresh - Lino",
    tachado: "145.00",
    precio: "100.00",
    composicion: "100% Lino",
    peso: "50 gr.",
    metros: "163 m",
    grosor: "Super fino",
    agujas: "2 a 3 mm",
    carpeta: "fresh",
    imagenes: ["lino-grisperla-r.jpg"],
    enlace: "https://bazarama.com.mx/products/fresh-lino",
    categoria: "lino",
    colores: [["Gris perla", 4, "lino-grisperla-r.jpg", "#E1E0DE"]],
  },
  {
    id: "20",
    nombre: "Botón imantado",
    tachado: "",
    precio: "320.00",
    composicion:
      "Botón de concreto imantado (colaboración con @concretoscuro) y bolsa para guardar",
    peso: "300 gr.",
    metros: "n/a",
    grosor: "n/a",
    agujas: "n/a",
    carpeta: "boton",
    imagenes: ["boton-concreto-imantado-colores.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      ["Blanco", 2, "boton-concreto-imantado-blanco.jpg", "#f8f8f7"],
      [
        "Amarillo bebé",
        2,
        "boton-concreto-imantado-amarillo-bebe.jpg",
        "#e9e5d5",
      ],
      ["Salmón", 2, "boton-concreto-imantado-salmon.jpg", "#fbe6e6"],
      ["Aqua", 2, "boton-concreto-imantado-aqua.jpg", "#ddf3f2"],
      ["Lila bebé", 4, "boton-concreto-imantado-lila-bebe.jpg", "#f5f3fd"],
      ["Negro", 0, "boton-concreto-imantado-negro.jpg", "#474747"],
    ],
  },
  {
    id: "21",
    nombre: "Botones de cerámica",
    tachado: "",
    precio: "120.00",
    composicion:
      "Paquete de 6 Botones de cerámica de 16 mm de diámetro, con dos orificios para poder coser a la tus proyectos",
    peso: "100 gr.",
    metros: "n/a",
    grosor: "n/a",
    agujas: "n/a",
    carpeta: "botones",
    imagenes: ["boton-ceramica-rosa-dorado.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      ["Beige óxido", 1, "boton-ceramica-beige-viejo.jpg", "#e9e5d5"],
      ["Café óxido", 1, "boton-ceramica-cafe-oxidado.jpg", "#fbe6e6"],
      ["Fuego", 1, "boton-ceramica-rojos-amarillos.jpg", "#ddf3f2"],
      ["Verde Agua", 1, "boton-ceramica-verdeagua-dorado.jpg", "#474747"],
    ],
  },
  {
    id: "22",
    nombre: "Dijes pasión textil",
    tachado: "",
    precio: "155.00",
    composicion: "Dijes de cerámica creados a mano, colaboración Asis Cemeca",
    peso: "100 gr.",
    metros: "n/a",
    grosor: "n/a",
    agujas: "n/a",
    carpeta: "accesorios",
    imagenes: ["dijes.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      ["Aguja bordadora", 5, "aguja.jpg", "#0C46A2"],
      ["Ganchillo ganchillera", 5, "ganchillo.jpg", "#0C46A2"],
      ["Agujas circulares pro", 5, "circulares.jpg", "#0C46A2"],
    ],
  },
  {
    id: "23",
    nombre: "Cotton Filled 3 mm",
    tachado: "",
    precio: "150.00",
    composicion: "100% Algodón Reciclado de alta calidad",
    peso: "200 gr.",
    metros: "100 m",
    grosor: "L",
    agujas: "4 a 7 mm",
    carpeta: "cotton-filled-3mm",
    imagenes: ["cotton-filled-3mm-algodon-reciclado-tejido-azulmunsell.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      [
        "Azul gris",
        1,
        "cotton-filled-3mm-algodon-reciclado-tejido-azulgris.jpg",
        "#0C46A2",
      ],
      [
        "Azul Munsell",
        1,
        "cotton-filled-3mm-algodon-reciclado-tejido-azulmunsell.jpg",
        "#0C46A2",
      ],
      [
        "Azul Teal",
        3,
        "cotton-filled-3mm-algodon-reciclado-tejido-azulteal.jpg",
        "#0C46A2",
      ],
    ],
  },
  {
    id: "24",
    nombre: "Cordón",
    tachado: "",
    precio: "160.00",
    composicion: "100% Algodon reciclado",
    peso: "250 - 260 gr",
    metros: "85 - 95 m",
    grosor: "XL",
    agujas: "6-10 mm",
    carpeta: "cordon",
    imagenes: [
      "color-Cord-amarillo-r.jpg",
      "color-Cord-amarillosoft-r.jpg",
      "color-Cord-azulagua-r.jpg",
      "color-Cord-blanco-r.jpg",
      "color-Cord-grisazulado-r.jpg",
      "color-Cord-rojo-r.jpg",
      "color-Cord-ultramarino-r.jpg",
      "color-Cord-verdeaceituna-r.jpg",
      "color-Cord-vino-r.jpg",
    ],
    enlace: "https://bazarama.com.mx/products/cordon-de-algodon-reciclado",
    categoria: "cordon",
    colores: [
      ["Blanco", 3, "color-Cord-blanco-r.jpg", "#DDD8D4"],
      ["Crudo", 5, "color-Cord-crudo-r.jpg", "#343952"],
      ["Craft", 5, "color-Cord-craft-r.jpg", "#343952"],
      ["Verde aceituna", 2, "color-Cord-verdeaceituna-r.jpg", "#D3CD9E"],
      ["Verde", 4, "Cordon-algodon-hilo-verde.jpg", "#3aa935"],
      ["Verde Bosque", 4, "Cordon-algodon-hilo-verdebosque.jpg", "#006532"],
      ["Azul Agua", 4, "color-Cord-azulagua-r.jpg", "#B3E4E8"],
      ["Gris Azulado", 1, "color-Cord-grisazulado-r.jpg", "#7F8ABA"],
      ["Azul rey", 4, "Cordon-algodon-hilo-azulrey.jpg", "#0040f2"],
      ["Ultra marino", 4, "color-Cord-ultramarino-r.jpg", "#343952"],
      ["Vino", 0, "color-Cord-vino-r.jpg", "#343952"],
      ["Rojo", 4, "color-Cord-rojo-r.jpg", "#343952"],
      ["Ocre", 8, "Cordon-algodon-hilo-ocre.jpg", "#c9a306"],
      ["Amarillo mango", 0, "color-Cord-amarillo-r.jpg", "#fcce08"],
      ["Amarillo soft", 4, "color-Cord-amarillosoft-r.jpg", "#f4e295"],
      ["Negro", 8, "color-Cord-negro-r.jpg", "#343952"],
    ],
  },
  {
    id: "25",
    nombre: "Algodón Trenzado",
    tachado: "",
    precio: "150.00",
    composicion: "100% Algodon reciclado",
    peso: "250 gr.",
    metros: "250 m",
    grosor: "Medium",
    agujas: "4.5 a 5 mm",
    carpeta: "algodon-trenzado",
    imagenes: ["algodon-trenzado-reciclado-cotton-macrame-rosachicle.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      [
        "Ángel",
        2,
        "algodon-trenzado-reciclado-cotton-macrame-blanco.jpg",
        "#FFFFFF",
      ],
      [
        "Luisa",
        2,
        "algodon-trenzado-reciclado-cotton-macrame-azul.jpg",
        "#0ab4ef",
      ],
      [
        "Joyce",
        4,
        "algodon-trenzado-reciclado-cotton-macrame-azulpetroleo.jpg",
        "#006699",
      ],
      [
        "Violetta",
        1,
        "algodon-trenzado-reciclado-cotton-macrame-bugambilia.jpg",
        "#760cc1",
      ],
      [
        "Martha",
        0,
        "algodon-trenzado-reciclado-cotton-macrame-rojo.jpg",
        "#bf160d",
      ],
      [
        "Gabriela",
        3,
        "algodon-trenzado-reciclado-cotton-macrame-sandia.jpg",
        "#f45c58",
      ],
      [
        "Amanda",
        1,
        "algodon-trenzado-reciclado-cotton-macrame-rosachicle.jpg",
        "#f786d4",
      ],
      [
        "Biaani",
        2,
        "algodon-trenzado-reciclado-cotton-macrame-damasco.jpg",
        "#f9c3ac",
      ],
      [
        "Lirio",
        1,
        "algodon-trenzado-reciclado-cotton-macrame-marron.jpg",
        "#775647",
      ],
      [
        "Karina",
        1,
        "algodon-trenzado-reciclado-cotton-macrame-mostaza.jpg",
        "#e8b207",
      ],
      [
        "Annie",
        0,
        "algodon-trenzado-reciclado-cotton-macrame-verdelimon.jpg",
        "#c1e854",
      ],
      [
        "Ixchel",
        2,
        "algodon-trenzado-reciclado-cotton-macrame-verde.jpg",
        "#5ea519",
      ],
    ],
  },
  {
    id: "26",
    nombre: "Algodón Reciclado",
    tachado: "",
    precio: "75.00",
    composicion: "55% Algodon reciclado 45% PAC",
    peso: "50 gr",
    metros: "160 m",
    grosor: "Fino",
    agujas: "3 a 3.5 mm",
    carpeta: "algodon-reciclado",
    imagenes: [
      "color-estambre-amarilloneon-r.jpg",
      "color-estambre-azulaqua-r.jpg",
      "color-estambre-azulcielo-r.jpg",
      "color-estambre-azulmarino-r.jpg",
      "color-estambre-azulmezclilla-r.jpg",
      "color-estambre-azulmezclilla-v2.jpg",
      "color-estambre-blanco-r.jpg",
      "color-estambre-borgonia-r.jpg",
      "color-estambre-capuchino-r.jpg",
      "color-estambre-chocolate-r.jpg",
      "color-estambre-coral-r.jpg",
      "color-estambre-craft-r.jpg",
      "color-estambre-crudo-r.jpg",
      "color-estambre-gris-r.jpg",
      "color-estambre-lila-r.jpg",
      "color-estambre-lilabebe-r.jpg",
      "color-estambre-mostaza-r.jpg",
      "color-estambre-naranjaneon-r.jpg",
      "color-estambre-negro-r.jpg",
      "color-estambre-rojo-r.jpg",
      "color-estambre-rojoescarlata.jpg",
      "color-estambre-rosabebe-r.jpg",
      "color-estambre-rosafrances.jpg",
      "color-estambre-rosamex-r.jpg",
      "color-estambre-verde-r.jpg",
      "color-estambre-verdeesmeralda-r.jpg",
      "color-estambre-verdemanzana-r.jpg",
      "color-estambre-verdeolivo-r.jpg",
      "color-estambre-verdepino-r.jpg",
    ],
    enlace: "https://bazarama.com.mx/products/estambre-algodon-reciclado",
    categoria: "algodon",
    colores: [
      ["Aguamarina", 6, "color-estambre-aguamarina.jpg", "#9DF3FB"],
      ["Azul aqua", 0, "color-estambre-azulaqua-r.jpg", "#9DF3FB"],
      ["Azul bebé", 0, "color-estambre-azulcielo-r.jpg", "#D5E1F2"],
      ["Azul cielo", 0, "color-estambre-azulcielo2.jpg", "#D5E1F2"],
      ["Azul eléctrico", 0, "color-estambre-azulelectrico.jpg", "#29B2F8"],
      ["Azul jeans", 0, "color-estambre-azulmezclilla-r.jpg", "#8299B7"],
      ["Azul mezclilla", 4, "color-estambre-azulmezclilla-v2.jpg", "#8299B7"],
      ["Azul rey", 0, "color-estambre-azulrey.jpg", "#4A72DB"],
      ["Azul marino", 4, "color-estambre-azulmarino-r.jpg", "#3E476C"],
      ["Blanco", 8, "color-estambre-blanco-r.jpg", "#F1EEE9"],
      ["Azúcar", 3, "color-estambre-azucar.jpg", "#f9f6ea"],
      ["Marfil", 0, "color-estambre-marfil.jpg", "#FFF9F0"],
      ["Crudo", 7, "color-estambre-crudo-r.jpg", "#EAD5C1"],
      ["Beige", 8, "color-estambre-beige.jpg", "#EAD5C1"],
      ["Craft", 10, "color-estambre-craft-r.jpg", "#E2D2C4"],
      ["Capuchino", 5, "color-estambre-capuchino-r.jpg", "#E2D2C4"],
      ["Chocolate", 10, "color-estambre-chocolate-r.jpg", "#351916"],
      ["Borgoña", 7, "color-estambre-borgonia-r.jpg", "#952741"],
      ["Rojo escarlata", 0, "color-estambre-rojoescarlata.jpg", "#8D0621"],
      ["Rojo", 9, "color-estambre-rojo-r.jpg", "#F35970"],
      ["Rosa mexicano", 0, "color-estambre-rosamex-r.jpg", "#D9306A"],
      ["Fucsia", 1, "color-estambre-fucsia.jpg", "#FAA2DA"],
      ["Rosa chicle", 10, "color-estambre-rosachicle.jpg", "#FAA2DA"],
      ["Rosa frances", 9, "color-estambre-rosafrances.jpg", "#F4B0CB"],
      ["Rosa bebé", 10, "color-estambre-rosabebe-r.jpg", "#FEDBEF"],
      ["Lila bebé", 0, "color-estambre-lilabebe-r.jpg", "#ECC6E0"],
      ["Malva", 0, "color-estambre-lila-r.jpg", "#7565aa"],
      ["Lavanda", 11, "color-estambre-lavanda.jpg", "#6e57c1"],
      [
        "Morado",
        10,
        "hilo-algodon-reciclado-tejido-natural-textil-jeans-morado.jpg",
        "#6e57c1",
      ],
      ["Coral", 11, "color-estambre-coral-r.jpg", "#f78b61"],
      ["Caldera", 9, "color-estambre-caldera.jpg", "#f78b61"],
      ["Naranja neón", 0, "color-estambre-naranjaneon-r.jpg", "#F9794E"],
      [
        "Amarillo mango",
        7,
        "hilo-algodon-reciclado-tejido-natural-textil-jeans-mango.jpg",
        "#F9794E",
      ],
      ["Mostaza", 8, "color-estambre-mostaza-r.jpg", "#e5ac0e"],
      ["Negro", 0, "color-estambre-negro-r.jpg", "#000000"],
      ["Negro denim", 21, "color-estambre-negro-denim.jpg", "#000000"],
      ["Gris rhino", 1, "color-estambre-grisrhino.jpg", "#D6D5D3"],
      ["Gris perla", 4, "color-estambre-gris-r.jpg", "#D6D5D3"],
      ["Verde militar", 5, "color-estambre-verdeolivo-r.jpg", "#08594D"],
      ["Verde esmeralda", 1, "color-estambre-verdeesmeralda-r.jpg", "#08594D"],
      ["Verde pino", 4, "color-estambre-verdepino-r.jpg", "#257957"],
      ["Verde", 2, "color-estambre-verde-r.jpg", "#9CC07A"],
      ["Verde manzana", 0, "color-estambre-verdemanzana-r.jpg", "#bdd36a"],
      ["Verde bebé", 10, "color-estambre-verdebebe.jpg", "#DBDCA1"],
      ["Verde neón", 0, "color-estambre-verdeneon.jpg", "#AFD8A5"],
      ["Amarillo neón", 0, "color-estambre-amarilloneon-r.jpg", "#ffec00"],
    ],
  },
  {
    id: "27",
    nombre: "Project bag",
    tachado: "",
    precio: "300.00",
    composicion: "Loneta / algodón / asa imitación piel",
    peso: "n/a",
    metros: "25 x 12 x 21 cm",
    grosor: "Loneta",
    agujas: "n/a",
    carpeta: "bolsa-proyecto",
    imagenes: ["bolsa_proyectos_tejido_triangulos.jpg"],
    enlace: "",
    categoria: "bolsas",
    colores: [
      ["Ovejas", 1, "bolsa_proyectos_tejido_ovejas.jpg", "#0C46A2"],
      ["Triángulos", 0, "bolsa_proyectos_tejido_triangulos.jpg", "#0C46A2"],
    ],
  },
  {
    id: "28",
    nombre: "Gancho 1.5 mm",
    tachado: "",
    precio: "60.00",
    composicion: "Gancho de acero con mango de bambú de 1.5 mm pintado a mano",
    peso: "5.9 gr",
    metros: "13.5 cm",
    grosor: "1.5 cm",
    agujas: "1.5 mm",
    carpeta: "ganchos/1-5mm",
    imagenes: ["gancho_bambu_crochet_1-5mm-floresyhojas.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      [
        "Violetas",
        1,
        "gancho_bambu_crochet_1-5mm-floresvioletas.jpg",
        "#0C46A2",
      ],
      ["Aqua", 1, "gancho_bambu_crochet_1-5mm-aquafloresyhojas.jpg", "#0C46A2"],
      ["Limones", 2, "gancho_bambu_crochet_1-5mm-limones.jpg", "#0C46A2"],
      [
        "Citrus",
        2,
        "gancho_bambu_crochet_1-5mm-limonesytoronjas.jpg",
        "#0C46A2",
      ],
      [
        "Azul profundo",
        1,
        "gancho_bambu_crochet_1-5mm-hojasazules.jpg",
        "#0C46A2",
      ],
      ["Durazno", 1, "gancho_bambu_crochet_1-5mm-duraznohojas.jpg", "#0C46A2"],
      ["Naranjas", 1, "gancho_bambu_crochet_1-5mm-naranjas.jpg", "#0C46A2"],
      ["Campo", 2, "gancho_bambu_crochet_1-5mm-floresyhojas.jpg", "#0C46A2"],
    ],
  },
  {
    id: "29",
    nombre: "Gancho 3 mm",
    tachado: "60.00",
    precio: "AGOTADOS",
    composicion: "Gancho de aluminio con mango de bambú de 3 mm pintado a mano",
    peso: "5.9 gr",
    metros: "13.5 cm",
    grosor: "1.5 cm",
    agujas: "3 mm",
    carpeta: "ganchos/3mm",
    imagenes: ["gancho_bambu_crochet_3mm-naranjas.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      [
        "Durazno 3.5mm",
        1,
        "gancho_bambu_crochet_3mm-duraznohojas.jpg",
        "#0C46A2",
      ],
      ["Naranjas", 1, "gancho_bambu_crochet_3mm-naranjas.jpg", "#0C46A2"],
    ],
  },
  {
    id: "30",
    nombre: "Gancho 4 mm",
    tachado: "60.00",
    precio: "AGOTADOS",
    composicion: "Gancho de aluminio con mango de bambú de 4 mm pintado a mano",
    peso: "5.9 gr",
    metros: "13.5 cm",
    grosor: "1.5 cm",
    agujas: "4 mm",
    carpeta: "ganchos/4mm",
    imagenes: ["gancho_bambu_crochet_4mm-naranjas.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      ["Aqua", 1, "gancho_bambu_crochet_4mm-aquaflores.jpg", "#0C46A2"],
      ["Durazno", 1, "gancho_bambu_crochet_4mm-duraznohojas.jpg", "#0C46A2"],
      ["Naranjas", 1, "gancho_bambu_crochet_4mm-naranjas.jpg", "#0C46A2"],
    ],
  },
  {
    id: "31",
    nombre: "Gancho 6 mm",
    tachado: "",
    precio: "60.00",
    composicion: "Gancho de aluminio con mango de bambú de 6 mm pintado a mano",
    peso: "5.9 gr",
    metros: "13.5 cm",
    grosor: "1.5 cm",
    agujas: "6 mm",
    carpeta: "ganchos/6mm",
    imagenes: ["gancho_bambu_crochet_6mm-naranjas.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      ["Aqua", 3, "gancho_bambu_crochet_6mm-aquaflores.jpg", "#0C46A2"],
      ["Limones", 2, "gancho_bambu_crochet_6mm-limones.jpg", "#0C46A2"],
      ["Citrus", 1, "gancho_bambu_crochet_6mm-limonesytoronjas.jpg", "#0C46A2"],
      [
        "Azul profundo",
        1,
        "gancho_bambu_crochet_6mm-hojasazules.jpg",
        "#0C46A2",
      ],
      ["Durazno", 2, "gancho_bambu_crochet_6mm-duraznosflores.jpg", "#0C46A2"],
      ["Naranjas", 1, "gancho_bambu_crochet_6mm-naranjas.jpg", "#0C46A2"],
    ],
  },
  {
    id: "32",
    nombre: "Lana Mexicana",
    tachado: "",
    precio: "50.00",
    composicion: "Lana Mexicana, producción 100% hecha en México",
    peso: "80 gr.",
    metros: "---",
    grosor: "Medium",
    agujas: "5 a 6 mm",
    carpeta: "lanamex",
    imagenes: ["hilo-lana-natural-textil-tejido-mexico-rustica-cesto.jpg"],
    enlace: "",
    categoria: "",
    colores: [
      [
        "Aqua",
        0,
        "hilo-lana-natural-textil-tejido-mexico-rustica-aqua.jpg",
        "#0C46A2",
      ],
      [
        "Camel",
        0,
        "hilo-lana-natural-textil-tejido-mexico-rustica-camel2.jpg",
        "#0C46A2",
      ],
      [
        "Baya Cósmica",
        2,
        "hilo-lana-natural-textil-tejido-mexico-rustica-cosmicberry.jpg",
        "#0C46A2",
      ],
      [
        "Limón Twist",
        3,
        "hilo-lana-natural-textil-tejido-mexico-rustica-lemontwist2.jpg",
        "#0C46A2",
      ],
      [
        "Resplandor de otoño",
        3,
        "hilo-lana-natural-textil-tejido-mexico-rustica-naranjaintenso.jpg",
        "#0C46A2",
      ],
      [
        "Rojo",
        3,
        "hilo-lana-natural-textil-tejido-mexico-rustica-rojo.jpg",
        "#0C46A2",
      ],
      [
        "Rosa neón",
        4,
        "hilo-lana-natural-textil-tejido-mexico-rustica-rosaneon.jpg",
        "#0C46A2",
      ],
      [
        "Ultravioleta",
        3,
        "hilo-lana-natural-textil-tejido-mexico-rustica-ultravioleta.jpg",
        "#0C46A2",
      ],
      [
        "Verde Esmeralda",
        3,
        "hilo-lana-natural-textil-tejido-mexico-rustica-verdeesmeralda.jpg",
        "#0C46A2",
      ],
      [
        "Verde Menta",
        3,
        "hilo-lana-natural-textil-tejido-mexico-rustica-verdementa.jpg",
        "#0C46A2",
      ],
      [
        "Vino Tinto",
        3,
        "hilo-lana-natural-textil-tejido-mexico-rustica-vinotinto.jpg",
        "#0C46A2",
      ],
    ],
  },
];

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++ FUNCIONES +++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
crearCatalogo = function () {
  let catalogoContainer = document.getElementById("catalogo");
  let holderHTML = "";
  let len = productos.length - 1;
  for (let i = len; i >= 0; i--) {
    let $variaciones = productos[i].colores.filter((item) => {
      if (item[1] > 0) {
        return item;
      }
    });

    if ($variaciones.length !== 0) {
      holderHTML += `<div class="producto ${productos[i].categoria}" onclick="mostrarInfo(${productos[i].id})">`;
    } else {
      holderHTML += `<div class="producto ${productos[i].categoria}")" style="pointer-events: none;">`;
    }

    holderHTML += `<img class="d-block w-100" src="images/productos/${productos[i].carpeta}/${productos[i].imagenes[0]}" alt="${productos[i].nombre}">
								<div class="detalles">
									<div class="nombre">${productos[i].nombre}</div>`;

    if ($variaciones.length === 0) {
      console.log(productos[i].nombre, " ", $variaciones.length, $variaciones);
    }

    if (productos[i]["precio"] == "Gratis") {
      holderHTML +=
        '<div class="precio"><span class="rojo">' +
        productos[i]["precio"] +
        "</span></div>";
    } else if ($variaciones.length === 0) {
      holderHTML += '<div class="precio">AGOTADO</div>';
    } else {
      if (!productos[i]["tachado"]) {
        holderHTML +=
          '<div class="precio">$' + productos[i].precio + " MXN</div>";
      } else {
        holderHTML +=
          '<div class="precio"><span class="tachado">$' +
          productos[i]["tachado"] +
          " MXN</span></div>";
        holderHTML +=
          '<div class="precio" id="precio"><span class="rojo">$' +
          productos[i]["precio"] +
          " MXN</span></div>";
      }
    }

    holderHTML += "</div>";
    holderHTML += "</a>";
    holderHTML += "</div>";
  }
  catalogoContainer.innerHTML = holderHTML;
};
crearMenuColores = function (arr, carpeta) {
  let holder = "";
  let newArr = arr.filter(function (item) {
    // filtra los items que contengan unidades disponibles
    if (item[1] !== 0) {
      return item;
    }
  });

  for (var i = 0; i < newArr.length; i++) {
    var itemColor = newArr[i][0];
    var itemUnidades = newArr[i][1];
    var itemImagen = newArr[i][2];
    var itemBackground;

    if (newArr[i][3] == undefined) {
      itemBackground = "#000";
    } else {
      itemBackground = newArr[i][3];
    }

    var menulistItem = `<li onclick="cambiaColores('${itemColor}', '${carpeta}/${itemImagen}','${itemUnidades}')" style="background-color:${itemBackground}"><img src="images/productos/${carpeta}/${itemImagen}"></li>`;
    if (itemUnidades > 0) {
      holder += menulistItem;
    }
  }
  return holder;
};
crearUnidades = function (num) {
  var holderHTML = "";
  for (var i = 1; i <= num; i++) {
    holderHTML += `<option>${i}</option>`;
  }
  return holderHTML;
};
cambiaColores = function (nombreColor, fotoColor, unidades) {
  let colorSeleccionado = document.getElementById("color-seleccionado");
  let imagenProducto = document.getElementById("imagen-producto-img");
  let divUnidades = document.getElementById("unidades");
  colorSeleccionado.innerText = nombreColor;
  imagenProducto.src = `images/productos/${fotoColor}`;
  divUnidades.innerHTML = crearUnidades(unidades);
};
mostrarInfo = function (seleccionado) {
  let $nombreProducto = productos[seleccionado]["nombre"];
  let $carpeta = productos[seleccionado]["carpeta"];
  let $precioTachado = productos[seleccionado]["tachado"];
  let $precio = productos[seleccionado]["precio"];

  let $composicion = productos[seleccionado].composicion;
  let $peso = productos[seleccionado].peso;
  let $metros = productos[seleccionado].metros;
  let $grosor = productos[seleccionado].grosor;
  let $agujas = productos[seleccionado].agujas;

  let $variacionesArr = productos[seleccionado]["colores"];
  let divDetalleProducto = document.getElementById("detalle-producto");

  let $variacionesNewArr = $variacionesArr.filter((item) => {
    if (item[1] > 0) {
      // si las unidades del item son mayores a 0
      return item;
    } else if (item[1] == 0 && $variacionesArr.length == 1) {
      // si las unidades son 0 y el arreglo solo tiene un item
      // esto es cuando el producto no tiene variaciones y esta agotado
      // se agrega al arreglo cumpliendo estas dos condiciones
      return item;
    }
  });

  console.log($variacionesNewArr.length);

  if ($variacionesNewArr.length > 0) {
    let $nombrePrimerVariacion = $variacionesNewArr[0][0];
    let $unidadesPrimerVariacion = $variacionesNewArr[0][1];
    let imagenProducto = document.getElementById("imagen-producto");
    let holder = "";

    imagenProducto.innerHTML = `<img src="images/productos/${$carpeta}/${productos[seleccionado]["colores"][0][2]}" id="imagen-producto-img">`;

    // +++++++++++++++++++ start HOLDER +++++++++++++++++++++++
    holder += `<div class="heading">
              <h2 id="nombre-producto" class="nombre-producto">${$nombreProducto}</h2>`;
    if ($variacionesNewArr.length > 1) {
      holder += `<h3 id="color-seleccionado" class="color-seleccionado">${$nombrePrimerVariacion}</h3>
            </div>`;
    } else {
      holder += `</div>`;
    }
    if ($variacionesNewArr.length > 1) {
      holder += `<div class="row">
              <div class="col col-12">
                <ul class="menu-colores" id="menu-colores">${crearMenuColores(
                  $variacionesNewArr,
                  $carpeta
                )}</ul>
              </div>
            </div>
            `;
    }

    holder += `<div class="col col-12 no-padding">
            <p class="descripcion">`;

    //Composición: ${$composicion} <br>
    //Peso: 		 ${$peso}	<br>
    //Metros: 	 ${$metros} <br>
    //Grosor: 	 ${$grosor} <br>
    //Agujas: 	 ${$agujas}

    if (
      $composicion !== "" ||
      $composicion !== "n/a" ||
      $composicion !== undefined ||
      $composicion !== null
    ) {
      holder += `Composición: ${$composicion} <br>`;
    }
    if (
      $peso !== "" &&
      $peso !== "n/a" &&
      $peso !== undefined &&
      $peso !== null
    ) {
      holder += `Peso: ${$peso} <br>`;
    }
    if (
      $metros !== "" &&
      $metros !== "n/a" &&
      $metros !== undefined &&
      $metros !== null
    ) {
      holder += `Metros: ${$metros} <br>`;
    }
    if (
      $grosor !== "" &&
      $grosor !== "n/a" &&
      $grosor !== undefined &&
      $grosor !== null
    ) {
      holder += `Grosor: ${$grosor} <br>`;
    }
    if (
      $agujas !== "" &&
      $agujas !== "n/a" &&
      $agujas !== undefined &&
      $agujas !== null
    ) {
      holder += `Agujas: ${$agujas} <br>`;
    }

    holder += `</p>
        </div>	              	
    </div>`;

    if ($unidadesPrimerVariacion > 0) {
      holder += `<div class="row">
                <div class="col col-4">
                  <!--label>Unidades:</label-->
                  <select class="unidades" id="unidades">${crearUnidades(
                    $variacionesNewArr[0][1]
                  )}</select>
                </div>`;
    }
    holder += `<div class="col col-8">
                <!--label>Precio:</label-->
                <p class="precio" id="precio">$${$precio} MXN</p>
              </div>	              	
          </div>`;

    if ($variacionesNewArr[0][1] > 0) {
      holder += `<button id="agregar" class="agregar"><i class="fas fa-plus"></i> Agregar a pedido</button>`;
    } else {
      holder += `<button id="agregar" class="agregar disabled" disabled>Producto Agotado</button>`;
    }

    holder += `<div id="notificacion" class="notificacion"></div>`;

    // +++++++++++++++++++ end: HOLDER +++++++++++++++++++++++

    divDetalleProducto.innerHTML = holder;
    document.getElementById("modal--detalle-producto").classList.add("active");

    let btnAgregar = document.getElementById("agregar");
    btnAgregar.addEventListener("click", function (e) {
      e.preventDefault();
      agregarArticulo();
    });
  }
};

// +++++++++++++++++++ BTN CERRAR +++++++++++++++++++++
let btnClose = document.getElementById("btn-close");
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("modal--detalle-producto").classList.remove("active");
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

crearCatalogo();

// TOMA VARIABLE DE LA URL

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}
var $id = getQueryVariable("id"); // $nombre es la variable que obtiene el dato de la url
if ($id !== false) {
  mostrarInfo($id);
}
