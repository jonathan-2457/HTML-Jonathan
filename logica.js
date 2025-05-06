function sumar(){

    alert('Procesando...');
   
   
       //variable
   let numeroUno = document.getElementById('valor1').value;
   let numeroDos= document.getElementById('valor2').value;
   
   
   //mostrar el resultado en el h3
   let mostrarTexto = document.getElementById('mitexto');
   let generaTexto = document.getElementById('mitexto');
   //setear los valores de texto a numerico
   let num1= parseInt(numeroUno);
   let num2= parseInt(numeroDos);
   
   //proceso
   let resultado= num1+num2;
   
   let mensaje = 'El resultado de la suma es: ' + resultado;
   console.log(resultado);
   
   //salida o impresion
   mostrarTexto.textcontent = mensaje;
   generaTexto.textContent= mensaje;
   
   }