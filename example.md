-html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title></title>
    <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
    <canvas id="webgen"></canvas>
    <script src="index.js" type="module"></script>
</body>

</html>






-index



import {
    Circle
} from './webgen.js';

let circle = new Circle(100, 75, 50, 0, 2, false, 0, 0, 0, 0)
circle.draw()



document.addEventListener('keydown', function (event) {
  if (!event.repeat) {  
    switch(event.code){
      case 'KeyD':
        circle.vx = 3;
        break;
      case 'KeyA':
        circle.vx = -3;
        break;
    }
  }
 
});

document.addEventListener('keyup', function (event) {
    if (event.code === 'KeyA' || event.code === 'KeyD') {
        circle.vx = 0;
    }
});






-engine
let c = document.getElementById("webgen");
let ctx = c.getContext("2d");

c.width = window.innerWidth
c.height = window.innerHeight

let w = c.width;
let h = c.height;



export class Circle {
    constructor(x, y, rad, sa, ea, b, vx, vy, vz, vc) {
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.sa = sa;
        this.ea = ea;
        this.b = b;
        this.vx = vx;
        this.vy = vy;
        this.vz = vz;
        this.vc = vc;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, this.sa, this.ea * Math.PI);
        ctx.stroke();
        this.draw = this.draw.bind(this)
        this.update = this.update.bind(this)

    }
    draw() {
        requestAnimationFrame(this.draw);
        ctx.clearRect(0,0,w,h)
        this.update();
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, this.sa, this.ea * Math.PI, this.b);
        ctx.stroke();

        
        
    }

    update() {
        this.x = this.x + this.vx + this.vz + this.vc;
        this.y = this.y + this.vy + this.vz - this.vc;

    }



}
