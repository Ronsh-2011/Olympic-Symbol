canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "black";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 3;
ctx.arc(400,300,40,0,2*Math.PI);
ctx.stroke();

color = "blue";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 3;
ctx.arc(300,300,40,0,2*Math.PI);
ctx.stroke();

color = "red";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 3;
ctx.arc(500,300,40,0,2*Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 5;
ctx.arc(350,340,40,0,2*Math.PI);
ctx.stroke();

color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 8;
ctx.arc(450,340,40,0,2*Math.PI);
ctx.stroke();






























