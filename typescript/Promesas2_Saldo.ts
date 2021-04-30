(() =>{


    const retirarDinero = (montoARetirar:number):Promise<number> =>{

    let dineroActual = 1000;

    return new Promise((resolve , reject) => {

        if(montoARetirar > dineroActual)
        {
            reject("Saldo insuficiente");

        }
        else
        {
            dineroActual -= montoARetirar;
            resolve(dineroActual);
        }

    });
    }


    retirarDinero(1200)
    .then(success => console.log(`Saldo retirado perfectamente, su saldo actual es: ${success}`))
    .catch(console.warn);
    
 

})();



