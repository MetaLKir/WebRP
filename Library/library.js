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

    generateRandomBooks(amount, yearFrom, yearTo) {
        for (let i = 0; i < amount; i++) {
            let book = this.generateBook(yearFrom, yearTo);
            this.addBook(book);
        }
    }

    generateBook(yearFrom, yearTo) {
        let isbn = this.randomInRange(1_000_000_000_000, 9_999_999_999_999);
        let title = "Title " + this.randomInRange(1, 20);
        let author = "Author " + this.randomInRange(1, 20);
        let year = this.randomInRange(yearFrom, yearTo);
        return new Book(isbn, title, author, year);
    }

    randomInRange(min, max) {
        return Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    }

    findByAuthor(author, isPreciseSearch = true) {
        author.trim().toLocaleLowerCase();
        if (isPreciseSearch) {
            return this.#books.filter(
                e => e.author.toLocaleLowerCase() === author);
        } else {
            return this.#books.filter(
                e => e.author.toLocaleLowerCase().includes(author));
        }
    }

    findByTitle(title, isPreciseSearch = true) {
        title.trim().toLocaleLowerCase();
        if (isPreciseSearch) {
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

    size() {
        return this.#books.length;
    }

    removeAllBooks(){
        this.#books = [];
    }
}

//======================================================================
let library = new Library();

//========== get elements from html ==========
const inputBookAmount = document.querySelector('#bookAmount');
const inputYearMin = document.querySelector('#yearMin');
const inputYearMax = document.querySelector('#yearMax');
const inputBookFilterText = document.querySelector('#bookFilterText');
const buttonGenerateBooks = document.querySelector('#generateBooks');
const buttonClearLibrary = document.querySelector('#clearLibrary');
const buttonSearchByAuthor = document.querySelector('#searchByAuthor');
const buttonSearchByTitle = document.querySelector('#searchByTitle');
const isPreciseSearch = document.querySelector('#preciseSearch');
const generatedBooksList = document.querySelector('#generatedBooksList');
const searchedBooksList = document.querySelector('#searchedBooksList');

//========== bind events to buttons ==========
buttonSearchByAuthor.onclick = () => {findBook("author")};
buttonSearchByTitle.onclick = () => {findBook("title")};
buttonClearLibrary.onclick = () => {
    library.removeAllBooks();
    clearBooksList(generatedBooksList);
    addEmptyElementList(generatedBooksList);
};
buttonGenerateBooks.onclick = () => {
    library.generateRandomBooks(inputBookAmount.value, inputYearMin.value, inputYearMax.value);
    fillBooksList(library.getAllBooks(), generatedBooksList);
};

//========== main stuff ==========
function fillBooksList(books, listToFill) {
    clearBooksList(listToFill);
    for(let i in books) {
        const li = document.createElement('li');
        li.classList.add("list-group-item");
        li.textContent = books[i];
        listToFill.appendChild(li);
    }
}

function clearBooksList(listToClear) {
    listToClear.innerHTML = '';
}

function findBook(findType) {
    clearBooksList(searchedBooksList);
    let key = inputBookFilterText.value.trim();
    let result;
    switch (findType) {
        case "title":
            result = library.findByTitle(key, isPreciseSearch.checked);
            break;
        case "author":
            result = library.findByAuthor(key, isPreciseSearch.checked);
            break;
        default:
            alert("Unknown search type");
    }
    result.length > 0 ?
        fillBooksList(result, searchedBooksList) :
        addEmptyElementList(searchedBooksList);

}

function addEmptyElementList(listAddTo) {
    const li = document.createElement('li');
    li.classList.add("list-group-item");
    li.classList.add("list-group-item-warning");
    li.textContent = "List is empty";
    listAddTo.appendChild(li);
}