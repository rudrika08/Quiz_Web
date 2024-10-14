let h = document.getElementById("main");
// main.innerHTML="<h1>Goodbye</h1>";
let arr = ["https://i.pinimg.com/736x/2d/5f/7b/2d5f7baabc01929e4103b2d1ef19c3e7.jpg",
"https://i.pinimg.com/564x/04/08/b0/0408b04ca5633d50365d719a6be75ff6.jpg",
"https://i.pinimg.com/736x/c2/46/e5/c246e5f5c879fa9fd4676fd07307dd76.jpg",
"https://i.pinimg.com/736x/29/05/3a/29053a19adc0a09a61cc4f87c8c43975.jpg"];
let s="";
for(let i=1;i<=65;i++){
    let r = Math.floor(Math.random()*arr.length)
    s+= `<div class="card"><img src="${arr[r]}"></div>`;
}
h.innerHTML = s;


