function countDown(num){
    console.log(num);
    if(num>0){
        countDown(num-1);
    }
}
countDown(5);

function sum(n) {
    if(n<=1)
        return n;
    else
        return n+sum(n-1);
}
console.log(sum(5));