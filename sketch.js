const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var drops=[];
var maxDrops=100;
var umbrella;
var rand;
var Thunder,thunder1,thunder2,thunder3,thunder4;
var thunderCreateFrame=0;

function preload(){
   thunder1=loadImage("images/thunderbolt/1.png");
   thunder2=loadImage("images/thunderbolt/2.png");
   thunder3=loadImage("images/thunderbolt/3.png");
   thunder4=loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(600,650);
    
   engine=Engine.create();
   world=engine.world;

   umbrella= new Umbrella(200,500);

   for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0,600),random(0,600)));
   }
}

function draw(){

    Engine.update(engine);
    background("black");

    rand= Math.round(random(1,4));
    if(frameCount%80==0){
        thunderCreateFrame=frameCount;
        Thunder=createSprite(random(10,370,random(10,30)),10,10);
        switch(rand){
            case 1:Thunder.addImage(thunder1);
            break;
            case 2:Thunder.addImage(thunder2);
            break;
            case 3:Thunder.addImage(thunder3);
            break;
            case 4:Thunder.addImage(thunder4);
            break;
            default:break;
        }
        Thunder.scale=0.7;
    }

    if(thunderCreateFrame+10===frameCount && Thunder){
        Thunder.destroy();
    }

    umbrella.display();

    for(var i=0; i<maxDrops;i++){
        drops[i].display();
        drops[i].update();
    }

    drawSprites();

}   

