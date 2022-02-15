class room {
    //     get name(){
    //        return this._name;
    //    }
    
    //    get description() {
    //        return this._description;
    //    }
    
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
       }
    }
    
    const kitchen = new room("kitchen", "it has a sink");
    
    console.log(kitchen.roomInfo);
    document.getElementById("textarea").innerHTML = kitchen.roomInfo;