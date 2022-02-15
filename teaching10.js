class room {
//     get name(){
//        return this._name;
//    }

//    get description() {
//        return this._description;
//    }

   get roomInfo(){
       return "You are standing in the " + this._name + "\nWhen you look around you can see " + this._description;
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

const kitchen = new room("Kitchen", "It has a sink");

// console.log(kitchen.name);
// console.log(kitchen.description);
console.log(kitchen.roomInfo);