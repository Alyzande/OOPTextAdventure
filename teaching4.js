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

    calculateRelativeWeight() {
        return this._weight / this._size
    }
}

const alyzandesPhone = new phone(1, "S22 ultra");
alyzandesPhone._size = 5;
alyzandesPhone._weight = 1.1;

console.log(alyzandesPhone._name);
console.log(alyzandesPhone.calculateRelativeWeight());
