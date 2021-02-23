var canvas, box;
var surface1,surface2,surface3,surface4;
var edge1,edge2,edge3,edge4;

function setup(){
canvas = createCanvas(800,800);
surface1 = createSprite(80,380,10,5);
surface1.shapeColor = "blue";
surface2 = createSprite(160,380,10,5);      
surface2.shapeColor = "green";   
surface3 = createSprite(240,380,10,5);   
surface3.shapeColor = "pink"; 
surface4 = createSprite(360,380,10,5);  
surface4.shapeColor = "yellow";  
box = createSprite(random(20,750));
box.shapeColor = "white";
edge1 = createSprite(0,0,5,10);
edge1.shapeColor = "black"; 
edge2 = createSprite(1600,1600,10,5);      
edge2.shapeColor = "black";  
edge3 = createSprite(0,1600,5,10);   
edge3.shapeColor = "black"; 
edge4 = createSprite(1600,0,10,5);  
edge4.shapeColor = "black"; 
box.x = World.mouseX;
box.y = World.mouseY;
}

function draw() {
    background(rgb(169,169,169));
    if(box.isTouching(edge1 && edge2 && edge3 && edge4)){
    box.bounceOff(edge1 && edge2 && edge3 && edge4) 
    }
    if(box.isTouching(surface1 && surface2 && surface3 && surface4)){
        box.bounceOff(surface1 && surface2 && surface3 && surface4) 
        }
    if(box.isTouching(surface2)){
        box.bounceOff(surface2) 
        box.shapeColor = surface2.shapeColor;
        }    
    drawSprites();
}

function bounceOff(box,surface2){
    if(box.x-surface2.x<surface2.width/2+box.width/2
       && surface2.x-box.x<surface2.width/2+box.width/2){
         box.velocityX = 0;
         surface2.velocityX = 0;
    }
    if(box.y-surface2.y<surface2.height2+box.height/2
        && surface2.y-box.y<surface2.height/2+box.height/2){
          box.velocityY = 0;
          surface2.velocityY = 0;
     }
    }

    function bounceOff(box,edge1){
     if(box.y-edge1.y<edge1.height/2+box.height/2
         && edge1.y-box.y<edge1.height/2+box.height/2){
           box.velocityY = box.velocityY * (-1);
           edge1.velocityY = edge1.velocityY * (-1);
      }
      if(box.x-edge1.x<edge1.width/2+box.width/2
        && edge1.x-box.x<edge1.width/2+box.width/2){
          box.velocityX = box.velocityX * (-1);
          edge1.velocityX = edge1.velocityX * (-1);
     }
  }

  function bounceOff(box,edge2){
    if(box.y-edge2.y<edge2.height/2+box.height/2
        && edge2.y-box.y<edge2.height/2+box.height/2){
          box.velocityY = box.velocityY * (-1);
          edge2.velocityY = edge2.velocityY * (-1);
     }
     if(box.x-edge2.x<edge2.width/2+box.width/2
       && edge2.x-box.x<edge2.width/2+box.width/2){
         box.velocityX = box.velocityX * (-1);
         edge2.velocityX = edge2.velocityX * (-1);
    }
 }

 function bounceOff(box,edge3){
    if(box.y-edge3.y<edge3.height/2+box.height/2
        && edge3.y-box.y<edge3.height/2+box.height/2){
          box.velocityY = box.velocityY * (-1);
          edge3.velocityY = edge3.velocityY * (-1);
     }
     if(box.x-edge3.x<edge3.width/2+box.width/2
       && edge3.x-box.x<edge3.width/2+box.width/2){
         box.velocityX = box.velocityX * (-1);
         edge3.velocityX = edge3.velocityX * (-1);
    }
 }

 function bounceOff(box,edge4){
    if(box.y-edge4.y<edge4.height/2+box.height/2
        && edge4.y-box.y<edge4.height/2+box.height/2){
          box.velocityY = box.velocityY * (-1);
          edge4.velocityY = edge4.velocityY * (-1);
     }
     if(box.x-edge4.x<edge4.width/2+box.width/2
       && edge4.x-box.x<edge4.width/2+box.width/2){
         box.velocityX = box.velocityX * (-1);
         edge4.velocityX = edge4.velocityX * (-1);
    }
 }
