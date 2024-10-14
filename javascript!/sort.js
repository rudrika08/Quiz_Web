let arr = [1,9,2,7,4,5,6,2,8];
console.log(arr);

arr=arr.sort(function(a,b){
    //return b-a //decreasing order
    return a-b;  //increasing order
});
console.log(arr);