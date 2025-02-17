Tutorial detallado del proyecto de Superhéroes

Este tutorial explica detalladamente el funcionamiento del proyecto de superhéroes, incluyendo HTML, CSS y JavaScript.

1. Estructura del Proyecto

El proyecto consta de tres archivos principales:

index.html: Contiene la estructura del sitio web.

index.css: Define los estilos visuales del sitio.

index.js: Maneja la lógica y la interactividad.

2. HTML: index.html

Explicación

El archivo HTML define la estructura de la página. Incluye:

Un encabezado <h1> con el título "Superheroes".

Un formulario con dos campos de entrada (input) para el nombre y la URL de la imagen del superhéroe, junto con un botón.

Un contenedor <div class="contenedor"> donde se mostrarán las tarjetas de los superhéroes.

Un enlace al archivo index.css para los estilos.

Un enlace al archivo index.js para la interactividad.

3. CSS: index.css

Explicación

El CSS define los estilos de la página. Algunos puntos clave:

body: Se centra todo el contenido en la página y se establece un fondo gris claro.

.contenedor: Tiene un fondo blanco, espacio entre elementos y usa display: flex; para organizar las tarjetas en fila.

.tarjeta: Representa a cada superhéroe con un tamaño definido y un borde.

.imagen img: Asegura que las imágenes ocupen todo el ancho de la tarjeta.

.formulario form: Organiza los campos de entrada y el botón verticalmente con display: flex; flex-direction: column;.

4. JavaScript: index.js

Explicación

1. Base de datos inicial

const bd = [
    { nombre: "MAGNETO", url_imagen: "https://cdn.marvel.com/content/1x/058mgn_com_crd_02.png" },
    { nombre: "CYCLOPS", url_imagen: "https://cdn.marvel.com/content/1x/191cyc_com_crd_01.png" },
    { nombre: "JEAN GREY", url_imagen: "https://cdn.marvel.com/content/1x/186jgr_com_crd_01.png" },
    { nombre: "WOLVERINE", url_imagen: "https://cdn.marvel.com/content/1x/034wlv_com_crd_01.jpg" },
    { nombre: "BEAST", url_imagen: "https://cdn.marvel.com/content/1x/190bhm_com_crd_01.png" }
];

Se declara un array bd que contiene objetos con el nombre y la URL de la imagen de algunos superhéroes.

2. Función para mostrar los superhéroes

function mostrarSuperheroes() {
    let tarjetas = "";
    for (let i = 0; i < bd.length; i++) {
        tarjetas += `
        <div class="tarjeta">
            <div class="imagen">
                <img src="${bd[i].url_imagen}" alt="">
            </div>
            <div class="nombre">${bd[i].nombre}</div>
        </div>`;
    }
    document.querySelector(".contenedor").innerHTML = tarjetas;
}

La función mostrarSuperheroes recorre el array bd, genera tarjetas con los datos y las inserta en .contenedor.

3. Evento para añadir nuevos superhéroes

const boton = document.querySelector("button");

boton.addEventListener("click", function(e){
    e.preventDefault();
    let nombre = document.querySelector("#nombreSuper").value;
    let url = document.querySelector("#urlSuper").value;
    const nuevoSuper = { nombre: nombre, url_imagen: url };
    bd.push(nuevoSuper);
    mostrarSuperheroes();
});

Captura el evento click del botón.

Previene el comportamiento por defecto (e.preventDefault()).

Obtiene los valores de los campos de entrada.

Agrega el nuevo superhéroe al array bd.

Vuelve a ejecutar mostrarSuperheroes() para actualizar la vista.

4. Mostrar superhéroes al cargar la página

mostrarSuperheroes();

Llama a la función mostrarSuperheroes() para que los superhéroes iniciales aparezcan en pantalla.

5. Mejoras posibles

Validación de datos: Evitar que se agreguen superhéroes vacíos o duplicados.

Almacenar en localStorage: Guardar los superhéroes para que no se pierdan al recargar la página.

Diseño responsivo: Mejorar la visualización en dispositivos móviles.

Eliminar superhéroes: Agregar un botón de eliminar en cada tarjeta.

6. Conclusión

Este proyecto permite mostrar una lista de superhéroes y agregar nuevos dinámicamente. Usa HTML, CSS y JavaScript básico para lograr una interfaz interactiva.