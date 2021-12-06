var mouseEvent = "empty"
var last_position_of_x, last_postition_of_y

canvas = document.getElementById ("myCanvas")
ctx= canvas.getContext('2d')

var color = "black"
var width_of_line = 1

canvas.addEventListener("mousedown", myMousedown)

function myMousedown(e){
mouseEvent = "mousedown"

}
canvas.addEventListener("mousemove", myMouseMove)

function myMouseMove(e){
var current_position_of_x = e.clientX - canvas.offsetLeft
var current_position_of_y = e.clientY - canvas.offsetTop

if (mouseEvent == "mousedown"){
ctx.beginPath()
ctx.strokeStyle = color
ctx.lineWidth = width_of_line
ctx.moveTo(last_position_of_x,last_postition_of_y)
ctx.lineTo(current_position_of_x,current_position_of_y)
ctx.stroke()


}
last_position_of_x = current_position_of_y
last_postition_of_y = current_position_of_y
}

canvas.addEventListener("mouseleave", myMouseleave)

function myMouseleave(e){
mouseEvent = "mouseleave"

}
canvas.addEventListener("mouseup", myMouseup)

function myMouseup(e){
mouseEvent = "mouseup"

}