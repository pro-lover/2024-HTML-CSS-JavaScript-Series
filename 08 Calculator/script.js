
const btnNumbers = document.querySelectorAll(".number");
const main = document.querySelector(".answer");
const outputAllDoc = document.querySelector(".outputAll");
const btnEqualTo = document.querySelector(".RT63");
const notice = document.querySelectorAll(".history");


var outputAll = 0;
var countClicks = 0;
var holderValue = [];
var leftValue = 0;
var rightValue = 0;
var totalValue = 0;
var isPressed = false;
var storeValue;
var value;
var answer = [];

const subStringValue = (index) => {
console.log(outputAll);

    leftValue = outputAll.substring(0, index);
    rightValue = outputAll.substring(index+1, outputAll.length);

    if (leftValue === "Ans" ){
        console.log("Ans left value");
        leftValue = answer[countClicks-1]
    }
    if ( rightValue === "Ans") {
        console.log("Ans right value");
        rightValue = answer[countClicks-1]
    }
    console.log(leftValue);
    console.log(rightValue);

    leftValue = parseFloat(leftValue);
    rightValue = parseFloat(rightValue);
    console.log(leftValue);
    console.log(rightValue);

}


btnEqualTo.addEventListener("click", () => {

    if ( outputAll.indexOf("-") > -1){
        var index = outputAll.indexOf("-");
        console.log("value -",index);
    }else if ( outputAll.indexOf("+") > -1){
        var index = outputAll.indexOf("+");
        console.log("value +",index);
    }else if ( outputAll.indexOf("*") > -1){
        var index = outputAll.indexOf("*");
        console.log("value *",index);
    }else if ( outputAll.indexOf("/") > -1){
        var index = outputAll.indexOf("/");
        console.log("value /",index);
    }else if ( outputAll.indexOf("√") > -1){
        var index = outputAll.indexOf("√");
        console.log("value √",index);
    }else if ( outputAll.indexOf("s") > -1){
        var index = outputAll.indexOf("s");
        console.log("value sin",index);
    }else if ( outputAll.indexOf("t") > -1){
        var index = outputAll.indexOf("t");
        console.log("value tan",index);
    }else if ( outputAll.indexOf("c") > -1){
        var index = outputAll.indexOf("c");
        console.log("value cos",index);
    }
    value = outputAll.substring(index, index + 1);
    console.log(value);
    switch(value) {
        case "+":
            
            subStringValue(index);
    
            totalValue = leftValue +  rightValue;
            answer[countClicks] = totalValue;
            totalValue = leftValue +' + '+ rightValue + ' = '+ totalValue;
          break;
        case "-":
            var index = outputAll.indexOf("-");
            subStringValue(index);
    
            totalValue = leftValue -  rightValue;
            answer[countClicks] = totalValue;
            totalValue = leftValue +' - '+ rightValue + ' = '+ totalValue;
          break;
          case "*":
            var index = outputAll.indexOf("*");
            subStringValue(index);
    
            totalValue = leftValue * rightValue;
            answer[countClicks] = totalValue;
            totalValue = leftValue +' * '+ rightValue + ' = '+ totalValue;
          break;
          case "/":
            var index = outputAll.indexOf("/");
            subStringValue(index);
    
            totalValue = leftValue /  rightValue;
            answer[countClicks] = totalValue;
            totalValue = leftValue +' / '+ rightValue + ' = '+ totalValue;
          break;
          case "√":
            var index = outputAll.indexOf("√");
            console.log(index);
            subStringValue(index+1);
            totalValue = Math.sqrt( rightValue);
            answer[countClicks] = totalValue;
            totalValue = '√('+ rightValue + ') = '+ totalValue;
          break;
          case "s":
            var index = outputAll.indexOf("s");
            subStringValue(index+3);
            totalValue = Math.sin(  rightValue);
            answer[countClicks] = totalValue;
            totalValue = 'sin('+ rightValue + ')='+totalValue;
          break;
          case "t":
            var index = outputAll.indexOf("t");
            subStringValue(index+3);
            totalValue = Math.tan( rightValue);
            answer[countClicks] = totalValue;
            totalValue = 'tan('+ rightValue + ')='+totalValue;
          break;
          case "c":
            var index = outputAll.indexOf("c");
            subStringValue(index+3);
            totalValue = Math.cos( rightValue);
            answer[countClicks] = totalValue;
            totalValue = 'cos('+ rightValue + ')='+totalValue;
          break;
        default:
            console.log("failed",value);
      }
      holderValue.reverse();
      holderValue[countClicks] = totalValue;
      holderValue.reverse();
      for (let i = 0; i <holderValue.length; i++) {
            notice[i].innerHTML = holderValue[i];
      }
      main.innerHTML = totalValue;
      countClicks++;
      }, false);



const numberClick = (value) => {
    console.log(value);
    if(value === "pop"){
        outputAll = outputAll.slice(0, outputAll.length-1);
        outputAllDoc.innerHTML = outputAll;
    }else if(value === "clear"){
        outputAll = outputAll.slice(outputAll.length);
        outputAllDoc.innerHTML = outputAll;
    }else{
        outputAll = outputAll +""+ value;
        if(value  ===  "√"|| value === "In"  || value === "sin" || value === "cos" || value === "tan" || value === "log") {
            outputAll = outputAll +"(";
        }
            
            outputAllDoc.innerHTML = outputAll;
        
    }
   
    
    
}
function openPortfolio(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("portfolio-cards");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";

    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    console.log(document.getElementById(cityName));
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
   
  }
