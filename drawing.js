context = document.getElementById('canvasInAPerfectWorld').getContext("2d");

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

addEventListener('mousedown', event => {
    mouse.x = event.clientX - this.offsetLeft;
    mouse.y = event.clientY - this.offsetTop;
    paint = true;
    addClick(mouse.x - this.offsetLeft, mouse.y - this.offsetTop);
    redraw();
})
