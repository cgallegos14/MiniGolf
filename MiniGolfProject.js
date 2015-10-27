document.addEventListener("DOMContentLoaded", init);
var canvasTag;
var canvasOffSetX;
var canvasOffSetY;
var x  = 0;

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
    var makeObject = new CanvasObjectCreator();
    //(x,verticalSpeed,y,horizontalSpeed,radius,start,end,counter,color,lwidth,lcolor)
    makeObject.createCircle(.50,0,.50,0,10,1.0,3.0,false,"white",2,"red"); 
    
    createPowerBar();
}

function createPowerBar(){
    var makeObject = new CanvasObjectCreator();
    
    //(x,y,width,widthChange,height,heightChange,color,borderWidth,bColor)
    makeObject.createSquare(.005,.96,.08,0,.03,0,"yellow",3,"pink"); 
}
























function mouseDownAction(event){
    x++;
    console.log("Released on point: " + event.x + ", " + event.y); 
    context.clearRect(0, 0, canvasTag.width, canvasTag.height);
    
    var makeObject = new CanvasObjectCreator();
    makeObject.createCircle(80,x,80,0,10,1.0,3.0,false,"white",2,"red");
    
}

function keyboardAction(event){
    console.log("button clicked => " + event.keyCode);
}