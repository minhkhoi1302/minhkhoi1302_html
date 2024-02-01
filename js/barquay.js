var f = document.getElementById("fan");
var dg = 0;

setInterval(function(){
    dg+=10;
    f.style.transform = `rotate(${dg}deg)`;
    
},50)