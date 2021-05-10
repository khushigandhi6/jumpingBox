var canvas;
var music;
var fixedBox1,fixedBox2,fixedBox3,fixedBox4,movingBox;
var edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup (){
createCanvas(800,600);
//create 4 different surfaces
fixedBox1 = createSprite(700,580,185,20);
fixedBox1.shapeColor = "green";

fixedBox2 = createSprite(500,580,185,20);
fixedBox2.shapeColor = "red";

fixedBox3 = createSprite(300,580,185,20);
fixedBox3.shapeColor = "orange";

fixedBox4 = createSprite(100,580,185,20);
fixedBox4.shapeColor = "blue";

//create box sprite and give velocity
movingBox = createSprite(400,300,40,40);
movingBox.shapeColor = "white";
movingBox.velocityY = +6;
movingBox.velocityX = -6;

//createSprite(random(20,750),200,15,78);

edges = createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     movingBox.bounceOff(edges);
     //movingBox.bounceOff(fixedBox1);
     //movingBox.bounceOff(fixedBox2);
     //movingBox.bounceOff(fixedBox3);
     //movingBox.bounceOff(fixedBox4);
     console.log(edges);

    if(movingBox.isTouching(fixedBox1) && movingBox.bounceOff(fixedBox1))  { 
        
        movingBox.shapeColor = fixedBox1.shapeColor;
      //  fixedBox1.shapeColor = "green";
      music.play();
    }
    
    if(movingBox.isTouching(fixedBox2) && movingBox.bounceOff(fixedBox2))  { 
        
        movingBox.shapeColor = fixedBox2.shapeColor;
        movingBox.velocityX = 0;
        movingBox.velocityY = 0; 
    }
    
    if(movingBox.isTouching(fixedBox3) && movingBox.bounceOff(fixedBox3))  { 
        
        movingBox.shapeColor = fixedBox3.shapeColor;
        music.stop();
    }

     if(movingBox.isTouching(fixedBox4) && movingBox.bounceOff(fixedBox4))  { 
        
            movingBox.shapeColor = fixedBox4.shapeColor;
     }        

    drawSprites();
}

 //add condition to check if box touching surface and make it box

