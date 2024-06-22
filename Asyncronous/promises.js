let count = true;

let countValue = new Promise(function(resolve,reject){
    if(count){
        resolve('There is count value')
    }
    else{
        reject('<reject>')
    }
})

console.log(countValue);