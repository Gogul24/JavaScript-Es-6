class Person1 {
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}
class Address{
    constructor(city,state,country){
        this.city = city;
        this.state = state;
        this.country = country;
    }
}

const person = new Person1('Gokul',22,'Coimbatore','TamilNadu','India')

for (const key in person) {
    console.log(person[key]);
}