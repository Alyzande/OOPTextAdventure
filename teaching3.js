class phone {
    _id = 0
    _name = ""
    _size = 0
    _weight = 0.0

    constructor(id, name)
    {
        this._id = id;
        this._name = name;
    }
}

const alyzandesPhone = new phone(1, "S22 ultra");
alyzandesPhone._size = 5;
alyzandesPhone._weight = 1.1;

console.log(alyzandesPhone._name)

const bobsPhone = new phone(2, "iphone");

console.log(bobsPhone._name);
