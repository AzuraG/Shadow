let hasmouseMoved = false;
let img1, img2;

function setup(){
      createCanvas(windowWidth, windowHeight);

      img1 = loadImage('./shadow.jpg');
      img2 = loadImage('./running.png');
      
     //button = createImg('./running.png');
      
noCursor();

      imageMode(CENTER);
      frameRate(10);

}

function draw(){


    image(img1, mouseX, mouseY);

    ///let a = createA('https://p5js.org/libraries/',img2);
   // a.position(0,0);

    //button.position(windowWidth/2-100, windowHeight*3/4)


}




function mouseMoved(){
    hasmouseMoved = true;

}
   function windowResized(){
   resizeCanvas(windowWidth, windowHeight);

   }
