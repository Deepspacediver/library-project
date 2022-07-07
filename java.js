let library = [];

function Book(author, title, pages) {
    this.author = author
    this.title = title
    this.pages = pages
}
/* let userAuthor;
let userTitle;
let userPages;

function createBook(){
    userAuthor = prompt("Enter the author of the book", 'Bernard Cornwell')
    userTitle = prompt('Enter title of the book', 'The Last Kingdom')
    userPages = prompt('Enter number of pages of the book', '200')
    
} */

function addBook(){
    const userBook = new Book(userAuthor, userTitle, userPages)
    library.push(userBook)
}

const bookBody = document.querySelector('div.book-body')



function createBook(){
    // library.forEach(element =>{

    const userAuthor = formAuthor.value;
    const userTitle = formTitle.value;
    const userPages = formPages.value;
    
    const userBook = new Book(userAuthor, userTitle, userPages)
    library.push(userBook)
    
    
    const newBookDiv = document.createElement('div')
    newBookDiv.classList.add('new-book')
    bookBody.appendChild(newBookDiv)
    
    const bookAuthorDiv = document.createElement('div')
    bookAuthorDiv.classList.add('book-author')
    newBookDiv.appendChild(bookAuthorDiv)
    bookAuthorDiv.innerText = `${userBook.author}`

    const bookTitleDiv = document.createElement('div')
    bookTitleDiv.classList.add('book-title')
    newBookDiv.appendChild(bookTitleDiv)
    bookTitleDiv.innerText = `${userBook.title}`


const bookPagesDiv = document.createElement('div')
    bookPagesDiv.classList.add('book-pages')
    newBookDiv.appendChild(bookPagesDiv)
    bookPagesDiv.innerText = `${userBook.pages}`
    
assignIndex(userBook, newBookDiv, bookAuthorDiv, bookTitleDiv, bookPagesDiv)        
    // })
}

function assignIndex(bookObject, bookContainer, authorDiv, titleDiv, pagesDiv){
    let index = library.length;
    bookObject.id = index; 
    bookContainer.dataset.index = `${index}`;
    authorDiv.dataset.index = `${index}`;
    titleDiv.dataset.index = `${index}`;
    pagesDiv.dataset.index = `${index}`;
}
/* function libraryEntry(){
    createBook();
    addBook();
    createBookTile();
} */

const button = document.querySelector('[data-form-button]')
const closeButton = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')

button.addEventListener('click', () =>{
    const form = document.querySelector(button.dataset.formButton)
    openForm(form)
} )

closeButton.addEventListener('click', ()=>{
    const form = document.querySelector(button.dataset.formButton)
    closeForm(form)
})

function openForm(form){
    if (form == null)return
    form.classList.add('active')
    overlay.classList.add('active')
}

function closeForm(form){
    if (form == null)return
    form.classList.remove('active')
    overlay.classList.remove('active')
}

overlay.addEventListener('click', ()=>{
    const forms = document.querySelectorAll('.form-container.active')
    forms.forEach(form => {
        closeForm(form)
    })
})

const submitButton = document.querySelector('.submitForm')

const formAuthor = document.getElementById('book-author');
const formTitle = document.getElementById('book-title')
const formPages = document.getElementById('book-pages')

submitButton.addEventListener('click', ()=>{
    const form = document.querySelector('.form-container.active')

    closeForm(form)
    createBook()
    clearFormValues()
    console.log(library)
})

function clearFormValues(){
    formAuthor.value ='';
    formTitle.value = '';
    formPages.value = '';
}

