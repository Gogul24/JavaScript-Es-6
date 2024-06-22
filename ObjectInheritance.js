const decoration = {
    color:'red'
}
const circle = Object.create(decoration);
circle.radius =10;

for(let a in circle){
    if(circle.hasOwnProperty(a))
    console.log(a+" :"+circle[a]);
}

