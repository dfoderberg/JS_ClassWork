/*
the user class is used to conncect a user to an array of events. (the events are not currently connected to user)
 */

class User{
   constructor(userName){
      this.userName = userName;
   }

   
}
/*
The scheduleItem object is used to store an event. these will be stored in an array that is connected to the user.
 */

class scheduleItem{
    constructor(name, time, place, length){
    this.time = time;
    this.name = name;
    this.place = place;
    this.length = length;
    }

}

let davis = new User("davis");
davis.itemsArray = new Array();  // creates an array that stores items.
davis.itemsArray[0] = new scheduleItem("class", "6:00", "DaVinci", 3); // this is just a test
davis.itemsArray[1] = new scheduleItem("lunch", "12:00", "home", 1);

console.log(user.scheduleItems);

function newEvent(userName, ){


}

// setAvailability(employees, myMap){
//       console.log("i entered my function");
//        for(let i = 0; i < employees.length; i++){                                               // loops through employees
//             for(let j = 0; j< employees[i].availability.length; j++){                           // loops through each employees availability
//             //console.log (employees[i].availability[j]["avail"]);
//                 if(employees[i].availability[j]["avail"]){                               // if they are available enter loop
//                 console.log(myMap.prototype.has(employees[i]["id"]));
//                    if (myMap.prototype.has(employees[i]["id"]))                               // if the map key does not exisit enter if.
//                    {
//                       //myMap.set(employees[i]["id"],employees[i].availability[j]["day"]);       // create a new map key
//                   console.log("inside if");
//                    }
//                    else
//                    {
//                       console.log("inside else");
//                    //var a = myMap.get(employees[i]["id"]);                                     // if the key already exisits then save the value to a
//                   // a += (" " + employees[i].availability[j]["day"]);       // add the previous value to the new availability and put a space between
//                    }
//                }
//             }
//        }
//        console.log("i am at bottom of setAvailability");
//        console.log(myMap);
//    }