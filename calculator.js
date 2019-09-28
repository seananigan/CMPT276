function decimalToPercent(num, denom) {
    if (denom != 0) {
        return (100*num/denom).toFixed(2).toString()+"%"
    }
    return ""
}

function getAvgA1() {
    //divides the numerator input box by the denominator one
    var numerator = document.getElementById("A1numerator").value;
    var denominator = document.getElementById("A1denominator").value;
    var res = numerator/denominator;
    if (res>1 && noBonus==1) {
        //accounts for whether or not bonus is allowed
        numerator = denominator;
    }
    document.getElementById("A1res").innerHTML = decimalToPercent(numerator, denominator);
    if (displayed == "weight") {
        getWeight();
    }
    if (displayed == "mean") {
        getMean();
    }
}

function getAvgA2() {
    //see comments in getAvgA1()
    var numerator = document.getElementById("A2numerator").value;
    var denominator = document.getElementById("A2denominator").value;
    var res = numerator/denominator;
    if (res>1 && noBonus==1) {
        numerator = denominator;
    }
    document.getElementById("A2res").innerHTML = decimalToPercent(numerator, denominator);
    if (displayed == "weight") {
        getWeight();
    }
    if (displayed == "mean") {
        getMean();
    }
}

function getAvgA3() {
    //see comments in getAvgA1()
    var numerator = document.getElementById("A3numerator").value;
    var denominator = document.getElementById("A3denominator").value;
    var res = numerator/denominator;
    if (res>1 && noBonus==1) {
        numerator = denominator;
    }
    document.getElementById("A3res").innerHTML = decimalToPercent(numerator, denominator);
    if (displayed == "weight") {
        getWeight();
    }
    if (displayed == "mean") {
        getMean();
    }
}

function getAvgA4() {
    //see comments in getAvgA1()
    var numerator = document.getElementById("A4numerator").value;
    var denominator = document.getElementById("A4denominator").value;
    var res = numerator/denominator;
    if (res>1 && noBonus==1) {
        numerator = denominator;
    }
    document.getElementById("A4res").innerHTML = decimalToPercent(numerator, denominator);
    if (displayed == "weight") {
        getWeight();
    }
    if (displayed == "mean") {
        getMean();
    }
}

function getMean() {
// And I've been real shot down and I'm - I'm gettin' mean!
    var num1 = document.getElementById("A1numerator").value;
    var denom1 = document.getElementById("A1denominator").value;
    if (num1/denom1>1 && noBonus==1) {
        num1 = denom1;
    }
    var grade1 = num1/denom1;
    var num2 = document.getElementById("A2numerator").value;
    var denom2 = document.getElementById("A2denominator").value;
    if (num2/denom2>1 && noBonus==1) {
        num2 = denom2;
    }
    var grade2 = num2/denom2;
    var num3 = document.getElementById("A3numerator").value;
    var denom3 = document.getElementById("A3denominator").value;
    if (num3/denom3>1 && noBonus==1) {
        num3 = denom3;
    }
    var grade3 = num3/denom3;
    var num4 = document.getElementById("A4numerator").value;
    var denom4 = document.getElementById("A4denominator").value;
    if (num4/denom4>1 && noBonus==1) {
        num4 = denom4;
    }
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
    displayed = "mean"; //to see what should stay on the screen when the box is ticked/unticked
}

function getWeight() {
    var num1 = document.getElementById("A1numerator").value;
    var denom1 = document.getElementById("A1denominator").value;
    if (num1/denom1>1 && noBonus==1) {
        num1 = denom1;
    }
    var grade1 = num1/denom1;
    var num2 = document.getElementById("A2numerator").value;
    var denom2 = document.getElementById("A2denominator").value;
    if (num2/denom2>1 && noBonus==1) {
        num2 = denom2;
    }
    var grade2 = num2/denom2;
    var num3 = document.getElementById("A3numerator").value;
    var denom3 = document.getElementById("A3denominator").value;
    if (num3/denom3>1 && noBonus==1) {
        num3 = denom3;
    }
    var grade3 = num3/denom3;
    var num4 = document.getElementById("A4numerator").value;
    var denom4 = document.getElementById("A4denominator").value;
    if (num4/denom4>1 && noBonus==1) {
        num4 = denom4;
    }
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
    displayed = "weight"; //to see what should stay on the screen when the box is ticked/unticked
}

function changeColour() { 
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

function decideAboutWeight() {
    //decides whether to check getWeight or not depending on if it's active
    if (displayed=="weight") {
        getWeight();
    }
}

bonusCheck.addEventListener( 'change', function() {
    //will decide whether bonus marks should count or not
     if (bonusCheck.checked) {
        noBonus = 1;
    } 
    else {
        noBonus = 0;
    }
    getAvgA1();
    getAvgA2()
    getAvgA3();
    getAvgA4();
    if (displayed == "weight") {
        getWeight();
    }
    if (displayed == "mean") {
        getMean();
    }
});

document.getElementById("nightMode").addEventListener("click", changeColour);

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

document.getElementById("A1weight").addEventListener("input", decideAboutWeight);
document.getElementById("A2weight").addEventListener("input", decideAboutWeight);
document.getElementById("A3weight").addEventListener("input", decideAboutWeight);
document.getElementById("A4weight").addEventListener("input", decideAboutWeight);

var clickCount = 0; //counts # of clicks on the night/day mode button to see what it should say/do
var noBonus = 0;    //is the box ticked or not?
displayed = "none"; //to see what should stay on the screen when the box is ticked/unticked