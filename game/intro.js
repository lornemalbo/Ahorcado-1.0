function comenzar(){
  dif=localStorage.getItem(1);
    switch (dif){
        case "1":
          document.getElementById("nivel").innerHTML="Nivel:FACIL";
          document.getElementById("tiempo").innerHTML="Tiempo:90s<br>Objetivo: 10<img style='width:3%' src='../img/vidas.png'>";
          break;
        case "2":
          document.getElementById("nivel").innerHTML="Nivel:MASO";
          document.getElementById("tiempo").innerHTML="Tiempo:40s<br>Objetivo: 10<img style='width:3%' src='../img/vidas.png'>";
          break;  
        case "3":
          document.getElementById("nivel").innerHTML="Nivel:CRACK";
          document.getElementById("tiempo").innerHTML="Tiempo:20s!!<br>Objetivo: 10<img style='width:3%' src='../img/vidas.png'>";
          break;  
        default: console.log("no deberíamos estar acá");break;
    }
}

window.addEventListener("load",comenzar,false);