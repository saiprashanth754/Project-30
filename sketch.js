const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

 var ground;
 var world;
 var engine;
 var platform;
 var polygon;
 var sling;


 function setup() {
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,590,1200,50);
    platform = new Ground(540,420,270,10);
   

    //platform
    //layer1
    block1 = new block(460,419,35,60);
    block2 = new block(490,419,35,60);
    block3 = new block(510,419,35,60);
    block4 = new block(540,419,35,60);
    block5 = new block(570,419,35,60);
    block6 = new block(600,419,35,60);
    block7 = new block(630,419,35,60);
    //layer2
    block8 = new  block(490,330,35,60);
    block9 = new  block(520,330,35,60);
    block10 = new block(550,330,35,60);
    block11 = new block(580,330,35,60);
    block12 = new block(619,330,35,60);
    //layer3
    block13 = new block(520,220,35,60);
    block14 = new block(555,230,35,60);
    block15 = new block(590,220,35,60);
    //layer4
    block16 = new block(555,170,35,60);
    //polygon
    polygon = new poly(150, 100, 20, 20)

    sling = new Slingshot(polygon.body, { x: 200, y: 90 });

 }

 function draw() {
  Engine.update(engine);
  background(250);
  textSize(20);
  fill("red");
  stroke(0);
  text("Drag and release the Polygon to knock down the blocks.",600,35)

  ground.display();
  platform.display();
  fill("blue")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("green")
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("pink")
  block13.display();
  block14.display();
  block15.display();
  fill("black")
  block16.display();

  polygon.display();
  sling.display();
   
  fill("green")
  textSize(10)
  stroke(0);
  text("PRESS 'SPACE' FOR ANOTHER CHANCE",600,60);

 }

 function mouseDragged() {
  Matter.Body.setPosition(polygon.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(polygon.body);
  }
}
