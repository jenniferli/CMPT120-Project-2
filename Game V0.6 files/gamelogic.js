// Jennifer Li
// gamelogic.js

   var playerGotSword           = false;
   var playerGotKey             = false;
   var playerGotFlashlight      = false;
   var playerGotSnorkelingGear  = false;
   var playerGotBike            = false;
   var playerGotMap             = false;
  
    
function init () {
   location_start ();
}  

function displayInventory () {
   var div = ", "
   var msg = "Inventory: "; 
   if (playerGotSword) {
      msg = msg + "sword" + div;
   }
   if (playerGotKey) {
      msg = msg + "key" + div;
   }
   if (playerGotFlashlight) {
      msg = msg + "flashlight" + div;
   }
   if (playerGotSnorkelingGear) {
      msg = msg + "snorkeling gear" + div;
   }
   if (playerGotBike) {
      msg = msg + "bike" + div;
   }
   if (playerGotMap) {
      msg = msg + "map" + div;
   }
   updateDisplay(msg);
}  