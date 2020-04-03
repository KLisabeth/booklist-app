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
     
 } 