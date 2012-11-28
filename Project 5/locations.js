// Jennifer Li
// locations.js


var locations = new Array();

locations[0] = new Locale();
locations[0].id = 0;
locations[0].name = "Starting Point";
locations[0].description = "The pilot lost control of the plane that you were on. Everyone died in the crash, except for you. You are currently stranded on an unknown island. There are different items hidden throughout the island that are essential for your survival. As you embark on your journey through the island to search for these items, please be aware that there are mysterious creatures lurking around. Good luck!";

locations[1] = new Locale();
locations[1].id = 1;
locations[1].name = "Lake";
locations[1].description = "You have reached the lake. At the bottom of the lake, you will find a sword chained to a rock. In order to obtain the sword, you will need a key to unlock the chain.";
locations[1].item = new Item();
locations[1].item.id = 0;
locations[1].item.name = "sword";
locations[1].item.description = "Use the sword to kill the monsters that you encounter along your journey. Make sure you do not lose the sword because you will need it later on to fight the big boss.";

locations[2] = new Locale();
locations[2].id = 2;
locations[2].name = "Cave";
locations[2].description = "You are currently in a cave that is on the other side of the lake. You are engulfed in darkness. To your right is a crevice, where you will find a flashlight.";
locations[2].item = new Item();
locations[2].item.id = 1;
locations[2].item.name = "flashlight";
locations[2].item.description = " Use the flashlight wisely because only two hours of the battery life are left. Also, be very careful as you make your way through the cave. Creatures and traps lie in wait.";

locations[3] = new Locale();
locations[3].id = 3;
locations[3].name = "Inn";
locations[3].description = "You are now at the inn.";

locations[4] = new Locale();
locations[4].id = 4;
locations[4].name = "Forest";
locations[4].description = "You are in a forest surrounded by trees and shrubs. Use the map that you found to guide you to the big boss.";

locations[5] = new Locale();
locations[5].id = 5;
locations[5].name = "Beach";
locations[5].description = "You have arrived at the deserted beach.";
locations[5].description2 = "As you scan your new surrounding, you spot a set of snorkeling gear washed up on shore.";
locations[5].item = new Item();
locations[5].item.id = 2;
locations[5].item.name = "snorkeling gear";
locations[5].item.description = "The snorkeling gear will allow you to explore under water";

locations[6] = new Locale();
locations[6].id = 6;
locations[6].name = "Underwater";
locations[6].description = "You are currently under water.";

locations[7] = new Locale();
locations[7].id = 7;
locations[7].name = "Underwater Hotel";
locations[7].description = "You have just entered the underwater hotel. There is a shiny silver key lying at the front desk.";
locations[7].item = new Item;
locations[7].item.id = 3;
locations[7].item.name = "key";
locations[7].item.description = "The key will come in handy as you go back north.";

locations[8] = new Locale();
locations[8].id = 8;
locations[8].name = "Boardwalk";
locations[8].description = "You are on the boardwalk.";
locations[8].description2 = "There is a loaf of stale bread tossed to the side.";
locations[8].item = new Item;
locations[8].item.id = 4;
locations[8].item.name = "bread";
locations[8].item.description = "The bread replinshes your hunger and gives you the energy to move on.";

locations[9] = new Locale();
locations[9].id = 9;
locations[9].name = "Mailbox";
locations[9].description = "You are standing in front of a mailbox. There is a map inside.";
locations[9].item = new Item;
locations[9].item.id = 5;
locations[9].item.name = "map";
locations[9].item.description = "The map will lead you to the forest where the big boss lies await.";

locations[10] = new Locale();
locations[10].id = 10;
locations[10].name = "Creek";
locations[10].description = "Welcome to the creek.";

var playerInventory = new Array();
var itemCount = 0;

function Locale() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.item = "";
    this.toString = function () {
        return "Id: " + this.id + ", Name: " + this.name + ", Description: " + this.description + ", Item: " + this.item;
    }
}

function Item() {
    this.id = 0;
    this.name = "";
    this.description = "";
    this.taken = false;
    this.toString = function () {
        updateDisplay("You have found a " + this.name + ". " + this.description);
    }
}
