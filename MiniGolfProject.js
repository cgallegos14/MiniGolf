document.addEventListener("DOMContentLoaded", init);
var canvasTag;
var canvasOffSetX;
var canvasOffSetY;
var obsticles = [];
var powerBar = {widthChange:2,heightChange:0,distance:0}
var golfBall = {x:0,changeX:0,y:0,changeY:0,angle:0,vertical:0,horizontal:0,degree:0,isMoving:false};  //90 is down, 180 is left, 270 is up, 
var arrowImageObject;

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
    createPowerBar();
    setupArrowImage();
    createObstacle();
}

function createObstacle(){
    var object1 = new CanvasObjectCreator();
    var object2 = new CanvasObjectCreator();
    
    object1.createSquare(.6,.4,.02,0,.2,0,"pink",3,"yellow"); 
    object2.createSquare(.4,.4,.02,0,.2,0,"pink",3,"yellow"); 
    
    obsticles = [object1,object2];
}

function drawEverything(){
    createGolfBall();
    createPowerBar();
    drawObstacle();
}

function setupArrowImage(){
    arrowImageObject = document.createElement("img");
    arrowImageObject.src = "arrow.png";
    arrowImageObject.addEventListener("load", imageArrowLoaded);
}

function imageArrowLoaded(){
    
    var width = arrowImageObject.naturalWidth/20;
    var height = arrowImageObject.naturalHeight/20;
    var x = canvasTag.width * .975;
    var y = canvasTag.height * .975;
    context.translate(x, y);
    context.rotate(6.2831853072);
    context.drawImage(arrowImageObject, -width/2, -height/2, width, height);
    context.rotate(-6.2831853072);
    context.translate(-x, -y);
}

function createGolfBall(){
    var makeObject = new CanvasObjectCreator();
    //(x,changeX,y,changeY,radius,start,end,counter,color,lwidth,lcolor)
    makeObject.createCircle(golfBall.x,golfBall.changeX,golfBall.y,golfBall.changeY,10,1.0,3.0,false,"white",2,"red"); 
}

function updateGolfBall(){
    var radians = golfBall.angle * Math.PI/ 180;
    golfBall.changeX = Math.cos(radians) * powerBar.widthChange;
    golfBall.changeY = Math.sin(radians) * powerBar.widthChange;
    
    golfBall.x += golfBall.changeX;
    golfBall.y += golfBall.changeY;
}

function createPowerBar(){
    var makeObject = new CanvasObjectCreator();
    
    //(x,y,width,widthChange,height,heightChange,color,borderWidth,bColor)
    makeObject.createSquare(.005,.96,.01,powerBar.widthChange,.03,powerBar.heightChange,"yellow",3,"pink"); 
}

function animateGolfBall(timestamp){
    if(powerBar.widthChange != 0){
        context.clearRect(0, 0, canvasTag.width, canvasTag.height);    

        if (golfBall.x > canvasTag.width - 5 || golfBall.x < 5 ) {
            golfBall.angle = 180 - golfBall.angle;
            updateGolfBall();
            drawEverything();
        } 

        else if (golfBall.y > canvasTag.height - 5 || golfBall.y < 5) {
            golfBall.angle = 360 - golfBall.angle;
            updateGolfBall();
            drawEverything();
        }
        else{
             updateGolfBall();
             drawEverything();
        }

        window.requestAnimationFrame(animateGolfBall);
        powerBar.widthChange -= 1;
    }
    else{
        golfBall.isMoving = false;
        drawEverything();
    }
}


function drawObstacle(){  
    for(var i = 0; i < obsticles.length; i++){
        obsticles[i].createSquare(obsticles[i].squareX/canvasTag.width,
                                  obsticles[i].squareY/canvasTag.height,
                                  obsticles[i].squareWidth/canvasTag.width,
                                  0,
                                  obsticles[i].squareHeight/canvasTag.height,
                                  0,"pink",3,"yellow"); 
        
       
       if (golfBall.x < obsticles[i].squareX + obsticles[i].squareWidth &&
           golfBall.x + 20 > obsticles[i].squareX &&
           golfBall.y < obsticles[i].squareY + obsticles[i].squareHeight &&
           20 + golfBall.y > obsticles[i].squareY) {
                golfBall.angle = 180 - golfBall.angle;
                console.log("hit!");
       }
        
        
        /* 
        if (golfBall.x < obsticles[i].squareX + obsticles[i].squareWidth &&
           golfBall.x + 20 > obsticles[i].squareX){
            golfBall.angle = 180 - golfBall.angle;
            console.log("hit! X");
        }
            
        if (golfBall.y < obsticles[i].squareY + obsticles[i].squareHeight &&
           20 + golfBall.y > obsticles[i].squareY) {
                golfBall.angle = 360 - golfBall.angle;
                console.log("hit! Y");
       }*/
            
    }
        
        
    
}














function mouseDownAction(event){
    console.log("Released on point: " + event.x + ", " + event.y); 
}

function keyboardAction(event){
    var direction = Math.floor((Math.random() * 4) + 1);
    if(golfBall.isMoving == false){
        console.log("button clicked => " + event.keyCode);
        //Interacting with the powerbar, decreasing the bar by set amount if left arrow key is pushed
        if(event.keyCode == 37){
            if(powerBar.widthChange <= 2){
                alert("Ball won't have force, can't decrease");
            }
            else{
                context.clearRect(0, 0, canvasTag.width, canvasTag.height);
                powerBar.widthChange -= 2;
                drawEverything();
                console.log(powerBar.widthChange);
            }
        }
        //Interacting with the powerbar, increasing the bar by set amount if right arrow key is pushed
        if(event.keyCode == 39){
            if(powerBar.widthChange > 300){
                alert("Ball at max power");
            }
            else{
                context.clearRect(0, 0, canvasTag.width, canvasTag.height);
                powerBar.widthChange += 2 ;
                drawEverything();
                console.log(powerBar.widthChange);
            }
        }

        if(event.keyCode == 38){
            context.clearRect(0, 0, canvasTag.width, canvasTag.height);  
            golfBall.degree += 0.0174533; 

            var width = arrowImageObject.naturalWidth/20;
            var height = arrowImageObject.naturalHeight/20;
            var x = canvasTag.width * .975;
            var y = canvasTag.height * .975;
            context.translate(x, y);
            context.rotate(golfBall.degree);
            context.clearRect(0, 0, canvasTag.width, canvasTag.height); 
            context.drawImage(arrowImageObject, -width / 2, -height / 2, width, height);
            context.rotate(-golfBall.degree);
            context.translate(-x, -y);

            console.log(Math.abs(Math.floor((golfBall.degree * (180/Math.PI) % 360))));
            golfBall.angle = Math.abs(Math.floor((golfBall.degree * (180/Math.PI) % 360)));
            drawEverything();
        }
        
        if(event.keyCode == 40){
            switch(direction){
                case 1:
                    direction = 0;
                    break;
                case 2:
                    direction = 1.5708;
                    break;
                case 3:
                    direction = 3.14159;
                    break;
                case 4:
                    direction = 4.71239;
                    break;
            }
            context.clearRect(0, 0, canvasTag.width, canvasTag.height);  
            golfBall.degree = direction; 

            var width = arrowImageObject.naturalWidth/20;
            var height = arrowImageObject.naturalHeight/20;
            var x = canvasTag.width * .975;
            var y = canvasTag.height * .975;
            context.translate(x, y);
            context.rotate(golfBall.degree);
            context.clearRect(0, 0, canvasTag.width, canvasTag.height); 
            context.drawImage(arrowImageObject, -width / 2, -height / 2, width, height);
            context.rotate(-golfBall.degree);
            context.translate(-x, -y);

            //console.log(Math.abs(Math.floor((golfBall.degree * (180/Math.PI) % 360))));
            golfBall.angle = (Math.abs(Math.floor((golfBall.degree * (180/Math.PI)))) ) % 360;
            console.log(golfBall.angle);
            drawEverything();
        }

        if(event.keyCode == 32){
            requestAnimationFrame(animateGolfBall);
            powerBar.distance = powerBar.widthChange;
            golfBall.isMoving = true;
        }
    }
}