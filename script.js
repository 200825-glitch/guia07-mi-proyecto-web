function saludar() {

let nombre = document.getElementById("nombre").value.trim();

let resultado = document.getElementById("resultado");

let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

if (nombre === "") {

resultado.innerText = "Por favor ingrese su nombre.";
resultado.style.color = "red";

} else if (nombre.length < 3) {

resultado.innerText =
"El nombre debe tener al menos 3 caracteres.";

resultado.style.color = "orange";

} else if (!soloLetras.test(nombre)) {

resultado.innerText =
"El nombre no debe contener números ni caracteres especiales.";

resultado.style.color = "red";

} else {

resultado.innerText =
"Hola " + nombre + ", bienvenido al sistema.";

resultado.style.color = "green";

}

}

function validarCorreo() {

let correo = document.getElementById("correo").value.trim();

let mensaje = document.getElementById("mensajeCorreo");

if (correo === "") {

mensaje.innerText = "Debe ingresar un correo.";
mensaje.style.color = "red";

} else if (!correo.includes("@") || !correo.includes(".")) {

mensaje.innerText = "Correo inválido.";
mensaje.style.color = "orange";

} else {

mensaje.innerText = "Correo registrado correctamente.";
mensaje.style.color = "green";

}

}

function limpiarCampos() {

document.getElementById("nombre").value = "";
document.getElementById("correo").value = "";

document.getElementById("resultado").innerText = "";
document.getElementById("mensajeCorreo").innerText = "";

}