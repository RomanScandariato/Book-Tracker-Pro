/*
==============
VARIABLES
==============
*/

//Grabbing from Docs
const bookOutput = document.querySelector('.output');
const addBookBtn = document.querySelector('#add-book');
const addModal = document.querySelector('#add-modal');
// const rating = document.querySelector('#add-rating')

//Holds the book info


/*
==============
FUNCTIONS
==============
*/

// Create a function that returns a books array from local storage by the key of books (make sure to JSON.parse the array)
// If there is not a books array stored to local storage return an empty array

function pageLoad() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    //Create a book object with the three properties corresponding with the three inputs above and the values
    
    function outputBooks(booksArray) {
        bookOutput.innerHTML = '';

        if (!booksArray.length){
            bookOutput.innerHTML = '<h3 class="text-primary">No books have been added.</h3>'
        }
        

        for (const bookObject of booksArray) {
            bookOutput.insertAdjacentHTML('beforeend', `
                <article class="border border-dark p-2 rounded-2 text-black mb-3">
                    <h3>Title: ${bookObject.title}</h3>
                    <p>Author: ${bookObject.author}</p>
                    <p>Rating: ${bookObject.rating}</p>
                </article>
            `);
        }

    }

    //Asks for the title and author of the book
    function addBook() {

        //defined here but used up top
        const titleInput = document.querySelector('#title-input').value;
        const authorInput = document.querySelector('#author-input').value;
        const rating = document.querySelector('#rating-input').value;

        //checsks if rating is from 1-5
        if (rating <= 5 && rating >= 1) {
            const bookObject = {
                title: titleInput,
                author: authorInput,
                rating: rating
            };

            //Pushes the Book object  to the books array variable
            books.push(bookObject);// not defined, because it is defined locally
            // bookStorage();
            // outputBooks(books);
            // clearInput();

            function clearInput() {
                document.querySelector('#title-input').value = '';
                document.querySelector('#author-input').value = '';
                document.querySelector('#rating-input').value = '';
            }
            
               //Set the local storage books key to the books array above (make sure to JSON.stringify the array)
            function bookStorage() {
                localStorage.setItem('books', JSON.stringify(books));
                }



            bookStorage(); 
            outputBooks(books);

            clearInput();

            //Call function above that returns books array, store the array that it returns in a variable
            return books;

        } else {
            alert('Rating must be between 1 and 5')
        }
    }

    //Set the local storage books key to the books array above (make sure to JSON.stringify the array)
    function bookStorage() {
        localStorage.setItem('books', JSON.stringify(books));
    }

    // Clear out the inputs - IE. titleInput.value = ''

    function clearInput() {
        //this requires local storage in order to be written

        localStorage.removeItem('#title-input');
        localStorage.removeItem('#author-input');
        localStorage.removeItem('#rating-input');
    }

    addBookBtn.addEventListener('click', addBook);
    outputBooks(books);
}
pageLoad();