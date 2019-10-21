const canvas  = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height/scale;
const columns  = canvas.width/scale;

var snake;
var food;
(function setup(){
	snake = new Snake();
	food = new Food();

	food.pickLocation();
	console.log(food);
	window.setInterval(()=>{
			
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		snake.update();
		snake.draw();
		food.draw();
		if(snake.eat(food)){
			food.pickLocation();
		}
		
	}, 250);
}());

window.addEventListener("keydown", ((e)=>{
	const direction = e.key.replace('Arrow', '');
	snake.changeDirection(direction)
}))
