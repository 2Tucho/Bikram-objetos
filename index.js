//Declaración
/*1*/const Coche = {
    marca: "Citröen",
    modelo: "Xsara Picasso",
    matricula: "47921 HRD",
};

/*2*/const Casa = {
    codPostal: 28954,
    calle: "C/ Principal",
    portal: 47,
    piso: "4 2ºA",
};

/*3*/const FullStackDeveloper = {
    lenguajes: ["JavScript"],
    proyectos: ["Bootcamp"],
};

/*4*/const Perro = {
    nombre: "Pluto",
    raza: "mastín",
    color: "marrón",
    edad: 7,
    ladrar: function() {
        console.log("Guau guau");
    },
    popo: function() {
        return Math.random() * 3
    },
};

//Lectura de propiedades
/*5*/const marcaPortatil = Portatil.marca;

/*6*/const marcaPortatil2 = Portatil.marca;

/*7*/const grupos = Concierto.grupos;

/*8*/const RGB = [Led.rojo, Led.verde, Led.azul];

//Modificación de propiedades
/*9*/Portatil.modelo = "P345"; //Cambiar valor

/*10*/Concierto.cartelera.push("Guns N' Roses") //Añadir el nuevo valor con .push

/*11*/Concierto.fecha = new Date();

/*12*/Impresora.imprimiendo = {
    nombreArchivo: "TOP Secret", 
    copias: 1, 
    numPaginas: 1
}

//Declaración
/*13*/const Noticia = {
    titular: "Gana el Atleti",
    cuerpo: "Desarrollo del artículo"
};

/*14*/const Persona = {
    nombre: "Alejandro",
    apellidos: "Jiménez Los Santos",
    edad: 37
};

/*15*/const Avion = {
    numPasajeros: 208,
    despegar: function () {
        console.log("despegando");
    },
    volar: function() {
        console.log("llegando al destino");
    },
    aterrizar: function() {
        console.log("aterrizando");
    }
};

/*16*/const Paquete = {
    contenido: ["cosita"]
}

/*17*/const Pais = {
    numHabitantes: 1838482,
    continente: "Europa",
    gentilicio: "luxemburgueses"
};

/*18*/const codError = O_Error.codigo;

/*19*/const integrantes = Grupo.integrantes; 

/*20*/const nivelesTinta = Impresora.tinta;

/*21*/const pixeles = Pantalla.pixeles

/*22*/const especificaciones = Movil.especificaciones;

//Modificación de propiedades
/*23*/Grupo.numIntegrantes = 5;

/*24*/Pantalla.dimensiones = "1920x1080";

/*25*/if (Led.encendido === true) {
    Led.encendido = false
} else {
    Led.encendido = true
}

/*26*/Movil.temperatura = "20º"

