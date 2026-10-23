class Persona {
    constructor(edad) {
        this._edad = edad;
    }

    get edad() {
        return this._edad;
    }

    set edad(nuevaEdad) {
        if (nuevaEdad >= 0) {
            this._edad = nuevaEdad;
        } else {
            console.log("La edad no puede ser negativa.");
        }
    }
}

const persona = new Persona(20);

console.log(persona.edad);

persona.edad = 21;
console.log(persona.edad);

persona.edad = -5;
console.log(persona.edad);