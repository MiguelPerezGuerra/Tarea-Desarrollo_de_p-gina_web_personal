const txtnombre = document.getElementById("nombre");
const txtdireccion = document.getElementById("direccion");
const txttelefono = document.getElementById("telefono");
const txtcorreo = document.getElementById("correo");
const txtciudad = document.getElementById("ciudad");
const txtedad = document.getElementById("edad");
const formulario = getElementById("formulario");
const parrafo = getElementById("warnings");
let warnings = '';
let entrar = false;
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function esNumerico(valor){
    if(isNaN(Number(valor))){
        return false;
    }
}

function validarFormulario(){
    if(txtnombre == null || txtnombre.length == 0){
        warnings += 'El nombre no es valido <br>';
        entrar = true;
    }

    if(txtdireccion == null || txtdireccion.length == 0){
        warnings += 'La dirección no es valida <br>';
        entrar = true;
    }

    if(!esNumerico(txttelefono)){
        warnings += 'Debes ingresar valores numericos <br>';
        entrar = true;
    }
    if(txttelefono == null || txttelefono.length ){
        warnings += 'El numero de telefono no es valido <br>';
        entrar = true;
    }
    if(!esNumerico(txttelefono)){
        warnings += 'Debes ingresar valores numericos <br>';
        entrar = true;
    }

    if(!regexEmail.test(txtcorreo.value)){
        warnings += 'El correo no es valido <br>';
        entrar = true;
    }

    if(txtciudad == null || txtciudad.length ){
        warnings += 'El correo no es valido <br>';
        entrar = true;
    }

    if(!esNumerico(txtedad)){
        warnings += 'Debes ingresar valores numericos <br>';
        entrar = true;
    }
    
    if(txtedad == null || txtedad.length  == 0 || txtedad.length > 110){
        warnings += 'El correo no es valido <br>';
        entrar = true;
    }
   
}

formulario.addEventListener("submit", e=>{
    e.preventDefault()
   
    validarFormulario();

})
