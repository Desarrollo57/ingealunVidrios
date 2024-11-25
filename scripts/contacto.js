// traer los inputs
const nombre = document.querySelector('#nombre-cliente').value;
const mensaje = document.querySelector('#mensaje-cliente').value;
const correo = document.querySelector('#correo-cliente').value;
const btnEnviar = document.querySelector('#btn-enviar').value;
const telefonoDiseñadora = 573203408547;

//crear funcion usando los inputs
function enviarMensaje(){
    var telefonoDiseñadora = 573203408547;
    var nombre = document.querySelector('#nombre-cliente').value;
    var mensaje = document.querySelector('#mensaje-cliente').value;
    var correo = document.querySelector('#correo-cliente').value;
    var url = "https://wa.me/" + telefonoDiseñadora + "?text=Hola mi nombre es: " + nombre + " el motivo de mi mensaje es: " + mensaje + " mi correo es: " + correo;

    window.open(url, '_blank').focus();

    var mensaje = `https://api.whatsapp.com/send?phone=573203408547&text=Hola mi nombre es: ${nombre.value}`;
    btnEnviar.href = mensaje;
}