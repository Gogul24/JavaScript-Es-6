const std =['a','b','c'];
for (const a of std) {
    console.log(a);
}

const str = "gokul";

for (const a of str) {
    process.stdout.write(a+" ")
}
console.log();

const set = new Set([1,2,3]);
for(let s of set){
    console.log(s);
}

const map = new Map();
map.set('name','gokul');
map.set('age',22);

for(let [key,value] of map){
    console.log(key+' '+value);
}