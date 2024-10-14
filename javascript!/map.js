function add10(ele){
    return ele+10;
}
let arr = [1,-6,-3,8];
console.log(arr);

//types of map
arr=arr.map(add10);
console.log(arr);

arr = arr.map(function(ele){
    return ele*ele;
});
console.log(arr);
 
arr = arr.map((ele)=>{
    return ele/10;
});
 console.log(arr);

arr = arr.map(ele => ele*2);
console.log(arr);