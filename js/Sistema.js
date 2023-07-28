class Sistema {
    constructor() {
        //Ej 1
        this.personas = [];

        //Ej 2
        this.peliculas = [];
        this.directores = [
            new Director(1, "Josh", 45, "EstadoUnidense"),
            new Director(1, "Jose", 59, "Argentino"),
            new Director(1, "Peter", 32, "Australiano") 
        ];

        //Ej 3
        this.guitarras = [
        new Guitarra(1, "Clasica", 2000),
        new Guitarra(2, "Eléctrica", 2500),
        new Guitarra(3, "Electroacústica", 2300)
        ];

        this.ventas = [];

        //Ej 4
    /* this.celulares = [
            new Celular(1, "Samsung", this.precio),
            new Celular(2, "Sony", this.precio),
            new Celular(3, "lg", this.precio)
        ];

        this.ventasCelulares = [];*/
    }

//Ej 1
agregarPersona(persona) {
    this.personas.push(persona)
}

//Ej 2
agregarPeliculas(pelicula) {
    this.peliculas.push(pelicula);
}
buscarElemento() {
    
}

//Ej 3
agregarVenta(venta) {
    this.ventas.push(venta);
}

obtenerDineroVenta(tipoGuitarra) {
    let totalDinero;
    let precioGuitarra;
    let cantidadGuitarrasVendidas = 0;

    let objGuitarra = this.obtenerObjeto(this.guitarras, "tipo", tipoGuitarra);
    precioGuitarra = objGuitarra.precio;
    for(let i = 0; i < this.ventas.length; i++) {
        const unaVenta = this.ventas[i];
        if(unaVenta.tipoGuitarra === tipoGuitarra) {
            cantidadGuitarrasVendidas += unaVenta.cantidad;
        }
    }
    totalDinero = precioGuitarra * cantidadGuitarrasVendidas;
    return totalDinero;
}

obtenerObjeto(arrayElementos, propiedad, busqueda) {
    let objeto = null;
    for (let i = 0; i < arrayElementos.length; i++) {
        const unElemento = arrayElementos[i];
        if(busqueda === unElemento[propiedad]) {
            objeto = unElemento;
            break
            }
        }
        return objeto;
    }
}
//Ej 4
    /*agregarVentaCelular(venta) {
        this.ventasCelulares.push(venta);
    }

    obtenerDineroCelulares(marcaCelular) {
        let totalDinero;
        let precioCelular;
        let cantidadCeularesVendidos = 0;

        let objCelular = this.obtenerObjeto(this.ventasCelulares, "marca", marcaCelular)
        precioCelular =objCelular.precio
        for(let i = 0; i < this.ventasCelulares.length; i++) {
            const unaVenta = this.ventasCelulares[i];
        
            }
        }
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
cantidad de  unidades obtenidas
.*/ 