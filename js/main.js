let usunum = parseFloat(prompt("Escriba un numero del 1 al 100"));


let machnum = _.random(1, 100);
    console.log("Valor aleatorio:", machnum, ' Valor del usuario:', usunum);




if(usunum > machnum){
  alert('Eres el ganador, tu numero fue mayor que el del programa')
}else if(usunum < machnum){
  alert('Perdiste, el programa tiene un número más alto')
}else if(usunum === machnum){
  alert('Empate, ambos sacaron el mismo valor')
}else{
  alert('Error a la hora de ingresar numeros, recargue la paguina y verific que todo este bien')
}

