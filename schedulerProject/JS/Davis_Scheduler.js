class User{
   constructor(userName){
      this.userName = userName;
   }

   
}

class scheduleItem{
    constructor(name, time, place, length){
    this.time = time;
    this.name = name;
    this.place = place;
    this.length = length;
    }

}

let davis = new User("davis");
davis.itemsArray = new Array();
davis.itemsArray[0] = new scheduleItem("class", "6:00", "DaVinci", 3);
davis.itemsArray[1] = new scheduleItem("lunch", "12:00", "home", 1);

console.log(user.scheduleItems);

function newEvent(userName, ){


}