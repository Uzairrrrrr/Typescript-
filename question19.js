var guestList = ["Imran", "Faizan", "Sara", "Ahmed", "Owais", "Zainab"];
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", I would be honored to have you join me for dinner."));
});
console.log("Unfortunately, the new dinner table won't arrive in time. I can only invite two people for dinner.");
while (guestList.length > 2) {
    var removedPerson = guestList.pop();
    console.log("Sorry, ".concat(removedPerson, ", I can't invite you to dinner."));
}
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you're still invited to dinner."));
});
//Method how splice function works (start, deleteCount, item1, item2, ...)
guestList.splice(0, 2);
console.log("Updated guest list:", guestList);
