function saludar() {

let nombre = document.getElementById("nombre").value.trim();

let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

if (nombre === "") {

document.getElementById("resultado").innerText =
"Por favor ingrese su nombre.";

} else if (nombre.length < 3) {

document.getElementById("resultado").innerText =
"El nombre debe tener al menos 3 caracteres.";

} else if (!soloLetras.test(nombre)) {

document.getElementById("resultado").innerText =
"El nombre no debe contener números ni caracteres especiales.";

} else {

document.getElementById("resultado").innerText =
"Hola " + nombre + ", bienvenido al sistema.";

}

}

function validarCorreo() {

let correo = document.getElementById("correo").value.trim();

if (correo === "") {

document.getElementById("mensajeCorreo").innerText =
"Debe ingresar un correo.";

} else if (!correo.includes("@") || !correo.includes(".")) {

document.getElementById("mensajeCorreo").innerText =
"Correo inválido.";

} else {

document.getElementById("mensajeCorreo").innerText =
"Correo registrado correctamente.";

}

}