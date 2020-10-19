class Food{
    constructor(){
        
        var option={

        }

        var foodStock, lastFed;

    }

    getFoodCount(){
        var foodCountref = database.ref('food');
        foodCountref.on("value", function(data){
            foodCount = data.val();
        })
    }

    updateFoodCount(food){
        database.ref('/').update({
            foodCount : food
        })
    }

    deductFood(food){
        food -= 1;
        var foodCount = "food" + foodCount;
        database.ref(foodCount).set({
            food : food
            
            
        })
    }

    display(){

var x=80, y =100;

imageMode (CENTER);
image(this.image, 720, 220, 70, 70);

if(this.foodStock!=0){
    for(var i=0;this.foodStock;i++){
        if(i%10==0){
            x=80;
            y=y+50;
        }
        image(this.image, x, y, 50, 50);
    }
}

    }

}