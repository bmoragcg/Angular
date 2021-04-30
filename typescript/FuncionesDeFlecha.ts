(function(){

const miFuncion = function(a:string )
{
    return a;
}

const miFuncion2 = (a:string) => a;


const sumarNumeros = function(numero1: number , numero2:number)
{
    return numero1 + numero2;

}

const sumarNumeros2 = (numero1:number, numero2:number) => numero1 + numero2;
 


console.log(miFuncion('NORMAL'));
console.log(miFuncion2("FLECHA"));

console.log(sumarNumeros(12,3));
console.log(sumarNumeros2(3.4 ,5));



const hulk = {
nombre: 'Stiven',
smash()
{
    setTimeout(() => {

      console.log(`${this.nombre}  smash!!!`);
    

    },3000);

}

}

hulk.smash();




})();



