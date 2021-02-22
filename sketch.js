var player, player_running,player_jump;
var ground,enemy
function preload(){
player_running = loadAnimation("images/Run_000.png","images/Run_001.png","images/Run_002.png","images/Run_003.png","images/Run_004.png","images/Run_005.png","images/Run_006.png","images/Run_007.png","images/Run_008.png","images/Run_009.png")
 backgroundImage = loadImage("images/background.jpg") 
 player_jump = loadAnimation("images/Jump_000.png","images/Jump_001.png","images/Jump_002.png","images/Jump_003.png","images/Jump_004.png")
idle_player=loadAnimation("images/Jump_000.png")
bulletImage=loadImage("images/Bullet-2.png")
alienImage=loadAnimation("images/skeleton-walking_0.png","images/skeleton-walking_1.png","images/skeleton-walking_2.png","images/skeleton-walking_3.png","images/skeleton-walking_4.png","images/skeleton-walking_5.png","images/skeleton-walking_6.png","images/skeleton-walking_7.png","images/skeleton-walking_8.png","images/skeleton-walking_9.png","images/skeleton-walking_10.png","images/skeleton-walking_11.png","images/skeleton-walking_12.png","images/skeleton-walking_13.png","images/skeleton-walking_14.png","images/skeleton-walking_15.png","images/skeleton-walking_16.png","images/skeleton-walking_17.png","images/skeleton-walking_18.png","images/skeleton-walking_19.png","images/skeleton-walking_20.png")
coinSImage=loadImage("images/Coin_0.png")
alien2Image=loadImage("images/ghost.png")
}




function setup() {
 createCanvas(1000, 800); 
 
 background1= createSprite(500,350,width,height);
 background1.addImage(backgroundImage)
 background1.scale=0.22
 
 player = createSprite(100,645,20,50);
 player.addAnimation("Stay",idle_player);
 player.addAnimation("Running",player_running);
 player.addAnimation("jumping",player_jump);
 player.scale = 0.25; 

  ground=createSprite(500,710,width,10)
 ground.visible=false;

 alienSGroup=new Group()
 coinSGroup=new Group()
 alienS2Group=new Group()
}


function draw() {
background("black")
  //enemy()
 if(keyWentDown("RIGHT_ARROW")){
  
  player.changeAnimation("Running")
 }
 if(keyDown("RIGHT_ARROW"))
 background1.x-=3
 if(keyWentUp("RIGHT_ARROW")){
  player.changeAnimation("Stay")
 }
 if(background1.x<250){
     background1.x=400
 }
 if(keyWentDown("UP_ARROW")){
     player.velocityY=-12;
     player.changeAnimation("jumping")
 }
 if(keyWentUp("UP_ARROW")){
    player.changeAnimation("Stay")
 }
player.velocityY+=0.5
 player.collide(ground)
  if(keyDown("space")){
    shootBullet()
  }
drawSprites();
alien()
coin()
alien2()
}
function shootBullet(){
    
      bullet=createSprite(player.x,player.y,50,50)
      bullet.addImage(bulletImage)
      bullet.velocityX=3
      bullet.scale=0.1
     // bullet.setLifetime=300
      
  }
  function alien(){
    if(World.frameCount%100===0){
      alienS=createSprite(600,645,20,50)
      alienS.addAnimation("running",alienImage)
      alienS.scale=0.2
      alienS.velocityX=-3
      alienSGroup.add(alienS)
    }
  }
  function coin(){
    if(World.frameCount%1000===0){
      coinS=createSprite(600,645,50,50)
      coinS.addImage(coinSImage)
      coinS.scale=0.2
      coinS.velocityX=-3
      coinSGroup.add(coinS)
    }
  }
  function alien2(){
    if(World.frameCount%300===0){
      alienS2=createSprite(600,520,20,50)
      alienS2.addImage(alien2Image)
      alienS2.scale=0.2
      alienS2.velocityX=-3
      alienS2Group.add(alienS2)
    }
  }