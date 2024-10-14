// let x= document.querySelector("h2");
// setTimeout(function(){
//     x.style.color = "red";
// x.style.fontFamily = "Gill Sans";
// },4000)
// let y = document.querySelector("h1");
// y.style.backgroundColor = "black";
// y.innerHTML = "Changed";
// setTimeout(function(){
//     y.innerHTML = "Changed";
// },2000)



let x = document.getElementById("pikka");
// x.style.color= "yellow";
// x.style.backgroundColor="red";

x.addEventListener("click",function(){
    x.style.color= "yellow";
    x.style.backgroundColor="red";
})
x.addEventListener("mouseleave",function(){
    x.style.color= "black";
    x.style.backgroundColor="white";
})
let y = document.getElementById("pikka2");
y.addEventListener("mouseenter",function(){
    y.style.color = "white";
    y.style.backgroundColor ="blue";
})
y.addEventListener("mouseleave",function(){
    y.style.color = "black";
    y.style.backgroundColor ="white";
})
let z = document.getElementById("pikka3");
z.addEventListener("click",function(){
    z.style.color = "pink";
    z.style.backgroundColor ="red";
    z.innerHTML = "chase dreams"
})