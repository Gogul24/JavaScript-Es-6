function greet(name,callback) {
    console.log('hello '+name);
    callback();
}

function callMe(){
    console.log('call back function working');
}
greet('john',callMe);