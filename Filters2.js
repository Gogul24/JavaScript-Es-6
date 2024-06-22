function isOdd(num){
    return num%2 !=0
}
function isEven(num){
    return num%2==0
}

function filter(num,fn){
    let result =[];
    for(let n of num){
        if(fn(n)){
            result.push(n)
        }
    }
    return result;
}

let num = [10,3,45,33,21,20];
console.log("Odd numbers : "+filter(num,isOdd));
console.log("Even number : "+filter(num,isEven));