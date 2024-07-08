const num = [1,2,3,4,5];

function display(element) {
    console.log(Math.pow(element,2));
}

const num1 = num.map(display);


const dates = ['yyyy-dd-mm','2023-09-29','2023-04-19']
function format(element){
    const parts = element.split("-")
    return `${parts[1]}/${parts[2]}/${parts[0]}`

}
const formatted = dates.map(format)
console.log(formatted);


const  a = [1,2,3,4,5,6,7];

function isEven(element) {
    return element %2===0;
}
const b = a.map(isEven)
console.log(b);
