function odd(num){
    return num%2;
}
function getOdd(){
    return Array.prototype.filter.call(arguments,odd)
}

let result = getOdd(10,2,100,24,44,21)
console.log("odd  number : "+result);

