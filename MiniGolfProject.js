document.addEventListener("DOMContentLoaded", init);
var canvasTag;
var canvasOffSetX;
var canvasOffSetY;
var obsticles = [];
var powerBar = {widthChange:2,heightChange:0,distance:0,arrowShift:1}
var golfBall = {x:0,changeX:0,y:0,changeY:0,angle:0,oldAngle:0,vertical:0,horizontal:0,degree:0,isMoving:false};  //90 is down, 180 is left, 270 is up, 
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
    var course = new CanvasObjectCreator();
    obsticles = course.Course1();
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
        golfBall.angle = golfBall.oldAngle;
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
    //var direction = Math.floor((Math.random() * 4) + 1);
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
            //var x = golfBall.x;
            //var y = golfBall.y;
            context.translate(x, y);
            context.rotate(golfBall.degree);
            context.clearRect(0, 0, canvasTag.width, canvasTag.height); 
            context.drawImage(arrowImageObject, -width / 2, -height / 2, width, height);
            context.rotate(-golfBall.degree);
            context.translate(-x, -y);

            console.log(Math.abs(Math.floor((golfBall.degree * (180/Math.PI) % 360))));
            golfBall.angle = Math.abs(Math.floor((golfBall.degree * (180/Math.PI) % 360)));
            golfBall.oldAngle =  Math.abs(Math.floor((golfBall.degree * (180/Math.PI) % 360)));
            drawEverything();
        }
        
        if(event.keyCode == 40){
            var direction = powerBar.arrowShift;
            switch(direction){      
                case 1:
                    direction = .7854;
                    break;  
                case 2:
                    direction = 1.5708;
                    break;
                case 3:
                    direction = 2.3562;
                    break;
                case 4:
                    direction = 3.14159;
                    break;
                case 5:
                    direction = 3.927;
                    break;
                case 6:
                    direction = 4.71239;
                    break;
                case 7:
                    direction = 5.4978;
                    break;
                case 8:
                    direction = 0;
                    break;
            }
            context.clearRect(0, 0, canvasTag.width, canvasTag.height);  
            golfBall.degree = direction; 

            var width = arrowImageObject.naturalWidth/25;
            var height = arrowImageObject.naturalHeight/25;
            var x = canvasTag.width * .975;
            var y = canvasTag.height * .975;
            //var x = golfBall.x;
            //xvar y = golfBall.y;
            context.translate(x, y);
            context.rotate(golfBall.degree);
            context.clearRect(0, 0, canvasTag.width, canvasTag.height); 
            context.drawImage(arrowImageObject, -width / 2, -height / 2, width, height);
            context.rotate(-golfBall.degree);
            context.translate(-x, -y);

            //console.log(Math.abs(Math.floor((golfBall.degree * (180/Math.PI) % 360))));
            golfBall.angle = (Math.abs(Math.floor((golfBall.degree * (180/Math.PI)))) ) % 360;
            golfBall.oldAngle =  Math.abs(Math.floor((golfBall.degree * (180/Math.PI) % 360)));
            console.log(golfBall.angle);
            drawEverything();
            powerBar.arrowShift++;
            if(powerBar.arrowShift > 8){
                powerBar.arrowShift = 1;
            }
        }

        if(event.keyCode == 32){
            requestAnimationFrame(animateGolfBall);
            powerBar.distance = powerBar.widthChange;
            golfBall.isMoving = true;
        }
    }
}