(() =>{


    interface Xmen{
        nombre:string;
        edad:number;
        poder?:string;
    
    }

    const enviarMision = (xmen:Xmen) => {
        console.log(`Enviado a ${xmen.nombre} a la mision`);
    }

    const regresarAlCuartel = (xmen:Xmen) => {
        console.log(`Regresando a ${xmen.nombre} al cuartel`);
    }
 

    const wolverine: Xmen  = {
        nombre: 'logan',
        edad: 21
    }

    enviarMision(wolverine);
    regresarAlCuartel(wolverine)

})();



