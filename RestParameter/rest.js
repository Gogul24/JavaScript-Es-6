// rest operator bundles value into an array

let a1 = "apple";
let a2 = "orange";
let a3 = "Watermelon";

function fruits(...fruits){
    console.log(fruits);
}
fruits(a1,a2,a3)

function sum(...num){
    let result =0;

    for (let n of num) {
        result +=n;
    }

    console.log(`Total : ${result}`);
}
sum(1,2,3,4,123,55,67)


function combString(...string){
    console.log(string.join(' '));
}
const str  = combString('hi','welcome','to','JavaScript')