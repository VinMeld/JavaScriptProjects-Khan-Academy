var xPos = 100;
var yPos = 100;
var xPoss = 300;
var yPoss = 100;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    fill(201, 197, 135);
    xPos++;
    yPos--;
    ellipse(xPoss-10, yPoss, 10, 10);
    xPoss--;
    yPoss--;
};



