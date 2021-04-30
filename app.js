"use strict";
(() => {
    const enviarMision = (xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la mision`);
    };
    const regresarAlCuartel = (xmen) => {
        console.log(`Regresando a ${xmen.nombre} al cuartel`);
    };
    const wolverine = {
        nombre: 'logan',
        edad: 21
    };
    enviarMision(wolverine);
    regresarAlCuartel(wolverine);
})();
