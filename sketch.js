var block, block2, block3, block4, car, tex, tex2, tex3, tex4, la1, la2, la3, la4, diamond, laser1, laser2, camp1, camp2, gate1, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, thief

function preload(){
  carImg = loadImage("car_yellow_1.png");
  diamondImg = loadImage("diamond1.png")
  laserImg = loadImage("laser.png");
  campImg = loadImage("army_camp1.png");
  right_thief_Img = loadImage("right_thief.png");
  left_thief_Img = loadImage("left_thief.png");
}
function setup(){
createCanvas(400,400);
block = createSprite(360, 388, 10, 20);
block.shapeColor = "black";
block2 = createSprite(390, 388, 10, 20);
block2.shapeColor = "black";
block3 = createSprite(390, 160, 10, 10);
block3.shapeColor = "black";
block4 = createSprite(390, 210, 10, 10);
block4.shapeColor = "black";
car = createSprite(132, 100);
car.addImage("car_yellow_1", carImg);
car.scale = .5;
car.visible = false;
tex = createSprite(341, 259, 10, 10);
tex.shapeColor = "black";
tex2 = createSprite(302, 12, 10, 10);
tex2.shapeColor = "black";
tex3 = createSprite(375, 382, 10, 10);
tex3.shapeColor = "black";
tex4 = createSprite(388, 190, 10, 10);
tex4.shapeColor = "black";
la1 = createSprite(318, 110, 25, 5);
la3 = createSprite(342, 190, 25, 5);
la4 = createSprite(341, 324, 20, 5);
la1.shapeColor = "red";
la3.shapeColor = "red";
la4.shapeColor = "red";
la4.velocityX = 5;
la1.visible = false;
la3.visible = false;
//diamond
diamond = createSprite(344, 82);
diamond.addImage("diamond_1", diamondImg);
diamond.scale = .06;
//laser_1
laser_1 = createSprite(130, 101);
laser_1.addImage("laser", laserImg);
laser_1.scale = 2;
laser_1.rotation = 90;
laser_1.rotationSpeed = -4;
//laser_2
laser_2 = createSprite(180, 280);
laser_2.addImage("laser", laserImg);
laser_2.scale = 2;
laser_2.rotation = 90;
laser_2.rotationSpeed = 4;
//camp_1
camp1 = createSprite(135, 100);
camp1.addImage("army_camp1", campImg);
camp1.scale = 2.5;
//camp_2
camp2 = createSprite(181, 286);
camp2.addImage("army_camp1", campImg);
camp2.scale = 2.5;
//main gate
gate1 = createSprite(50, 275, 2, 70);
gate1.scale = 1;
//wall1
wall1 = createSprite(50, 120, 5, 240);
wall1.scale = 1;
//wall2
wall2 = createSprite(50, 350, 5, 100);
wall2.scale = 1;
//the thief
thief = createSprite(25, 25);
thief.addImage("thief", right_thief_Img);
thief.scale = 0.15;
wall3 = createSprite(275, 110, 5, 165);
wall4 = createSprite(275, 304, 5, 132);
wall5 = createSprite(330, 28, 115, 5);
wall6 = createSprite(385, 200, 5, 348);
wall7 = createSprite(330, 372, 115, 5);


wall8 = createSprite(303, 240, 55, 5);
wall9 = createSprite(303, 153, 5, 170);
wall10 = createSprite(330, 69, 58, 5);
wall11 = createSprite(357, 194, 5, 255);
wall12 = createSprite(330, 320, 58, 5);
wall13 = createSprite(304, 298, 5, 40);
wall14 = createSprite(329, 258, 5, 40);
edges = new Group();
up_edge = createSprite(width/2,0,width,1);
// up_edge.visible = false;
edges.add(up_edge);
right_edge = createSprite(width,height/2,1,height);
// right_edge.visible = false;
edges.add(right_edge);
bottom_edge = createSprite(width/2,height,width,1);
// bottom_edge.visible = false;
edges.add(bottom_edge);
left_edge = createSprite(0,height/2,1,height);
// left_edge.visible = false;
edges.add(left_edge);
}
gamestate = "start";
function draw() {
 background("black");
 drawSprites();
 if (keyDown("up")) {
  thief.y = thief.y - 4;
 }
 if (keyDown("down")) {
  thief.y = thief.y +4;
 }
 if (keyDown("right")) {
   thief.x = thief.x + 4;
   thief.addImage("thief", right_thief_Img);
  //  console
 }
 if (keyDown("left")) {
   thief.x = thief.x - 4;
   thief.addImage("thief", left_thief_Img);
}
thief.bounce(wall1);
thief.bounce(wall2);
thief.bounce(edges);
thief.bounce(wall3);
thief.bounce(wall4);
thief.bounce(wall5);
thief.bounce(wall6);
thief.bounce(wall7);
thief.bounce(wall8);
thief.bounce(wall9);
thief.bounce(wall10);
thief.bounce(wall11);
thief.bounce(wall12);
thief.bounce(wall13);
thief.bounce(wall14);
la4.bounceOff(wall4);
la4.bounceOff(wall6);
thief.bounce(block);
thief.bounce(block2);
thief.bounce(block3);
thief.bounce(block4);
if (thief.isTouching(gate1)) {
  gate1.y = gate1.y + 3;
  thief.bounce(gate1);
}
 if (thief.isTouching(tex4)) {
   laser_1.tint = "red";
   laser_2.tint = "red";
   fill("yellow");
   textSize(19);
   text("Thief is Caught", 200, 200);
 }
if (thief.isTouching(laser_1) || thief.isTouching(laser_2)) {
  laser_1.rotationSpeed = 0;
  laser_2.rotationSpeed = 0;
  la4.setVelocity(0, 0);
  thief.visible = false;
  thief.x = 388;
  thief.y = 190;
}
if ((thief.isTouching(la1) || thief.isTouching(la3)) || thief.isTouching(la4)) {
  laser_1.rotationSpeed = 0;
  laser_2.rotationSpeed = 0;
  la4.setVelocity(0, 0);
  thief.visible = false;
  thief.x = 388;
  thief.y = 190;
}
 if (thief.isTouching(tex)) {
   fill("yellow");
   textSize(15);
   text("Hey! You found the diamond.\n But the road is clear, I think you should use your superglass.\n Press s to use superglass", 0, 200);
   if (keyDown("s")) {
     la1.visible = true;
     la3.visible = true;
     tex.y = 0;
   }
 }
 if (thief.isTouching(diamond)) {
   la1.visible = false;
   la3.visible = false;
   la1.y = 0;
   la3.y = 0;
   diamond.visible = false;
   fill("yellow");
   textSize(19);
   text("Get outside of this area", 200, 200);
   tex2.x = 270;
   tex2.y = 199;
 }
 if (thief.isTouching(tex2)) {
   fill("yellow");
   textSize(15);
   text("Congratulations! You got the diamond.\n To rotate the lights in other direction press r .\n And get the car", 0, 200);
   if (keyDown("r")) {
     laser_1.rotationSpeed = 4;
     laser_2.rotationSpeed = -4;
     tex2.y = 0;
     car.x = 20;
     car.y = 372;
     car.visible = true;
   }
 }
 if (thief.isTouching(car)) {
   thief.visible = false;
   thief.x = 375;
   thief.y = 382;
   car.velocityY = 2;
 }
 if (thief.isTouching(tex3)) {
   laser_1.rotationSpeed = 0;
   laser_2.rotationSpeed = 0;
   la4.setVelocity(0, 0);
   textSize(20);
   fill("yellow");
   text("THIEF GOT DIAMOND", 180, 200);
 }
 
}
