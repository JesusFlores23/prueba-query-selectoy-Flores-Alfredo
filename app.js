//Imprimir el titulo del documento
console.log("El titulo de esta pagina es :", document.title);

//Guardar el contenido de la id "titulo-principal" en una variable
let titulo = document.querySelector("#titulo-principal");
console.log(titulo);
//extraer y editar propiedades
console.log(titulo.textContent);
titulo.textContent = "Nuevo titulo de la pagina";
titulo.style.color = "red";
titulo.style.backgroundColor = "green";
titulo.style.fontSize = "1.5rem";
//agregar texto sin borrar lo anterior
titulo.textContent = titulo.textContent + " texto nuevo ";
titulo.textContent += " otro texto nuevo ";

let parrafo = document.querySelector("#parrafo-principal");

parrafo.innerHTML += " nuevo texto <i> pero este texto esta en cursiva</i>" 

let caja1 = document.querySelector("#caja1");

caja1.innerHTML += "<p> Producto muestra: $1200 </p>" 


caja1.classList.add("aprobado");
/*
let presupuesto = prompt("Ingrese el presupuesto del cliente");

if (presupuesto >= 1200){
    caja1.classList.add("aprobado");
} else {
    caja1.classList.add("rechazado");
}
    */


const bodega=[
    {
        nombre: "Producto 1",
        precio: 1200,
        cantidad: 10
    },
    {
        nombre: "Producto 2",
        precio: 1500,
        cantidad: 0
    },
    {
        nombre: "Producto 3",
        precio: 800,
        cantidad: 20
    }
];

let caja = document.querySelector(".caja-vacia");


bodega.forEach( item => {

    let Clasecolor = "";

    if(item.cantidad >0){
        Clasecolor = "aprobado";
    } else {
        Clasecolor = "rechazado";
    }


    caja.innerHTML += `
    <div class="caja-producto ${Clasecolor}">
        <h2>${item.nombre}</h2>
        <p>Precio: $${item.precio}</p>
        <p>Cantidad: ${item.cantidad}</p>
    </div>
    `;



});