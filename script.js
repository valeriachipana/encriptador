const areaTexto=document.querySelector(".area-texto");
const mensaje=document.querySelector(".mensaje-encriptado");

function encriptarBoton(){
    const Encriptado=encriptar(areaTexto.value);
    mensaje.value=Encriptado;
    areaTexto.value="";
    mensaje.style.backgroundImage="none";
}

function encriptar(textoEncriptado){
    let conversion=[
        ["e","enter"],
        ["i", "imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ];
    textoEncriptado=textoEncriptado.toLowerCase();

    for(let i=0; i<conversion.length; i++){
        if(textoEncriptado.includes(conversion[i][0])){
            textoEncriptado=textoEncriptado.replaceAll(conversion[i][0], conversion[i][1]);
        }
    }

    return textoEncriptado
}

function desencriptarBoton(){
    const Encriptado=desencriptar(areaTexto.value);
    mensaje.value=Encriptado;
    areaTexto.value="";
}

function desencriptar(textoDesencriptado){
    let conversion=[
        ["e","enter"],
        ["i", "imes"],
        ["a","ai"],
        ["o","ober"],
        ["u","ufat"]
    ];
    textoDesencriptado=textoDesencriptado.toLowerCase();

    for(let i=0; i<conversion.length; i++){
        if(textoDesencriptado.includes(conversion[i][1])){
            textoDesencriptado=textoDesencriptado.replaceAll(conversion[i][1], conversion[i][0]);
        }
    }

    return textoDesencriptado;
}

function botonCopiar(){
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado con éxito.");
}