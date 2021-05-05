var cuerpo= new Array(11);
var valor_random;
var numerador,denominador;
var resultado=0;
var points;
var ahorcado;//variable temporal, reemplazar por accion del ahorcado
var life;
var boton;

function comenzar(){
  cuerpo=document.querySelectorAll(".ahorcado div");
  numerador=document.getElementById("numerador");
  denominador=document.getElementById("denominador");
  resultado=document.getElementById("resultado");
  arranque();
 }

function resolver(){
    resultado=resultado.value;
    console.log("num: "+num +" den: "+ den +" res: "+ " "+ resultado);
    var resultadoPosta= num * den;
    if (resultadoPosta==resultado){
        console.log("bien");
        puntos(1);
    }else{
        console.log("mal");
        puntos(0);
    }
} 

function puntos(p){
    console.log("testeando el parametro p: "+p);
      if (p==1){
             points=points +1;
             console.log("punto a favor\n vamos: "+points);
             if (points==10){
                 alert("Ganastess!");
                 }else{             
                      //accion en el ahorcado
                      ahorcado=ahorcado +1;
                      console.log("punto en contra\n vamos: "+ahorcado); 
                      if (ahorcado==10){
                         alert("Ahorcado!");
                       }      
                   }
        }
        alert("chequear resetear los campos quizas con reset de la api form. \n quizas haya que poner los tres parametros de la operacion dentro de un form, que paja")
        comenzar();   
}

function arranque(){
    aleatorio();
    num=valor_random;
    numerador=numerador.innerHTML="<p>"+ num +"</p>";
    aleatorio();
    den=valor_random;
    denominador=denominador.innerHTML="<p>"+ den +"</p>";
    boton=document.getElementById("ok");
    ok.addEventListener("click",resolver    ,false);    
    //cronometroGo(segundos);
   } 

   

function cronometroGo(seg){
    var reloj= new Date()
    var segundos=reloj.getSeconds();
    console.log(segundos);
    return segundos;
} 

function aleatorio(){
    var numeroalazar = Math.random() * (11-2) + 1;
    valor_random = Math.ceil(numeroalazar); 
    return valor_random;
}

window.addEventListener("load",comenzar,false);

