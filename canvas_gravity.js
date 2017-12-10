// Initial Setup
const canvas = document.querySelector('canvasGravity')
const c = canvas.getContext('2d')

canvas.width = innerWidth
//canvas.height = innerHeight
canvas.height = 300

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#E53D36', '#FFA644', '#998A2F', '#295949','#002D40']

var gravity = 1;
var friction = 0.79;
// Event Listeners
// addEventListener('mousemove', event => {
//     mouse.x = event.clientX
//     mouse.y = event.clientY
// })

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

var clicked = false;

addEventListener('click', event => {
    mouse.y = event.clientY;
    clicked = true;
    init()
})


// Utility Functions
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
}

function distance(x1, y1, x2, y2) {
    const xDist = x2 - x1
    const yDist = y2 - y1

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
}

// Objects
function Ball(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.update = () => {
      if(this.y + this.radius + this.dy > canvas.height){
        this.dy = - this.dy * friction;
      }else{
        this.dy += gravity;
      }

      if(this.x + this.radius + this.dx > canvas.width || this.x - this.radius< 0 ){
        this.dx = - this.dx;
      }

        this.y += this.dy;
        this.x += this.dx;
     //console.log(this.dy);
        this.draw();
    }

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();
    }
}

// Implementation
let balls
function init() {
    balls = [];

    for (let i = 0; i < 400; i++) {
      var radius= Math.random() * 30 + 1;
      var x = randomIntFromRange(radius, canvas.width - radius);
      var y = clicked ? Math.floor(mouse.y - (Math.random() * 200))  : randomIntFromRange(Math.floor(radius), canvas.height - radius);
      var dy = randomIntFromRange(-2,2);
      var dx = randomIntFromRange(-2,2);
      var color = randomColor(colors);
       balls.push(new Ball(x, y,dx, dy,radius, color));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    balls.forEach(ball => {
     ball.update();
    });
}

init()
animate()
