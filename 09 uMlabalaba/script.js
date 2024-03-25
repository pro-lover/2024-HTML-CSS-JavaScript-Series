
const firstPrayerCows = document.querySelectorAll(".dot");
const firstPrayerCowsContainer = document.querySelectorAll(".dot-container");
const secPrayerCows = document.querySelectorAll(".dot-player-two");
const secPrayerCowsContainer = document.querySelectorAll(".dot-container-player-two");

firstPrayerCowsContainer[1].style.border = "1px solid red";
firstPrayerCowsContainer[1].style.margen = "10px";
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
          }
        
          function closeDragElement() {
            /* stop moving when mouse button is released:*/
            document.onmouseup = null;
            document.onmousemove = null;
          }
    
    }

    dragElements(secPrayerCowsContainer[dotID]);
};


