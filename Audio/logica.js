let elementosegundo = document.getElementById('tiempoElegido');
let elementoColor = document.getElementById('textoColor');
let elementoAudio = document.getElementById('audioAlarma');

function mostrarTiempo(){
    setTimeout(finalTiempo, 1000 * elementosegundo.value);
}
function finalTiempo(){
elementoColor.textContent='encendido';
elementoColor.style.color=' blue';
elementoAudio.play();
}


