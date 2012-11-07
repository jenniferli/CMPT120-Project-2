// Jennifer Li
// navigation.js
           
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
                              if (!playerGotKey) {
                                 updateDisplay ("You are bypassing the lake because you do not have the equipment to unlock the mystery item.");
                              } else {
                                 location_lake();
                              }
      break;
      case lake:              currentLocation = cave;
                              location_cave();
                              document.getElementById("Northbtn").disabled=true;                   
                              if (!hasVisitedCave) {
                                 score = score + 5;
                                 hasVisitedCave = true;
                              }
      break;
      case beach:             currentLocation = start;
                              document.getElementById("Eastbtn").disabled=false;
                              document.getElementById("Westbtn").disabled=false;
                              msg = "You are back at the starting point.";
                              updateDisplay (msg);
      break;
      case forest:            currentLocation = creek;
                              location_creek();
                              document.getElementById("Northbtn").disabled=true;    
                              if (!hasVisitedCreek) {
                                 score = score + 5;
                                 hasVisitedCave = true;
                              } 
      break;
      case boardwalk:         currentLocation = inn;
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Westbtn").disabled=false;
                              msg = "Boardwalk to inn.";
                              updateDisplay (msg);
      break;
      case underWaterhotel:   currentLocation = underWater;
                              document.getElementById("Southbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=true;
                              document.getElementById("Eastbtn").disabled=true;
                              msg = "Underwater hotel to water.";
                              updateDisplay (msg);
       break;
       case underWater:       currentLocation = beach;
                              document.getElementById("Southbtn").disabled=false;
                              msg = "Underwater to beach.";
                              updateDisplay (msg);
       break;
       case mailbox:          currentLocation = boardwalk;
                              document.getElementById("Southbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=true;
                              document.getElementById("Eastbtn").disabled=true;
                              msg = "Mailbox to boardwalk.";
                              updateDisplay (msg);
       
       default:               msg = "The path is blocked.";
                              updateDisplay (msg); 
   }
}
       
function goSouth () {   
   switch (currentLocation) {
      case cave:              currentLocation = lake; 
                              document.getElementById("Northbtn").disabled=false;
                              if (!playerGotKey) {
                                 updateDisplay ("You are bypassing the lake because you do not have the equipment to unlock the mystery item.");
                              } else {
                                 location_lake();
                              }
      break; 
      case lake:              currentLocation = start;
                              document.getElementById("Eastbtn").disabled=false;
                              document.getElementById("Westbtn").disabled=false;
                              msg = "Back at starting point";
                              updateDisplay (msg);
      break;
      case start:             currentLocation = beach;
                              location_beach();
                              document.getElementById("Westbtn").disabled=true;
                              if (!hasVisitedBeach) {
                                 score = score + 5;
                                 hasVisitedBeach = true;
                              }
      break;
      case inn:               currentLocation = boardwalk;
                              location_boardwalk();
                              document.getElementById("Eastbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=false;
                              document.getElementById("Northbtn").disabled=false;
      break;
      case boardwalk:         currentLocation = mailbox;
                              location_mailbox();
                              document.getElementById("Eastbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=true;
                              document.getElementById("Southbtn").disabled=true;
                              document.getElementById("Northbtn").disabled=false;
                              if (!hasVisitedMailbox) {
                                  score = score + 5;
                                  hasVisitedMailbox = true;
                              }
      break;
      case beach:             currentLocation = underWater;
                              document.getElementById("Southbtn").disabled=false;
                              msg = "Under water.";
                              if (!hasVisitedUnderWater) {
                                 score = score + 5;
                                 hasVisitedUnderWater = true;
                              }
                                 updateDisplay (msg);
                              if (!playerGotSnorkelingGear) {
                                 updateDisplay ("You do not have the equipment to enter location.");
                              } else { 
                                 location_underWater();
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
                              if (!playerGotSnorkelingGear) {
                                 updateDisplay ("You do not have the equipment to enter location.");
                              } else { 
                                 location_underWaterhotel();
                              }           
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
                              if (!playerGotKey) {
                                 updateDisplay ("You are bypassing the lake because you do not have the equipment to unlock the mystery item.");
                              } else {
                                 location_lake();
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
                              msg = "Inn to starting point.";
                                 updateDisplay (msg);
      break;
      case start:             currentLocation = forest;
                              document.getElementById("Northbtn").disabled=false;
                              document.getElementById("Southbtn").disabled=true;
                              document.getElementById("Westbtn").disabled=true;
                              msg = "Starting point to forest.";
                              if (!hasVisitedForest) {
                                 score = score + 5;
                                 hasVisitedForest = true;
                              }
                                 updateDisplay (msg);
      break;
      case lake:              currentLocation = creek;
                              document.getElementById("Northbtn").disabled=true;
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Eastbtn").disabled=false;
                              msg = "Lake to creek.";
                                  updateDisplay (msg);
      break;
      case boardwalk:         currentLocation = beach;
                              document.getElementById("Westbtn").disabled=true;
                              document.getElementById("Northbtn").disabled=false;
                              document.getElementById("Southbtn").disabled=false;
                              document.getElementById("Eastbtn").disabled=false;
                              msg = "Boardwalk to beach.";
                                 updateDisplay (msg);
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
   ta.value = message + "\n" + "\n" + ta.value;
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