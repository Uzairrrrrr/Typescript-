var guestList = ["Faizan", "Ali", "Owais"];
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", I would be honored to have you join me for dinner."));
});
var personnotcomming = "Ali";
console.log("".concat(personnotcomming, " is not comming"));
var newguest = "Ahmed";
var index = guestList.indexOf(personnotcomming);
if (index !== -1) {
    guestList[index] = newguest;
}
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", I would be honored to have you join me for dinner."));
});
