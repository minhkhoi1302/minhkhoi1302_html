// setTimeout(function(){
//     alert("Hello everybody");
// },2000);// delay 2000 ms

var h = document.getElementById("number");
//h.innerText = "XIN CHAO CAC BAN";
//h.innerText = "<i>HELLO</i>";
var t=10;
var it = setInterval(function(){
    // alert("Hello T2311E");
    // console.log(t);
    // h.innerText = t;
    h.innerText += `${t}`;
    t--;
    if(t<0){
        clearInterval(it);
    }
},1000);

// 10:00
// 09:59
// 09:58
//....
// 00:00

var span_min = document.getElementById("min");
var span_sec = document.getElementById("sec");
var min = 10, sec=0;
var timer = setInterval(function(){
    // console.log(`${min}:${sec}`);
    span_min.innerText = min;
    span_sec.innerText = sec;
    sec--;
    if(sec<0){
        min--;
        sec = 59;
    }
    if(min<0){
        clearInterval(timer);
    }
},100);