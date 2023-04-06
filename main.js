let myLibrary = [];


function Book(title,author,pages,read,id){
  this.title = title
  this.author= author
  this.pages= pages
  this.read= read
  this.bookId = id
}

const form = document.getElementById('book');

function getCurrentIndexNumber(){
  let currentIndex = myLibrary.length
return currentIndex
}


function addBookToLibrary() {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const read = document.getElementById('read').value === 'true';
  const id = getCurrentIndexNumber()
  
  const book = new Book(title, author, pages, read, id)
  return myLibrary.push(book) 
 
}

function clearFormFields(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').value = 'true';

}

function displayBook(book){
  const libraryContainer = document.getElementById('library');

  const bookElement = document.createElement('div');
  bookElement.classList.add('book-card')

  const titleElement = document.createElement('h3');
  titleElement.textContent = book.title
  titleElement.classList.add('book-card-title')
  bookElement.appendChild(titleElement)

  const authorElement = document.createElement('p');
  authorElement.textContent = `Author: ${book.author}`
  authorElement.classList.add('book-card-author')
  bookElement.appendChild(authorElement)

  const pagesElement = document.createElement('p');
  pagesElement.textContent = `Pages: ${book.pages}`
  pagesElement.classList.add('book-card-pages')
  bookElement.appendChild(pagesElement)

  const readElement = document.createElement('p');
  readElement.textContent = `Read: ${book.read}`
  readElement.classList.add('book-card-read')
  bookElement.appendChild(pagesElement)

  libraryContainer.appendChild(bookElement)


}





function removeBookFromLibrary(){


}

function changeReadStatus(){

}




form.addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary()
  clearFormFields()
  displayBook(myLibrary[`${getCurrentIndexNumber()-1}`])
});

