// callback ek aisa function hota h jo ek function ke andar pass hota h
function Product(a,b,c){
  return a*b*c;
}
// console.log(Product(5,1,6));

function fun(x,y){
    let a = x(2,3,4);
   console.log(a-y);
}
fun(Product(3,8,9),7);