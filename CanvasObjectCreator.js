var canvasTag;
var context;

function CanvasObjectCreator(){
    canvasTag = document.getElementById("mainCanvas");
    context = canvasTag.getContext("2d"); 
    
    this.createCircle = function(x,verticalSpeed,y,horizontalSpeed,radius,start,end,counter,color,lwidth,lcolor){
        context.beginPath();
        this.golfBallPositionX = x - verticalSpeed;
        this.golfBallPositionY = y - horizontalSpeed;
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