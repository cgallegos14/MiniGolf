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
    
    golfBall.x = canvasTag.width / 25;
    golfBall.y = canvasTag.height / 4;
        
    start();
    
}


function start(){
    createPowerBar();
    setupArrowImage();
    createObstacle();
    createGolfBall();
}

function createObstacle(){
    var object1 = new CanvasObjectCreator();
    var object2 = new CanvasObjectCreator();
    var object3 = new CanvasObjectCreator();
    var object4 = new CanvasObjectCreator();
    var object5 = new CanvasObjectCreator();
    var object6 = new CanvasObjectCreator();
    var object7 = new CanvasObjectCreator();
    var object8 = new CanvasObjectCreator();
    var object9 = new CanvasObjectCreator();
    var object9 = new CanvasObjectCreator();
    var object10 = new CanvasObjectCreator();
    var object11 = new CanvasObjectCreator();
    var object12 = new CanvasObjectCreator();
    var object13 = new CanvasObjectCreator();
    var object14 = new CanvasObjectCreator();
    var object15 = new CanvasObjectCreator();
    var object16 = new CanvasObjectCreator();
    var object17 = new CanvasObjectCreator();
    var object18 = new CanvasObjectCreator();
    var object19 = new CanvasObjectCreator();
    var object20 = new CanvasObjectCreator();
    var object21 = new CanvasObjectCreator();
    var object22 = new CanvasObjectCreator();
    var object23 = new CanvasObjectCreator();
    var object24 = new CanvasObjectCreator();
    var object25 = new CanvasObjectCreator();
    var hole = new CanvasObjectCreator();
    
    object1.createSquare(.1,.005,.015,0,.4,0,"pink",3,"yellow"); 
    object2.createSquare(.1,.55,.015,0,.4,0,"pink",3,"yellow"); 
    object5.createSquare(.35,.005,.015,0,.2,0,"pink",3,"yellow"); 
    object6.createSquare(.35,.275,.015,0,.05,0,"pink",3,"yellow"); 
    object7.createSquare(.35,.4,.015,0,.05,0,"pink",3,"yellow"); 
    object8.createSquare(.1,.91,.15,0,.04,0,"blue",3,"cyan"); 
    object12.createSquare(.8,.91,.98,0,.04,0,"blue",3,"cyan"); 
    object9.createSquare(.25,.910,.015,0,.085,0,"pink",3,"yellow"); 
    object10.createSquare(.35,.6,.015,0,.085,0,"pink",3,"yellow"); 
    object11.createSquare(.35,.755,.015,0,.14,0,"pink",3,"yellow"); 
    object14.createSquare(.785,.85,.015,0,.15,0,"pink",3,"yellow"); 
    object15.createSquare(.55,.005,.015,0,.07,0,"pink",3,"yellow");
    object16.createSquare(.55,.15,.015,0,.07,0,"pink",3,"yellow"); 
    object18.createSquare(.35,.90,.26,0,.030,0,"pink",3,"yellow");
    object19.createSquare(.55,.37,.015,0,.43,0,"pink",3,"yellow"); 
    object21.createSquare(.785,.1,.015,0,.2,0,"pink",3,"yellow"); 
    object22.createSquare(.785,.55,.015,0,.18,0,"pink",3,"yellow"); 
    object23.createSquare(.8,.61,.1,0,.03,0,"pink",3,"yellow"); 
    object24.createSquare(.958,.61,.04,0,.03,0,"pink",3,"yellow"); 
    object25.createSquare(.7845,.305,.16,0,.03,0,"pink",3,"yellow"); 

    
    object3.createCircle(canvasTag.width * .05,0,canvasTag.height * .88,0,canvasTag.width * .04,1.0,3.0,false,"blue",2,"cyan");
    object4.createCircle(canvasTag.width * .2,0,canvasTag.height * .6,0,canvasTag.width * .05,1.0,3.0,false,"orange",2,"yellow");
    object13.createCircle(canvasTag.width * .45,0,canvasTag.height * .6,0,canvasTag.width * .05,1.0,3.0,false,"orange",2,"yellow");
    object17.createCircle(canvasTag.width * .43,0,canvasTag.height * .1,0,canvasTag.width * .04,1.0,3.0,false,"blue",2,"cyan");
    object20.createCircle(canvasTag.width * .68,0,canvasTag.height * .35,0,canvasTag.width * .05,1.0,3.0,false,"blue",2,"cyan");
    
    
    hole.createCircle(canvasTag.width * .83,0,canvasTag.height * .18,0,canvasTag.width * .02,1.0,3.0,false,"black",2,"white");
    
    obsticles = [object1,object2,object3,object4,object5,object6,object7,object8,object9,
                 object10,object11,object12,object13,object14,object15,object16,object17,
                 object18,object19,object20,object21,object22,object23,object24,
                 object25,hole];
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
    
    var width = arrowImageObject.naturalWidth/25;
    var height = arrowImageObject.naturalHeight/25;
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
    makeObject.createCircle(golfBall.x,golfBall.changeX,golfBall.y,golfBall.changeY,10,1.0,3.0,false,"white",2,"black"); 
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
        
        if(obsticles[i].isSquare == true){
            
            obsticles[i].createSquare(obsticles[i].squareX/canvasTag.width,
                                      obsticles[i].squareY/canvasTag.height,
                                      obsticles[i].squareWidth/canvasTag.width,
                                      0,
                                      obsticles[i].squareHeight/canvasTag.height,
                                      0,obsticles[i].fillColor,3,obsticles[i].borderColor); 
            
            if(obsticles[i].fillColor == "pink"){
                if (golfBall.x < obsticles[i].squareX + obsticles[i].squareWidth &&
                    golfBall.x + 20 > obsticles[i].squareX &&
                    golfBall.y < obsticles[i].squareY + obsticles[i].squareHeight &&
                    20 + golfBall.y > obsticles[i].squareY) {
                         golfBall.angle = 180 - golfBall.angle;
                         console.log("hit!");
                }
            }
            if(obsticles[i].fillColor == "blue"){
                if (golfBall.x < obsticles[i].squareX + obsticles[i].squareWidth &&
                    golfBall.x + 20 > obsticles[i].squareX &&
                    golfBall.y < obsticles[i].squareY + obsticles[i].squareHeight &&
                    20 + golfBall.y > obsticles[i].squareY) {
                         golfBall.x = canvasTag.width / 25;
                         golfBall.y = canvasTag.height / 4;
                         golfBall.isMoving = false;
                         powerBar.widthChange = 2;
                         drawEverything();
                }
            }
        }
        else{
            
            obsticles[i].createCircle(obsticles[i].golfBallPositionX,0,
                                     obsticles[i].golfBallPositionY,0,
                                     obsticles[i].radius,1.0,3.0,false,obsticles[i].fillColor,2,obsticles[i].borderColor);
            
            createGolfBall();
            
            var dx = golfBall.x - obsticles[i].golfBallPositionX;
            var dy = golfBall.y - obsticles[i].golfBallPositionY;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 10 + obsticles[i].radius) {
                if(powerBar.widthChange > 10 && golfBall.isMoving == true && obsticles[i].fillColor == "orange"){
                    powerBar.widthChange -= 10;
                }
                if(golfBall.isMoving == true && obsticles[i].fillColor == "blue"){
                    golfBall.x = canvasTag.width / 25;
                    golfBall.y = canvasTag.height / 4;
                    golfBall.isMoving = false;
                    powerBar.widthChange = 2;
                    drawEverything();
                }
                
                if(golfBall.isMoving == true && obsticles[i].fillColor == "black" && powerBar.widthChange < 30){
                    golfBall.x = canvasTag.width/6;
                    golfBall.y = canvasTag.height/6;
                    golfBall.isMoving = false;
                    powerBar.widthChange = 2;
                    drawEverything();
                }
            }
        }
            
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

            var width = arrowImageObject.naturalWidth/25;
            var height = arrowImageObject.naturalHeight/25;
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

            var width = arrowImageObject.naturalWidth/25;
            var height = arrowImageObject.naturalHeight/25;
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