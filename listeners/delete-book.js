// Event: Remove Book
document.querySelector('#book-list').addEventListener('click', (e) => {
    deleteBook(e.target);
    store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    showAlert('Book Removed', 'success');
});