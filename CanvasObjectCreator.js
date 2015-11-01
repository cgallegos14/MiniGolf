var canvasTag;
var context;

function CanvasObjectCreator(){
    canvasTag = document.getElementById("mainCanvas");
    context = canvasTag.getContext("2d"); 
    
    this.createCircle = function(x,changeX,y,changeY,radius,start,end,counter,color,lwidth,lcolor){
        context.beginPath();
        //this.golfBallPositionX = (canvasTag.width * x) - changeX;
        //this.golfBallPositionY = (canvasTag.height * y) - changeY;
        
        this.golfBallPositionX = x;
        this.golfBallPositionY = y;
        
        this.circleStartAngle = 1.0 * Math.PI;
        this.circleEndAngle = 3.0 * Math.PI;        
        context.arc(this.golfBallPositionX,this.golfBallPositionY,radius,this.circleStartAngle,this.circleEndAngle,counter);
        context.fillStyle = "blue";
        context.fill();
        
        context.lineWidth = lwidth;
        context.strokeStyle = lcolor;
        context.stroke();
        
    }
    
    this.createSquare = function(x,y,width,widthChange,height,heightChange,color,borderWidth,bColor){
        context.beginPath();
        
        this.squareX = canvasTag.width * x;
        this.squareY = canvasTag.height * y;
        this.squareWidth = (canvasTag.width * width) + widthChange;
        this.squareHeight = (canvasTag.height * height) - heightChange;
        context.rect(this.squareX,this.squareY,this.squareWidth,this.squareHeight);
        context.fillStyle = color;
        context.fill();
        
        context.lineWidth = borderWidth;
        context.strokeStyle = bColor;
        context.stroke();
        
        context.closePath();
    }
}