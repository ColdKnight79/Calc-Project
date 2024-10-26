
console.log("Connected");


document.getElementById("dropdownToggle").addEventListener("click", function() {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.getElementById('Scenario1').addEventListener('click', Scenario1);
document.getElementById('Scenario2').addEventListener('click', Scenario2);
document.getElementById('Scenario3').addEventListener('click', Scenario3);
let triangleBase = 0;
let triangleHeight = 0;


document.addEventListener('DOMContentLoaded', function() {
    // Call your function here
   

    
    
   
    
});

function modelInit(triangleBase, triangleHeight){
    let offset = 0;
    let weirdthing = 0;
    if (triangleHeight == 5){
            weirdthing = -0.2;
        }
        if (triangleHeight == 0 ||  triangleBase == 0 ){
            offset = 1;
        } else if (triangleBase == 0 && triangleHeight != 5){
            offset = 1;
        } else if (triangleBase > 0 && triangleHeight != 8){
            offset = -0.5;
        } else if (triangleHeight < 6 && triangleHeight != 8 ){
            offset = -0.5;
        };

        modelMain(triangleBase, offset, weirdthing);
};

function Scenario1(){

    triangleBase = 2;
    triangleHeight = 5;
    modelInit(triangleBase, triangleHeight)
    graphmain(triangleBase, triangleHeight)

};

function Scenario2(){

    triangleBase = 4;
    triangleHeight = 4;
    modelInit(triangleBase, triangleHeight)
    graphmain(triangleBase, triangleHeight)

};

function Scenario3(){

    triangleBase = 0;
    triangleHeight = 8;
    modelInit(triangleBase, triangleHeight)
    graphmain(triangleBase, triangleHeight)

};

function modelMain(triangleBase, offset, weirdthing){
    var canvas = document.getElementById('Model');
    var ctx = canvas.getContext('2d'); 
    canvas.width = 1200; 
    canvas.height = 1200;
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
   
    ctx.lineWidth = (canvasWidth * (55 / canvasWidth));
    ctx.strokeStyle = "rgba(90, 90, 90, 1)";
    ctx.moveTo(30, -5)
    ctx.lineTo(30, -30 * offset);
    ctx.lineTo(canvasWidth * (triangleBase  / 8) + 30 * offset , canvasHeight * ((triangleHeight + weirdthing) / 8) - 30 * offset);
    ctx.lineTo(canvasWidth + 30 * offset, canvasHeight - 30 * offset);
    ctx.lineTo(canvasWidth + 30 * offset, canvasHeight);
    ctx.stroke();

};

function graphmain(triangleBase, triangleHeight){
    
    drawaxis("costgraph" )
    
    drawaxis("lengthgraph")


};

function drawaxis(graph){
    var canvas = document.getElementById(graph);
    var ctx = canvas.getContext('2d'); 
    canvas.width = 1200; 
    canvas.height = 1200;
    ctx.strokeStyle = "black";
    ctx.moveTo(600,0)
    ctx.lineTo(600,1200)
    ctx.moveTo(0,600)
    ctx.lineTo(1200,600)
    for (let i = 0; i <= 20; i++){
        ctx.moveTo(i * 60, 590);
        ctx.lineTo(i * 60, 610);
    }
    for (let i = 0; i <= 20; i++){
        ctx.moveTo(590,i * 60);
        ctx.lineTo(610,i * 60);
    }
    ctx.stroke();
};

function lengthgraph(){


}

function costgraph(){

    
}

function FirstTriangle(){
    
};

function SecondTriangle(){
    
};
