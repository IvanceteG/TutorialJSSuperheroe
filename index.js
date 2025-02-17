// Imprime un mensaje en la consola
console.log("Hola Superheroe")

// URLs de imágenes (no se están utilizando en el código actual)
"https://cdn.marvel.com/content/1x/191cyc_com_crd_01.png"
"https://cdn.marvel.com/content/1x/186jgr_com_crd_01.png"
"https://cdn.marvel.com/content/1x/034wlv_com_crd_01.jpg"
"https://cdn.marvel.com/content/1x/190bhm_com_crd_01.png"

// Array de objetos que contiene información de superhéroes
const bd = [
    {
        nombre: "MAGNETO", // Nombre del superhéroe
        url_imagen: "https://cdn.marvel.com/content/1x/058mgn_com_crd_02.png" // URL de la imagen del superhéroe
    },
    {
        nombre: "CYCLOPS",
        url_imagen: "https://cdn.marvel.com/content/1x/191cyc_com_crd_01.png"
    },
    {
        nombre: "JEAN GREY",
        url_imagen: "https://cdn.marvel.com/content/1x/186jgr_com_crd_01.png"
    },
    {
        nombre: "WOLVERINE",
        url_imagen: "https://cdn.marvel.com/content/1x/034wlv_com_crd_01.jpg"
    },
    {
        nombre: "BEAST",
        url_imagen: "https://cdn.marvel.com/content/1x/190bhm_com_crd_01.png"
    }
];

// Función para mostrar los superhéroes en la página
function mostrarSuperheroes() {
    let tarjetas = ""; // Variable para almacenar el HTML de las tarjetas
    for(let i = 0; i < bd.length; i++){ // Itera sobre cada superhéroe en el array bd
        console.log("i: ", bd[i].nombre, bd[i].url_imagen); // Imprime el nombre y la URL de la imagen del superhéroe en la consola
        tarjetas = tarjetas + 
        `
        <div class="tarjeta">
            <div class="imagen">
                <img
                src="${bd[i].url_imagen}" 
                alt="">
            </div>
            <div class="nombre">${bd[i].nombre}</div>
        </div>
        `; // Agrega el HTML de la tarjeta del superhéroe a la variable tarjetas
    }

    // Inserta el HTML de las tarjetas en el elemento con la clase "contenedor"
    document.querySelector(".contenedor").innerHTML = tarjetas;
}

// Selecciona el botón en la página
const boton = document.querySelector("button");

// Agrega un evento al botón para que ejecute una función cuando se haga clic en él
boton.addEventListener("click", function(e){
    e.preventDefault(); // Previene el comportamiento por defecto del botón (submit)

    // Captura los valores de los inputs
    let nombre = document.querySelector("#nombreSuper").value;
    let url = document.querySelector("#urlSuper").value;

    // Crea un objeto con los valores capturados
    const nuevoSuper = {
        nombre: nombre,
        url_imagen: url
    };
    console.log("Nuevo super: ", nuevoSuper); // Imprime el nuevo superhéroe en la consola

    // Agrega el nuevo superhéroe al array bd
    bd.push(nuevoSuper);
    console.log("Base de datos con nuevo super: ", bd); // Imprime el array bd actualizado en la consola

    // Llama a la función para mostrar los superhéroes
    mostrarSuperheroes();
});

// Llama a la función para mostrar los superhéroes al cargar la página
mostrarSuperheroes();