function decimalToPercent(num, denom) {
    if (denom != 0) {
        return (100*num/denom).toFixed(2).toString()+"%"
    }
    return ""
}

function getAvgA1() {
    var numerator = document.getElementById("A1numerator").value;
    var denominator = document.getElementById("A1denominator").value;
    var res = numerator/denominator;
    document.getElementById("A1res").innerHTML = decimalToPercent(numerator, denominator);
}

function getAvgA2() {
    var numerator = document.getElementById("A2numerator").value;
    var denominator = document.getElementById("A2denominator").value;
    var res = numerator/denominator;
    document.getElementById("A2res").innerHTML = decimalToPercent(numerator, denominator);
}

function getAvgA3() {
    var numerator = document.getElementById("A3numerator").value;
    var denominator = document.getElementById("A3denominator").value;
    var res = numerator/denominator;
    document.getElementById("A3res").innerHTML = decimalToPercent(numerator, denominator);
}

function getAvgA4() {
    var numerator = document.getElementById("A4numerator").value;
    var denominator = document.getElementById("A4denominator").value;
    var res = numerator/denominator;
    document.getElementById("A4res").innerHTML = decimalToPercent(numerator, denominator);
}

function getMean() {
// And I've been real shot down and I'm - I'm gettin' mean!
    var num1 = document.getElementById("A1numerator").value;
    var denom1 = document.getElementById("A1denominator").value;
    var grade1 = num1/denom1;
    var num2 = document.getElementById("A2numerator").value;
    var denom2 = document.getElementById("A2denominator").value;
    var grade2 = num2/denom2;
    var num3 = document.getElementById("A3numerator").value;
    var denom3 = document.getElementById("A3denominator").value;
    var grade3 = num3/denom3;
    var num4 = document.getElementById("A4numerator").value;
    var denom4 = document.getElementById("A4denominator").value;
    var grade4 = num4/denom4;
    var num=0;
    var denom=0;
    if (denom1 != 0) {
        num += grade1;
        denom += 1;
    }
    if (denom2 != 0) {
        num += grade2;
        denom += 1;
    }
    if (denom3 != 0) {
        num += grade3;
        denom += 1;
    }
    if (denom4 != 0) {
        num += grade4;
        denom += 1;
    }
    document.getElementById("finalRes").innerHTML = decimalToPercent(num, denom);
}

function getWeight() {
    var num1 = document.getElementById("A1numerator").value;
    var denom1 = document.getElementById("A1denominator").value;
    var grade1 = num1/denom1;
    var num2 = document.getElementById("A2numerator").value;
    var denom2 = document.getElementById("A2denominator").value;
    var grade2 = num2/denom2;
    var num3 = document.getElementById("A3numerator").value;
    var denom3 = document.getElementById("A3denominator").value;
    var grade3 = num3/denom3;
    var num4 = document.getElementById("A4numerator").value;
    var denom4 = document.getElementById("A4denominator").value;
    var grade4 = num4/denom4;
    
    var weight1 = document.getElementById("A1weight").value;
    var weight2 = document.getElementById("A2weight").value;
    var weight3 = document.getElementById("A3weight").value;
    var weight4 = document.getElementById("A4weight").value;

    var num=0;
    var denom=0;
    if (denom1 != 0) {
        num += grade1*weight1;
        denom += weight1*1; //needed the *1 because otherwise it treats it as a string
    }
    if (denom2 != 0) {
        num += grade2*weight2;
        denom += weight2*1;
    }
    if (denom3 != 0) {
        num += grade3*weight3;
        denom += weight3*1;
    }
    if (denom4 != 0) {
        num += grade4*weight4;
        denom += weight4*1;
    }
    document.getElementById("finalRes").innerHTML = decimalToPercent(num, denom);
}

function changeColor() { 
    if (clickCount%2==0) {
        document.getElementById("container").style.background = 'black';
        document.getElementById("header").style.color = 'white';
        document.getElementById("nightMode").innerHTML = "DAY MODE";
    }
    else {
        document.getElementById("container").style.background = 'white';
        document.getElementById("header").style.color = 'black';
        document.getElementById("nightMode").innerHTML = "NIGHT MODE";
    }
    clickCount++;
} 

document.getElementById("nightMode").addEventListener("click", changeColor);

document.getElementById("mean").addEventListener("click", getMean);
document.getElementById("weighted").addEventListener("click", getWeight);

document.getElementById("A1numerator").addEventListener("input", getAvgA1);
document.getElementById("A1denominator").addEventListener("input", getAvgA1);
document.getElementById("A1res").addEventListener("input", getAvgA1);

document.getElementById("A2numerator").addEventListener("input", getAvgA2);
document.getElementById("A2denominator").addEventListener("input", getAvgA2);
document.getElementById("A2res").addEventListener("input", getAvgA2);

document.getElementById("A3numerator").addEventListener("input", getAvgA3);
document.getElementById("A3denominator").addEventListener("input", getAvgA3);
document.getElementById("A3res").addEventListener("input", getAvgA3);

document.getElementById("A4numerator").addEventListener("input", getAvgA4);
document.getElementById("A4denominator").addEventListener("input", getAvgA4);
document.getElementById("A4res").addEventListener("input", getAvgA4);

var clickCount=0;