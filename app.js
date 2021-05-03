"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la mision con el poder ${xmen.poder}`);
    };
    const regresarAlCuartel = (xmen) => {
        console.log(`Regresando a ${xmen.nombre} al cuartel con la edad de ${xmen.edad} años`);
    };
    const wolverine = {
        nombre: 'logan',
        edad: 21,
        poder: 'Volar'
    };
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
})();