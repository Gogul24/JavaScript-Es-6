class Person {
    constructor(name,age,gender){
        this.name= name;
        this.age = age;
        this.gender = gender;
    }  
}
const p1 = new Person('gokul','22','male');

for (const key in p1) {
    console.log(p1[key]);
}