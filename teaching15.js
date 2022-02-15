class room {

    get roomInfo() {
        return "You are standing in the " + this._name + ".</br>When you look around you can see " + this._description + ".";
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }

    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._linkedRooms = {};
    }

    linkRoom(direction, roomToLink) {
        this._linkedRooms[direction] = roomToLink;
    }
    move(direction) {
        if (direction in this._linkedRooms) {
            return this._linkedRooms[direction];
        } else {
            //document.getElementById("textarea").innerHTML += "<br /> You can't go that direction.";
            //can change this once alert works
            alert("you can't go that direction");
            return this;
        }
    }
}

//rooms
const kitchen = new room("kitchen", "it has a sink");
const lounge = new room("lounge", "a place where you can watch tv");
const hallway = new room("hall", "the main entrance foyer");
const bedroom = new room("main bedroom", "the best place for sleeping");
const bathroom = new room("bathroom", "a wash basin, a bathtub, and a shower");
const dining = new room("dining room", "a nice place to eat family meals");

//linkrooms
lounge.linkRoom("west", kitchen);
lounge.linkRoom("north", hallway);
lounge.linkRoom("east", bathroom);

kitchen.linkRoom("east", lounge);
kitchen.linkRoom("north", dining);

hallway.linkRoom("south", lounge);
hallway.linkRoom("east", bedroom);
hallway.linkRoom("west", dining);

bedroom.linkRoom("west", hallway);
bedroom.linkRoom("south", bathroom);

dining.linkRoom("east", hallway);
dining.linkRoom("south", kitchen);


//outputs
//console.log(kitchen.roomInfo);
function displayRoomInfo(room) {
    textContent = room.describe();
    console.log(currentRoom)

    document.getElementById("textarea").innerHTML = textContent;
    document.getElementById("usertext").focus();
}

function startGame() {
    currentRoom = hallway;
    displayRoomInfo(currentRoom);
}

startGame()

// document.getElementById("textarea").innerHTML = kitchen.roomInfo;
// document.getElementById("usertext").focus();

//NOTE:  This js does NOT WORK and is included to show the need for a describe() {} function inside the room class