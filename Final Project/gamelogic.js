// Jennifer Li
// gamelogic.js

    
function init () {
   updateDisplay(locations[0].description);
}  

function displayInventory () {
   var div = ", "
   var msg = "Inventory: "; 
   var index = "";
   for(index in playerInventory)
   {
      msg = msg + playerInventory[index].name + div;
   }
   updateDisplay(msg);
}  

// Player gets 5 points for every item that he/she picks up.
function takeItem () {
   if (currentLocation === cave) {
      if (locations[2].item.taken === false) {
         locations[2].item.taken = true;
         updateDisplay ("You take the " + locations[2].item.name + ". " + locations [2].item.description);
         playerInventory[itemCount] = locations[2].item;
         itemCount++;
         score += 5;
      }
   } else if (currentLocation === beach) {
      if (locations[5].item.taken === false) {
         locations[5].item.taken = true;
         updateDisplay ("You take the " + locations[5].item.name + ". " + locations[5].item.description);
         playerInventory[itemCount] = locations[5].item;
         itemCount++;
         score += 5;
         nav[5][1] = 6;
         nav[7][0] = 6;
      }
   } else if (currentLocation === lake && locations[7].item.taken === true && locations[1].item.taken === false) {
      if (locations[1].item.taken === false) {
         locations[1].item.taken = true;
         updateDisplay ("You take the " + locations[1].item.name + ". " + locations[1].item.description);
         playerInventory[itemCount] = locations[1].item;
         itemCount++;
         score += 5;
         if (locations[9].item.taken === true) {
            nav[0][3]  = 4;
            nav[10][1] = 4;
         } 
      }
   } else if (currentLocation === underWaterhotel) {
      if (locations[7].item.taken === false) {
         locations[7].item.taken = true;
         playerInventory[itemCount] = locations[7].item;
         itemCount++;
         score += 5;
         nav[0][0]  = 1;
         nav[2][1]  = 1;
         nav[10][2] = 1;
         updateDisplay ("You take the " + locations[7].item.name + ". " + locations[7].item.description);
     }
   } else if (currentLocation === mailbox) {
      if (locations[9].item.taken === false) {
         locations[9].item.taken = true; 
         updateDisplay ("You take the " + locations[9].item.name + ". " + locations[9].item.description);
         playerInventory[itemCount] = locations[9].item;
         itemCount++;
         score = score + 5;
         if (locations[1].item.taken === true) {
            nav[0][3]  = 4;
            nav[10][1] = 4;
         }
      } 
   } else if (currentLocation === boardwalk) {
      if (locations[8].item.taken === false) {
         locations[8].item.taken = true;
         updateDisplay ("You take the " + locations[8].item.name + ". " + locations[8].item.description);
         playerInventory[itemCount] = locations[8].item;
         itemCount++;
         score += 5;
      }
   }
}