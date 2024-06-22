    //Syncronous

function greet(name,callback){
    console.log('hello world');
    callback(name);
}

function sayName(name){
    console.log('hello'+name);
}

setTimeout(greet,2000,'gokul',sayName);
// sayName('gokul')