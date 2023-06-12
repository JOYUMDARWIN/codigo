const ingresoTexto = document.querySelector(".ingreso-texto");
const textareaOutput = document.querySelector(".textareaoutput");

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

function btnEncriptar() {
    const textoEncriptado = encriptar(ingresoTexto.value);
    textareaOutput.value = textoEncriptado;
    ingresoTexto.value = "";
}
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textareaOutput.value);
    textareaOutput.value = textoDesencriptado;
    ingresoTexto.value = "";
}

function encriptar(stringEncriptado) {
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptado;
}

function desencriptar(stringdesencriptado){
    for( let i = 0; i < matrizCodigo.length; i++){
        if (stringdesencriptado.includes(matrizCodigo[i][1])){
            stringdesencriptado = stringdesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringdesencriptado;
}

function copiar(){
    const textoCopiado = textareaOutput.value;
    navigator.clipboard.writeText(textoCopiado);

}




