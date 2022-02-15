class room {
 
    //  **NOT NEEDED if not wanted**
    //  _name = ""
    // _description=""

    get name(){
        return this._name;
    }

    constructor(name, description) {
        this._name = name;
        this._description = description;
    }
}

const kitchen = new room("Kitchen", "It has a sink");

//console.log(kitchen._name);
//console.log(kitchen._description);
//CHANGED TO:

console.log(kitchen.name);
//name becomes property of kitchen