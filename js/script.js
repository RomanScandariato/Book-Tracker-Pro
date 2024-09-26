//grabbing From docs
const addBookBtn = document.querySelector('#add-book');
// const rating = document.querySelector('#add-rating')
const addModal = document.querySelector('#add-modal');


/*FUNCTIONS*/
// Create a function that returns a books array from local storage by the key of books (make sure to JSON.parse the array)
// If there is not a books array stored to local storage return an empty array


//asks for the title and author of the book
function addBook() {
    const titleInput = document.querySelector('#title-input');
    const authorInput = document.querySelector('#author-input');
    const ratingInput = document.querySelector('#rating-input');
    const rating = ratingInput.value;
    console.log(titleInput.value);
    if (rating <= 5 && rating >= 1) {


    }
    //Create a book object with the three properties corresponding with the three inputs above and the values
    //Call function above that returns books array, store the array that it returns in a variable
    //Push the Book object  to the books array variable 
    //Set the local sotrage books key to the books array above (make sure to JSON.stringify the array)
    // Clear out the inputs - IE. titleInput.value = ''
}

addBookBtn.addEventListener('click', addBook);


