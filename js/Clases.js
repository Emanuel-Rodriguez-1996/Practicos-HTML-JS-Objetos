//Ej 1
class Persona {
    constructor(unNombre, unaEdad, unaNacionalidad) {
        this.nombre = unNombre;
        this.edad = unaEdad;
        this.nacionalidad = unaNacionalidad;
    }
}


//Ej 2
class Pelicula {
    constructor(unNombre, unAnio, unGenero, cantVotantes, cantPuntos, unDirector) {
        this.nombre = unNombre;
        this.anio = unAnio;
        this.genero = unGenero;
        this.votantes = cantVotantes;
        this.puntos = cantPuntos;
        this.director = unDirector
    }
}

class Director {
    constructor(unId, unNombre, unaEdad, unaNacionalidad) {
        this.id = unId;
        this.nombre = unNombre;
        this.edad = unaEdad;
        this.nacionalidad = unaNacionalidad;
    }
}


//Ej 3
class Guitarra {
    constructor(unTipo, unNombre, unPrecio) {
        this.tipo = unTipo;
        this.nombre = unNombre;
        this.precio = unPrecio;
    }
}
class Venta {
    constructor(unaCantidad, unTiporGuitarra) {
        this.cantidad = unaCantidad;
        this.tipoGuitarra = unTiporGuitarra;
    }
}


//Ej 4
/*class Celular {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}

class VentaCelular {
    constructor(marca, modelo, precio, cantidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}*/