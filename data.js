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
    titulo: "🖌️ Diseño y Arte Gráfico",
    instituciones: [
      {
        nombre: "Bello Horizonte",
        grados: [
          { grado: "10°", profesor: "Juan Camilo Pino", drive: "https://drive.google.com/drive/folders/1Rjzmu_aOh8XfrWSulbp3NQYIjSAuvTqj?usp=drive_link" },
          { grado: "11°", profesor: "Sin Asignar", drive: "https://drive.google.com/drive/folders/1JA8gJ70gGOxR45z79lKSBh6JlXA6jy7O?usp=drive_link" }
        ]
      },
      {
        nombre: "Benedikta Zur Nieden",
        grados: [
          { grado: "10°", profesor: "Kizzy Jaramillo Farah", drive: "https://drive.google.com/drive/folders/1zwbRI51JY15-on9l--Vr7oZe5MqKHOEB?usp=drive_link" },
          { grado: "11°", profesor: "Kizzy Jaramillo Farah", drive: "https://drive.google.com/drive/folders/1UqJUr0_rBOMY6jBIqhieKY4eK3Zh5hKA?usp=drive_link" }
        ]
      },
      {
        nombre: "Blanquizal",
        grados: [
          { grado: "10°", profesor: "Manuela Fernandez", drive: "https://drive.google.com/drive/folders/1wdGCSv4t3UCbt5LJTFQg4N3yR1AEo3L8?usp=drive_link" },
          { grado: "11°", profesor: "Daniel Maya Silva", drive: "https://drive.google.com/drive/folders/12HYi-n_2tF2YEBqWBX4bk6HA6IWFRzpy?usp=drive_link" }
        ]
      },
      {
        nombre: "El Triunfo Santa Teresa",
        grados: [
          { grado: "10°", profesor: "Manuela Fernandez", drive: "https://drive.google.com/drive/folders/1hfxRKoXQ_TwH20Hxr8WS9Uy4oYoLB2V0?usp=drive_link" },
          { grado: "11°", profesor: "Melissa Bolivar Deossa", drive: "https://drive.google.com/drive/folders/1cgdRV4F3FORvcpr4Kt6SQlbsbS0RjUUx?usp=drive_link" }
        ]
      },
      {
        nombre: "Fundadores",
        grados: [
          { grado: "10°", profesor: "Juliana Davila", drive: "https://drive.google.com/drive/folders/1jZ2tskRRperdWsTQoGTnLqT3wJnN6niR?usp=drive_link" },
          { grado: "11°", profesor: "Juliana Davila", drive: "https://drive.google.com/drive/folders/1TXeFP0KYIoh8cpnbC-P7FKN2JIQU8HAh?usp=drive_link" }
        ]
      },
      {
        nombre: "Inem Jose Felix De Resrepo",
        grados: [
          { grado: "10°", profesor: "Monica Yaneth Echeverri Rendon", drive: "https://drive.google.com/drive/folders/1Vr-9YqLdaFF_WWwunqIH4m5hZxzdZHUm?usp=drive_link" },
          { grado: "11°", profesor: "Monica Yaneth Echeverri Rendon", drive: "https://drive.google.com/drive/folders/16KGmU__rNocsPTvSIrA8FWgOfb41_aYP?usp=drive_link" }
        ]
      },
      {
        nombre: "Jesus María El Rosal",
        grados: [
          { grado: "10°", profesor: "Juan Camilo Pino", drive: "https://drive.google.com/drive/folders/1zzIpNqH4jBrOZPmMroQ6F7BVMxYk6OSw?usp=drive_link" }
        ]
      },
      {
        nombre: "Juan De Dios Carvajal",
        grados: [
          { grado: "10°", profesor: "Carolina Gonzalez Escobar", drive: "https://drive.google.com/drive/folders/1U6_2PoUL2reVB1-6mCd8KjvXmtx_xxjA?usp=drive_link" },
          { grado: "11°", profesor: "Carolina Gonzalez Escobar", drive: "https://drive.google.com/drive/folders/1Sl8rmN7fG4WifUqOUbKb0Pc4JIx8hIQ-?usp=drive_link" }
        ]
      },
      {
        nombre: "Juvenil Nuevo Futuro",
        grados: [
          { grado: "10°", profesor: "Oskar Leonaro Bernal", drive: "https://drive.google.com/drive/folders/16ya6zmRxISIU0uOhVP5YldftKv-pMiMD?usp=drive_link" },
          { grado: "11°", profesor: "Oskar Leonaro Bernal", drive: "https://drive.google.com/drive/folders/1m-4aHYkyOAsyWi9kQ8YJgidqsWoIMJ16?usp=drive_link" }
        ]
      },
      {
        nombre: "Lola Gonzalez",
        grados: [
          { grado: "10°", profesor: "Melissa Bolivar Deossa", drive: "https://drive.google.com/drive/folders/11OVvTtN2ou7Kj2eTNaTAEbzjpDPNcdZD?usp=drive_link" },
          { grado: "11°", profesor: "Melissa Bolivar Deossa", drive: "https://drive.google.com/drive/folders/1XqBcLlf9Gt6k-ze2qYLzITfj2nneE64z?usp=drive_link" }
        ]
      },
      {
        nombre: "Madre Maria Mazzarello",
        grados: [
          { grado: "10°", profesor: "Gelman Avendaño Londoño", drive: "https://drive.google.com/drive/folders/1mzRkkzIyGV7uiFOiKsxhb9ll1d3U3ERZ?usp=drive_link" },
          { grado: "11°", profesor: "Monica Yaneth Echeverri Rendon", drive: "https://drive.google.com/drive/folders/1VtXU1fnd9nQa2XV9PDE7W_arc0ltMUUm?usp=drive_link" }
        ]
      },
      {
        nombre: "Miraflores",
        grados: [
          { grado: "10°", profesor: "Gelman Avendaño Londoño", drive: "https://drive.google.com/drive/folders/1oJaJmDV4pd_I1CP47sCalZ4Fcn96Smck?usp=drive_link" },
          { grado: "11°", profesor: "Daniel Maya Silva", drive: "https://drive.google.com/drive/folders/1uGGITngaflRBvIzvmn6WfCTgbrmKw_cG?usp=drive_link" }
        ]
      },
      {
        nombre: "Nicanor Restrepo Santamaria",
        grados: [
          { grado: "10°", profesor: "Carolina Builes Lara", drive: "https://drive.google.com/drive/folders/195MFhTK--8A6mp4o5TCtsfDLXJIjBjLq?usp=drive_link" },
          { grado: "11°", profesor: "Carolina Builes Lara", drive: "https://drive.google.com/drive/folders/1_gnNUlxU1NDTNfZB1rzwhdH57dDsE5lL?usp=drive_link" }
        ]
      },
      {
        nombre: "Pablo Neruda",
        grados: [
          { grado: "10°", profesor: "Jose David Rivera", drive: "https://drive.google.com/drive/folders/1CjFIFY98JFlFkpo--9NQ60teHu3fwr_2?usp=drive_link" },
          { grado: "11-1°", profesor: "Jose David Rivera", drive: "https://drive.google.com/drive/folders/1indG3Y8yN4lmOa3E-YC7y4cSDE823z5e?usp=drive_link" },
          { grado: "11-2°", profesor: "Mauricio Jaramillo", drive: "https://drive.google.com/drive/folders/1zblrnAtGv3f8XqtrjyQ7Y1RJ2seKshzO?usp=drive_link" }
        ]
      },
      {
        nombre: "Progresar",
        grados: [
          { grado: "10°", profesor: "Osman Osvaldo Albaran", drive: "https://drive.google.com/drive/folders/1mmizqFNUsPKfNBb9c1-PvO5CQfLFUNCT?usp=drive_link" },
          { grado: "11°", profesor: "Osman Osvaldo Albaran", drive: "https://drive.google.com/drive/folders/1CqSwWJPG_sGvL9dhRm3BlUMCpCY1vtP4?usp=drive_link" }
        ]
      },
      {
        nombre: "Republica De Venezuela",
        grados: [
          { grado: "10°", profesor: "Juliana Espinosa", drive: "https://drive.google.com/drive/folders/1hk9ARgLk34dwfJA-GycM9BIT8gIWzKES?usp=drive_link" },
          { grado: "11°", profesor: "Juliana Espinosa", drive: "https://drive.google.com/drive/folders/1S9n5xhictnbYIWAdRTbDjrpwfLXD4gtt?usp=drive_link" }
        ]
      },
      {
        nombre: "Rodrigo Arenas Betancur",
        grados: [
          { grado: "10°", profesor: "Juan Carlos Rivera", drive: "https://drive.google.com/drive/folders/1g_O4BSSkfX2x-QX3qFqCDO38iqH2w_28?usp=drive_link" },
          { grado: "11°", profesor: "Juan Carlos Rivera Saldarriaga", drive: "https://drive.google.com/drive/folders/1LYQFZC8YMgE9O9gn2mjfu0oOGGSfD6-d?usp=drive_link" }
        ]
      },
      {
        nombre: "San Agustin",
        grados: [
          { grado: "11°", profesor: "Mauricio Jaramillo", drive: "https://drive.google.com/drive/folders/1vJYfA6wNXqaK7GjRqVCTW9N1cV6vn1ta?usp=drive_link" }
        ]
      },
      {
        nombre: "San Pablo",
        grados: [
          { grado: "10°", profesor: "Sara Manuela Patiño", drive: "https://drive.google.com/drive/folders/1alLxUD_DqTai-_PWIWvs2Uc_PSX6wF5M?usp=drive_link" },
          { grado: "11°", profesor: "Sara Manuela Patiño", drive: "https://drive.google.com/drive/folders/1JYqI-tg6JH5dJMDs6eFVOdhwUWHYbBXe?usp=drive_link" }
        ]
      },
      {
        nombre: "Stella Velez Londoño",
        grados: [
          { grado: "10°", profesor: "Estefania Baena Baron", drive: "https://drive.google.com/drive/folders/1IIeNcHvGyUNqcxA5SoHtkkZJ2_5tIcH4?usp=drive_link" },
          { grado: "11°", profesor: "Estefania Baena", drive: "https://drive.google.com/drive/folders/1ZCIywj3vGYKvolhTnWH34wk0TmMzungQ?usp=drive_link" }
        ]
      },
      {
        nombre: "Tricentenario",
        grados: [
          { grado: "10°", profesor: "Daniel Alejandro Herrera Noreña", drive: "https://drive.google.com/drive/folders/1H9MSEX-rdP7PTEKH7748yxqsOyb3I7aL?usp=drive_link" },
          { grado: "11°", profesor: "Daniel Alejandro Herrera Noreña", drive: "https://drive.google.com/drive/folders/1s5ksUQJceG1g45uVrd5aEVxt2A8vWlVg?usp=drive_link" }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────
  //  ELECTRICIDAD
  // ──────────────────────────────────────────────
  electricidad: {
    titulo: "⚡ Electricidad",
    instituciones: [
      {
        nombre: "Concejo De Medellin",
        grados: [
          { grado: "10°", profesor: "Alexis Jaramillo", drive: "https://drive.google.com/drive/folders/1z_fmUK8XRRG1JnhsgzgJwKrIJX35GD3J?usp=drive_link" },
          { grado: "11°", profesor: "Luis Mauricio Lopez Salazar", drive: "https://drive.google.com/drive/folders/1Rmpj7hA7ESqC51nJL4gdMCIM7mHZL3Hi?usp=drive_link" }
        ]
      },
      {
        nombre: "Horacio Muñoz Suescun",
        grados: [
          { grado: "10°", profesor: "Tim Glem De Los Rios", drive: "https://drive.google.com/drive/folders/1ACot2u4BaCTEbxRIHh4u2DfnflN3x21n?usp=drive_link" },
          { grado: "11°", profesor: "Tim Glem De Los Rios", drive: "https://drive.google.com/drive/folders/1T73wvkBPZwi-rP7rsyoMv6MIYsIKwDZ3?usp=drive_link" }
        ]
      },
      {
        nombre: "Jorge Eliecer Gaitan",
        grados: [
          { grado: "10°", profesor: "Maria Del Rosario Valderrama", drive: "https://drive.google.com/drive/folders/16SkcFwzQ_0OZK6ELXS1biNayWCocIwfR?usp=drive_link" },
          { grado: "11°", profesor: "Jair Humberto Velez", drive: "https://drive.google.com/drive/folders/1FbfcdvZyvy5KYdPl0PSwvJ46rsdnF0z8?usp=drive_link" }
        ]
      },
      {
        nombre: "La Piedad",
        grados: [
          { grado: "10°", profesor: "Maria Del Rosario Valderrama", drive: "https://drive.google.com/drive/folders/1TheYPofQTAus7reeLeNLmaYeoOac2v0b?usp=drive_link" },
          { grado: "11°", profesor: "Luis Mauricio Lopez Salazar", drive: "https://drive.google.com/drive/folders/1CqVz-Ydu4fZ4va7wSELOyuUdz5Hc3dAK?usp=drive_link" }
        ]
      },
      {
        nombre: "Miraflores",
        grados: [
          { grado: "10°", profesor: "Alexis Jaramillo", drive: "https://drive.google.com/drive/folders/1Z3Efioq2ZyV1BnnGSU597LZH5ULI7w8W?usp=drive_link" },
          { grado: "11°", profesor: "Alexis Jaramillo", drive: "https://drive.google.com/drive/folders/1aa5ksTYlKbPiKEOfXFz19iRLn0Q9PMbP?usp=drive_link" }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────
  //  MANTENIMIENTO ELECTROMECÁNICO INDUSTRIAL
  // ──────────────────────────────────────────────
  electromecanico: {
    titulo: "⚙️ Mantenimiento Electromecánico Industrial",
    instituciones: [
      {
        nombre: "Inem Jose Felix De Resrepo",
        grados: [
          { grado: "10°", profesor: "David Zuluaga Castrillon", drive: "https://drive.google.com/drive/folders/1GurGiMvdZ1Zi1lLEbstpSEMt_BC9MKAl?usp=drive_link" },
          { grado: "11°", profesor: "David Zuluaga Castrillon", drive: "https://drive.google.com/drive/folders/1_5zlo5oRHNIb4SHjAEmF6hfHLJWq32lc?usp=drive_link" }
        ]
      },
      {
        nombre: "Vallejuelos",
        grados: [
          { grado: "10°", profesor: "Michell Quiroga", drive: "https://drive.google.com/drive/folders/1eaqL8mVx95C2jBg1Y0acSnuKYze-Yznm?usp=drive_link" },
          { grado: "11°", profesor: "Michell Quiroga", drive: "https://drive.google.com/drive/folders/10AedbozWJlO3xk6KqA-l-c8ZIDysYYAM?usp=drive_link" }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────
  //  LOGÍSTICA DE CENTROS DE DISTRIBUCIÓN
  // ──────────────────────────────────────────────
  logistica: {
    titulo: "🚚 Logística de Centros de Distribución",
    instituciones: [
      {
        nombre: "El Corazon",
        grados: [
          { grado: "10°", profesor: "Jorge Stiven Gallego Rivera", drive: "https://drive.google.com/drive/folders/1B79_QMpuCaEkjTlem4AiakiXNUCkz6i5?usp=drive_link" },
          { grado: "11°", profesor: "Cristian Camilo Valencia", drive: "https://drive.google.com/drive/folders/1u82e7lKSlwrPCV-AVtSYtY1GG9AsUuoa?usp=drive_link" }
        ]
      },
      {
        nombre: "Jose Roberto Vasquez",
        grados: [
          { grado: "11°", profesor: "Erika Andrea Sierra", drive: "https://drive.google.com/drive/folders/1sm2uT1xoYXaIfjbVUU0fB2Evm_HMobKc?usp=drive_link" }
        ]
      },
      {
        nombre: "Presbitero Carlos Alberto Calderon",
        grados: [
          { grado: "10°", profesor: "Carlos Mario Avila", drive: "https://drive.google.com/drive/folders/1YwL98JvmzgJVV3vsoNsRoTtUwbsv3xtV?usp=drive_link" },
          { grado: "11°", profesor: "Cristian Camilo Valencia", drive: "https://drive.google.com/drive/folders/14-QxDzTx54GBlfGemu5akqbpIOPem716?usp=drive_link" }
        ]
      },
      {
        nombre: "Rodrigo Correa Palacio",
        grados: [
          { grado: "10°", profesor: "Erika Andrea Sierra", drive: "https://drive.google.com/drive/folders/1NZiF8LANIkmkxm33klSkXr6SsUpdJT99?usp=drive_link" },
          { grado: "11°", profesor: "Erika Andrea Sierra", drive: "https://drive.google.com/drive/folders/1uMHzuHzqL9FZmgUdhfCYLWIaW4YTd-1e?usp=drive_link" }
        ]
      }
    ]
  },

  // ──────────────────────────────────────────────
  //  MANTENIMIENTO DE MOTOCICLETAS
  // ──────────────────────────────────────────────
  motos: {
    titulo: "🏍️ Mantenimiento de Motocicletas",
    instituciones: [
      {
        nombre: "Bello Oriente",
        grados: [
          { grado: "10°", profesor: "Juan Esteban Madrid", drive: "https://drive.google.com/drive/folders/18b9-Pm5VGogY1KN2HurBXW9p1WjLJBcq?usp=drive_link" },
          { grado: "11°", profesor: "Juan Esteban Madrid", drive: "https://drive.google.com/drive/folders/1zFd3-_amvXR994DerJ1L6x_2uW-EVQ8m?usp=drive_link" }
        ]
      },
      {
        nombre: "Casd Jose Maria Espinosa Prieto",
        grados: [
          { grado: "10°", profesor: "Julian Andres Gomez", drive: "https://drive.google.com/drive/folders/1fknHBSyVaFt7L6K-zifoI1Buh1XLOUkc?usp=drive_link" },
          { grado: "11°", profesor: "Julian Andres Gomez", drive: "https://drive.google.com/drive/folders/1tqxnRyZ0MBiqjW73aXLNFpPJNmc3fJ6N?usp=drive_link" }
        ]
      },
      {
        nombre: "José Antonio Galan",
        grados: [
          { grado: "11°", profesor: "Sin Asignar", drive: "https://drive.google.com/drive/folders/1rb3gpEO1hBjb5P4zWaFMzVUAFwiM74jZ?usp=drive_link" }
        ]
      },
      {
        nombre: "Miraflores",
        grados: [
          { grado: "10°", profesor: "Yeferson Gonzalez", drive: "https://drive.google.com/drive/folders/1r03hyEd1yxnhI5ItB4aOrYU5llCuI0_C?usp=drive_link" },
          { grado: "11°", profesor: "Yeferson Gonzalez", drive: "https://drive.google.com/drive/folders/1h1SlmV6YliX62eeMxuI6NoCzN9xL5s-w?usp=drive_link" }
        ]
      }
    ]
  }

};
