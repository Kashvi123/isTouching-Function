var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200, 350, 50, 50);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "yellow";
}

function draw() {
  background("green")
  movingRect.x = mouseX;
  movingRect.y = mouseY;

if(isTouching(movingRect,fixedRect)){
movingRect.shapeColor = "pink";
fixedRect.shapeColor = "Orange";

}
 else{
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "yellow";
 }
    

  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x- object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y- object1.y < object2.height/2 + object1.height/2){
    return true;
    }
    else{
    return false;
    }

}

//true&False boolean values//
//true = 1
//false = 0