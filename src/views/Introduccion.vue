<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/img1.jpg", alt="Texto que describa la imagen")
    
    p.mb-5 Se habla del uso de Programación Orientada a Objetos (POO) cuando se aplican las características de abstracción, encapsulación, herencia y polimorfismo. La POO encierra datos (atributos) y métodos (comportamientos) que hacen parte del objeto y que se encuentran relacionados entre sí. Los objetos tienen la propiedad de ocultar la información. Lo que quiere decir que, aunque los objetos pueden saber cómo comunicarse entre sí, a través de interfaces bien definidas, por lo general a los objetos no se les permite saber cómo se implementan otros objetos; los detalles de implementación están ocultos dentro de los mismos objetos. Con toda seguridad es posible conducir una moto de manera efectiva sin conocer los detalles de cómo funcionan internamente los sistemas del motor, la transmisión y el escape. Es por eso por lo que el ocultamiento de información es tan importante para la buena ingeniería de software en los lenguajes de programación. (Deitel & Deitel, 2004).
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4
          p Desde la anterior perspectiva el componente formativo, dará un recorrido desde las características del lenguaje de programación orientada a objetos, las implementaciones de clases y objetos, y en su interior se reconocerá los atributos, métodos de las clases, los constructores y destructores, los métodos de accesores y modificación, así mismo, la sobrecarga de métodos. Esto permitirá conocer con la comunicación entre clases desde su implementación de asociaciones, composición / agregación y la implementación de herencia.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
