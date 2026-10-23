const torneos = [
    {
        id: 1,
        titulo: "Copa Valorant La Paz",
        juego: "Valorant",
        inscripcion: 15.0,
        bolsaPremios: 300,
        destacados: { cupos: 16 },
    },
    {
        id: 2,
        titulo: "Torneo Relámpago Rocket League",
        juego: "Rocket League",
        inscripcion: 0.0,
        bolsaPremios: 100,
    }, 
    {
        id: 3,
        titulo: "Showdown Smash Ultimate",
        juego: "Smash Bros",
        inscripcion: 10.0,
        bolsaPremios: 200,
        destacados: { cupos: 32 },
    },
    {
        id: 4,
        titulo: "Liga Abierta League of Legends",
        juego: "League of Legends",
        inscripcion: 25.0,
        bolsaPremios: 500,
        destacados: { cupos: 8 },
    },
    {
        id: 5,
        titulo: "Master Cup Street Fighter 6",
        juego: "Street Fighter 6",
        inscripcion: 0.0,
        bolsaPremios: 150,
        destacados: { cupos: 16 },
    },
];

// 1. Torneos con inscripción gratuita
const filtrados = torneos.filter(({ inscripcion }) => inscripcion === 0);

// 2.  Suma acumulada de toda la bolsa de premios acumulada
const total = torneos.reduce(
    (acumulador, torneo) => acumulador + torneo.bolsaPremios,
    0,
);

// 3. Promedio de premio por torneo
const promedio = total / torneos.length;

// 4. Ordenados de mayor a menor bolsa de premios
const ordenados = [...torneos].sort((t1, t2) => {
    const { bolsaPremios: premio1 } = t1;
    const { bolsaPremios: premio2 } = t2;

    const cupos1 = t1?.destacados?.cupos ?? 0;
    const cupos2 = t2?.destacados?.cupos ?? 0;

    return premio2 - premio1;
});


console.log({ filtrados, total, promedio, ordenados });


console.log("Arreglo original de torneos intacto:", torneos);
