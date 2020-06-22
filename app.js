let view=document.querySelector(".ans")
view.innerHTML=""
let num = function(n){
    
    view.innerHTML+=n
    console.log(n)
}
let op = function(n){
    view.innerText+=n
    console.log(n)
}
let equal = function(){
    if(view.innerHTML=="1+"){
        document.body.style.backgroundColor = "red";
        view.innerHTML="NEVER SETTLE"
    }
    else{
    console.log(view.innerHTML)
    view.innerHTML=eval(view.innerHTML)
}}
let reset = function(){
    view.innerHTML=""
    document.body.style.backgroundColor = "black";
}
let clearr = function(){
    str=view.innerHTML
    var newStr = str.substring(0, str.length-1);
    view.innerHTML=newStr
    document.body.style.backgroundColor = "black";
}
