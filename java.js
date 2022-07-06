let library = [];

function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
}
let userAuthor;
let userTitle;
let userPages;

function createBook(){
    userAuthor = prompt("Enter the author of the book", 'Bernard Cornwell')
    userTitle = prompt('Enter title of the book', 'The Last Kingdom')
    userPages = prompt('Enter number of pages of the book', '200')
    
}

function addBook(){
    const userBook = new Book(userAuthor, userTitle, userPages)
    library.push(userBook)
}

const bookBody = document.querySelector('div.book-body')



function createBookTile(){
    library.forEach(element =>{
    const newBook = document.createElement('div')
    newBook.classList.add('new-book')
    bookBody.appendChild(newBook)
    
    const bookAuthor = document.createElement('div')
    bookAuthor.classList.add('book-author')
    newBook.appendChild(bookAuthor)
    bookAuthor.innerText = `${element.author}`

    const bookTitle = document.createElement('div')
    bookTitle.classList.add('book-title')
    newBook.appendChild(bookTitle)
    bookTitle.innerText = `${element.title}`


const bookPages = document.createElement('div')
    bookPages.classList.add('book-pages')
    newBook.appendChild(bookPages)
    bookPages.innerText = `${element.pages}`
        
    })
}

function libraryEntry(){
    createBook();
    addBook();
    createBookTile();
}

const button = document.querySelector('[data-form-button]')
const closeButton = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')

button.addEventListener('click', () =>{
    const modal = document.querySelector(button.dataset.formButton)
    console.log(modal)
} )