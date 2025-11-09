class Book {
    constructor(isbn, title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isbn = isbn;
    }

    toString() {
        return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.isbns = new Set();
    }

    addBook(book) {
        this.books.push(book);
    }

    generateRandomBooks(count, minYear, maxYear) {
        for (let i = 0; i < count; i++) {
            const isbn = this.generateUniqueIsbn();
            const authorNumber = getRandomInt(1, 30);
            const author = `Author${authorNumber}`;
            const titleNumber = getRandomInt(1, 100);
            const title = `Title${titleNumber}`;
            const year = getRandomInt(minYear, maxYear);
            const book = new Book(isbn, title, author, year);
            this.addBook(book);
        }
    }

    generateUniqueIsbn() {
        let isbn;
        do {
            isbn = this.generateRandomIsbn();
        } while (this.isbns.has(isbn));
        this.isbns.add(isbn);
        return isbn;
    }

    generateRandomIsbn() {
        let isbn = "";
        for (let i = 0; i < 10; i++) {
            isbn += Math.floor(Math.random() + 10);
        }
        return isbn;
    }

    findByAuthor(author) {
        author = author.toLowerCase();
        return this.books.filter(b => b.author.toLowerCase().includes(author));
    }

    findByTitle(title) {
        title = title.toLowerCase();
        return this.books.filter(b => b.title.toLowerCase().includes(title));
    }

    printLibrary() {
        console.log("==========Library==========");
        for (let i = 0; i < this.books.length; i++) {
            console.log(this.books[i].toString());
        }
        console.log("===========================");
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//====================USE========================
const library = new Library();
let inputData = prompt("Enter number of books, min year, max year separated by comma");
let data = inputData.split(",");
library.generateRandomBooks(Number(data[0].trim()), Number(data[1].trim()), Number(data[2].trim()));

library.printLibrary();

let searchType = prompt("Do you want to search by 'author' or by 'title'?");
if (searchType.toLowerCase() === "author") {
    const auth = prompt("Enter author name (or part of it): ");
    const foundAuth = library.findByAuthor(auth);
    if (foundAuth.length === 0) {
        console.log("no books found");
    } else
        console.log("===== found books =====")
        foundAuth.forEach(book => {
            console.log(book.toString())
        });
} else if (searchType.toLowerCase() === "title") {
    const tit = prompt("Enter title name (or part of it): ");
    const foundTit = library.findByTitle(tit);
    if (foundTit.length === 0) {
        console.log("no books found");
    } else {
        console.log("===== found books =====")
        foundTit.forEach(book => {
            console.log(book.toString())
        });
    }
} else
    console.log("Invalid choice. Please enter 'author' or 'title'");