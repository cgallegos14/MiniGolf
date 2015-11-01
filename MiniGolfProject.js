document.addEventListener("DOMContentLoaded", init);
var canvasTag;
var canvasOffSetX;
var canvasOffSetY;
var powerBarWidthChange = 2;
var golfBall = {x:0,changeX:0,y:0,changeY:0,angle:35,vertical:0,horizontal:0};  

function init(){
    canvasTag = document.getElementById("mainCanvas");
    canvasTag.width = window.innerWidth * .73;
    canvasTag.height = window.innerHeight * .73;
    
    //Used to allow the animation tool to work in different browsers. 
    requestAnimationFrame = window.requestAnimationFrame || 
                            window.webkitRequestAnimationFrame;
                            window.requestAnimaionFrame = requestAnimationFrame;
    
    canvasTag.addEventListener("mousedown", mouseDownAction);
    context = canvasTag.getContext("2d");  
    document.addEventListener("keydown", keyboardAction);
    
    canvasOffSetX = canvasTag.offsetLeft;
    canvasOffSetY = canvasTag.offsetTop;
    
    console.log(canvasOffSetX);
    console.log(canvasOffSetY);
    
    golfBall.x = canvasTag.width / 2;
    golfBall.y = canvasTag.height / 2;
    
    start();
}


function start(){
    createGolfBall();
    createPowerBar(0,0);
}

function createGolfBall(){
    var makeObject = new CanvasObjectCreator();
    //(x,changeX,y,changeY,radius,start,end,counter,color,lwidth,lcolor)
    makeObject.createCircle(golfBall.x,golfBall.changeX,golfBall.y,golfBall.changeY,10,1.0,3.0,false,"white",2,"red"); 
}

function updateGolfBall(){
    var radians = golfBall.angle * Math.PI/ 180;
    golfBall.changeX = Math.cos(radians) * powerBarWidthChange;
    golfBall.changeY = Math.sin(radians) * powerBarWidthChange;
    
    golfBall.x += golfBall.changeX;
    golfBall.y += golfBall.changeY;
}

function createPowerBar(widthChange,heightChange){
    var makeObject = new CanvasObjectCreator();
    
    //(x,y,width,widthChange,height,heightChange,color,borderWidth,bColor)
    makeObject.createSquare(.005,.96,.01,widthChange,.03,heightChange,"yellow",3,"pink"); 
}

function animateGolfBall(timestamp){
    context.clearRect(0, 0, canvasTag.width, canvasTag.height);
    
    golfBall.vertical++;
    golfBall.horizontal++;
    //golfBall.changeX = golfBall.vertical * (powerBarWidthChange * .02);
    //golfBall.changeY = golfBall.horizontal * (powerBarWidthChange * .02);
    
    updateGolfBall();
    createGolfBall();
    
    
    window.requestAnimationFrame(animateGolfBall);
}




/*
if (ball.x > canvasTag.width - 20 || ball.x < 0 ) {
     angle = 180 - angle;
     updateBall();
} else if (ball.y > canvasTag.height - 20 || ball.y < 0) {
     angle = 360 - angle;
     updateBall();
}*/



















function mouseDownAction(event){
    console.log("Released on point: " + event.x + ", " + event.y); 
}

function keyboardAction(event){
    console.log("button clicked => " + event.keyCode);
    //Interacting with the powerbar, decreasing the bar by set amount if left arrow key is pushed
    if(event.keyCode == 37){
        if(powerBarWidthChange <= 2){
            alert("Ball won't have force, can't decrease");
        }
        else{
            context.clearRect(0, 0, canvasTag.width, canvasTag.height);
            createGolfBall(0,0);
            powerBarWidthChange -= 2;
            createPowerBar(powerBarWidthChange,0);
            console.log(powerBarWidthChange);
        }
    }
    //Interacting with the powerbar, increasing the bar by set amount if right arrow key is pushed
    if(event.keyCode == 39){
        if(powerBarWidthChange > 300){
            alert("Ball at max power");
        }
        else{
            context.clearRect(0, 0, canvasTag.width, canvasTag.height);
            createGolfBall(0,0);
            powerBarWidthChange += 2 ;
            createPowerBar(powerBarWidthChange,0);
            console.log(powerBarWidthChange);
        }
    }
    
    if(event.keyCode == 32){
        requestAnimationFrame(animateGolfBall);
    }
}