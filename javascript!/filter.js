//filetr out even elements
// function fun(ele){
//     if(ele%2!=0) return true;
//     else return false;
// }
let arr = [1,9,2,7,4,5,6,2,8];
console.log(arr);

// let brr = arr.filter(fun);
// console.log(brr);
arr = arr.filter((ele)=>{
    if(ele%2==0) return true;
    else return false;
});
console.log(arr);

let brr = arr.filter((ele)=>(ele<4));
console.log(brr);