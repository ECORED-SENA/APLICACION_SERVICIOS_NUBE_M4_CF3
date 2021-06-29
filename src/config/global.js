export default {
  global: {
    componenteFormativo: 'Aplicación del paradigma orientado a objetos',
    descripcionCurso:
      'Durante el transcurso de este componente formativo podrá abordar saberes relacionados a la implementación en el lenguaje de programación Java, de clases, objetos, atributos, constructores, métodos, herencia y relaciones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Características del lenguaje de programación orientada a objetos ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Implementación de clases y objetos ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Atributos y métodos de la clase',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Constructores y destructores',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Métodos accesores y modificadores',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Sobrecarga de métodos (overload) ',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Comunicación entre clases',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Implementación de asociaciones ',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Implementación de composición/agregación',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Implementación de herencia',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Andaluza, U. & Garcilaso, I. (2012). Programación en Java Francisco Javier Cruz Vílchez ISBN-13: Pendiente.',
    },
    {
      referencia:
        'Deitel, H. M. & Deitel, P. J. (2004). Como programar en C/C++ y Java. 4 Ed.',
    },
    {
      referencia:
        'Rumbaugh, J., Jacobson, I. & Booch, G. (2004). El Lenguaje Unificado de Modelado. Elements, 30.',
      link: 'http://portal.acm.org/citation.cfm?id=993859&dl=',
    },
  ],
  glosario: [
    {
      termino: 'camelCase',
      significado:
        'Es una convención de Java que consiste en escribir palabras o frases compuestas de modo que cada palabra o abreviatura comienza con una letra mayúscula o una primera palabra con una letra mayúscula y el resto con minúscula.',
    },
    {
      termino: 'IDE',
      significado:
        ' Entorno de Desarrollo Integrado que se utiliza para el desarrollo de un código fuente o programa.',
    },
    {
      termino: 'JVM',
      significado: ' Máquina Virtual de Java.',
    },
  ],
  complementario: [
    {
      texto:
        'Universidad Autónoma del Estado de Hidalgo. (2014). 1.1 Lenguajes de Programación Orientados a Objetos. ',
      tipo: 'Página web',
      link:
        'http://200.57.56.254/lcc/mapa/PROYECTO/libro15/11_lenguajes_de_programacin_orientados_a_objetos.html ',
    },
    {
      texto: 'Oracle Java Technologies | Oracle. (2021). Java. ',
      tipo: 'Página web',
      link: 'https://www.oracle.com/java/technologies/ ',
    },
    {
      texto:
        'Java. (2020). Convenciones de Nomenclatura en Java - Java desde Cero.',
      tipo: 'Página web',
      link:
        'https://javadesdecero.es/fundamentos/convenciones-nomenclatura-java ',
    },
    {
      texto:
        'Systemoff. (2020). Cómo implementar relaciones de asociación de los diagramas de clases en Java. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=BGStNPa0qRk',
    },
    {
      texto: 'ARIMETRICS. (2020). Qué es Entorno de desarrollo. ',
      tipo: 'Página web',
      link:
        'https://www.arimetrics.com/glosario-digital/entorno-de-desarrollo ',
    },
    {
      texto: 'Codigofacilito. (2012). Clases, Objetos y Métodos en Java.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AEXLtATMkZM',
    },
    {
      texto: 'Exes. (2015). Curso de Introducción a Java. ',
      tipo: 'Página web',
      link:
        'https://www.mundojava.net/definicion-de-atributos-de-una-clase.html?Pg=java_inicial_4_4_3.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura ',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Zulema León Escobar',
        cargo: 'Experta Temática',
        centro: 'Centro de Teleinformática y Producción Industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Cauca',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jenny Paola Montillo Gélvez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
