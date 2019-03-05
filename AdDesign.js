background(0);
var changerSize = 30;
draw = function() {
    background(232, 42, 105);
    changerSize ++;
    if (changerSize === 40){
     changerSize-=30; 
    }
    textSize(changerSize);
    text("STUFFED Turkey!", 10, 30);
    textSize(15);
    text("Eat it. Please! :D", 10, 87);
    noFill();
    stroke(changerSize-10, changerSize+100, changerSize-100);
    ellipse(10+100,20,changerSize+300, changerSize+100);
    rect(changerSize,100,100,100);
    rect(200,changerSize,200,200);
};    
   
