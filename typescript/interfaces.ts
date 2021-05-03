(() =>{


    interface Xmen{
        nombre:string;
        edad:number;
        poder?:string;
    }

    const enviarMision = (xmen:Xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la mision con el poder ${xmen.poder}`);
    }

    const regresarAlCuartel = (xmen:Xmen) => {
        console.log(`Regresando a ${xmen.nombre} al cuartel con la edad de ${xmen.edad}`);
    }
 

    const wolverine: Xmen  = {
        nombre: 'logan',
        edad: 21,
        poder:'Volar'
    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine)

})();



