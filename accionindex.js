

function  comenzar(){
  document.getElementById("b-facil").addEventListener("click",function(){enlace(1)},false);
  document.getElementById("b-medio").addEventListener("click",function(){enlace(2)},false);
  document.getElementById("b-dificil").addEventListener("click",function(){enlace(3)},false);
}

function enlace(d){
  localStorage.setItem(1,d);
  verydificult=localStorage.getItem(1);
  console.log("dificultad"+verydificult);
  
}

window.addEventListener("load",comenzar,false);