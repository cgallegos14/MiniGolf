var canvasTag;
var context;

function FirstCourse(){
    canvasTag = document.getElementById("mainCanvas");
    context = canvasTag.getContext("2d"); 
    
    this.Course1 = function(){
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
        var object26 = new CanvasObjectCreator();
        var hole = new CanvasObjectCreator();

        object1.createSquare(.1,.005,.015,0,.4,0,"pink",3,"yellow"); 
        object2.createSquare(.1,.55,.015,0,.4,0,"pink",3,"yellow"); 
        object5.createSquare(.35,.005,.015,0,.2,0,"pink",3,"yellow"); 
        object6.createSquare(.35,.275,.015,0,.05,0,"pink",3,"yellow"); 
        object7.createSquare(.35,.4,.015,0,.05,0,"pink",3,"yellow"); 
        object8.createSquare(.118,.91,.128,0,.04,0,"blue",3,"cyan"); 
        object12.createSquare(.803,.91,.195,0,.04,0,"blue",3,"cyan"); 
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
        object26.createSquare(.7,.7,.16,0,.03,0,"pink",3,"yellow"); 


        object3.createCircle(canvasTag.width * .05,0,canvasTag.height * .88,0,canvasTag.width * .04,1.0,3.0,false,"blue",2,"cyan");
        object4.createCircle(canvasTag.width * .2,0,canvasTag.height * .6,0,canvasTag.width * .05,1.0,3.0,false,"orange",2,"yellow");
        object13.createCircle(canvasTag.width * .45,0,canvasTag.height * .6,0,canvasTag.width * .05,1.0,3.0,false,"orange",2,"yellow");
        object17.createCircle(canvasTag.width * .43,0,canvasTag.height * .1,0,canvasTag.width * .04,1.0,3.0,false,"blue",2,"cyan");
        object20.createCircle(canvasTag.width * .68,0,canvasTag.height * .35,0,canvasTag.width * .07,1.0,3.0,false,"blue",2,"cyan");


        hole.createCircle(canvasTag.width * .83,0,canvasTag.height * .18,0,canvasTag.width * .02,1.0,3.0,false,"black",2,"white");

        this.courseObjects = [object1,object2,object3,object4,object5,object6,object7,object8,object9,
                     object10,object11,object12,object13,object14,object15,object16,object17,
                     object18,object19,object20,object21,object22,object23,object24,
                     object25,object26,hole];
        
        return this.courseObjects;
    }
    
}