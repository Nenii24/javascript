const usuario = {
    nombre: "Erandeni",

    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    },

    saludarFlecha: () => {
        console.log(this.nombre);
    }
};

usuario.saludar();
usuario.saludarFlecha();