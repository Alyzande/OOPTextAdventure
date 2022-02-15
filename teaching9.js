class room {
    get name(){
       return this._name;
   }

   get description() {
       return this._description;
   }

   get roomInfo(){
       return "You are standing in the " + this._name + "\nWhen you look around you can see " + this._description;
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