class room {
    _name = ""
    _description=""

    constructor(name, description) {
        this._name = name;
        this._description = description;
    }
}

const kitchen = new room("Kitchen", "It has a sink");

console.log(kitchen._name);
console.log(kitchen._description);