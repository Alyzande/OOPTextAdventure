class room {
     
       get roomInfo(){
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

//asks for direction and room to link.  And links the roomtolink to direction as the key to the linkedrooms from constructor
       linkRoom(direction, roomToLink){
        this._linkedRooms[direction] = roomToLink;
      }
    }
    
    const kitchen = new room("kitchen", "it has a sink");
    const lounge = new room ("lounge", "a place where you can watch tv");

    lounge.linkRoom("west", kitchen);
    kitchen.linkRoom("east", lounge);
    
    console.log(kitchen.roomInfo);
    document.getElementById("textarea").innerHTML = kitchen.roomInfo;

    document.getElementById("usertext").focus();