let library = [];

function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
}

function addBook(){
    let userAuthor = prompt("Enter the author of the book", 'Bernard Cornwell')
    let userTitle = prompt('Enter title of the book', 'The Last Kingdom')
    let userPages = prompt('Enter number of pages of the book', '200')
    const userBook = new Book(userAuthor, userTitle, userPages)
    library.push(userBook)
}

// addBook();