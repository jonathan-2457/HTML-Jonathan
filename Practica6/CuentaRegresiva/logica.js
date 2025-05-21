let tiempo = 30; //inicialos segundos
let intervalo;

function contar(){ //restar el tiempo
    if(tiempo > 0){
    tiempo --; 
    console.log(tiempo)
    //console (tiempo);
    actualizarContador();
    }else{
        detenerContador();
        alert('se acabo el tiempo!!')
    }
}



function iniciarContador(){
    if (!intervalo) {
        intervalo = setInterval(contar, 1000);
    }
}

function detenerContador(){
clearInterval(intervalo);
intervalo  = null; //null = vacio
}

function reiniciarContador(){
    detenerContador();
 tiempo= 30
 actualizarContador();
}

function actualizarContador(){
    document.getElementById("contador").textContent = tiempo;
}
actualizarContador();

