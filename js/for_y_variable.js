var mi_time = -1;
var mi_delay = 100;

function setup() {
let cnv = createCanvas(250, 250);
cnv.parent("p5_js");
background(0,0,0);
smooth();
frameRate(10);
colorMode(RGB, 255, 255, 255, 1);
}

function draw() {

  for(let i=0; i<250; i=i+1){
        if (i===80){
        fill (0,0,0,0.01);
        noStroke();
        rect(0,0,500);  
        }
      if( millis() > mi_time ){
        mi_time = millis() + mi_delay; // x is also delay in ms.

        stroke(random(20,250));
        strokeWeight(random(2,4));
        line(random(width-width*1.8),random(height-        height*1.8),random(width,width*1.8),random(height,height*1.8));
    }

  }
 } 