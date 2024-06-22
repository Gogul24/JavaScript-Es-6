const str1 = "Imarticus";
console.log(str1.startsWith('I'));
console.log(str1.endsWith('s'));
console.log(str1.includes('t'));

const arr1 = Array.from("Habbibi")
console.log(...arr1);

const arr2 = ['one','two','three'];
const arrKey = arr2.keys();
for(let key of arrKey){
    console.log(key);
}

const findArray = ['clock','strong','planet','earth'];
const lessThanSix = (item)=>{
    return item.trim.length<6;
}

console.log("Implementing less than six");
console.log(findArray.find(lessThanSix));

console.log("Array index",findArray.findIndex(lessThanSix));

const myarr = ['Imarticus learning','FSD'];
const arr = myarr.entries();

for(let i of arr){
    console.log(i);
}

console.log(Math.abs(-4));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.8));
console.log(Math.random());
console.log(Math.sin(90 * Math.PI/180));