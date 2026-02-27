/**
 * ============================================================
 *  DATA.JS – Datos de programas e instituciones
 *  ✏️  EDITAR AQUÍ para agregar/modificar instituciones,
 *      grados, profesores o enlaces de Drive.
 * ============================================================
 *
 *  ESTRUCTURA DE CADA INSTITUCIÓN:
 *  {
 *    nombre: "Nombre de la Institución",
 *    grados: [
 *      {
 *        grado:    "10°",
 *        profesor: "Nombre Apellido",
 *        drive:    "https://drive.google.com/drive/folders/XXXXXXXXXX"
 *      },
 *      ...
 *    ]
 *  }
 *
 *  Agrega tantos grados como necesites dentro de cada institución.
 *  Agrega tantas instituciones como necesites dentro de cada programa.
 * ============================================================
 */

const programas = {

  // ──────────────────────────────────────────────
  //  DISEÑO Y ARTE GRÁFICO
  // ──────────────────────────────────────────────
  arte: {
    titulo: "Diseño y Arte Gráfico",
    instituciones: [
      {
        nombre: "IE José María Bernal",
        grados: [
          { grado: "10°", profesor: "Juan Diego García",   drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Diana Chavarriaga",   drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE El Pedregal",
        grados: [
          { grado: "10°", profesor: "Marcela Ríos",        drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Carlos Estrada",      drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE Alfonso López Pumarejo",
        grados: [
          { grado: "10°", profesor: "Laura Vélez",         drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Andrés Montoya",      drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────
  //  ELECTRICIDAD
  // ──────────────────────────────────────────────
  electricidad: {
    titulo: "Electricidad",
    instituciones: [
      {
        nombre: "IE Marco Fidel Suárez",
        grados: [
          { grado: "10°", profesor: "Pedro Saldarriaga",   drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Liliana Correa",      drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE Concejo de Medellín",
        grados: [
          { grado: "10°", profesor: "Rubén Zapata",        drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Tatiana Arango",      drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE Héctor Abad Gómez",
        grados: [
          { grado: "10°", profesor: "Felipe Muñoz",        drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Natalia Ospina",      drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────
  //  MANTENIMIENTO ELECTROMECÁNICO INDUSTRIAL
  // ──────────────────────────────────────────────
  electromecanico: {
    titulo: "Mantenimiento Electromecánico Industrial",
    instituciones: [
      {
        nombre: "IE Gerardo Arias Ramírez",
        grados: [
          { grado: "10°", profesor: "Orlando Henao",       drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Mónica Gómez",        drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE Débora Arango Pérez",
        grados: [
          { grado: "10°", profesor: "Santiago Cano",       drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Valentina Zuluaga",   drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE Pedro Claver",
        grados: [
          { grado: "10°", profesor: "Hernán Betancur",     drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Camila Restrepo",     drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────
  //  LOGÍSTICA DE CENTROS DE DISTRIBUCIÓN
  // ──────────────────────────────────────────────
  logistica: {
    titulo: "Logística de Centros de Distribución",
    instituciones: [
      {
        nombre: "IE San Cristóbal",
        grados: [
          { grado: "10°", profesor: "Jorge Álvarez",       drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Adriana Mesa",        drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE La Independencia",
        grados: [
          { grado: "10°", profesor: "Bernardo Ríos",       drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Paula Cardona",       drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE Lorencita Villegas",
        grados: [
          { grado: "10°", profesor: "Esteban Duarte",      drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Daniela Palacio",     drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────
  //  MANTENIMIENTO DE MOTOCICLETAS
  // ──────────────────────────────────────────────
  motos: {
    titulo: "Mantenimiento de Motocicletas",
    instituciones: [
      {
        nombre: "IE INEM José Félix de Restrepo",
        grados: [
          { grado: "10°", profesor: "Cesar Upegui",        drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Olga Urrego",         drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE Barrio Santander",
        grados: [
          { grado: "10°", profesor: "Miguel Tobón",        drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Sandra Giraldo",      drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      },
      {
        nombre: "IE Villa del Socorro",
        grados: [
          { grado: "10°", profesor: "Julio Agudelo",       drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" },
          { grado: "11°", profesor: "Patricia Rojas",      drive: "https://drive.google.com/drive/folders/CARPETA_AQUI" }
        ]
      }
    ]
  }

};
