// Jennifer Li
// navigation.js

var currentLocation = 00;
var start           = 00;   
var lake            = 1;   
var cave            = 2;   
var inn             = 3;
var forest          = 4;
var beach           = 5;
var underWater      = 6;
var underWaterhotel = 7;
var boardwalk       = 8;
var mailbox         = 9;
var creek           = 10;
   
var hasVisitedLake            = false;
var hasVisitedCave            = false;
var hasVisitedInn             = false;
var hasVisitedForest          = false;
var hasVisitedBeach           = false;
var hasVisitedUnderWater      = false;
var hasVisitedUnderWaterHotel = false;
var hasVisitedBoardwalk       = false;
var hasVisitedMailbox         = false;
var hasVisitedCreek           = false; 

function processCommand () {
   var command = document.getElementById("txtInput").value;
      document.getElementById("txtInput").value = "";
      
         switch (command) {
            case "n": move(north);
            break;
            case "s": move(south);
            break;
            case "e": move(east);
            break;
            case "w": move(west);
            break;
            case "score": displayScore();
            break;
            case "i": displayInventory();
            break;
            case "help": displayHelp();
            break;
            case "take": takeItem();
            break;
            case "kill": playerUseSword();
            break;
            default: displayError();
         }
}
   
   
   // Global variables
   var msg       = "";
   var score     = 0;
   
   var north     = 0;
   var south     = 1;
   var east      = 2;
   var west      = 3;
   
var nav = new Array ();
                  nav = [         //n,   s,   e,   w
                 /*start 0*/     [ -1,   5,   3,  -4 ],
                 /*lake 1*/      [  2,   0, -17,  10 ],
                 /*cave 2*/      [-17,  -1, -17, -17 ], 
                 /*inn  3*/      [-17,   8, -17,   0 ], 
                 /*forest 4*/    [ 10, -17,   0, -17 ], 
                 /*beach 5*/     [  0,  -6,   8, -17 ], 
                 /*water 6*/     [  5,   7, -17, -17 ], 
                 /*hotel 7*/     [ -6, -17, -17, -17 ], 
                 /*boardwalk 8*/ [  3,   9, -17,   5 ], 
                 /*mailbox 9*/   [  8, -17, -17, -17 ], 
                 /*creek 10*/    [-17,  -4,  -1, -17 ], 
                 ];               
                 
function move(direction) {
var newLocale = nav[currentLocation][direction];
   if (newLocale >= 0) {
     currentLocation = newLocale;
     displayLocation(currentLocation);
   } else if (newLocale === -1) {
      updateDisplay ("You need a shiny silver key in order to enter the lake.");
   } else if (newLocale === -4) {
      updateDisplay ("You need the sword and the map before continuing onto the forest.");
   } else if (newLocale === -6) {
      updateDisplay ("You need the snorkeling gear before proceeding under water or else you will drown.");
   } else {
      updateDisplay ("You cannot go that way.");
   } 
   buttonVisibility ();
}
   
function displayLocation (location) {
   switch (location) {
      case 0: updateDisplay("You are back by the plane.");
      break;
      case 1: if (locations[1].item.taken === true) {
                  updateDisplay ("You are back by the lake. There is nothing at the bottom of the lake.");
               } else {
                  updateDisplay (locations[1].description);
               }
      break;
      case 2: if (locations[2].item.taken) {
                  updateDisplay ("There is nothing in the crevice.");
               } else {
                  updateDisplay (locations[2].description);
               }
      break;
      case 3: updateDisplay (locations[3].description);
      break;
      case 4: updateDisplay (locations[4].description);
      break;
      case 5: if (locations[5].item.taken === true) {
                 updateDisplay(locations[5].description + " " + "There is nothing on shore.");
              } else {
                 updateDisplay (locations[5].description + " " + locations[5].description2);   
              }
      break;
      case 6: updateDisplay (locations[6].description);
      break;
      case 7: if (locations[7].item.taken === false) {
                 updateDisplay (locations[7].description);
              } else {
                 updateDisplay ("There is nothing on the desk.");
              }
      break;
      case 8: if (locations[8].item.taken === true) {
                 updateDisplay ("There is nothing on the boardwalk.");
              } else {
                 updateDisplay (locations[8].description + " " + locations[8].description2);
              }
      break;
      case 9:  if (locations[9].item.taken === true) {
                  updateDisplay ("There is nothing in the mailbox.");
               } else {
                  updateDisplay (locations[9].description);
               }
      break;
      case 10: updateDisplay (locations[10].description);
      break;
      default: updateDisplay ("You cannot go that way.");
      }
}   
   
function buttonVisibility () {
   if (nav[currentLocation][0] === -17) {
      document.getElementById("Northbtn").disabled=true;      
   } else {
      document.getElementById("Northbtn").disabled=false; 
   }
   if (nav[currentLocation][1] === -17) {
      document.getElementById("Southbtn").disabled=true;  
   } else {
      document.getElementById("Southbtn").disabled=false;        
   } 
   if (nav[currentLocation][2] === -17) {
      document.getElementById("Eastbtn").disabled=true;
   } else {  
      document.getElementById("Eastbtn").disabled=false;
   } 
   if (nav[currentLocation][3] === -17) {
      document.getElementById("Westbtn").disabled=true;
   } else {
     document.getElementById("Westbtn").disabled=false;
   }  
}        

function playerUseSword () {
   updateDisplay("You've successfully eliminated the big boss! You take over all of his possessions and find yourself living happily on the deserted island.");
}

// Enter button only works on Google Chrome. e is undefined on Firefox.

function btn_entered (e) {
   var enter = 13; 
   var e = window.event; 
   var code = e.keyCode || e.which; 
   if ( e && code === enter) {
      processCommand ();
   }
}
   
function updateDisplay(msg) {
   var ta = document.getElementById("taGame");
   ta.value = ta.value + "\n" + "\n" + msg;
   ta.scrollTop = ta.scrollHeight; 
}

function displayScore() {
   var ta = document.getElementById("taGame");
   updateDisplay (score);
}

function displayHelp () {
   updateDisplay ("Valid commands are:" + "\n" + "'n' to go north" + "\n" + "'s' to go south" + "\n" + "'e' to go east" + "\n" + "'w' to go west" + "\n" + "'i' to list inventory" + "\n" + "'score' to see score");
}

function displayError () {
   updateDisplay("Error. I don't understand your command.");
}