
         
function forceCal(){

let mass = parseInt(document.getElementById("massNum").value);
let acceleration = parseInt(document.getElementById("AccNum").value);
let force = mass * acceleration;
document.getElementById("force").style.textAlign = "center";
document.getElementById("force").innerHTML
= "<br> YOUR FINAL CALCULATED AMOUNT = </br>"+ force.toString();
}

function displacement(){
let initialVelocity = parseInt(document.getElementById("initialVel").value);
let time = parseInt(document.getElementById("time").value);
let acceleration = parseInt(document.getElementById("AcNum").value);
let displacement =  initialVelocity * time - (1 / 2) * acceleration * (time * time);
document.getElementById("displacement").style.textAlign = "left";
document.getElementById("displacement").innerHTML
= "<br> YOUR FINAL CALCULATED AMOUNT = </br>"+ displacement.toString();
}
function Quadratic(){
    let a = parseFloat(document.getElementById("oneSide").value);
    let b = parseFloat(document.getElementById("AnotherSide").value);
    let c = parseFloat(document.getElementById("otherSide").value);
    let pos;
     let neg;
    let realNum;
    let imagNum;
    let dis = b * b - 4 * a * c;
    if (dis > 0) {
        pos = (-b + Math.sqrt(dis)) / (2 * a);
     neg = (-b - Math.sqrt(dis)) / (2 * a);
    
        document.getElementById("Quad").style.textAlign = "right";
    document.getElementById("Quad").innerHTML
    = "<br> YOUR FINAL CALCULATED AMOUNT = </br>"+ pos.toString()+" and "+ neg.toString();
    }
    
    // condition for real and equal roots
    else if (dis == 0) {
        pos = neg = -b / (2 * a);
    
        document.getElementById("Quad").style.textAlign = "right";
    document.getElementById("Quad").innerHTML
    = "<br> YOUR FINAL CALCULATED AMOUNT = </br>"+ pos.toString()+" and "+ neg.toString();
        
    }
    
    // if roots are not real
    else {
        
      realNum = (-b / (2 * a)).toFixed(2)//roundto2digitdecimal;
       imagNum = (Math.sqrt(-dis) / (2 * a)).toFixed(2);
    //finalResult
    document.getElementById("Quad").style.textAlign = "right";
            document.getElementById("Quad").innerHTML
            = "<br> YOUR FINAL CALCULATED AMOUNT = </br>"+ realNum.toString() + " + " + imagNum.toString() + "i and "
    +   realNum.toString() + " - " + imagNum.toString() + "i";//printout real num and imaginary number;    
    }
    }
    function finance(){
        let pmt = parseFloat(document.getElementById("PMT").value);
let rate = parseFloat(document.getElementById("rate").value);
let years = parseFloat(document.getElementById("years").value);
 let p = pmt * ((1 - (1 / Math.pow((1 + rate), years))) / rate);
document.getElementById("finance").style.textAlign = "center";
document.getElementById("finance").innerHTML
= "<br> YOUR FINAL CALCULATED AMOUNT = </br>"+ p.toString();
    }

       