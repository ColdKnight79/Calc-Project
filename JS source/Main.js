
console.log("Connected");


document.getElementById("dropdownToggle").addEventListener("click", function() {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.getElementById('Scenario1').addEventListener('click', Scenario1);
document.getElementById('Scenario2').addEventListener('click', Scenario2);
document.getElementById('Scenario3').addEventListener('click', Scenario3);
document.getElementById('∞').addEventListener('click', CustomScenario);
let triangleBase = 0;
let triangleHeight = 0;

const slider = document.getElementById('slider');
const Xdisplay = document.getElementById('X-display');
const Ydisplay = document.getElementById('Y-display');

slider.addEventListener('input', function () {
    updateVariables(parseInt(this.value, 10));
});

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

    triangleBase = 3.56005;
    triangleHeight = 5;
    modelInit(triangleBase, triangleHeight)
    graphmain(triangleBase, triangleHeight)

};

function Scenario2(){

    triangleBase = 8;
    triangleHeight = 8;
    modelInit(triangleBase, triangleHeight)
    graphmain(triangleBase, triangleHeight)

};

function Scenario3(){

    triangleBase = 0;
    triangleHeight = 8;
    modelInit(triangleBase, triangleHeight)
    graphmain(triangleBase, triangleHeight)

};

function CustomScenario(){
    const element = document.getElementById("sliders");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }

}

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
    
    drawaxis("costgraph" );
    costgraph("costgraph", triangleBase,triangleHeight);
    drawaxis("lengthgraph");
    lengthgraph("lengthgraph", triangleBase,triangleHeight);


};

function drawaxis(graph){
    var canvas = document.getElementById(graph);
    var ctx = canvas.getContext('2d'); 
    canvas.width = 1200; 
    canvas.height = 1200;
    ctx.strokeStyle = "black";
    ctx.beginPath()
    ctx.moveTo(300,0)
    ctx.lineTo(300,1200)
    ctx.moveTo(0,913)
    ctx.lineTo(1200,913)
    for (let i = 0; i <= 20; i++){
        ctx.moveTo(i * 74, 903);
        ctx.lineTo(i * 74, 923);
    }
    for (let i = 0; i <= 25; i++){
        ctx.moveTo(290,i * 48);
        ctx.lineTo(310,i * 48);
    }
    ctx.stroke();
};

function lengthgraph(graph, triangleBase, triangleHeight){
    var canvas = document.getElementById(graph);
    var ctx = canvas.getContext('2d'); 
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3
    let X = 0
    let Y =  Math.sqrt((triangleHeight) ** 2 + X * X) + Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) * (8 - X))
    ctx.beginPath()
    ctx.moveTo(X  * 75 + 300 ,890 - Y * 46.15);
    for (let X = 0; X < 8; X += 0.1){
        let y =  Math.sqrt((triangleHeight) ** 2 + X * X) + Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) * (8 - X))
        ctx.lineTo(X * 75 + 300, 890 - y * 46.15)
    }; 
    ctx.stroke();
    ctx.beginPath()
    X = triangleBase
    Y = Math.sqrt((triangleHeight) ** 2 + X * X) + Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) * (8 - X))
    let size = 8;
    let Yr = Y.toFixed(2); 
    let Xr = X;
    ctx.font = "30px Arial";
    ctx.fillText("(" + Xr + "," +  Yr + " miles)", X  * 75 + 300, 910 - Y * 46.15);
    ctx.fillStyle = "black";   
    
    ctx.fillRect( X  * 75 + 300 - size / 2, 890 - Y * 46.15 - size / 2, size, size);
    
    
    
    ctx.stroke();
}

function costgraph(graph, triangleBase, triangleHeight){
    var canvas = document.getElementById(graph);
    var ctx = canvas.getContext('2d'); 
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3
    if (triangleHeight < 5){
        let θ = Math.atan((8) / (8 - triangleHeight))
        let X = 0
        let Y = 10 * Math.sqrt(triangleHeight ** 2 + X ** 2) + 10 * Math.sqrt((θ * (5 - X)) ** 2 + (5 - triangleHeight) ** 2) + 7 * Math.sqrt(9 + (θ * (8 - X)) ** 2)
        ctx.beginPath()
        ctx.moveTo(X * 75 + 300,800 - Y * 4.5);
        for (let X = 0; X < 8; X += 0.1){
            θ = Math.atan((8 - X) / (8 - triangleHeight))
            let y = 10 * Math.sqrt(triangleHeight ** 2 + X ** 2) + 10 * Math.sqrt((θ * (5 - X)) ** 2 + (5 - triangleHeight) ** 2) + 7 * Math.sqrt(9 + (θ * (8 - X)) ** 2)
            ctx.lineTo(X * 75 + 300, 800 - y * 4.5)
            console.log(X * 75, y * 4.5);
        }; 
        ctx.stroke();
        ctx.beginPath()
        X = triangleBase
        θ = Math.atan((8 - X) / (8 - triangleHeight))
        Y = 10 * Math.sqrt(triangleHeight ** 2 + X ** 2) + 10 * Math.sqrt((θ * (5 - X)) ** 2 + (5 - triangleHeight) ** 2) + 7 * Math.sqrt(9 + (θ * (8 - X)) ** 2)
        let size = 8;
        let Yr = Y.toFixed(2); 
        let Xr = X;
        ctx.font = "30px Arial";
        ctx.fillText("(" + Xr + "," +  Yr + " million)", X * 75 + 300, 830 - Y * 4.5);
        ctx.fillStyle = "black";   
        
        ctx.fillRect( X * 75 + 300 - size / 2, 800 - Y * 4.5 - size / 2, size, size);
        console.log(X,Y);
        
    } else if (triangleHeight == 5) {
        let X = 0
        let Y = 10 * Math.sqrt((triangleHeight) ** 2 + X * X) + 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) * (8 - X))
        ctx.beginPath()
        ctx.moveTo(X * 75 + 300,800 - Y * 4.5);
        for (let X = 0; X < 8; X += 0.1){
            let y = 10 * Math.sqrt((triangleHeight) ** 2 + X * X) + 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) * (8 - X))
            ctx.lineTo(X * 75 + 300, 800 - y * 4.5)
            console.log(X * 75,800 - y * 4.5);
        }; 
        ctx.stroke();
        ctx.beginPath()
        X = triangleBase
        Y = 10 * Math.sqrt((triangleHeight) ** 2 + X * X) + 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) * (8 - X))
        let size = 8;
        let Yr = Y.toFixed(2); 
        let Xr = X;
        ctx.font = "30px Arial";
        ctx.fillText("(" + Xr + "," +  Yr + " million)", X * 75 + 300, 830 - Y * 4.5);
        ctx.fillStyle = "black";   
        
        ctx.fillRect( X * 75 + 300 - size / 2, 800 - Y * 4.5 - size / 2, size, size);
        console.log(X,Y);
    } else if (triangleHeight > 5){

            let θ = Math.atan((8) / (8 - triangleHeight))
            let X = 0
            let Y = 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2) + 7 * Math.sqrt((X - θ * X) ** 2 + (triangleHeight - 5) ** 2) +  10 * Math.sqrt(25 + (θ * X) ** 2)
            ctx.beginPath()
            ctx.moveTo(X * 75 + 300,800 - Y * 4.5);
            for (let X = 0; X < 8; X += 0.1){
                θ = Math.atan((X) / (triangleHeight))
                let y = 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2) + 7 * Math.sqrt((X - θ * X) ** 2 + (triangleHeight - 5) ** 2) +  10 * Math.sqrt(25 + (θ * X) ** 2)
                ctx.lineTo(X * 75 + 300, 800 - y * 4.5)
                console.log(X * 75, y * 4.5);
            }; 
            ctx.stroke();
            ctx.beginPath()
            X = triangleBase
            θ = Math.atan((X) / (triangleHeight))
            Y = 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2) + 7 * Math.sqrt((X - θ * X) ** 2 + (triangleHeight - 5) ** 2) +  10 * Math.sqrt(25 + (θ * X) ** 2)
            let size = 8;
            let Yr = Y.toFixed(2); 
            let Xr = X;
            ctx.font = "30px Arial";
            ctx.fillText("(" + Xr + "," +  Yr + " million)", X * 75 + 300, 830 - Y * 4.5);
            ctx.fillStyle = "black";   
            
            ctx.fillRect( X * 75 + 300 - size / 2, 800 - Y * 4.5 - size / 2, size, size);
            console.log(X,Y);
    }
    
    ctx.stroke();
    
    
    
 
    
}

function FirstTriangle(){
    
};

function SecondTriangle(){
    
};
