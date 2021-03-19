let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
let drawing = true 
let clicked = true
let button = document.getElementById("button")
button.addEventListener("click" , ()=>{
    ctx.clearRect(0,0,2000,2000)
})
canvas.width = 2000
canvas.height = 2000
ctx.fillStyle = "red"
ctx.mouseCap = "circle"
window.addEventListener("mousemove" , (e)=>{
    if(drawing == false){
        let x = e.clientX
        let y = e.clientY
        let sx = e.screenX
        ctx.fillRect(x,y,30,30)
        
    
        console.log("moved")
        
        
    
        console.log(x)
        console.log(y)
        console.log(sx)
    }
    
})

window.addEventListener("click" , ()=>{
    if(clicked == true){
        drawing = true
        clicked = false
    }
    else{
        drawing = false
        clicked = true
    }
    
        })



