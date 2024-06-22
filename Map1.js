const map = new Map([
    ["One",24],[45,"two"],[true,"three"],["four",10.5]
])

console.log(map.get("One"),map.get(45),map.get(true));
console.log(map.keys());

const set1 = new Set([
    "one","One"  
])
set1.add(24);
set1.add(24);
set1.add("two");

console.log(set1);