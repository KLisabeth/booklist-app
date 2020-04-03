## My Book List

A static web page built with only HTML & VanillaJavaScript with by step by step tutorial by Traversy Media.

0. Setup
Create empty folders ( handlers , listeners, style)
Create empty files ( `README.md`, `development-strategy.md`, `index.html` , `data.js`, `init.js`, `log.js`)

1. Data & Log
Crate `data.js` with class to store info
Create `log.js` to initialize log.

2. Init.
Create `init.js` to initialize window on load.

3. User Story: As a user i want to be able to add a book.
Create `add-book.js` file in handlers folder with `addBookToList` function
Create `add-book.js` file in listeners folder and fire `addBookToList` function to add a book.

4. User Story: As a user i want added book to be displayed.
Create `display-books.js` file in handlers folder with `displayBooks` function
Create `display-books.js` file in listeners folder and fire `displayBooks` function to display  added book to the book list.

5. User Story: As a user i want the fields to clear after the book is added.
Create `clear-fields.js` file in handlers folder with `clearFields` function
Create `clear-fields.js` file in listeners folder and fire `clearFields` function to clear the fields.

6. User Story: As a user i want to have an alert if something is missing in the field before adding a book.
Create `showAlert` function in `add-book.js`
Fire `showAlert` in `add-book.js` listener to alert if the fields are empty 'Please fill in all fields' before the book is added.

7. User Story: As a user i want to have an alert when book is successfully added.
Fire `showAlert` in `add-book.js` listener to alert 'Book Added' when book is successfully added.

8. User Story: As a user i want to be able to delete books.
Create `delete-book.js` file in handlers folder with `deleteBook` function to delete element.
Create `delete-book.js` file in listeners folder and fire `deleteBook` function to delete a book element from the list.

9. User Story: As a user i want to have an alert when book is successfully deleted.
Fire `showAlert` in `delete-book.js` listener to alert 'Book Removed' when book is successfully deleted.

10. User Story: As a user i want to be able to create a storage that stays even after the page is reloaded.
Create `store.js` file in handlers folder with `store` object with `addBook` function.
Fire `store.addBook` function in `add-book.js` listener to store added book in the list.

11. User Story: As a user i want to be able to remove book from the storage and not show up even after page is reloaded.
Create `removeBook` function in `store` object
Fire `store.removeBook` function in `delete-book.js` listener to remove any stored items