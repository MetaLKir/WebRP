console.log(window.name);

class User{
    constructor(nickName){
        this.nickName = nickName;
    }
    infoFunction = function(){
        console.log(`${this.nickName}`);
    }
}

const kir = new User('Kir')
kir.infoFunction();

// const name = kir.infoFunction; // here we lost context - don't see nickName
// name(); // here we get an error, because don't see the nickName

const name = kir.infoFunction.bind({nickName: "Masha"});
name();

const name1 = kir.infoFunction.bind(kir);
name1();

kir.infoFunction.call({nickName: "Voland"}, "Mrs", "!");
kir.infoFunction.apply({nickName: "Behemoth"}, ["Mrs", "!"]);