let myLibrary = [];

function Book(title,author,pages,read){
  this.title = title
  this.author= author
  this.pages= pages
  this.read= read
}

const form = document.getElementById('book');

function addBookToLibrary() {
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const pages = document.getElementById('pages').value
  const read = document.getElementById('read').value === 'true';

  const book = new Book(title, author, pages, read)

  return myLibrary.push(book)
}

function clearFormFields(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').value = 'true';

}

function displayLibrary(){

}

function removeBookFromLibrary(){

}

function changeReadStatus(){

}


form.addEventListener('submit', function(event) {
  event.preventDefault();
  addBookToLibrary()
  clearFormFields()
});

