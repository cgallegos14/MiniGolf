var canvasTag;
var context;

function CanvasObjectCreator(){
    canvasTag = document.getElementById("mainCanvas");
    context = canvasTag.getContext("2d"); 
    
    this.createCircle = function(x,verticalSpeed,y,horizontalSpeed,radius,start,end,counter,color,lwidth,lcolor){
        context.beginPath();
        this.golfBallPositionX = (canvasTag.width * x) - verticalSpeed;
        this.golfBallPositionY = (canvasTag.height * y) - horizontalSpeed;
        this.circleStartAngle = 1.0 * Math.PI;
        this.circleEndAngle = 3.0 * Math.PI;        
        context.arc(this.golfBallPositionX,this.golfBallPositionY,radius,this.circleStartAngle,this.circleEndAngle,counter);
        context.fillStyle = "blue";
        context.fill();
        
        context.lineWidth = lwidth;
        context.strokeStyle = lcolor;
        context.stroke();
        
    }
    
    this.createSquare = function(x,y,width,widthChange,height,color,borderWidth,bColor){
        context.beginPath();
        
        var squareWidth = width - widthChange;
        context.rect(x,y,squareWidth,height);
        context.fillStyle = color;
        context.fill();
        
        context.lineWidth = borderWidth;
        context.strokeStyle = bColor;
        context.stroke();
        
        context.closePath();
    }
}

context.beginPath();
    
    var golfBallPositionX = canvasTag.width * .50;
    golfBallPositionY = canvasTag.height * .94 - moveSpeed;
    var golfBallRadius = 10;
    var golfBallStartAngle = 1.0 * Math.PI;
    var golfBallEndAngle = 3.0 * Math.PI;
    var golfHoleCounterClockwise = false;
    
    context.arc(golfBallPositionX, golfBallPositionY, golfBallRadius, golfBallStartAngle, golfBallEndAngle, golfHoleCounterClockwise);
    context.fillStyle = "blue";
    context.fill();
    
    context.lineWidth = 2;
    context.strokeStyle = "#0080FF";
    context.stroke();