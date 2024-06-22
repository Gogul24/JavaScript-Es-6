const arr =[1,2,3,4];
let total = 0;
for(let a in arr){
    console.log(arr[a]);
    total += arr[a];
}
console.log(total);

Array.prototype.item = 40; //adding element to an array

const arr2 =[1,2,3];
let total1 =0;
for(let a in arr2){
    console.log(a +":"+arr2[a]);
    total1 += arr2[a]
}
console.log(total1);