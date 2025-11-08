class Book {
    #isbn;
    #title;
    #author;
    #year;

    constructor(isbn, title, author, year) {
        this.isbn = isbn;
        this.#title = title;
        this.#author = author;
        this.#year = year;
    }

    get isbn() {
        return this.#isbn;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get year() {
        return this.#year;
    }

    set isbn(value) {
        if (Number.isFinite(value) && this.checkIsbn(value)) {
            this.#isbn = value;
        } else this.#isbn = -1;
    }

    checkIsbn(value) {
        let numLength = Math.abs(value).toString().length;
        return numLength === 10 || numLength === 13;
    }

    toString() {
        return `Book: isbn: ${this.#isbn}, title: ${this.#title}, author: ${this.#author}, year: ${this.#year}`;
    }
}

class Library {
    #books = [];

    addBook(book) {
        if (!this.#books.some(e => e.isbn === book.isbn))
            this.#books.push(book);
    }

    generateRandomBooks(amount) {
        for (let i = 0; this.#books.length < amount; i++) {
            let book = this.generateBook();
            this.addBook(book);
        }
    }

    generateBook() {
        let isbn = this.randomInRange(1_000_000_000, 9_999_999_999_999);
        let title = "Title " + this.randomInRange(1, 20);
        let author = "Author " + this.randomInRange(1, 20);
        let year = this.randomInRange(1000, 2025);
        return new Book(isbn, title, author, year);
    }

    randomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    findByAuthor(author, isPreciseSearch = true) {
        author.toLocaleLowerCase();
        if(isPreciseSearch){
            return this.#books.filter(
                e => e.author.toLocaleLowerCase() === author);
        } else {
            return this.#books.filter(
                e => e.author.toLocaleLowerCase().includes(author));
        }

    }

    findByTitle(title, isPreciseSearch = true) {
        title.toLocaleLowerCase();
        if(isPreciseSearch){
            return this.#books.filter(
                e => e.title.toLocaleLowerCase() === title);
        } else {
            return this.#books.filter(
                e => e.title.toLocaleLowerCase().includes(title));
        }

    }

    getAllBooks() {
        return this.#books;
    }
}

//===========================================
let library = new Library();
library.generateRandomBooks(5);
console.log(library.getAllBooks().map(e => e.toString()));

function findBook(findType) {
    let key = prompt(`Enter ${findType} name: `).trim();
    let value;
    let preciseSearch = document.getElementById("preciseSearch");
    switch (findType) {
        case "title":
            value = library.findByTitle(key, preciseSearch.checked);
            break;
        case "author":
            value = library.findByAuthor(key, preciseSearch.checked);
            break;
        default:
            alert("Unknown search type");
    }
    alert("search result:\n" + value.join("\n"));
}