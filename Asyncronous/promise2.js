let count = false;
let countValue = new Promise((resolve, reject) => {
    resolve('Promise resolved');
})

countValue
.then(function successValue(result){
    console.log(result);
})

.then(function successValue1(){
    console.log('multiple then we can use');
})

.catch(function ErrorMSg(error){
    console.log('error message : '+error);
})

.finally(function greet(){
    console.log("Finally block");
})