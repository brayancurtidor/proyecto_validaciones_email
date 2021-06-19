//variables
const btnenviar=document.querySelector('#enviar');
const email=document.querySelector('#email');
const asunto=document.querySelector('#asunto');
const mensaje=document.querySelector('#mensaje');
const fecha=document.querySelector('#fecha');
const hora=document.querySelector('#hora');
const formulariEmail=document.querySelector('#enviar-mail');// variable que tendra dentro de si, el formulario
const expresionregular=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

listadoEventos();
function listadoEventos()
{
    document.addEventListener('DOMContentLoaded',iniciarapp)//me carga las funciones cuando inicia el programa por vezprimera
//campos para los input del formulario
email.addEventListener('blur',validarformulario); //blur significa que hace algo cuando me pongo en un input y despues mde retiroo
mensaje.addEventListener('blur',validarformulario); //blur significa que hace algo cuando me pongo en un input y despues mde retiroo
asunto.addEventListener('blur',validarformulario); //blur significa que hace algo cuando me pongo en un input y despues mde retiroo
fecha.addEventListener('blur',validarformulario);
hora.addEventListener('blur',validarformulario);

formulariEmail.addEventListener('submit',enviarlemail);
}



function iniciarapp()
{
    btnenviar.disabled=true; //para bloquear un elememto
    btnenviar.classList.add('cursor-not-allowed', 'opacity-50');
}


//funciones validar formulario
function validarformulario(e)
{
    
    //validacion a campos vacios
    if(e.target.value.length>0) //si mi input tiene caracteres mayor a cero
    {  
        //eliminacion de el dom el mensaje de error
        const eliminarerror=document.querySelector('p.eror');
        if(eliminarerror) //si existe el error entonces eliminarlo
        {
            eliminarerror.remove()
        }
       



        e.target.classList.remove('shadow-2xl','bg-pink-100','border','border-red-500');//si ya existe esta clase, entonces se va a elimanr
        e.target.classList.add('shadow-2xl','bg-green-100','border','border-green-500');

    }
    else
    {
        e.target.classList.remove('shadow-2xl','bg-green-100','border','border-green-500');
        e.target.classList.add('shadow-2xl','bg-pink-100','border','border-red-500'); //clase definida sobre el frsmework en el qiue se contruyo el proyecto
        mostrarError('Todos los campos  son obligatorios') //le vamos a pasar el mensaje de error a la funcion
    }





    if (e.target.type==='email')
    {
        console.log('es un email hay que validad de forma distinta');
        //const reultadoarroba=e.target.value.indexOf('@'); //busca la posicion en la que se encuentr ael caracter
        //console.log(reultadoarroba);
        if(expresionregular.test(e.target.value))
        {
            //eliminacion de el dom el mensaje de error
        const eliminarerror=document.querySelector('p.eror');
            if(eliminarerror)
            {
                eliminarerror.remove()
            }
        e.target.classList.remove('shadow-2xl','bg-pink-100','border','border-red-500');//si ya existe esta clase, entonces se va a elimanr
        e.target.classList.add('shadow-2xl','bg-green-100','border','border-green-500');
            
        }
        else
        {
            
            e.target.classList.remove('shadow-2xl','bg-green-100','border','border-green-500');//si ya existe esta clase, entonces se va a elimanr
            e.target.classList.add('shadow-2xl','bg-pink-100','border','border-red-500');
            mostrarError('El correo no es correcto')
        }
        
    }

    if(expresionregular.test(email.value)&& mensaje.value !==''  && asunto.value !=='' && fecha.value!=="" && hora.value!=="")
    {
     console.log("podemos desbloquear el boton");

     btnenviar.disabled=false; //para bloquear un elememto
     btnenviar.classList.remove('cursor-not-allowed', 'opacity-50'); //para remover el estylo de la clase

    }
    else
    {
        console.log("hay campos por validar")
        btnenviar.disabled=true; //para bloquear un elememto
     btnenviar.classList.add('cursor-not-allowed', 'opacity-50'); //para remover el estylo de la clase
    }


}
function mostrarError(mensajeErrorParametro)
{
    const mensajeerror=document.createElement('p'); //vamos a crear una etiqueta parrafo en la variable mensajeerrror
    mensajeerror.textContent=`Error:  ${mensajeErrorParametro}` //le vamos a agregar un texto al parrafo que se encuentra en la variable mensajeerror
    mensajeerror.classList.add('shadow-2xl','bg-pink-100','border','border-red-500', 'text-red-500','p-3','mt-5','text-center','eror') //agregamos estilos

     //mete dentro del formulariEmal, le mete hasta abajo una nueva etiqueta que es mesaje error, pero cada vez
    //(... cada vez que se ejecuta esta accion agrega hacia abajo mas (paraffos ) o elementos creados entocnes se crera una solucion para que esto no pase)
    const errores=document.querySelectorAll('.eror');
    if(errores.length===0) //si no existe la etiqueta con la clase .eror entonces solo se va a imprimir una sola vez
    {
        formulariEmail.appendChild(mensajeerror);

       
    }

    console.log("error...")

}
function enviarlemail(e) //siempe que es de tipo submit hay que quitarle recargar por defecto
{
    e.preventDefault();

    //mostrar spiner
    const spinerjs=document.querySelector('#spinner'); 
    spinerjs.style.display='flex'; //mostrar el spiner 

    //mostrar el spinner en un tiempo deteminado 
    setTimeout(()=>{ console.log('esto se ejecuta po r3 segundo')},3000);

}

