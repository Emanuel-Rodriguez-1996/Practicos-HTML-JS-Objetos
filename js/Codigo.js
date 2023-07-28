window.addEventListener("load", inicio);

function inicio() {
    document.querySelector("#btnEjercicio1").addEventListener("click", registrar);//Ej1
    document.querySelector("#btnEjercicioN1").addEventListener("click", mayoresEdad);//Ej1
    document.querySelector("#btnEjercicio2").addEventListener("click", guardarPelicula);//Ej2
    document.querySelector("#btnEjercicio3").addEventListener("click", comprarGuitarra);//Ej3
    armarComboGuitarras();
    cargarDirectores();
}

let sistema = new Sistema();

function registrar() {
    let nombre = document.querySelector("#nombre1").value;
    let edad = Number(document.querySelector("#edad1").value);
    let nacionalidad = document.querySelector("#nacionalidad1").value;
    let nuevaPersona = new Persona(nombre, edad, nacionalidad);
    sistema.agregarPersona(nuevaPersona)
    mostrarTabla();
}

function mostrarTabla() {
    document.querySelector("#tblPersonas").innerHTML = "";
    for (let i = 0; i < sistema.personas.length; i++) {
        let unaPersona = sistema.personas[i];
        document.querySelector("#tblPersonas").innerHTML += `<tr>
    <td>${unaPersona.nombre}</td>
    <td>${unaPersona.edad}</td>
    <td>${unaPersona.nacionalidad}</td>
    </tr>`
    }
    return sistema.personas;
}

function mayoresEdad() {
    document.querySelector("#tblMayoresEdad").innerHTML = "";
    for (const unaPersona of sistema.personas) {
        if (unaPersona.edad > 18)
            document.querySelector("#tblMayoresEdad").innerHTML += `<tr>
        <th>${unaPersona.nombre}</th>
        <th>${unaPersona.edad}</th>
        <th>${unaPersona.nacionalidad}</th>
        </tr>`
    }
}

//Ejercicio 2 
function cargarDirectores() {
    document.querySelector("#slcDirector").innerHTML = `<option value="-1">Seleccione una ocpion...</oprion>`;
    for (let i = 0; i < sistema.directores.length; i++) {
        const unDirector = sistema.directores[i];
        document.querySelector("#slcDirector").innerHTML += `<option value="${unDirector.Id}">
        ${unDirector.nombre} (${unDirector.edad}) -${unDirector.nacionalidad}
        </option>`
        
    }
}
let peliculas = new Sistema();

function guardarPelicula() {
    document.querySelector("#slcGenero").innerHTML = `<option value="-1">Seleccione....</option>`
let nombre = document.querySelector("#nombreP2").value;
let anio = document.querySelector("#anioP2").value;
let genero = document.querySelector("#slcGenero").value;
let votantes = document.querySelector("#votantes2").value;
let puntos = document.querySelector("#puntos2").value;
let nuevaPelicula = new Sistema.peliculas (nombre, anio, genero, votantes, puntos, directores);
sistema.push(nuevaPelicula);
mostrarResultado();
console.log(peliculas)
}

function existePelicula() {
    for(let i = 0; i < p.length; i++) {
        if(peliculas[i].nombre === nombre) {

        }
    }
}

function mostrarResultado() {
for (const unaPelicula of peliculas) {
    document.querySelector("#pResultado2").innerHTML = peliculas;
    }
}

//Ejercicio 3
function armarComboGuitarras() {
    document.querySelector("#slcTipo3").innerHTML = `<option value="-1">Seleccione...</option>`
    for (let i = 0; i < sistema.guitarras.length; i++) {
        const unaGuitarra = sistema.guitarras[i];
        document.querySelector("#slcTipo3").innerHTML += `<option value="${unaGuitarra.tipo}">${unaGuitarra.nombre}</option>`
    }
}

function comprarGuitarra() {
    let tipo = Number(document.querySelector("#slcTipo3").value);
    let cantidad = Number(document.querySelector("#cantidad3").value);
    if (tipo !== -1 && !isNaN(cantidad) && !isNaN(tipo)) {
        let venta = new Venta(cantidad, tipo);
        sistema.agregarVenta(venta);
        armarTablaVentas();
    } else {
        alert("Error")
    }
}

function armarTablaVentas() {
    document.querySelector("#tblGuitarras").innerHTML = "";
    for(let i = 0; i < sistema.guitarras.length; i++) {
        const unaGuitarra = sistema.guitarras[i];
        document.querySelector("#tblGuitarras").innerHTML += `<tr>
        <td>${unaGuitarra.nombre}</td>
        <td>${sistema.obtenerDineroVenta(unaGuitarra.tipo)}</td>
        </tr>`
    }
}

function almacenarVenta() {
    let marca = document.querySelector("#slcCelulares4").value;
    let modelo = document.querySelector("#modelo4").value;
    let precio = Number(document.querySelector("#precio4").value);
    let cantidad = Number(document.querySelector("#cantidad4").value);
    
}
/*Una empresa de venta de celulares quiere llevar registro de sus ventas. para cada venta se ingresa marca 
(Samsung, Sony o LG), modelo (texto), precio (número) y cantidad de unidades (número).

a) Crear la interfaz HTML que permita el ingreso de los datos solicitados. El dato correspondiente a la marca
se debe capturar a través de un combo desplegable.

b) Crear la funcionalidad javascript que permita almacenar ventas, teniendo en cuenta que se debe validar que
el precio sea numérico y el modelo no esté vacío.

c) Agregar a la interfaz HTML un botón y una tabla de datos y listar en ella todas las ventas que superen los
dos mil pesos. El total de una venta se obtendrá de la multiplicación del precio por la cantidad de unidades. 
Al hacer click en el botón se cargará la tabla.

d) Crear un nuevo campo de texto en el que se pueda ingresar un modelo y un botón que al ser presionado
permita calcular el total de unidades vendidas para ese modelo. Mostrar en un párrafo nuevo en el HTML la 
cantidad de  unidades obtenidas.*/ 