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