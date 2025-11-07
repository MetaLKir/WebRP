function end() {
    console.log("c.type");
}
let end1 = new end();
console.log(end1);

class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // underscore makes a field private
    }
    fullName = function(){
        return `${this._firstName} ${this.lastName}`;
    }

    get firstName(){
        return this._firstName;
    }

    get age() {
        return this._age;
    }

    set age(value){
        if(Number(value) > 0 && Number(value) < 120){
            this._age = Number(value);
        } else{
            console.log("Wrong age");
            this._age = -1;
        }


    }

    set firstName(value){
        if(value && value.length > 2){
            this._firstName = value;
        }
    }
}

const anna = new Person("Anna", "Karenina", 32, "fd@dsf");
console.log(anna);
console.log(anna.fullName());

console.log("=".repeat(50));

const alla = new Person("Alla", "Pugacheva", -32);
console.log(alla);