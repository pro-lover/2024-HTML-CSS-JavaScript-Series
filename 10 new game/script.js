const playerOneSection = document.querySelector('.player-one-section');
const playerTwoSection = document.querySelector('.player-two-section');
const firstPrayerCows = document.querySelectorAll(".dot");
const firstPrayerCowsContainer = document.querySelectorAll(".dot-container");
const secPrayerCows = document.querySelectorAll(".dot-player-two");
const secPrayerCowsContainer = document.querySelectorAll(".dot-container-player-two");
const boardpic = document.querySelectorAll(".board-pic");
const x = 214;
const y = 624;
const xTo = 355;
const yTo = 111;

let mousePox = 0;
let mousePoy = 0;
// playerOneSection.style.top = `${214}px`;
// playerOneSection.style.left = `${290}px`;
// playerTwoSection.style.top = `${214}px`;
// playerTwoSection.style.left = `${1559}px`;
boardpic[1].style.top = `${x+xTo}px`;
boardpic[2].style.top = `${x+xTo*2}px`;
boardpic[3].style.top = `${x+xTo}px`;
boardpic[3].style.left = `${y+yTo}px`;
boardpic[4].style.top = `${x+xTo}px`;
boardpic[4].style.left = `${y+yTo*2}px`;
boardpic[5].style.top = `${x+xTo}px`;
boardpic[5].style.left = `${(y+xTo*2)-yTo*2}px`;
boardpic[6].style.top = `${x+xTo}px`;
boardpic[6].style.left = `${(y+xTo*2)-yTo}px`;
boardpic[7].style.top = `${x+xTo}px`;
boardpic[7].style.left = `${y+xTo*2}px`;
boardpic[8].style.left = `${y+xTo}px`;
boardpic[9].style.left = `${y+xTo*2}px`;
boardpic[10].style.left = `${y+xTo}px`;
boardpic[10].style.top = `${x+yTo}px`;
boardpic[11].style.left = `${y+xTo}px`;
boardpic[11].style.top = `${x+yTo*2}px`;
boardpic[12].style.top = `${x+xTo*2}px`;
boardpic[12].style.left = `${y+xTo}px`;
boardpic[13].style.left = `${y+xTo*2}px`;
boardpic[13].style.top = `${x+xTo*2}px`;
boardpic[14].style.left = `${y+xTo}px`;
boardpic[14].style.top = `${(x+xTo*2)-yTo}px`;
boardpic[15].style.left = `${y+xTo}px`;
boardpic[15].style.top = `${(x+xTo*2)-yTo*2}px`;
boardpic[16].style.top = `${(x+xTo*2)-yTo*2}px`;
boardpic[16].style.left = `${y+yTo*2}px`;
boardpic[17].style.top = `${x+yTo*2}px`;
boardpic[17].style.left = `${y+yTo*2}px`;
boardpic[18].style.top = `${(x+xTo*2)-yTo*2}px`;
boardpic[18].style.left = `${(y+xTo*2)-yTo*2}px`;
boardpic[19].style.top = `${(x+xTo*2)-yTo}px`;
boardpic[19].style.left = `${(y+xTo*2)-yTo}px`;
boardpic[20].style.top = `${x+yTo*2}px`;
boardpic[20].style.left = `${(y+xTo*2)-yTo*2}px`;
boardpic[21].style.left = `${y+yTo}px`;
boardpic[21].style.top = `${(x+xTo*2)-yTo}px`;
boardpic[22].style.left = `${y+yTo}px`;
boardpic[22].style.top = `${x+yTo}px`;
boardpic[23].style.top = `${x+yTo}px`;
boardpic[23].style.left = `${(y+xTo*2)-yTo}px`;


var dotID= undefined;
var dotClick= undefined;

var findID = (id) => {
    console.log("player one",id);
    dotID = id;
    dotClick = "findID";
    firstPrayerCows[dotID].style.border = "2px solid red";
    const dragElements = (elmnt) => {
        var posi1 = 0, posi2 = 0, posi3 = 0, posi4 = 0;
        if(firstPrayerCows[dotID])
        {
            firstPrayerCows[dotID].onmousedown = dragMouseDown;
        }else{
            firstPrayerCows[dotID].onmousedown = dragMouseDown;
        }
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            posi3 = e.clientX;
            posi4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            posi1 = posi3 - e.clientX;
            posi2 = posi4 - e.clientY;
            posi3 = e.clientX;
            posi4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - posi2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - posi1) + "px";

            
            console.log(posi2+" top:",elmnt.style.top);
            console.log(posi2+" left: ",elmnt.style.left);
          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
          }
    
    }

    dragElements(firstPrayerCowsContainer[dotID]);
};
var findID2 = (id) => {
  console.log("player two",id);
    dotID = id;
    dotClick = "findID2";
    secPrayerCows[dotID].style.border = "2px solid green";
    const dragElements = (elmnt) => {
        var posi1 = 0, posi2 = 0, posi3 = 0, posi4 = 0;
        if(secPrayerCows[dotID])
        {
            secPrayerCows[dotID].onmousedown = dragMouseDown;
        }else{
            secPrayerCows[dotID].onmousedown = dragMouseDown;
        }
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            posi3 = e.clientX;
            posi4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
          }
        
          function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            posi1 = posi3 - e.clientX;
            posi2 = posi4 - e.clientY;
            posi3 = e.clientX;
            posi4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - posi2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - posi1) + "px";


            console.log("top:",elmnt.style.top);
            console.log("left: ",elmnt.style.left);

          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
          }
    
    }

    dragElements(secPrayerCowsContainer[dotID]);
};

window.addEventListener('mousedown' , function(e) {
   mousePox = e.x;
   mousePoy = e.y;
   const IDs2 = 1606;
   if(dotClick === "findID2"){
    console.log(secPrayerCowsContainer[dotID]+"player two on the move y: ",e.y + ",x: " + e.x);
    secPrayerCowsContainer[dotID].style.top = (e.y)-24+'px';
    secPrayerCowsContainer[dotID].style.left = (e.x)-1631+'px';
    console.log(secPrayerCowsContainer[dotID].style.top);
    console.log(secPrayerCowsContainer[dotID].style.left);
    let x = secPrayerCowsContainer[dotID].style.left;
    let y = secPrayerCowsContainer[dotID].style.top;
    console.log("y "+y);
    console.log("x",x);

    if(parseInt(y) > 179 && parseInt(y)< 277){
      secPrayerCowsContainer[dotID].style.top = 208+'px';
      if(parseInt(x) > 570-IDs2 && parseInt(x)< 797-IDs2){            //          0
        secPrayerCowsContainer[dotID].style.left = 627-IDs2+'px';
      }else if(parseInt(x) > 797-IDs2 && parseInt(x)< 1142-IDs2){           //    8
        secPrayerCowsContainer[dotID].style.left = 981-IDs2+'px';
      }else if(parseInt(x) > 1142-IDs2 && parseInt(x)< 1418-IDs2){            //   9
        secPrayerCowsContainer[dotID].style.left = 1336-IDs2+'px';
      }else{
        console.log("Out of range");
        
      }
    }
    if(parseInt(y) > 514 && parseInt(y)< 618){
      secPrayerCowsContainer[dotID].style.top = 563+'px';
      if(parseInt(x) > 570-IDs2 && parseInt(x)< 680-IDs2)
      {             // 1
        secPrayerCowsContainer[dotID].style.left = 627-IDs2+'px';
        
      }else if(parseInt(x) > 680-IDs2 && parseInt(x)< 797-IDs2)
      {      // 3
        secPrayerCowsContainer[dotID].style.left = 738-IDs2+'px';
        
      }else if(parseInt(x) > 797-IDs2 && parseInt(x)< 948-IDs2)
      {      // 4
        secPrayerCowsContainer[dotID].style.left = 849-IDs2+'px';
        
      }if(parseInt(x) > 948-IDs2 && parseInt(x)< 1150-IDs2)
      {           // 5
        secPrayerCowsContainer[dotID].style.left = 1116-IDs2+'px';
        
      }else if(parseInt(x) > 1150-IDs2 && parseInt(x)< 1268-IDs2)
      {       // 6 
        secPrayerCowsContainer[dotID].style.left = 1225-IDs2+'px';
      }else if(parseInt(x) > 1268-IDs2 && parseInt(x)< 1418-IDs2)
      {      // 7
        secPrayerCowsContainer[dotID].style.left = 1336-IDs2+'px';
      }else{
        console.log("Out of range");
        
      }
    }
    if(parseInt(y) > 870 && parseInt(y)< 987){
      secPrayerCowsContainer[dotID].style.top = 920+'px';
      if(parseInt(x) > 570-IDs2 && parseInt(x)< 797-IDs2){      //2
        secPrayerCowsContainer[dotID].style.left = 627-IDs2+'px';
      }else if(parseInt(x) > 797-IDs2 && parseInt(x)< 1135-IDs2){ //  12
        secPrayerCowsContainer[dotID].style.left = 981-IDs2+'px';
      }else if(parseInt(x) > 1135-IDs2 && parseInt(x)< 1418-IDs2){// 13
        secPrayerCowsContainer[dotID].style.left = 1336-IDs2+'px';
      }else{
        console.log("Out of range");
        
      }
    }
    if(parseInt(y) > 758 && parseInt(y)< 858){
      secPrayerCowsContainer[dotID].style.top = 810+'px';
      if(parseInt(x) > 685-IDs2 && parseInt(x)< 792-IDs2)
      {      //21
        secPrayerCowsContainer[dotID].style.left = 738-IDs2+'px';
      }else if(parseInt(x) > 922-IDs2 && parseInt(x)< 1036-IDs2)
      { //  14
        secPrayerCowsContainer[dotID].style.left = 981-IDs2+'px';
      }else if(parseInt(x) > 1173-IDs2 && parseInt(x)< 1275-IDs2)
      {// 19
        secPrayerCowsContainer[dotID].style.left = 1228-IDs2+'px';
      }else{
        console.log("Out of range");
        
      }
    }
    if(parseInt(y) > 268 && parseInt(y)< 369){
      secPrayerCowsContainer[dotID].style.top = 321+'px';
      if(parseInt(x) > 685-IDs2 && parseInt(x)< 792-IDs2){      //22
        secPrayerCowsContainer[dotID].style.left = 738-IDs2+'px';
      }else if(parseInt(x) > 922-IDs2 && parseInt(x)< 1036-IDs2){ //  10
        secPrayerCowsContainer[dotID].style.left = 981-IDs2+'px';
      }else if(parseInt(x) > 1173-IDs2 && parseInt(x)< 1275-IDs2){// 23
        secPrayerCowsContainer[dotID].style.left = 1228-IDs2+'px';
      }else{
        console.log("Out of range");
        
      }
      
    }
    if(parseInt(y) > 661 && parseInt(y)< 742){
      secPrayerCowsContainer[dotID].style.top = 696+'px';
      if(parseInt(x) > 797-IDs2 && parseInt(x)< 898-IDs2){      //16
        secPrayerCowsContainer[dotID].style.left = 851-IDs2+'px';
      }else if(parseInt(x) > 941-IDs2 && parseInt(x)< 1021-IDs2){ //  15
        secPrayerCowsContainer[dotID].style.left = 981-IDs2+'px';
      }else if(parseInt(x) > 1077-IDs2 && parseInt(x)< 1160-IDs2){// 18
        secPrayerCowsContainer[dotID].style.left = 1116-IDs2+'px';
      }else{
        console.log("Out of range");
        
      }
      
    }
    if(parseInt(y) > 381 && parseInt(y)< 481){
      secPrayerCowsContainer[dotID].style.top = 431+'px';
      if(parseInt(x) > 797-IDs2 && parseInt(x)< 898-IDs2){      //17
        secPrayerCowsContainer[dotID].style.left = 851-IDs2+'px';
      }else if(parseInt(x) > 941-IDs2 && parseInt(x)< 1021-IDs2){ //  11
        secPrayerCowsContainer[dotID].style.left = 981-IDs2+'px';
      }else if(parseInt(x) > 1077-IDs2 && parseInt(x)< 1160-IDs2){// 20
        secPrayerCowsContainer[dotID].style.left = 1116-IDs2+'px';
      }else{
        console.log("Out of range");
        
      }
      
    }

    console.log("y",secPrayerCowsContainer[dotID].style.top);
    console.log("x",secPrayerCowsContainer[dotID].style.left );

   }else if(dotClick === "findID"){
    console.log("player one on the move y: ",e.y + ",x: " + e.x);
    let x = e.x;
    let y = e.y;
    console.log("y",y);
    console.log("x",x);
    if(parseInt(y) > 180 && parseInt(y)< 277){
      firstPrayerCowsContainer[dotID].style.top = 208+'px';
      if(parseInt(x) > 570 && parseInt(x)< 797){            //          0
        firstPrayerCowsContainer[dotID].style.left = 627+'px';
      }else if(parseInt(x) > 797 && parseInt(x)< 1142){           //    8
        firstPrayerCowsContainer[dotID].style.left = 981+'px';
      }else if(parseInt(x) > 1142 && parseInt(x)< 1418){            //   9
        firstPrayerCowsContainer[dotID].style.left = 1336+'px';
      }else{
        console.log("Out of range 0 8 9");


      }
    }
    if(parseInt(y) > 514 && parseInt(y)< 618){
      firstPrayerCowsContainer[dotID].style.top = 563+'px';

      if(parseInt(x) > 570 && parseInt(x) < 680)
      {  
          firstPrayerCowsContainer[dotID].style.left = 627+'px';

       
      }else if(parseInt(x) > 680 && parseInt(x)< 797)
      {      // 3
        firstPrayerCowsContainer[dotID].style.left = 738+'px';
   
      }else if(parseInt(x) > 797 && parseInt(x)< 948)
      {      // 4
        firstPrayerCowsContainer[dotID].style.left = 849+'px';
    
      }if(parseInt(x) > 948 && parseInt(x)< 1150)
      {           // 5
        firstPrayerCowsContainer[dotID].style.left = 1116+'px';
   
      }else if(parseInt(x) > 1150 && parseInt(x)< 1268)
      {       // 6 
        firstPrayerCowsContainer[dotID].style.left = 1225+'px';
    
      }else if(parseInt(x) > 1268 && parseInt(x)< 1418)
      {      // 7
        firstPrayerCowsContainer[dotID].style.left = 1336+'px';
    
      }else{
        console.log("Out of range 1 3 4 5 6 7 ");

      }
    }
    if(parseInt(y) > 870 && parseInt(y)< 987){
      firstPrayerCowsContainer[dotID].style.top = 920+'px';
      if(parseInt(x) > 570 && parseInt(x)< 797){      //2
        firstPrayerCowsContainer[dotID].style.left = 627+'px';
      }else if(parseInt(x) > 797 && parseInt(x)< 1135){ //  12
        firstPrayerCowsContainer[dotID].style.left = 981+'px';
      }else if(parseInt(x) > 1135 && parseInt(x)< 1418){// 13
        firstPrayerCowsContainer[dotID].style.left = 1336+'px';
      }else{
        console.log("Out of range 2 12 13");

      }
    }
    if(parseInt(y) > 758 && parseInt(y)< 858){
      firstPrayerCowsContainer[dotID].style.top = 810+'px';
      if(parseInt(x) > 685 && parseInt(x)< 792){      //21
        firstPrayerCowsContainer[dotID].style.left = 738+'px';
      }else if(parseInt(x) > 922 && parseInt(x)< 1036){ //  14
        firstPrayerCowsContainer[dotID].style.left = 981+'px';
      }else if(parseInt(x) > 1173 && parseInt(x)< 1275){// 19
        firstPrayerCowsContainer[dotID].style.left = 1228+'px';
      }else{
        console.log("Out of range 21 14 19");

      }
    }
    if(parseInt(y) > 268 && parseInt(y)< 369){
      firstPrayerCowsContainer[dotID].style.top = 321+'px';
      if(parseInt(x) > 685 && parseInt(x)< 792){      //22
        firstPrayerCowsContainer[dotID].style.left = 738+'px';
      }else if(parseInt(x) > 922 && parseInt(x)< 1036){ //  10
        firstPrayerCowsContainer[dotID].style.left = 981+'px';
      }else if(parseInt(x) > 1173 && parseInt(x)< 1275){// 23
        firstPrayerCowsContainer[dotID].style.left = 1228+'px';
      }else{
        console.log("Out of range 22 10 23 ");

      }
      
    }
    if(parseInt(y) > 661 && parseInt(y)< 742){
      firstPrayerCowsContainer[dotID].style.top = 696+'px';
      if(parseInt(x) > 797 && parseInt(x)< 898){      //16
        firstPrayerCowsContainer[dotID].style.left = 851+'px';
      }else if(parseInt(x) > 941 && parseInt(x)< 1021){ //  15
        firstPrayerCowsContainer[dotID].style.left = 981+'px';
      }else if(parseInt(x) > 1077 && parseInt(x)< 1160){// 18
        firstPrayerCowsContainer[dotID].style.left = 1116+'px';
      }else{
        console.log("Out of range 16 15 18 ");

      }
      
    }
    if(parseInt(y) > 381 && parseInt(y)< 481){
      firstPrayerCowsContainer[dotID].style.top = 431+'px';
      if(parseInt(x) > 797 && parseInt(x)< 898){      //17
        firstPrayerCowsContainer[dotID].style.left = 851+'px';
      }else if(parseInt(x) > 941 && parseInt(x)< 1021){ //  11
        firstPrayerCowsContainer[dotID].style.left = 981+'px';
      }else if(parseInt(x) > 1077 && parseInt(x)< 1160){// 20
        firstPrayerCowsContainer[dotID].style.left = 1116+'px';
      }else{
        console.log("Out of range 17 11 20");

      }
      
    }

    console.log("y",firstPrayerCowsContainer[dotID].style.top);
    console.log("x",firstPrayerCowsContainer[dotID].style.left );

    

   }else{
    console.log("select the cow");
   }

   console.log("id-selected "+ dotID);

  this.document.querySelector('.y-values').textContent = e.y;
  this.document.querySelector('.x-values').textContent = e.x;
  dotID= undefined;
  dotClick= undefined;
});
