let myLibrary = [];


function Book(title,author,pages,read,id){
  this.title = title
  this.author= author
  this.pages= pages
  this.read= read
  this.id = id
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

function createBookElement(book){
  const libraryContainer = document.getElementById('library');

  const bookElement = document.createElement('div');
  bookElement.classList.add(`book-card-${book.id}`)
  bookElement.setAttribute('id',`${book.id}`)


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
  bookElement.appendChild(readElement)

  const removeBook = document.createElement('button');
  removeBook.textContent = 'Remove Book'
  removeBook.id.replace('remove')
  removeBook.onclick=function(){removeBookFromLibrary(`${book.id}`)}
  bookElement.appendChild(removeBook)

 

  libraryContainer.appendChild(bookElement)


}

function libraryDisplay(){
  const libraryContainer = document.getElementById('library');
  libraryContainer.innerHTML=""
  
myLibrary.forEach(function(book){
  createBookElement(book)
})

}



function removeBookFromLibrary(book){
  removeBookFromDisplay(book)
  myLibrary.splice(book,1)
  updatePositions()
  libraryDisplay()

  

}

function removeBookFromDisplay(book){
  const bookDiv = document.getElementById(`${book}`)
  bookDiv.remove()
 
}


function updatePositions() {
  myLibrary.forEach(function(book, index) {
    book.id = index;
  });
}




form.addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary()
  updatePositions()
  clearFormFields()
  libraryDisplay()

});

