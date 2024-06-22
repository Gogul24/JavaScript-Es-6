function sum1(...data){
    let sum = 0;
    for(let i of data){
        sum += i;
    }
    console.log(`Sum : ${sum}`);
}
sum1(12,22);
sum1(2,3,5,6,9);