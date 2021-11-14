var bg,backgroundImg;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1100,600);
  bg = createSprite(500,250);
  bg.addImage("Background",backgroundImg);
  snow1 = loadImage("snow4.webp");
  snow2 = loadImage("snow5.webp");
}

function draw() {
  background(255);  
  spawnSnowflakes();
  drawSprites();  
}

function spawnSnowflakes() {
  if (frameCount % 60 === 0){
    var snow = createSprite(600,165,10,40);
  }
    var rand = Math.round(random(1,2));
    switch(rand) {
      case 1: snow.addImage(snow1);
      break;
      case 2: snow.addImage(snow2);
      break;            
      default: break;
    }
  
}

