function add(x,y){
    return x+y;
}
console.log(add(10,20));


function sum(x,y){
    return x+y;
}
let result = sum.call(this,10,20)
console.log(result);