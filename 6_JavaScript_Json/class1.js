class Person2 {
    name;
    _lastName;
    static age = 30;
    #hiddenField; // private field via # in the beginning

    constructor(name, lastName, hidden) {
        this.name = name || "No name";
        this._lastName = lastName;
    }

    static go() {
        console.log(this.age);
    }
}

console.log(Person2.age);
Person2.go();

let p = new Person2();
console.log(p.name);
console.log(p._lastName);
// console.log(p.#hiddenField);

