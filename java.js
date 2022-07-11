let library = [];

function Book(author, title, pages, isRead) {
    this.author = author
    this.title = title
    this.pages = pages
    this.isRead= isRead;
    this.originID=Date.now()
}

function addBook(){
    const userBook = new Book(formAuthor.value, formTitle.value, formPages.value, formRead.checked)
    library.push(userBook)
    return userBook
}

const bookBody = document.querySelector('div.book-body')

function createBook(bookObject){
    // library.forEach(element =>{

    
    const newBookDiv = document.createElement('div')
    newBookDiv.classList.add('new-book')
    bookBody.appendChild(newBookDiv)
   
    const bookAuthorDiv = document.createElement('div')
    bookAuthorDiv.classList.add('book-author')
    newBookDiv.appendChild(bookAuthorDiv)
    bookAuthorDiv.innerText = `${bookObject.author}`

    const bookTitleDiv = document.createElement('div')
    bookTitleDiv.classList.add('book-title')
    newBookDiv.appendChild(bookTitleDiv)
    bookTitleDiv.innerText = `${bookObject.title}`


    const bookPagesDiv = document.createElement('div')
    bookPagesDiv.classList.add('book-pages')
    newBookDiv.appendChild(bookPagesDiv)
    bookPagesDiv.innerText = `${bookObject.pages}`

    const removeButton = document.createElement('button')
    removeButton.classList.add('remove-button')
    removeButton.innerText = 'Delete Book';
    newBookDiv.appendChild(removeButton)

    const readStatusButton = document.createElement('button')
    readStatusButton.classList.add('read-status')
    newBookDiv.appendChild(readStatusButton)
    checkReadStatus(bookObject, readStatusButton)
    assignIndex(bookObject, newBookDiv)  
removeBook(removeButton)    
    
}

function assignIndex(bookObject, bookContainer){
    let bookID = bookObject.originID
    bookContainer.dataset.index = `${bookID}`;
    let containerChildren = bookContainer.children;
     for (let i = 0; i < containerChildren.length; i++) {
    containerChildren[i].dataset.index =`${bookID}`
        
    }
}
function checkReadStatus(bookObject, button){
    console.log(bookObject.isRead)
    if (bookObject.isRead === true) {
        button.classList.add('finished');
    }return;
}

function changeReadstatus(){

}


let indexOfBook;
function removeBook(removeButton){
    removeButton.addEventListener('click', (e)=>{
        let index = e.target.dataset.index;
        let pageElements = document.querySelectorAll(`[data-index="${index}"]`)
        Array.from(pageElements).forEach((element =>{
            element.remove()
        }))
        indexOfBook = library.findIndex(object =>{
            return object.originID
        })
    library.splice(indexOfBook, 1)
    })
}


const openButton = document.querySelector('[data-form-button]')
const closeButton = document.querySelector('[data-close-button]')
const overlay = document.getElementById('overlay')

openButton.addEventListener('click', () =>{
    const form = document.querySelector(openButton.dataset.formButton)
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
const formRead = document.getElementById('book-read');

submitButton.addEventListener('click', ()=>{
    const form = document.querySelector('.form-container.active')

    closeForm(form)
    
    createBook(addBook())

    clearFormValues()

})

function clearFormValues(){
    formAuthor.value ='';
    formTitle.value = '';
    formPages.value = '';
    formRead.checked=''
}

