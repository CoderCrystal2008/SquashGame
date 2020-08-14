var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(400, 200, 100, 50);
 movingRect.shapeColor = "turquoise";
 fixedRect = createSprite(200,200,50,50);
 fixedRect.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  //makes the moving rectangle move with the mouse
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
 console.log( movingRect.width/2+fixedRect.width/2);
 if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2
  && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2){
   movingRect.shapeColor = "purple";
   fixedRect.shapeColor = "purple";
 }else {
   movingRect.shapeColor = "turquoise";
   fixedRect.shapeColor = "green";
 }
  drawSprites();
}