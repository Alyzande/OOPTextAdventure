class room {
     get name(){
        return this._name;
    }

    constructor(name, description) {
        this._name = name;
        this._description = description;
    }
}

const kitchen = new room("Kitchen", "It has a sink");

console.log(kitchen.name);