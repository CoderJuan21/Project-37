//Create variables here

var dog, happyDog;
var database;
var food;
var foood;
var foodS, foodStock;
var fedTime, lastFed;
var bedroom, garden, washroom;
var sadDog;


function preload()
{  
  dog = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
  //load images here
  // bedroom = loadImage("images/BedRoom.pngs");
   garden = loadImage("images/Garden.png");
//   washroom = loadImage("images/WashRoom.png");
   sadDog = loadImage("images/deadDog.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();

  readState = database.ref('gameState');
  readState.on("value", function(data){
    gameState = data.val();
  })

  foood = new Food(food);

  var feed = createButton();
        feed.position(100,100);
        feedDog.mousePressed(feedDog);
        
        
        var addFood = createButton();
        addFood.position(200,100);
        addFood.mousePressed(addFoods);


        button.mousePressed(function(){
          input.hide();
         

         
        foodCount += 1;
          food.update(food);
          food.updateCount(foodCount);

      
      })

  
  dog = createSprite(250,470,10,10);
  //dog.addImage(dog);
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  
background(46,139,87);


if(gameState != "Hungry"){
  feed .hide();
  addFood.hide();
  dog.remove();
}else{
  feed.show();
  addFood.show();
  dog.addImage(sadDog);
}

fill(255,255,254);
textSize(15);
if(lastFed>=12){
  text("Last Feed :"+ lastFed%12 + "PM", 350, 30);
} else if(lastFed===0){
  text("Last Feed : 12 AM", 350, 30);
}else{
  text("Last Feed" + lastFed + "AM", 350, 30);
}

currentTime = hour();
if(currentTime==(lastFed+1)){
  update("Playing");
  fodObj.garden();
}else if (currentTime==(lastFed+2)){
  update("Sleeping");
  foodObj.bedroom();
}else if (currentTIme>(lastFed+2)&& currentTime<=(lastFed+4)){
  update("Bathing");
  foodObj.washroom();
}else {
  update("Hungry")
  foodObj.display();s
}


readStock();
writeStock();
feedDog();
update();



  drawSprites();
  //add styles here
  textSize(20);
  text("food:"+foodS);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}

function addFood(){
  foodS++;
  database.red('/').update({
    Food:foodS
  })

  
}

function feedDog(){
  foodObj.updateFoodStock(foodOnj.getFoodStock()-1);
  database.red('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
  food -= 1
}

function update(state){
  database.ref('/').update({
    gameState: state
  })
}



