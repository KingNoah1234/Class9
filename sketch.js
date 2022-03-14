//creating the variables
//is executed only once
var box;  //optional

function setup() {
  //is executed only once 
  createCanvas(400,400);
  //creating the sprites
  box = createSprite(200, 200, 50, 50)
}

function draw() {
  //executed for every frame
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 5
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x  -5
  }
  if(keyIsDown(UP_ARROW)){
    box.y = box.y -5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.y = box.y +5
  }
  drawSprites()
}




