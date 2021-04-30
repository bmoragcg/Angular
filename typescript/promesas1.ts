(() =>{


console.log("Inicio");


const prom1 = new Promise((resolve ,reject) =>{

    setTimeout(() => {
        
        reject('Se termino la salida de tiempo');

    },1000);



});


prom1
.then(success => console.log(success))
.catch(error => console.warn(error));



console.log("Fin");

})();



