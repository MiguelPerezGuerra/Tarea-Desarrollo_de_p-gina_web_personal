const txtnombre = document.getElementById("nombre");
const txtdireccion = document.getElementById("direccion");
const txttelefono = document.getElementById("telefono");
const txtcorreo = document.getElementById("correo");
const txtciudad = document.getElementById("ciudad");
const txtedad = document.getElementById("edad");
const formulario = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");


function esNumerico(valor) {
    if (isNaN(Number(valor))) {
        return false;
    }
}

function validarFormulario() {
    if (txtnombre == null || txtnombre.length == 0) {
        warnings += 'El nombre no es valido <br>';
        entrar = true;
    }

    if (txtdireccion == null || txtdireccion.length == 0) {
        warnings += 'La dirección no es valida <br>';
        entrar = true;
    }

    if (!esNumerico(txttelefono)) {
        warnings += 'Debes ingresar valores numericos <br>';
        entrar = true;
    }
    if (txttelefono == null || txttelefono.length) {
        warnings += 'El numero de telefono no es valido <br>';
        entrar = true;
    }
    if (!esNumerico(txttelefono)) {
        warnings += 'Debes ingresar valores numericos <br>';
        entrar = true;
    }

    if (!regexEmail.test(txtcorreo.value)) {
        warnings += 'El correo no es valido <br>';
        entrar = true;
    }

    if (txtciudad == null || txtciudad.length) {
        warnings += 'El correo no es valido <br>';
        entrar = true;
    }

    if (!esNumerico(txtedad)) {
        warnings += 'Debes ingresar valores numericos <br>';
        entrar = true;
    }

    if (txtedad == null || txtedad.length == 0 || txtedad.length > 110) {
        warnings += 'El correo no es valido <br>';
        entrar = true;
    }

}

formulario.addEventListener("submit", e => {
    e.preventDefault()

    let warnings = "";
    parrafo.innerHTML = "";
    let entrar = false;
    const expresiones = {
        direccion: /^[a-zA-Z0-9\s,.'-]{3,}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/, // 7 a 14 numeros.
        edad: /^\d{1,2}$/ // 1 a 2numeros.
    }

    if (!expresiones.nombre.test(txtnombre.value)) {
        warnings += 'El nombre no es valido <br>';
        entrar = true;
    }

    if (!expresiones.direccion.test(txtdireccion.value)) {
        warnings += 'La dirección no es valida <br>';
        entrar = true;
    }

    if (!expresiones.telefono.test(txttelefono.value)) {
        warnings += 'El numero de telefono no es valido <br>';
        entrar = true;
    }

    if (!expresiones.correo.test(txtcorreo.value)) {
        warnings += 'El correo no es valido <br>';
        entrar = true;
    }

    if (!expresiones.nombre.test(txtciudad.value)) {
        warnings += 'La ciudad no es valida <br>';
        entrar = true;
    }

    if (!expresiones.edad.test(txtedad.value)) {
        warnings += 'La edad no es valida <br>';
        entrar = true;
    }

    if (entrar) {
        parrafo.innerHTML = warnings;
    }
    else {
        parrafo.innerHTML = "Enviado";
        txtnombre.value = '';
        txtdireccion.value = '';
        txttelefono.value = '';
        txtcorreo.value = '';
        txtciudad.value = '';
        txtedad.value = '';
    }

})
