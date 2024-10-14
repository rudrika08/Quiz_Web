
//print 1 o 10 but wih delay of 1sec after each no. ges printed


// function h(){
//     console.log("hello");
// }
// function m(){
//     console.log("mello");
// }
// setTimeout(h,2*1000);
// setTimeout(m,3*1000);
for(let i=1;i<=30;i++){
    setTimeout(function(){
    console.log(31-i);
},i*500)
}
