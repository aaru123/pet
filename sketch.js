//Create variables here
var d, database, di, foods, food1, a, b = 20, di2
function preload()
{
  //load images here
  di = loadImage("dogImg.png")
  di2 = loadImage("dogImg1.png")
}

function setup() {
  database = firebase.database()
	createCanvas(500,500);
  d = createSprite(250,350,100,200)
  foods = database.ref('food')
  foods.on("value",readStock)
}


function draw() {  
  background("green")
  d.addImage("a",di)
  d.scale = 0.3
  if (keyWentDown(UP_ARROW)){
    b -=1
    d.addImage("a",di2)
  }
  readStock()
  drawSprites();
  //add styles here

}
function readStock(){
  stroke("black")
  a = text("food left:  " + b,200,200)
}


