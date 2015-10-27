document.addEventListener("DOMContentLoaded", init);
var canvasTag;
var canvasOffSetX;
var canvasOffSetY;
var powerBarWidthChange = 1;
var s = 0;
var e = 0;

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
    
    start();
}


function start(){
    createGolfBall(0,0);
    createPowerBar(0,0);
}

function createGolfBall(changeX,changeY){
    var makeObject = new CanvasObjectCreator();
    //(x,changeX,y,changeY,radius,start,end,counter,color,lwidth,lcolor)
    makeObject.createCircle(.5,changeX,.5,changeY,10,1.0,3.0,false,"white",2,"red"); 
}

function createPowerBar(widthChange,heightChange){
    var makeObject = new CanvasObjectCreator();
    
    //(x,y,width,widthChange,height,heightChange,color,borderWidth,bColor)
    makeObject.createSquare(.005,.96,.01,widthChange,.03,heightChange,"yellow",3,"pink"); 
}

function animateGolfBall(timestamp){
    console.log("i am called");
    context.clearRect(0, 0, canvasTag.width, canvasTag.height);
    s++;
    e++;
    //context.clearRect(0, 0, canvasTag.width, canvasTag.height);
    createGolfBall(s * (powerBarWidthChange * .02),e * (powerBarWidthChange * .02));
    console.log(powerBarWidthChange);
    //powerStart++;
    window.requestAnimationFrame(animateGolfBall);
}

























function mouseDownAction(event){
    console.log("Released on point: " + event.x + ", " + event.y); 
}

function keyboardAction(event){
    console.log("button clicked => " + event.keyCode);
    //Interacting with the powerbar, decreasing the bar by set amount if left arrow key is pushed
    if(event.keyCode == 37){
        if(powerBarWidthChange <= 0){
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