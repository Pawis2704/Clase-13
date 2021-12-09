var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud, cloudImg;
var obstacles, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;


function preload() {
trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
trex_collided = loadImage("trex_collided.png");
groundImage = loadImage("ground2.png");
cloudImg = loadImage("cloud.png");
obstacle1= loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
obstacle4 = loadIamage("obstacle4.png");
obstacle5 = loadImage("obtacle5.png");
obstacle6 = loadImage("obstacle6.png"); 
}
function setup() {
createCanvas(600, 200);
//create a trex sprite
trex = createSprite(50,160,20,50);
trex.addAnimation("running", trex_running);
trex.scale = 0.5;
//create a ground sprite
ground = createSprite(200,180,400,20);
ground.addImage("ground",groundImage);
ground.velocityX = -4;
//creando suelo invisible
invisibleGround = createSprite (200, 190, 450, 8);
invisibleGround.visible = false;
}
function draw() {
background("papayawhip");
//jump when the space button is pressed
if (keyDown("space") && trex.y >= 100) {
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY + 0.8
if (ground.x < 0) {
ground.x = ground.width / 2;
}
trex.collide(invisibleGround);

spawnClouds();

spawnObstacles();

drawSprites();
}

//funcion para que aparezcan las nubes
function spawnClouds (){

if(frameCount%65==0){
    cloud  =  createSprite(600, 100, 40, 15);
    cloud.velocityX = -3;
    cloud.addImage(cloudImg);
    cloud.scale = 0.27;
    cloud.y = Math.round(random(15, 90));
    //ajustar profundidad
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;  
    cloud.lifetime= 200;
}
}

function spawnObstacles(){
 if(frameCount%75==0){
   obstacles = createSprite(600, 160, 15, 20);
   obstacles.velocityX = -2; 
   //obstaculos aleatorios
   var ran = Math.round(random(1, 6));

   switch(ran){

    case 1: obstacles.addImage(obstacle1);
   break;

   case 2: obstacles.addImage(obstacle2);
   break;

   case 3: obstacles.addImage(obstacle3);
   break;

   case 4: obstacles.addImage(obstacle4);
   break; 
   
   case 5: obstacles.addImage(obstacle5);
   break;

   case 6: obstacles.addImage(obstacle6);
   break;

   default: break;
   }
  obstacles.scale = 0.15;
  obstacles.lifetime = 300;
 }
}