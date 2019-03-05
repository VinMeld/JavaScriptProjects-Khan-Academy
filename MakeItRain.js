var xPositions = [100,200,300,350,50];
var yPositions = [0,0,0,0,0];
var fi = [100,150,255,160];
var fil = [50,255,100,200];
var fl = [25,75,159,225];
draw = function() {
    background(204, 247, 255);
        var k = 0;
    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        k+=10;
        fill(fi[i], fil[i],fl[i]);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 5;
    }
    for(var i = 0; i < yPositions.length; i++){
        if(yPositions[i] === 400){
            yPositions[i] = 0;
        }
    }
};

mouseClicked = function() {
    xPositions.push(mouseX);
    yPositions.push(0);
    fi.push(random(255));
    fil.push(random(255));
    fl.push(random(255));

};
