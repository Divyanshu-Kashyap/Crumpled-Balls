
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundd,backgroundImg,dustR,dustL,dustB,ground ,paper,engine;
function preload(){

backgroundImg=loadImage("grass.jpg");



}
function setup() {

	backgroundd=createSprite(400,200);
  backgroundd.addImage(backgroundImg);
  backgroundd.scale=2;
  
	createCanvas(1000, 500);
	
rectMode(CENTER);


	
engine=Engine.create();
world=engine.world;

	Engine.run(engine);
  


//Create the Bodies Here.

paper=new Paper(100,350,10);

ground=createSprite(400,450,2000,10);
ground.shapeColor="brown";
ground = Bodies.rectangle(400,450,2000,40,{isStatic:true} );
World.add(world,ground);

dustR=createSprite(900,350,20,150);
dustR.shapeColor="green";
dustR = Bodies.rectangle(885,350,20,200,{isStatic:true} );
World.add(world,dustR);

dustL=createSprite(700,350,20,150);
dustL.shapeColor="green";
dustL = Bodies.rectangle(700,350,40,150,{isStatic:true} );
World.add(world,dustL);
	
dustB=createSprite(800,430,200,20);
dustB.shapeColor="green";
dustB = Bodies.rectangle(800, 410,200,20,{isStatic:true} );
World.add(world,dustB);

}

function draw() {
  rectMode(CENTER);

  background("black");
  
//if(keyDown("up")){
//	Matter.Body.applyForce(paper.body, paper.body.position, {
	//	x: 1,
	//	y: -1.7
	//  });
//}

  drawSprites();
 
  paper.display();
 
  textSize(40);
  fill("green");
text("Clean India,Green India!!!",300,100);
}


function keyPressed(){
  if(keyCode===UP_ARROW){

    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 17,
      y: -13
      });


  }
}
