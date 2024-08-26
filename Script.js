/* Hecho por Jesus Daniel Luna
*/
var btnEncrypt = document.querySelector(".btn-encrypt");
var btnDecrypt = document.querySelector(".btn-decrypt");
var btnClear = document.querySelector(".btn-clear");
var imgPlaceholder = document.querySelector(".image-container");
var messageContainer = document.querySelector(".message-container");
var resultText = document.querySelector(".result-text");
var textInput = document.querySelector(".text-input");

btnEncrypt.onclick = encriptar;
btnDecrypt.onclick = desencriptar;
btnClear.onclick = limpiarCaja;

window.onload = function() {
    mostrarImagenPlaceholder(); 
}

// Les agregue funciones extras al momento de validar el texto, enviando un mensaje al usuario y avisandole que no deben ponerse caracteres raros


function encriptar() {
    if (textInput.value !== "" && validarEntrada(textInput.value)) {
        mostrarResultado();
        resultText.value = encriptarTexto(textInput.value);
    } else {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales, excepto signos de interrogación y admiración.");
    }
}

function desencriptar() {
    if (textInput.value !== "" && validarEntrada(textInput.value)) {
        mostrarResultado();
        resultText.value = desencriptarTexto(textInput.value);
    } else {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales, excepto signos de interrogación y admiración.");
    }
}

function limpiarCaja() {
    textInput.value = '';
    resultText.value = '';
    mostrarImagenPlaceholder(); 
}

// Como aqui que se ajusto la lógica para mostrar solo la imagen, osea como por defecto
function mostrarImagenPlaceholder() {
    imgPlaceholder.classList.remove("hidden"); 
    messageContainer.classList.remove("hidden"); 
    resultText.classList.add("hidden"); 
}

function mostrarResultado() {
    imgPlaceholder.classList.add("hidden"); 
    messageContainer.classList.add("hidden"); 
    resultText.classList.remove("hidden"); 
}

// Aqui se muestran las funciones de encriptar y desencriptar texto (batalle un poco jaja, bueno bastante)
function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a") {
            textoFinal += "ai";
        } else if (texto[i] === "e") {
            textoFinal += "enter";
        } else if (texto[i] === "i") {
            textoFinal += "imes";
        } else if (texto[i] === "o") {
            textoFinal += "ober";
        } else if (texto[i] === "u") {
            textoFinal += "ufat";
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === "a" && texto[i + 1] === "i") {
            textoFinal += "a";
            i++;
        } else if (texto[i] === "e" && texto[i + 1] === "n" && texto[i + 2] === "t" && texto[i + 3] === "e" && texto[i + 4] === "r") {
            textoFinal += "e";
            i += 4;
        } else if (texto[i] === "i" && texto[i + 1] === "m" && texto[i + 2] === "e" && texto[i + 3] === "s") {
            textoFinal += "i";
            i += 3;
        } else if (texto[i] === "o" && texto[i + 1] === "b" && texto[i + 2] === "e" && texto[i + 3] === "r") {
            textoFinal += "o";
            i += 3;
        } else if (texto[i] === "u" && texto[i + 1] === "f" && texto[i + 2] === "a" && texto[i + 3] === "t") {
            textoFinal += "u";
            i += 3;
        } else {
            textoFinal += texto[i];
        }
    }
    return textoFinal;
}

const btnCopy = document.querySelector(".btn-copy");
btnCopy.addEventListener("click", function () {
    var contenido = resultText.value;
    navigator.clipboard.writeText(contenido);
});

// Les agregue funciones extras al momento de validar el texto, enviando un mensaje al usuario y avisandole que no deben ponerse caracteres raros
function validarEntrada(texto) {
    return /^[a-z\s!?]*$/.test(texto);
}


