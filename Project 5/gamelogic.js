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

function takeItem () {
   if (currentLocation === cave) {
      locations[2].item.taken = true;
      updateDisplay ("You take the " + locations[2].item.name + ". " + locations [2].item.description);
      playerInventory[itemCount] = locations[2].item;
      itemCount++;
   } else if (currentLocation === beach) {
      locations[5].item.taken = true;
      updateDisplay ("You take the " + locations[5].item.name + ". " + locations[5].item.description);
      playerInventory[itemCount] = locations[5].item;
      itemCount++;
   } else if (currentLocation === lake && locations[7].item.taken === true && locations[1].item.taken === false) {
      locations[1].item.taken = true;
      updateDisplay ("You take the " + locations[1].item.name + ". " + locations[1].item.description);
      playerInventory[itemCount] = locations[1].item;
      itemCount++;
   } else if (currentLocation === underWaterhotel) {
      locations[7].item.taken = true;
      playerInventory[itemCount] = locations[7].item;
      itemCount++;
      updateDisplay ("You take the " + locations[7].item.name + ". " + locations[7].item.description);
   } else if (currentLocation === mailbox) {
      locations[9].item.taken = true; 
      updateDisplay ("You take the " + locations[9].item.name + ". " + locations[9].item.description);
      playerInventory[itemCount] = locations[9].item;
      itemCount++;
   } else if (currentLocation === boardwalk) {
      locations[8].item.taken = true;
      updateDisplay ("You take the " + locations[8].item.name + ". " + locations[8].item.description);
      playerInventory[itemCount] = locations[8].item;
      itemCount++;
   }
}