const canvas = document.getElementById("myCanvas");
// canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const road = new Road(canvas.width/2,canvas.width*.9);
const car = new Car(road.getLaneCenter(0),100,30,50);
car.draw(ctx);

animate();

function animate(){
    car.update();
    // Resize cause clearing
    canvas.height = window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate);
}