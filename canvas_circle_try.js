var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


var mouse = {
  x: undefined,
  y: undefined
}

var maxRadius = 40;

var colorArray = [
'#721528',
'#BC1654',
'#430721',
'#5C0E3E',
'#F09648'
];


// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
      //  init()
})

addEventListener('click', event => {
    init()
})

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
  this.minRadius = 1;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0, 2*Math.PI, true);
    //c.strokeStyle = this.color;
    c.fillStyle = this.color;
    //c.stroke();
    c.fill();
  }

  this.update = function(){

    this.x += this.dx;
    this.y += this.dy;

    if(this.x > mouse.x + 50) this.radius = 0;
     if(this.y > mouse.y+ 50) this.radius = 0;

    if(this.radius > 1){
       this.radius -= 1;
    }

    // interactivity
    if((mouse.x - this.x) < 50 && (mouse.x - this.x) > -50 && (mouse.y - this.y) < 50 && (mouse.y - this.y) > -50){
      if(this.radius > this.minRadius){
       this.radius -= 1;
      }
    }else if(this.radius < this.minRadius){
      this.radius += 1;
    }

    this.draw();
  }

}
var circleArray = [];
var speed = 10;

function init(){
  circleArray = [];
  for(var i=0;i < 100; i++){
    var radius = Math.random() * 50 + 1;
    //var x = Math.random() * (innerWidth - radius * 2) + radius;
    //var y = Math.random() * (innerHeight - radius * 2) + radius;
    var x = mouse.x;
    var y = mouse.y;
    var dx = (Math.random() - 0.5 ) * speed;
    var dy = (Math.random() - 0.5 ) * speed;
    circleArray.push(new Circle(x,y,dx,dy,radius));
  }

}

function animate(){
  requestAnimationFrame(animate);
//  c.clearRect(0,0, innerWidth, innerHeight);
  c.fillStyle = 'rgba(255,255,255,0.09)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  for(var i=0;i < circleArray.length; i++){
  circleArray[i].update();
  }

}

animate();
init();
