// Event : Add Book and Alerts
document.querySelector('#book-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();
    
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;
    // Validate alert
    if(title === '' || author === '' || isbn === '') {
        showAlert('Please fill in all fields', 'danger');
      }else { 
      // Instatiate Book
      let book = new Book(title, author, isbn);
      // Add a Book 
      addBookToList(book);
    }
});