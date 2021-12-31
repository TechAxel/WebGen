# WebGen
a game engine that you dont have to install, simply add it to your web browser


How to update: go to releases and install the code (just replace the file) or go into webgen.js code in github and copy it and paste it over the last code in webgen

webgen is open source, feel free to branch and make it better!!!


-how to use-
Add the wengen file to your site and add the imports to your main js, not the webgen.js (will be found at imports.md for imports)
-How to draw a circle and animate it-
This is a easy way of making a arc in html canvas which is what wengen is based off and js helps it.
For more easy understanding, know html canvas -
 
 -how to add-
First add the webgen.js file

2nd add the imports ____To your main file!!!____

3rd make sure the canvas tag id is exactly webgen 

<canvas id="webgen"></canvas> 

4th go to your html file, and add type="module"
EXAMPLE

<script type="module" src='index.js' ></script>

-how to do circle (better example)
First make a new circle, example below:
let circle = new Circle(100, 75, 50, 0, 2, false, 0, 0, 0, 0)
You can name it anything. 
The () inside meaning
(x, y, rad, sa, ea, b, vx, vy, vz)
X is the x position
Y is the y position
Rad is the radius 
Sa is starting angle
Ea is ending angle
B is clockwise (by default you should do false
Vx is velocity in x
Vy is velocity in y
Vz is velocity in z
Vc is velocity in z but opposite (instead of like \ like /)
To make it animate, call your variable name.draw()

For better understanding of how to animate, 
Both x and y work like this
Y - this.y + this.vy + this.vz + this.vc;
X - this.x + this.vx + this.vz - this.vc;

EXAMPLE
circle.draw()

To change the variables, do your variables . vz 
That's standing for velocity on the z axis, and it can change by making it = to a different number. That applies to all variables.

How to change the background. 
Go to your css file and add this
#wengen{
	background-color:rgb(num, num, num);
}
Num means like add your own number there, go online and find a rgb generator to get the color you want.
