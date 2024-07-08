const fruits  =[{name:'banana',color:'yellow',cal:123},
                {name:'orange',color:'orange',cal:63},
                {name:'pineapple',color:'yellow',cal:35},
                {name:'apple',color:'red',cal:53},
                ];

fruits.forEach(fruits=>console.log(fruits.name+'-'));

const fruitColor = fruits.map(fruits => console.log(fruits.color+'--'))

const fruitCal = fruits.filter(fruit => fruit.cal < 100 && fruit.color === "red")
console.log(fruitCal);

const maxCal = fruits.reduce((max,fruit)=>fruit.cal > max.cal ? fruit : max);
console.log(maxCal);
const minCal = fruits.reduce((min,fruit)=>fruit.cal < min.cal ? fruit : min);
console.log(minCal);
