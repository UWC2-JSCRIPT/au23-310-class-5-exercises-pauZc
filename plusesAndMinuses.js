// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0
const plusEl = document.getElementById('plus')
const minusEl = document.getElementById('minus')
const number = document.getElementById('counter')

plusEl.addEventListener('click', ()=>{
    counter ++;
    number.innerText = counter
})
minusEl.addEventListener('click', ()=>{
    counter --;
    number.innerText = counter
})

