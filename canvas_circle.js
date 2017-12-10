var canvas = document.getElementById('canvasCircle');

canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
canvas.height = 300;
var c = canvas.getContext("2d");

//Rectangle
//c.fillRect(x,y,width,height);
// c.fillStyle = 'rgba(255,0,0,0.4)'
// c.fillRect(100,100,100,100);
// c.fillRect(200,200,100,100);
// c.fillRect(300,300,100,100);
// //console.log(canvas);
//
// //Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,200);
// c.lineTo(400,50);
// c.strokeStyle="#fa34a3";
// c.stroke();

// Arc / Circle
//c.arc(x, y, radius, startAngle:Float, endAngle:Float, anticlockwise);
// c.beginPath();
// c.arc(500,500,100,0, 2*Math.PI, true);
// c.strokeStyle = 'blue';
// c.stroke();
// var colorArray = [
//  '#ff0000',
//  '#00ff00',
//  '#0000ff',
//  '#aaaaaa',
//  '#a12345'
// ]
//
//
// for(var i=0;i<500;i++)
// {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   var redius = Math.random() * 100;
//   var r= Math.floor(Math.random() * 255);
//   var g= Math.floor(Math.random() * 255);
//   var b= Math.floor(Math.random() * 255);
//   var a= 1;
//   c.beginPath();
//   c.arc(x,y,redius, 0, 2*Math.PI, true);
//   c.strokeStyle= 'rgba('+r+','+g+','+b+','+a+')'
//   //c.strokeStyle = colorArray[colorId];
//   //console.log(colorId);
//   c.stroke();
// }

var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;


var colorArray = [
'#071930',
'#023852',
'#03A694',
'#F24738',
'#851934'
];


window.addEventListener('mousemove',
function(event){
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize',
function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Circle(x,y,dx,dy,radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color =  colorArray[Math.floor(Math.random()* colorArray.length)];
  this.minRadius = this.radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0, 2*Math.PI, true);
    c.fillStyle = this.color;


    c.fill();
  }

  this.update = function(){

    if(this.x + this.radius > innerWidth || this.x- this.radius < 0){
      this.dx= - this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y- this.radius < 0){
      this.dy= -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if((mouse.x - this.x) < 50 && (mouse.x - this.x) > -50 && (mouse.y - this.y) < 50 && (mouse.y - this.y) > -50){
      if(this.radius < maxRadius){
       this.radius += 1;
      }
    }else if(this.radius > this.minRadius){
      this.radius -= 1;
    }

    this.draw();
  }

}
var circleArray = [];
var speed = 2;

function init(){
  circleArray = [];
  for(var i=0;i < 800; i++){
    var radius = Math.random() * 5 + 1;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5 ) * speed;
    var dy = (Math.random() - 0.5 ) * speed;
    circleArray.push(new Circle(x,y,dx,dy,radius));
  }

}

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0, innerWidth, innerHeight);

  for(var i=0;i < circleArray.length; i++){
  circleArray[i].update();
  }

}

animate();
init();
