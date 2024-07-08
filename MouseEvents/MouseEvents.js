const box = document.getElementById('box') 
isClicked = false;
let x = 0;
let y= 0;
const val = 15;
box.addEventListener('click',event=>{
    if(!isClicked){
        event.target.style.backgroundColor = 'red'
        event.target.textContent = 'Ouch 😒' 
        isClicked = true
    }
    else{
        isClicked = false
        event.target.style.backgroundColor = 'lightgreen'
        event.target.textContent = 'Click Me 😁' 
    }
})

box.addEventListener('mouseover',event=>{
    event.target.style.backgroundColor = 'lightpink'
    event.target.textContent = 'Come on 😎' 
})

box.addEventListener('mouseout',event=>{
    event.target.style.backgroundColor = 'lightgreen'
    event.target.textContent = 'Click Me 😁' 
})
 