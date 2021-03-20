let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let drawing = true
let clicked = true
let triangle = false
let select = document.getElementById("line")
let size = document.getElementById("size-line")
let buttons = document.querySelectorAll("button")
let clear = document.getElementById("clear")
for(items of buttons){
items.style.backgroundColor = items.innerHTML    
items.addEventListener("click" , (e)=>{
ctx.fillStyle = e.target.innerHTML
drawing = true
})


}

canvas.width = 1350
canvas.height = 500
ctx.width = 1350
ctx.height = 500

clear.addEventListener("click" , ()=>{

ctx.clearRect(0,0,2000,2000)

})




ctx.fillStyle = "red"

window.addEventListener("mousemove" , (e)=>{
    if(drawing == false){
        let x =  e.clientX
        let y =  e.clientY
        let sx = e.screenX
        let sy = e.screenY
        ctx.fillRect(x,y,size.value,size.value)
        
    
        console.log("moved")
        
        
    
        console.log(x)
        console.log(y)
        console.log(sx)
    }
    
})

canvas.addEventListener("click" , ()=>{
    if(clicked == true){
        drawing = false
        clicked = false
    }
    else{
        drawing = true
        clicked = true
    }
    
 })

 



