(function(){

function activar(quien:string , momento?:string, objecto:string = 'Batiseñal')
{
    if(momento)
    {
        console.log(`${quien} activo la  ${objecto} en la ${momento}`);
    }
    else
    {
        console.log(`${quien} activo la  ${objecto}`);
    }

}

activar('Stiven' , 'noche');


})();



