var btnEnviar = document.getElementById("enviarBtn");
btnEnviar.addEventListener("click", enviar);

function enviar() {



if(document.getElementById("CorreoElec").value!="" && document.getElementById("Apellidos").value!="" &&
document.getElementById("Nombres").value!=""){

alert("Usuario Registrado correctamente")
}
}