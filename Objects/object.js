const person = {
    Name : 'gokul',
    Age :'22',
    Gender : 'male',
}
setTimeout(()=>{
    for (const key in person) {
        console.log(person[key]);
    }
},5000)


const person1 = {
    Name1 : 'gokul',
    Age :'22',
    Gender : 'male',
    fun : function(){console.log(`hello ${this.Name1}`)},
}

person1.fun();


