function Login(element) {
    if (element.innerText=="Login"){
        element.innerText=
        "Logoff";
    }
    else{
        element.innerText=
        "Login";
    }
}
var x=0;
var y=0;
var z=0;
var L1 = document.querySelector(".LCount1");
var L2 = document.querySelector(".LCount2");
var L3 = document.querySelector(".LCount3");
function Likes1(element){
    x++;
    if (x==1){
        L1.innerText=x+" like"
    }
    else{
        L1.innerText=x+" like(s)"
    }
    
}
function Likes2(element){
    y++;
    if (y==1){
        L2.innerText=y+" like"
    }
    else{
        L2.innerText=y+" like(s)"
    }
}
function Likes3(element){
    z++;
    if (z==1){
        L3.innerText=z+" like"
    }
    else{
        L3.innerText=z+" like(s)"
    }
}