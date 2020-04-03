// Event: Remove Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    deleteBook(e.target);
    showAlert('Book Removed', 'success');
});