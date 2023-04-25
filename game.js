const ball = document.getElementById('ball')
const up = document.getElementById('up')
const down = document.getElementById('down')
const right = document.getElementById('right')
const left = document.getElementById('left')

up.addEventListener('click', () =>{
    ball.style.top = ball.offsetTop - 50 + 'px'
  
})
down.addEventListener('click', () =>{
    ball.style.top = ball.offsetTop + 50 + 'px'

})
right.addEventListener('click', () =>{
    ball.style.left = ball.offsetLeft + 50 + 'px'
})
left.addEventListener('click', () =>{
    ball.style.left = ball.offsetLeft - 50 + 'px'
})

