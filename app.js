function Book(title, author) {
  this.title = title;
  this.author = author;
}

document.getElementById('book-form').addEventListener('submit', function(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  if(title === '' || author === ''){
    
  }
  const book = new Book(title, author);
  let bookList = document.getElementById('book-list');
  let newBook = `
  <div class="book">
    <p><span>${book.title}</span></p>
    <p><span>${book.author}</span></p>
    <button class="btn">Remove</button>
  <hr>
  </div>
  `;
  bookList.innerHTML += newBook;
  clearInput();
  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click', function(e) {
  if(e.target.className === 'btn'){
    const removeBook = document.querySelector('.book');
    removeBook.remove();
  }
})

function clearInput(){
  const title = document.getElementById('title').value = '';
  const author = document.getElementById('author').value = '';
}


