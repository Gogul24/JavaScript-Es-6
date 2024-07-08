const random = [{name:'gokul',age:22},
                {name:'Aadhi',age:33},
                {name:'Vishwa',age:19},
]

random.sort((a,b)=>b.age-a.age);
console.log(random); // this is for integer sorting

random.sort((a,b)=>a.name.localeCompare(b.name)) //this is for sorting an string
console.log(random);

const arr = [10,34,11,1,22,24,87]
console.log(arr.sort((a,b)=>b-a)); // descending order