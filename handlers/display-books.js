// Display books 
function displayBooks (){
    const books = store.getBooks();
    books.forEach((book)=> addBookToList(book));
};