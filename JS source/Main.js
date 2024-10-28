
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

var Xslider = document.getElementById('X-Var');
var Yslider = document.getElementById('Y-Var');
const Xdisplay = document.getElementById('X-display');
const Ydisplay = document.getElementById('Y-display');

Xslider.addEventListener('input', function () {
    updateX(parseFloat(this.value, 10));
});

Yslider.addEventListener('input', function () {
     
    updateY(parseFloat(this.value, 10));
});



function updateX(value){
    Xdisplay.textContent = value;
    updateAll(true);

};

function updateY(value){
    Ydisplay.textContent = value;
    updateAll(true);
};

function updateAll(slider){
    console.log(parseFloat(Xslider.value),parseFloat(Yslider.value));
    if (slider == true) {
        triangleBase = parseFloat(Xslider.value)
    triangleHeight = parseFloat(Yslider.value)
    }
    modelInit(triangleBase, triangleHeight)
    graphmain(triangleBase, triangleHeight)
    document.getElementById("pythag").innerText = `The pythagorean theorem dictates that \\( a^2 + b^2 = c^2 \\) where a and b are side lengths and c is the hypotenuse of a triangle. When solving for the hypotenuse this equation1 can be rearainged to get \\( c = \\sqrt{a^2 + b^2}  \\). When solving the upper triangle where a = ${triangleBase} and b = ${triangleHeight} these numbers can be subbed in to get \\(c = \\sqrt{${triangleBase}^2 + ${triangleHeight}^2}\\). When solving the lower triangle where a = ${8 - triangleBase} and b = ${ 8- triangleHeight} these numbers can be subbed in to get \\(c = \\sqrt{${8 - triangleBase}^2 + ${ 8- triangleHeight}^2}\\)`
    if (triangleBase != 0){
        document.getElementById("equation1").innerText =`The cost of Building the road is calculated by multiplying the length of road within the swamp, where Y is less than 5 or the upper hypotenuse by 10 million and adding that to the length of road outside of the swamp, where Y is greater than 5 or the lower hypotenuse by 7 million. The above graph shows the cost of building the road where the curve in the road is always at y = 5. Since all we are taking the previous hypotenuse equations adding them together and multiplying each by a coefficiet this results in an equation of y = \\(10 \\cdot \\sqrt{5^2 + X^2} + 7 \\cdot \\sqrt{3^2 + (8 - X)^2}\\) y = \\(10 \\cdot \\sqrt{5^2 + ${triangleBase}^2} + 7 \\cdot \\sqrt{3^2 + (8 - ${triangleBase})^2}\\), y = ${10 * Math.sqrt((triangleHeight) ** 2 + triangleBase * triangleBase) + 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - triangleBase) * (8 - triangleBase))} million`
        document.getElementById("equation2").innerText = `The calculation for finding the cost of the road is simply both hypotenuse added together. That creates the expression of y= \\(\\sqrt{5^2 + X^2} + \\sqrt{3^2 + (8 - X)^2}\\) y = \\(\\sqrt{5^2 + ${triangleBase}^2} + \\sqrt{3^2 + (8 - ${triangleBase})^2}\\) y = ${Math.sqrt((triangleHeight) ** 2 + triangleBase * triangleBase) + Math.sqrt((8 - triangleHeight) ** 2 + (8 - triangleBase) * (8 - triangleBase))}`
        document.getElementById("angles").innerText = `To start finding the angle you can calculate the angles coming from the center curve toards the start and end pont using \\( θ = tan(oposite/adjacent) \\). subbing in the top triangle you get  \\( θ = \\arctan{${triangleBase}/${triangleHeight}} \\) θ = ${(180 / Math.PI) * Math.atan(triangleBase / triangleHeight)}. subbing in the bottom triangle you get  \\( θ = \\arctan{(${8 - triangleBase}/${8 - triangleHeight})} \\) θ = ${(180 / Math.PI) * Math.atan((8 -triangleBase) / (8 -triangleHeight))}. using the knowledge that the angle between the Base of the top triangle and the Left side of the botom triangle will always be 90 degrees you can add the 3 angles together to get a total angle under beneath the roads of ${(180 / Math.PI) * Math.atan(triangleBase / triangleHeight) + 90 + (180 / Math.PI) * Math.atan((8 -triangleBase) / (8 -triangleHeight))}. Since there is always 360 degrees in a circle we can subtract the underside angle from 360 to get ${360 - ((180 / Math.PI) * Math.atan(triangleBase / triangleHeight) + 90 + (180 / Math.PI) * Math.atan((8 -triangleBase) / (8 -triangleHeight)))} as the upper angle between 2 lines`
    } else {
        document.getElementById("angles").innerText = `Since both roads are meeting perpendicular to eachother that means that there is a 90 degree angle between them on the right side. since there are 360 degrees in a circle we can subtract the 90 degrees form 360 to get 180 degrees on the backside `
        document.getElementById("equation2").innerText =`Since Y is equal to 8 the graph shows the length of  the road from 0,8 the situation shown in the diagram to 8,8 the same situation as solution 2. this is acheived using an equation1 that is far more complicated than necessary to solve this problem. The simple solustion can be found Since both sides are equal to 8. The length is simply 8 miles south + 8 miles East or 16 miles total `
        document.getElementById("equation1").innerText = `Since Y is equal to 8 the graph shows the cost of building the road from 0,8 the situation shown in the diagram to 8,8 the same situation as solution 2. this is acheived using an equation1 that is far more complicated than necessary to solve this problem. The simple way to solve this problem is to take it appart into 3 parts, the first part is 5 miles long in the swamp and cost 10 million a mile or 50 million the second part is 3 miles long on land and is 7 million a mile or 21 million and the last segment is 8 miles long as costs 7 million a mile or 56 million. All together 50million + 21million + 56million = 127million`
    } 
    Diagram2(5,5) 
    
    MathJax.typeset();
Ydisplay
};



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
    Ydisplay.textContent = triangleHeight;
    Xdisplay.textContent = triangleBase;
    updateAll()

};

function Scenario2(){

    triangleBase = 5;
    triangleHeight = 5;
    Ydisplay.textContent = triangleHeight;
    Xdisplay.textContent = triangleBase;
    updateAll()

};

function Scenario3(){

    triangleBase = 0;
    triangleHeight = 8;
    Ydisplay.textContent = triangleHeight;
    Xdisplay.textContent = triangleBase;
    updateAll()
};

function CustomScenario(){
    const element = document.getElementById("sliders");
    if (element.style.display == "none" || element.style.display === "") {
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

    drawaxis("Diagram");
    Diagram(triangleBase,triangleHeight);
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
    ctx.lineWidth = 2
    ctx.strokeStyle = "black";
    if (graph === "costgraph" || graph === "lengthgraph"){
        console.log(graph)
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
        } else if (graph === "Diagram") {
            ctx.beginPath()
            ctx.moveTo(133.3,0)
            ctx.lineTo(133.3,1056.6)
            ctx.moveTo(123.3,1066.6)
            ctx.lineTo(1200,1066.6)
            ctx.font = "30px Arial";
            for (let i = 1; i <= 20; i++){
                ctx.moveTo(i * 133.3, 1056.6);
                ctx.lineTo(i * 133.3, 1076.6);
                ctx.fillText(i - 1,i * 133.3 - 10,1106.6)
            }
            for (let i = 0; i <= 8; i++){
                console
                ctx.moveTo(123.3,i * 133.3);
                ctx.lineTo(143.3,i * 133.3);
                ctx.fillText(i ,103.3,i * 133.3 + 10)
            }

        }
        ctx.stroke();
};

function Diagram(triangleBase,triangleHeight){
    var canvas = document.getElementById("Diagram");
    var ctx = canvas.getContext('2d'); 
    triangleBase += 1
    ctx.lineWidth = 6
    ctx.strokeStyle = "orange";
    ctx.beginPath()
    ctx.moveTo(133.3,0)
    ctx.lineTo(133.3,triangleHeight * 133.3)
    ctx.lineTo(triangleBase * 133.3,triangleHeight * 133.3)
    ctx.lineTo(133.3,0)
    ctx.fillStyle = "orange"
    ctx.fillText("Y:" + triangleHeight, 80, triangleHeight * 133.3 / 2)
    if (triangleHeight != 8){
        ctx.fillText("X:" + triangleHeight, triangleBase * 133.3 / 2, triangleHeight * 133.3 + 45)
        ctx.fillText(`sqrt( ${triangleHeight ** 2 + (triangleBase - 1) ** 2} )`,triangleBase * 133.3 / 2 + 80,triangleHeight * 133.3 / 2)
    }
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = "green";
    ctx.moveTo(triangleBase * 133.3,triangleHeight * 133.3)
    ctx.lineTo(1200,1066.6)
    ctx.lineTo(triangleBase * 133.3,1066.6)
    ctx.lineTo(triangleBase * 133.3,triangleHeight * 133.3)
    ctx.fillStyle = "green"
    
    ctx.fillText(`X: ${(8 - triangleBase  + 1)} `,triangleBase * 133.3 + ((8 - triangleBase ) * 133.3 / 2) ,1046.6)
    if (triangleHeight != 8){
        ctx.fillText(`sqrt( ${(8 - triangleHeight) ** 2 + (8 - triangleBase + 1) ** 2} )` , 1200 - (8 - triangleBase) * 133 / 2   ,1066.6 - (8 - triangleHeight) * 133 / 2)
        ctx.fillText(`Y: ${(8 - triangleHeight )} `,triangleBase * 133.3, ((8 - triangleHeight) * 133.3 / 2) + triangleHeight * 133.3)
    }
    ctx.stroke()
    
}

function Diagram2(triangleBase,triangleHeight){
   
    var canvas = document.getElementById("Diagram2");
    var ctx = canvas.getContext('2d'); 
    canvas.width = 1200; 
    canvas.height = 1200;
    triangleBase += 1
    ctx.lineWidth = 6
    ctx.strokeStyle = "black";
    ctx.beginPath()
    ctx.font = "40px Arial"
    ctx.moveTo(50.3,0)
    ctx.lineTo(50.3,triangleHeight * 133.3)
    ctx.lineTo(triangleBase * 133.3,triangleHeight * 133.3)
    ctx.lineTo(50.3,0)
    ctx.fillText("5" , 80, triangleHeight * 133.3 / 2)
    ctx.fillText("X" , triangleBase * 133.3 / 2, triangleHeight * 133.3 + 45)
    ctx.fillText(`sqrt(25 + X^2)`,triangleBase * 133.3 / 2 + 80,triangleHeight * 133.3 / 2)
    ctx.moveTo(triangleBase * 133.3,triangleHeight * 133.3)
    ctx.lineTo(1200,1066.6)
    ctx.lineTo(triangleBase * 133.3,1066.6)
    ctx.lineTo(triangleBase * 133.3,triangleHeight * 133.3)
    ctx.fillText(`sqrt(9 + (8 - X)^2)` , 1200 - (8 - triangleBase) * 133 / 2  - 180,1066.6 - (8 - triangleHeight) * 133 / 2 -120)
    ctx.fillText(`8 - X `,triangleBase * 133.3 + ((8 - triangleBase ) * 133.3 / 2) ,1046.6)
    ctx.fillText(`3`,triangleBase * 133.3, ((8 - triangleHeight) * 133.3 / 2) + triangleHeight * 133.3 )
    ctx.stroke()
    
}





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
        let X = 0
        let C = ((8 - triangleHeight) - 3) / (8 - triangleHeight)
        let Y = 10 * Math.sqrt(triangleHeight ** 2 + X ** 2) + 10 * C * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2)  + 7 * (Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2) - C * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2))
        ctx.beginPath()
        ctx.moveTo(X * 75 + 300,800 - Y * 4.5);
        for (let X = 0; X < 8; X += 0.1){
            let y = 10 * Math.sqrt(triangleHeight ** 2 + X ** 2) + 10 * C * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2)  + 7 * (Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2) - C * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2))
            ctx.lineTo(X * 75 + 300, 800 - y * 4.5)
            
        }; 
        ctx.stroke();
        ctx.beginPath()
        X = triangleBase
        C = ((8 - triangleHeight) - 3) / (8 - triangleHeight)
        Y = 10 * Math.sqrt(triangleHeight ** 2 + X ** 2) + 10 * C * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2)  + 7 * (Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2) - C * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2))
        let size = 8;
        let Yr = Y; 
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
            
        }; 
        ctx.stroke();
        ctx.beginPath()
        X = triangleBase
        Y = 10 * Math.sqrt((triangleHeight) ** 2 + X * X) + 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) * (8 - X))
        let size = 8;
        let Yr = Y; 
        let Xr = X;
        ctx.font = "30px Arial";
        ctx.fillText("(" + Xr + "," +  Yr + " million)", X * 75 + 300, 830 - Y * 4.5);
        ctx.fillStyle = "black";   
        
        ctx.fillRect( X * 75 + 300 - size / 2, 800 - Y * 4.5 - size / 2, size, size);
        console.log(X,Y);
    } else if (triangleHeight > 5){

            let C = ((triangleHeight) - 5) / (triangleHeight)
            let X = 0
            let Y = 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2) + 7 * C * Math.sqrt(triangleHeight ** 2 + X ** 2) +  10 * (Math.sqrt(triangleHeight ** 2 + X ** 2) - C * Math.sqrt(triangleHeight ** 2 + X ** 2))
            ctx.beginPath()
            ctx.moveTo(X * 75 + 300,800 - Y * 4.5);
            for (let X = 0; X < 8; X += 0.1){
    
                let y = 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2) + 7 * C * Math.sqrt(triangleHeight ** 2 + X ** 2) +  10 * (Math.sqrt(triangleHeight ** 2 + X ** 2) - C * Math.sqrt(triangleHeight ** 2 + X ** 2))
                ctx.lineTo(X * 75 + 300, 800 - y * 4.5)
                
            }; 
            ctx.stroke();
            ctx.beginPath()
            X = triangleBase
            
            Y = 7 * Math.sqrt((8 - triangleHeight) ** 2 + (8 - X) ** 2) + 7 * C * Math.sqrt(triangleHeight ** 2 + X ** 2) +  10 * (Math.sqrt(triangleHeight ** 2 + X ** 2) - C * Math.sqrt(triangleHeight ** 2 + X ** 2))
            let size = 8;
            let Yr = Y.toFixed(2); 
            let Xr = X;
            ctx.font = "30px Arial";
            ctx.fillText("(" + Xr + "," +  Yr + " million)", X * 75 + 300, 830 - Y * 4.5);
            ctx.fillStyle = "black";   
            
            ctx.fillRect( X * 75 + 300 - size / 2, 800 - Y * 4.5 - size / 2, size, size);
            
    }
    
    ctx.stroke();
    
    
    
 
    
}
