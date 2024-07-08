const Person  = {
    name:'gokul',
    age:22,
    address:{
        city:'Coimbatore',
        state:'TamilNadu'
    }
}

const text = document.getElementById('p1')

let display = '';

for (const key in Person.address) {
    if (Object.hasOwnProperty.call(Person.address, key)) {
        display += `${key} : ${Person.address[key]}<br>`
    }
}

text.innerHTML = display
