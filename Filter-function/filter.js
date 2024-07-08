const arr = [1,2,3,4,5,6,7,8];
function isEven(element){
    return element%2===0;
}
function isOdd(element) {
    return element%2!=0
}
let evenNum = arr.filter(isEven)
let oddNum = arr.filter(isOdd)
console.log(evenNum);
console.log(oddNum);

