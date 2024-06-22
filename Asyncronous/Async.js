async function f(){
    console.log('Async Function');
    return Promise.resolve(1);
}

f()
.then(function(result){
    console.log(result);
})