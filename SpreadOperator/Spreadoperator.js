let arr =['a','d','e','f']
let a1 = [...arr].join(" ")
console.log(a1);

let a = "Hello"
let a2 = [...a].join("-")
console.log(a2);

let b = [...arr, ...a].join(" ")
console.log(b);