const ball = document.getElementById('ball')
const up = document.getElementById('up')
const down = document.getElementById('down')
const right = document.getElementById('right')
const left = document.getElementById('left')

up.addEventListener('click', () =>{
    if(ball.offsettop > -100 )
      ball.style.top = ball.offsetTop - 50 + 'px'
    else
        ball.style.top = window.innerHeight + 'px'
  
})
down.addEventListener('click', () =>{
    if(ball.offsettop < window.innerHeight)
      ball.style.top = ball.offsetTop + 50 + 'px'
    else
       ball.style.top = '-100px'

})
right.addEventListener('click', () =>{
    if(ball.offsetLeft < window.innerWidth)
       ball.style.left = ball.offsetLeft + 50 + 'px'
       
    else
       ball.style.left = '-100px'

    
})
left.addEventListener('click', () =>{
    if(ball.offsetLeft > -100 )
        ball.style.left = ball.offsetLeft - 50 + 'px'
   else
     ball.style.left = window.innerWidth + 'px'


})

