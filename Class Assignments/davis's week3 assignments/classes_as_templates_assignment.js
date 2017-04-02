/**
 * Create your own class to use as a template and create five objects from the 
 * class. For example, if using the Books example from 3.8 create five books.
 * Place the objects into an array called 'all_objects'. 
 */

class Car { // creates a template for a car
    constructor(color, make){
        this.color = color; // the cars color is assigned what was passed in
        this.make = make; // the cars make is assigned what was passed in
    };
}

all_objects = []; // creates an array that will later hold 5 objects

bigTruck = new Car("red", "ford"); // creates a new Car objects 
littleTruck = new Car('pink', 'honda');
sportCar = new Car('red', 'lotus');
littleCar = new Car('grey', 'toyota');
suv = new Car('white', 'GMC'); // creates the last Car Object

all_objects.push(bigTruck); // stores each object in the array
all_objects.push(littleCar);
all_objects.push(littleTruck);
all_objects.push(sportCar);
all_objects.push(suv);

console.log(all_objects.length); // outputs the array length to the console.



