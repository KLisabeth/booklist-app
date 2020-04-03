// Store books
const store = {  
    getBooks: function(){
         let books; 
         if(localStorage.getItem('books') === null) {
             books =[];
         }else{
             books= JSON.parse(localStorage.getItem('books'));
         }
         return books;
     },
     addBook: function(book){
         const books = store.getBooks();
         books.push(book);
         localStorage.setItem('books', JSON.stringify(books))
     },
     removeBook: function(isbn){
        const books = store.getBooks();
        books.forEach((book, index)=> {
        if (book.isbn === isbn) {
         books.splice(index, 1)
        }
    });
     localStorage.setItem('books', JSON.stringify(books));
    }
     
 } 