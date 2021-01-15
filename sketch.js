
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stongObj=new Stone(235,420,50);
	tree = new Tree(300,300,750,650);
	boy = new Boy(40,40,50,50);
	mango1= new Mango(50,50,50,50);
	mango2= new Mango(100,100,100,100);
	mango3= new Mango(150,150,150,150);
	mango4= new Mango(200,200,200,200);
	mango5= new Mango(250,250,250,250);
	ground= new Ground(300,300,300,300);


	launcher= new Launcher(stoneObj,{x:100,y:100});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectollision(stoneObj,mango1)
  detectollision(stoneObj,mango2)
  detectollision(stoneObj,mango3)
  detectollision(stoneObj,mango4)
  detectollision(stoneObj,mango5)

  stoneObj.display();
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  launcher.display();
  
  
  drawSprites();
 
}
function KeyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
		launcherObject.attach(stongObj.body)
	}
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    launcher.fly();
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body,false);
	}
}




