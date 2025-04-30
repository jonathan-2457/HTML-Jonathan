function CalcularArea(){
    const Pi = 3.14;
let miRadio = parseFloat(document.getElementById("radio").value);

let resultado = Pi * (miRadio * miRadio)
let mostrarTexto = document.getElementById("texto")
let mensaje = "El área del círculo es: " + resultado
let generaTexto = document.getElementById('texto');
//salida
mostrarTexto.textContent = mensaje;
generaTexto.textContent= mensaje;
console.log(mensaje)
}