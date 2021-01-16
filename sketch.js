var canvas;
var music;

function preload(){
    musicc = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,625);

    box = createSprite(random(20,750),300,25,25);
    box.shapeColor = "white";
    box.velocityY=6;
    box.velocityX=6;

    block1 = createSprite(100,550,150,20);
    block1.shapeColor = "yellow";

    block2 = createSprite(300,550,150,20);
    block2.shapeColor = "red";

    block3 = createSprite(500,550,150,20);
    block3.shapeColor = "blue";

    block4 = createSprite(700,550,150,20);
    block4.shapeColor = "purple";
}

function draw() {
    background(7);

    drawSprites();

edges=createEdgeSprites(); 


    box.bounceOff(edges);

if(block1.isTouching(box) && box.bounceOff(block1)){
box.shapeColor = "yellow";
box.velocityX=0;
box.velocityY=0;
musicc.stop()
}

if(block2.isTouching(box) && box.bounceOff(block2)){
    box.shapeColor = "red";
    }

    if(block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = "blue";
        musicc.play()
        }

        if(block4.isTouching(box) && box.bounceOff(block4)){
            box.shapeColor = "purple";
            }
            
}