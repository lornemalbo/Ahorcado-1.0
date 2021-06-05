var valor_random;

function comenzar(){
document.getElementById("caja").addEventListener("click",abrir,false);
setInterval(function(){document.getElementById("ganaste").style='opacity:0;transition:4s';},2000);
}

function abrir(){
    aleatorio();
    premio=valor_random;
    musica(0);
    console.log("premio"+ premio);
    document.getElementById("caja").innerHTML="<img id='co1' src='../../img/lacaja-open1.jpg'>"+"<img id='co2' src='../../img/lacaja-open2.jpg'>"
    +"<img id='co3' src='../../img/lacaja-open3.jpg'>"+"<img id='co4'src='../../img/lacaja-open4.jpg'>"+"<img id='co5' src='../../img/lacaja-open5.jpg'>";
    var premios =setInterval(function(){
    switch (premio){
        case 1:
            document.getElementById("premio").innerHTML="<img id='premio1' src='../../img/premio1.jpg'>";
        break;
        case 2:
            document.getElementById("premio").innerHTML="<img id='premio1' src='../../img/premio2.jpg'>";
        break;
        case 3:
            document.getElementById("premio").innerHTML="<img id='premio1' src='../../img/premio3.jpg'>";
        break;
        case 4:
            document.getElementById("premio").innerHTML="<img id='premio1' src='../../img/premio4.jpg'>";
        break;
        case 5:
            document.getElementById("premio").innerHTML="<img id='premio1' src='../../img/premio5.jpg'>";
        break;
        case 6:
            document.getElementById("premio").innerHTML="<img id='premio1' src='../../img/premio6.jpg'>";
        break;
        case 7:
            document.getElementById("premio").innerHTML="<img id='cool1' src='../../img/premioCool2.png'>"+"<img id='cool2' src='../../img/premioCool3.png'>";
            musica(2);
            clearInterval(premios);
            break;
        case 8:
            document.getElementById("premio").innerHTML="<img id='premio7' src='../../img/premio7.png'>"+"<img id='premio72' src='../../img/premio7-2.png'>";
            musica(3);
            clearInterval(premios);
        break;
        case 9:
            document.getElementById("premio").innerHTML="<img id='premio1' src='../../img/premio1.jpg'>";
        break;
        case 10:
            document.getElementById("premio").innerHTML="<img id='premio1' src='../../img/1.jpg'>"+"<img id='gafas1' src='../../img/gafas.png'>"+"<img id='gafas2' src='../../img/gafas.png'>";
            dance=setInterval(baile,2000);
            clearInterval(premios);
        break;
        default: console.log("no deberíamos estar acá");break;
        };},2000);
        
        document.getElementById("caja").removeEventListener("click",abrir,false);
        setInterval(function(){document.getElementById("mensaje").innerHTML='<a id="denuevo" href="../../index.html">-JUGAR OTRA VEZ-</a>';},3000);
}

function aleatorio(){
    var numeroalazar = Math.random() * (11-2) + 1;
    valor_random = Math.ceil(numeroalazar); 
    return valor_random;
}

function baile(){
    clearInterval(dance);
    console.log("baile");
    musica(1);
    document.getElementById("premio").innerHTML="<img id='baile3' src='../../img/3.jpg'>"+"<img id='baile4' src='../../img/4.jpg'>";

}

function musica(e){
    switch (e){
        case 0:
            audio=document.getElementById("redoble");
            audio.play();
          break;
        case 1:
          audio=document.getElementById("believer");
          audio.play();
          break;
        case 2:
            audio=document.getElementById("cypress");
            audio.play();
            break;
        case 3:
            console.log("musica dp");
            audio=document.getElementById("dp");
            audio.play();
            break;    
        default: console.log("no deberíamos estar aquí");break;  
    }
}

window.addEventListener("load",comenzar,false);