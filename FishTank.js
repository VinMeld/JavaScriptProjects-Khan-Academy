var makeFish =function(x,y,z,t,r){
    var centerX = r;
    var centerY = t;
    var bodyLength = y;
    var bodyHeight = x;
    var bodyColor = color(z, z, 255);
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
             centerX-bodyLength/2-tailWidth, centerY-tailHeight,
             centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(z, z, z);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};
var settingVariables = function(){
    background(89, 216, 255);
    var x = random(10, 300);
    var y = random(10, 300);
    var z = random(10, 300);
    var t = random(10, 300);
    if(mouseIsPressed){
    makeFish(x,100,y,z,t);
    }
    makeFish(x,100,100,50,100);
    makeFish(x,100,100,200,300);  
};

draw = function() {
    settingVariables();
};
