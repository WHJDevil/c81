canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
mouse_x=0;
mouse_y=0;
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(){
    color=document.getElementById("color").value;
    console.log(color);
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clienty-canvas.offsetTop;
    console.log("x="+mouse_x+"y="+mouse_y);
    circle(mouse_x,mouse_y);
}