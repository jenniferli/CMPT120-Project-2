// Jennifer Li
// locations.js

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
   
// Write a function for each location to keep track of the player's location.

function location_start () {
   updateDisplay("The pilot lost control of the plane that you were on. Everyone died in the crash, except for you. You are currently stranded on an unknown island. There are different items hidden throughout the island that are essential for your survival. As you embark on your journey through the island to search for these items, please be aware that there are mysterious creatures lurking around. Good luck!");
}

function location_lake () {
   updateDisplay ("You have reached the lake. At the bottom of the lake, you will find a sword chained to a rock. In order to obtain the sword, you will need a key to unlock the chain.");
   if (playerGotKey && !playerGotSword) {
      updateDisplay ("You take the sword.");
      playerGotSword = true;
   } else {
      updateDisplay ("There is a chain floating at the bottom of the lake.");
   }
}

function location_cave () {
   updateDisplay ("You are currently in a cave that is on the other side of the lake. You are engulfed in darkness. To your right is a crevice, where you will find a flashlight. Use it wisely because only two hours of the battery life are left. Also, be very careful as you make your way through the cave. Creatures and traps lie in wait.");     
   if (!playerGotFlashlight) {
      updateDisplay ("You take the flashlight.");
      playerGotFlashlight = true;
   } else {
      updateDisplay ("There is nothing in the crevice.");
   }  
}

function location_inn () {
   updateDisplay ("Welcome to the inn.");
}

function location_forest () {
   updateDisplay ("You are currently in the forest.");     
}

function location_beach () {
   updateDisplay ("You have arrived at the deserted beach. As you scan your new surrounding, you spot a set of snorkeling gear washed up on shore.");     
   if (!playerGotSnorkelingGear) {
      updateDisplay ("You take the snorkeling gear.");
      playerGotSnorkelingGear = true;
   } else {
     updateDisplay ("There is nothing on the shore.");
   }
}

function location_underWater () {
   updateDisplay ("You are currently under water.");
}

function location_underWaterhotel () {
   updateDisplay ("You just entered the underwater hotel. There is a shiny silver key lying at the front desk.");     
   if (!playerGotKey) {
     updateDisplay ("You take the key.");
     playerGotKey = true;
   } else {
     updateDisplay ("The hotel has nothing that may be essential to your survival.");
   }
}

function location_boardwalk () {
   updateDisplay ("You are currently on the boardwalk. There is a bike leaning on the rail.");
   if (!playerGotBike) {
      updateDisplay ("You take the bike.");
      playerGotBike = true;
   } else {
     updateDisplay ("There is nothing on the boardwalk.");
   }
}

function location_mailbox () {
   updateDisplay ("You are standing in front of a mailbox.");     
   if (!playerGotMap) {
      updateDisplay ("There is a map lying inside the mailbox.");
      updateDisplay ("You take the map.");
      playerGotMap = true;
   } else {
     updateDisplay ("The mailbox is empty.");
}
}

function location_creek () {
   msg = "Welcome to the creek.";     
   updateDisplay (msg);
}
