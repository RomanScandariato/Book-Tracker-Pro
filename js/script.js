//grabbing From docs
const addBook = document.querySelector('#book-info');
// const rating = document.querySelector('#add-rating')
const bookModal = document.querySelector('#book-modal');


/*FUNCTIONS*/

//asks for the title and author of the book
function bookInfo() {
    let askTitle = prompt("Please provide book title.");
    console.log(askTitle);
    let askAuthor = prompt("Please provide the author.");
    console.log(askAuthor);


    let askRating = prompt("How would you rate this book?")
    console.log(askRating);

<<<<<<< HEAD
    // if(askRating >= 5 && !< 1){
=======
    if(askRating <= 5 && askRating >= 1){
>>>>>>> da016600ee995e7604dcb9a7f5935010e2e79f34
        

    // }

}

addBook.addEventListener('click', bookInfo);


