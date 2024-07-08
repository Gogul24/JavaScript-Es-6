function sum(callback ,x,y){
    const resut = x+y;
    callback(resut)
}

function display(x){
    console.log(x);
}

sum(display,2,4)

//sending function as a parameter is callback function

//ForEach

const arr=[1,2,3,4,5];

arr.forEach(display)
function display(Element){
    console.log(Element);
}