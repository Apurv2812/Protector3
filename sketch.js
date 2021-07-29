var fourArms,fourArmsImg;
var aggregor,aggregorImg;
var cannonbolt,cannonboltImg;
var drAnimo,drAnimoImg;
var omnimatrix,omnimatrixImg;
var swampfire,swampfireImg;
var vilgax,vilgaxImg;
var bg,bgImg;
var lives = 0;
var omnimatrixGroup,drAnimoGroup;
var b10Sound;

function preload(){

  fourArmsImg = loadImage("Images/four arms.png");
  aggregorImg = loadImage("Images/aggregor.png");
  cannonboltImg = loadImage("Images/cannonbolt.png");
  drAnimoImg = loadImage("Images/dr.animo.png");
  omnimatrixImg = loadImage("Images/omnimatrix.png");
  swampfireImg = loadImage("Images/swampfire.png");
  vilgaxImg = loadImage("Images/vilgax.png");
  bgImg = loadImage("Images/background.png");
  b10Sound = loadSound("Ben 10 AF End.mp3");

}

function setup(){
  createCanvas(1500,900);


  fourArms = createSprite(100,800,10,10);
  fourArms.addImage("fourArms",fourArmsImg);
  fourArms.scale = 0.5

  invisibleGround = createSprite(750,850,1500,2);
  //invisibleGround.visible = false;

  omnimatrixGroup = new Group();
  drAnimoGroup = new Group();
}

function draw(){
  background(bgImg);

  fill("Red");
  textSize(50);
  text("Omnimatrix "+lives,1100,100);

  b10Sound.play();
  
  if(keyDown("LEFT_ARROW")){
    fourArms.x-=5
  }
  else(
    fourArms.x+=0,
    fourArms.x-=0
  )
   if(keyDown("RIGHT_ARROW")){
    fourArms.x+=5;
  }
  
  if(keyDown("SPACE")){
    fourArms.velocityY-=5;
  }
  fourArms.velocityY+=0.5;
 

  if(fourArms.isTouching(omnimatrixGroup)){
    omnimatrixGroup[0].destroy();
    fourArms.addImage("fourArms",swampfireImg)
    fourArms.scale = 0.5;
    fourArms.collide(invisibleGround);
    lives+=1;
  } 

 if(fourArms.isTouching(drAnimoGroup)){
    fourArms.addImage("fourArms",cannonboltImg);
    fourArms.scale=0.1;
    fourArms.collide(invisibleGround);

  }

  fourArms.collide(invisibleGround);
  spawnOmnimatrix();
  spawnDrAnimo();

drawSprites();

}

function spawnOmnimatrix(){

if(frameCount%150 === 0){
  omnimatrix = createSprite(1500,random(400,800),10,10)
  omnimatrix.addImage("omnimatrix",omnimatrixImg);
  omnimatrix.velocityX = -3;
  omnimatrix.scale = 0.5;
  omnimatrixGroup.add(omnimatrix);
}
}

function spawnDrAnimo(){
  if(frameCount%200 === 0){
    drAnimo = createSprite(1500,random(450,850),10,10);
    drAnimo.addImage("drAnimo",drAnimoImg);
    drAnimo.velocityX = -4;
    drAnimo.scale = 0.15;
    drAnimoGroup.add(drAnimo);
  }
}