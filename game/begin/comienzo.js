var valor_random;
var numerador,denominador;
var resultado=0;
var points=0;
var ahorcado=0;
var jug=0;
var timer;

function comenzar(){
       //verificando dificultad
  var dificultad=localStorage.getItem(1);
  console.log("dificultad "+dificultad);
         switch (dificultad){
         case "1":timer=setInterval(gameOver,90000);document.getElementById("life").style.transitionDuration = "200s";break;
         case "2":timer=setInterval(gameOver,40000);document.getElementById("life").style.transitionDuration = "120s";break;
         case "3":timer=setInterval(gameOver,20000);document.getElementById("life").style.transitionDuration = "50s";break;
         default:console.log("no deberíamos entrar aqui");break; 
     }  
  numerador=document.getElementById("numerador");
  denominador=document.getElementById("denominador");
  resultado=document.getElementById("resultado");
  arranque();
  document.getElementById("life").style='width:0%;';
  document.getElementById("cabeza").addEventListener("mouseover",function(){musica(3);},false);
} 

function onKeyUp(event) {
    var keycode = event.keyCode;
    if(keycode == '13'){
     resolver(); 
    }
  }

function resolver(){
    resultado=resultado.value;
    console.log("num: "+num +" den: "+ den +" res: "+ " "+ resultado);
    var resultadoPosta= num * den;
    jug=jug+1;                  //contador de jugadas
    if (resultadoPosta==resultado){
        console.log("bien");
        puntos(1);       
    }else{
        console.log("mal");
        puntos(0);
    }
    reset();
    arranque();
} 

function puntos(p){
    console.log("testeando el parametro p: "+p);
    var vidas=document.getElementById("vidas");
      if (p==1){
             points=points +1;
             console.log("punto a favor\n vamos: "+ points);
             switch (points){
                 case 1: vidas.innerHTML="<img src='../../img/vidas.png'>";
                 break;
                 case 2: vidas.innerHTML="<img src='../../img/vidas.png'><img src='../../img/vidas.png'>"
                 break;
                 case 3: vidas.innerHTML="<img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'>";
                 break;
                 case 4: vidas.innerHTML="<img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'>";
                 break;
                 case 5: vidas.innerHTML="<img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'>";
                 break;
                 case 6: vidas.innerHTML="<img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'>";
                 break;
                 case 7: vidas.innerHTML="<img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'>";
                 break;
                 case 8: vidas.innerHTML="<img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'>";
                 break;
                 case 9: vidas.innerHTML="<img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'>";
                 break;
                 case 10: vidas.innerHTML="<img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'><img src='../../img/vidas.png'>";
                 break;
                 default: alert("no deberiamos estar acá");
                 break;
             }
             if (points==10){
                 document.getElementById("vidas").innerHTML="<p>"+points+" </p>";
                 clearInterval(timer);
                 location.href="premio.html";
                 }
                 }else{             
                      //accion en el ahorcado
                      ahorcado=ahorcado +1;
                      console.log("punto en contra\n vamos: "+ ahorcado); 
                      elementos(ahorcado);
                      if (ahorcado==10){
                         elementos(ahorcado);
                         gameOver();
                       }      
                   }         
}     

function arranque(){ 
    musica(1);
    console.log("arrancando");
    aleatorio();
    num=valor_random;
    numerador=document.getElementById("numerador");
    numerador=numerador.innerHTML="<p>"+ num +"</p>";
    aleatorio();
    den=valor_random;
    denominador=document.getElementById("denominador");
    denominador=denominador.innerHTML="<p>"+ den +"</p>";
    boton=document.getElementById("ok");
    boton.addEventListener("click",resolver,false);
    
   }  

function aleatorio(){
    var numeroalazar = Math.random() * (11-2) + 1;
    valor_random = Math.ceil(numeroalazar); 
    return valor_random;
}

function reset(){
    console.log("reseteando...");
    numerador=document.getElementById("numerador").innerHTML="";
    denominador=document.getElementById("denominador").innerHTML="";
    resultado=document.getElementById("resultado");
    resultado.value="";
    return numerador, denominador, resultado;
}

function elementos(ah){
    console.log("llega?---> "+ ah);
    var parte;
    switch (ah){
        case 1:
            console.log("estariamos viendo el melón");
            parte=document.getElementById("cabeza");
            parte.style='opacity:1';
            break;
        case 2:
            parte=document.getElementById("remera").style='opacity:1';
            break;
        case 3:
            parte=document.getElementById("brazoR").style='opacity:1';
            break;
        case 4:
            parte=document.getElementById("brazoL").style='opacity:1';
            break;
        case 5:
            parte=document.getElementById("manoR").style='opacity:1';
            break;
        case 6:
            parte=document.getElementById("manoL").style='opacity:1';
            break;
        case 7:
            parte=document.getElementById("piernaR").style='opacity:1';
            break;
        case 8:
            parte=document.getElementById("piernaL").style='opacity:1';
            break;
        case 9:
            parte=document.getElementById("pieR").style='opacity:1';
            break;
        case 10:
            parte=document.getElementById("pieL").style='opacity:1';
            parte=document.getElementById("cabezaImg").innerHTML="src='../../img/v1-scary-black'";
            parte.style='opacity:1';
            break;  
        default:
            console.log("nada por aqui");    
            break;    
    }
}

function musica(e){
    switch(e){
        case 1:  
        audio=document.getElementById("musica");
        audio.play();
        break;
        case 2:
        audio=document.getElementById("gameOver");
        audio.play();
        break;
        case 3:
        audio=document.getElementById("nsp");
        audio.play();    
        break;
        default: console.log("no deberiamos estar aqui"); 
        break; 
    }  
}

//                                      FUNCION GAME OVER

function gameOver(){
    musica(2);
    for (var i=1;i<=10;i++){
        elementos(i);
        console.log("la parte"+i);
    }
    document.getElementById("cabeza").style='display:none';
    document.getElementById("dead").style='opacity:1';
    document.getElementsByClassName("cuerpo").style='opacity:1';
    document.getElementById("operacion").innerHTML='<div id="g-o"><img src="../../img/gameOver.jpg"><a id="denuevo" href="../../index.html">-JUGAR OTRA VEZ-</a></div>';
    document.getElementById("denuevo").style='position:absolute;right:53%;top:55%;font-size:50%';
    document.getElementById("volver").style='display:none';  
}

window.addEventListener("load",comenzar,false);

