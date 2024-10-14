
function twice(ele){
    return 2*ele;
}
function square(ele){
    return ele*ele;
}
let arr =[1,-6,3,-8];
console.log(arr);
let brr = arr.map(function(ele){
    return ele*ele;
});
console.log(brr);

// for(const ele of arr){
//     brr.push(Math.abs(ele*ele));
// }