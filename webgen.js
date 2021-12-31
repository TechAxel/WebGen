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
