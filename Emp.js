//q16//
class Emp {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log(this.id + " " + this.name);
    }
}

module.exports = Emp;