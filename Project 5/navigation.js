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
            case "n": goNorth();
            break;
            case "s": goSouth();
            break;
            case "e": goEast();
            break;
            case "w": goWest();
            break;
            case "score": displayScore();
            break;
            case "i": displayInventory();
            break;
            case "help": displayHelp();
            break;
            case "take": takeItem();
            break;
            default: displayError();
         }
}
   
   
   // Global variables
   var msg    = "";
   var score  = 0;
   
function goNorth () {
   switch (currentLocation) {
      case start:             currentLocation = lake;
                              document.getElementById("Westbtn").disabled=false;
                              document.getElementById("Eastbtn").disabled=true;
                              if (!hasVisitedLake) {
                                 score = score + 5;
                                 hasVisitedLake = true;
                              }
                              if (locations[7].item.taken === false) {
                                 updateDisplay ("You are bypassing the lake because you do not have the equipment to unlock the mystery item.");
                              } else {
                                 updateDisplay (locations[1].description);
                              }
      break;
      case lake:              currentLocation = cave;
                              document.getElementById("Northbtn").disabled=true;                   
                              if (!hasVisitedCave) {
                                 score = score + 5;
                                 hasVisitedCave = true;
                              }
                              if (locations[2].item.taken) {
                                 updateDisplay ("There is nothing in the crevice.");
                              } else {
                                 updateDisplay (locations[2].description);
                              }
      break;
      case beach:             currentLocation = start;
                              document.getElementById("Eastbtn").disabled=false;
                              document.getElementById("Westbtn").disabled=false;
                              msg = "You are back at the starting point.";
                              updateDisplay (msg);
      break;
      case forest:            currentLocation = creek;
                              updateDisplay (locations[10].description);
                              document.getElementById("Northbtn").disabled=true;    
                              if (!hasVisitedCreek) {
                                 score = score + 5;
                                 hasVisitedCave = true;
                              } 
      break;
      case boardwalk:         currentLocation = inn;
                              updateDisplay (locations[3].description);
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Westbtn").disabled=false;
      break;
      case underWaterhotel:   currentLocation = underWater;
                              updateDisplay (locations[6].description);
                              document.getElementById("Southbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=true;
                              document.getElementById("Eastbtn").disabled=true;
       break;
       case underWater:       currentLocation = beach;       
                              updateDisplay ("There is nothing on shore.");                      
                              document.getElementById("Southbtn").disabled=false;
       break;
       case mailbox:          currentLocation = boardwalk;
                              updateDisplay (locations[8].description);
                              document.getElementById("Southbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=true;
                              document.getElementById("Eastbtn").disabled=true;
                              if (locations[8].item.taken === true) {
                              updateDisplay ("There is nothing on the boardwalk.");
                              } else {
                                 updateDisplay (locations[8].description2);
                              }
       break;
       default:               msg = "The path is blocked.";
                              updateDisplay (msg); 
   }
}
       
function goSouth () {   
   switch (currentLocation) {
      case cave:              currentLocation = lake; 
                              document.getElementById("Northbtn").disabled=false;
                              if (locations[7].item.taken === false) {
                                 updateDisplay ("You are bypassing the lake because you do not have the equipment to unlock the mystery item.");
                              } else {
                                 updateDisplay ("There is nothing at the bottom of the lake.");
                              }
      break; 
      case lake:              currentLocation = start;
                              document.getElementById("Eastbtn").disabled=false;
                              document.getElementById("Westbtn").disabled=false;
                              msg = "You are back at the starting point";
                              updateDisplay (msg);
      break;
      case start:             currentLocation = beach;
                              updateDisplay (locations[5].description + " " + locations[5].description2);
                              document.getElementById("Westbtn").disabled=true;
                              if (!hasVisitedBeach) {
                                 score = score + 5;
                                 hasVisitedBeach = true;
                              }
      break;
      case inn:               currentLocation = boardwalk;
                              updateDisplay (locations[8].description + " " + locations[8].description2);
                              document.getElementById("Eastbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=false;
                              document.getElementById("Northbtn").disabled=false;
      break;
      case boardwalk:         currentLocation = mailbox;
                              updateDisplay (locations[9].description);
                              if (!hasVisitedMailbox) {
                                  score = score + 5;
                                  hasVisitedMailbox = true;
                              }
                              document.getElementById("Eastbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=true;
                              document.getElementById("Southbtn").disabled=true;
                              document.getElementById("Northbtn").disabled=false;
                              
      break;
      case beach:             currentLocation = underWater;
                              document.getElementById("Southbtn").disabled=false;
                              if (!hasVisitedUnderWater) {
                                 score = score + 5;
                                 hasVisitedUnderWater = true;
                              }
                              if (locations[5].item.taken === false) {
                                 updateDisplay ("You do not have the equipment to enter location.");
                              } else { 
                                 updateDisplay (locations[6].description);
                              }
      break;
      case underWater:        currentLocation = underWaterhotel;
                              document.getElementById("Southbtn").disabled=true;
                              document.getElementById("Eastbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=true;
                              if (!hasVisitedUnderWaterHotel) {
                                 score = score + 5;
                                 hasVisitedUnderWaterHotel = true;
                              }
                                 updateDisplay (msg);
                              if (locations[5].item.taken === false) {
                                 updateDisplay ("You do not have the equipment to enter location.");
                              } else { 
                                 updateDisplay (locations[7].description);
                              }           
      break;
      case creek:             currentLocation = forest;
                               document.getElementById("Northbtn").disabled = true;
                               document.getElementById("Westbtn").disabled = true;
                               document.getElementById("Eastbtn").disabled = false;
                              if (locations[9].item.taken === false && locations[1].item.taken === false) {
                                 updateDisplay ("You do not have the proper equipment to enter.");
                              } else 
                                 updateDisplay (locations[4].description);
      break;
      default:                msg = "You can go no further."
                                 updateDisplay (msg);
   }
}         
          
function goEast () {    
   switch (currentLocation) {       
      case start:             currentLocation = inn;
                              document.getElementById("Eastbtn").disabled=true;
                              document.getElementById("Northbtn").disabled=true;
                              document.getElementById("Southbtn").disabled=false;
                              msg = "Starting point to inn.";
                              if (!hasVisitedInn) {
                                 score = score + 5;
                                 hasVisitedInn = true;    
                              }    
                                 updateDisplay (msg);          
      break;
      case beach:             currentLocation = boardwalk;
                              location_boardwalk();
                              document.getElementById("Eastbtn").disabled=true;
                              document.getElementById("Northbtn").disabled=false;
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Westbtn").disabled=false;
                              if (!hasVisitedBoardwalk) {
                                 score = score + 5;
                                 hasVisitedBoardwalk = true;    
                              }    
      break;        
      case forest:            currentLocation = start;
                              document.getElementById("Northbtn").disabled=false;
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Westbtn").disabled=false;
                              msg = "You are back at the starting point.";
                                 updateDisplay (msg);
      break;
      case creek:             currentLocation = lake;
                              document.getElementById("Northbtn").disabled=false;
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Westbtn").disabled=false;
                              document.getElementById("Eastbtn").disabled=true;
                              if (locations[7].item.taken === false) {
                                 updateDisplay ("You are bypassing the lake because you do not have the equipment to unlock the mystery item.");
                              } else {
                                 updateDisplay (locations[1].description);
                              }
      break;
      default:                msg = "You cannot go anywhere else."
                                 updateDisplay (msg);
   }
}
              
function goWest () {   
   switch (currentLocation) {          
      case inn:               currentLocation = start;
                              document.getElementById("Northbtn").disabled=false;
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Eastbtn").disabled=false;
                              msg = "You are back at the starting point.";
                                 updateDisplay (msg);
      break;
      case start:             currentLocation = forest;
                              document.getElementById("Northbtn").disabled=false;
                              document.getElementById("Southbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=true;
                              if (!hasVisitedForest) {
                                 score = score + 5;
                                 hasVisitedForest = true;
                              }
                              if (locations[9].item.taken === false && locations[1].item.taken === false) {
                                 updateDisplay ("You do not have the proper equipment to enter.");
                              } else 
                                 updateDisplay (locations[4].description);
      break;
      case lake:              currentLocation = creek;
                              document.getElementById("Northbtn").disabled=true;
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Eastbtn").disabled=false;
                              updateDisplay (locations[10].description);
      break;
      case boardwalk:         currentLocation = beach;
                              document.getElementById("Westbtn").disabled=true;
                              document.getElementById("Northbtn").disabled=false;
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Eastbtn").disabled=false;
                              updateDisplay (locations[5].description);
      break;
      default:                msg = "You can't go that way.";
                                 updateDisplay (msg);
   }
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
   
function updateDisplay(message) {
   var ta = document.getElementById("taGame");
   ta.value = ta.value + "\n" + "\n" + message;
   ta.scrollTop = ta.scrollHeight; 
}

function displayScore() {
   var ta = document.getElementById("taGame");
   updateDisplay (score);
}

function displayHelp () {
   var msg = "Valid commands are:" + "\n" + "'n' to go north" + "\n" + "'s' to go south" + "\n" + "'e' to go east" + "\n" + "'w' to go west" + "\n" + "'i' to list inventory" + "\n" + "'score' to see score";
   updateDisplay (msg);
}

function displayError () {
   var msg = "Error. I don't understand your command.";
   updateDisplay (msg);
}

