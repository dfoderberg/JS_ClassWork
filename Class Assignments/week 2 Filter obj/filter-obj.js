/**
 * @file
 * This function has you filter the books object by the date it was published.
 * Careful, this one is tricky!  Study the books.json object format before
 * attempting this one.  The data is non-uniform, and you'll need to do string
 * extraction using patterns to succeed.
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
 * Filter the inputted books bounded by input year.
 */
function filterByDate(books, yearMin, yearMax) {
    let filteredBooks = [];
    for(var i = 0; i < books.length; i++){  // iterates through my array a 
    console.log("\nbook " + i);
    let year = searchForDates(books[i]);
    if (year >= yearMin && year <= yearMax){
        filteredBooks.push(books[i]);
    }
    // need to push books that are within the range to a new array then return that array.
}
return filteredBooks;
}


var searchForDates = function(book){ // searches for the newest date in a given book reference.
    let date = null;
    let newestDate = null;
    let searchKeys = ["edition_info", "publisher_text"]
    for(var key of searchKeys){
        let value = book[key];  // this will be the value matching the key
        console.log(value);
        date = value.match("[0-2][0-9][0-9][0-9]");
        if (date != null){           // checks for valid date set by the match function.
        if (newestDate == null) newestDate = date; // assigns newest date a value if it doesnt have one
        else if (newestDate < date) newestDate = date; // assigns newest date the largest year number.
            
        }
    }
    console.log("this is my date " + newestDate);
        return newestDate;
}


var getXBooks = function(bookCount){
        return JSON.parse(require('fs').readFileSync(__dirname + '/../books.json', 'UTF8')).slice(0, bookCount);   
}

let booksArray = getXBooks(10);  // creates an array a of length dependent on function input


console.log(filterByDate(booksArray, 1996,2000));

    