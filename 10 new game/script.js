
const firstPrayerCows = document.querySelectorAll(".dot");
const firstPrayerCowsContainer = document.querySelectorAll(".dot-container");
const secPrayerCows = document.querySelectorAll(".dot-player-two");
const secPrayerCowsContainer = document.querySelectorAll(".dot-container-player-two");
const boardpic = document.querySelectorAll(".board-pic");
const x = 214;
const y = 624;
const xTo = 355;
const yTo = 111;

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


var dotID= 0;

var findID = (id) => {
    console.log(id);
    dotID = id;
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
            
            console.log("top:",elmnt.style.top);
            console.log("left: ",elmnt.style.left);
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
    console.log(id);
    dotID = id;
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


