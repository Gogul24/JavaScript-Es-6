const { log } = require("async");

let promise = new promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise Resolved',4000)
    })
})

async function Asyncfun(){
    let result = await Promise;
    console.log(result);
    console.log('hello');
}

Asyncfun();