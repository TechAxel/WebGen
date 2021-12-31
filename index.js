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