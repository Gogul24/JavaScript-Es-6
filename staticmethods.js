class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    static anonymous(gender){
        let name = gender =="male" ? "yes":"no"
        console.log(name);
    }
}

Person.anonymous("male");//staic method

const obj = new Person("gokul");
console.log(obj.getName());