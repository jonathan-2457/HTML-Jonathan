let elementoSegundo= document.getElementById('tiempo');
let elementotextoAlarma= document.getElementById('textoAlarma');
let elementoAlarma= document.getElementById('audioAlarma');

function verTiempo(){
setTimeout(comenzarTiempo, 1000 * elementoSegundo.value);
}

function comenzarTiempo(){ 
    elementotextoAlarma.style.color= "green";
    elementoAlarma.play();
}
 
function comenzarReloj(){
    setInterval (miReloj, 1000);
}


function miReloj(){
let tictac= new Date();
let hora= String(tictac.getHours()).padStart(2, "0");
let minutos= String(tictac.getMinutes()).padStart(2, "0");
let segundos= String(tictac.getSeconds()).padStart(2, "0");

let textoHora= hora + ":" + minutos + ":" + segundos;
elementotextoAlarma.textContent= textoHora;
}
/*padstar rellena una cadena desde el inicio */







