class Estudiante {
    constructor(nombre, carrera) {
        this.nombre = nombre;
        this.carrera = carrera;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre} y estudio ${this.carrera}.`);
    }
}

class Desarrollador extends Estudiante {
    constructor(nombre, carrera, lenguaje) {
        super(nombre, carrera);
        this.lenguaje = lenguaje;
    }

    programar() {
        console.log(`Estoy programando en ${this.lenguaje}.`);
    }
}

const estudiante = new Estudiante("Erandeni", "Desarrollo de Software");

const desarrollador = new Desarrollador(
    "Erandeni",
    "Desarrollo de Software",
    "JavaScript"
);

estudiante.presentarse();
desarrollador.presentarse();
desarrollador.programar();