let increase = document.getElementById("inc")
let decrease = document.getElementById("dec")
let reset = document.getElementById("reset")
let counter = document.getElementById("H1")
let count = 0;

increase.onclick = function(){
    count++
    counter.textContent = count
}

decrease.onclick = function(){
    count--
    counter.textContent = count
}

reset.onclick = function(){
    count=0
    counter.textContent = count
}
