// Delete book 
function deleteBook(el){
    if (el.classList.contains('delete')){
        el.parentElement.parentElement.remove();
    }
};