/**
 * @file
 * This function has you searching by author and by title.  You'll want to 
 * distinguish between an exact match or a partial match for this assignment.
 * 
 * To complete this assignment, examine the books structure in books.json.
 * 
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */

var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/** 
 * Return all books matching the title.
 */
function searchTitle(books, title, partial = true) {
    let searchedBooks = [];
    rExpression = new RegExp(title);
    //console.log(rExpression.toString());
 
    console.log("\nStart of book titles\n");
    for (var i = 0; i < books.length; i++){
        //console.log("i made it here");
        console.log(books[i]["title"] + " is title " + i);
        if (partial) // run code below if partial is true
        {
           
            if (books[i]["title"].match(rExpression) == title){
                
                console.log("book " + i + " passed match when partial is true");
                searchedBooks.push(books[i]);
                
            }
                 
        }



        else{  // run code below when partial is false
            if (books[i]["title"].match(rExpression) == title){
                if (books[i]["title"] === title){
                    console.log("book " + i + " passed match when partial is false");
                    searchedBooks.push(books[i]);  // adds the book to the array if the title is an exact match
                }
            }
        }    
    }
    console.log("\n end of book titles\n");
    return searchedBooks;
}

/** 
 * Return all books matching the author.
 */
function searchAuthor(books, author, partial = true) {
    let searchedBooks = [];
    rExpression = new RegExp(title);
    //console.log(rExpression.toString());
 
    console.log("\nStart of book titles\n");
    for (var i = 0; i < books.length; i++){
        //console.log("i made it here");
        console.log(books[i]["title"] + " is title " + i);
        if (partial) // run code below if partial is true
        {
           
            if (books[i]["title"].match(rExpression) == title){
                
                console.log("book " + i + " passed match when partial is true");
                searchedBooks.push(books[i]);
                
            }
                 
        }



        else{  // run code below when partial is false
            if (books[i]["title"].match(rExpression) == title){
                if (books[i]["title"] === title){
                    console.log("book " + i + " passed match when partial is false");
                    searchedBooks.push(books[i]);  // adds the book to the array if the title is an exact match
                }
            }
        }    
    }
    //console.log("\n end of book titles\n");
    return searchedBooks;

}

let x = (searchTitle(getFirstTenBooks(), "Javascript", true));

for (a of x){
    console.log( "\n title " + a["title"] + " passed the test");
}


