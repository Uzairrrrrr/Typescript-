const guestList: string[] = ["Faizan", "Ali", "Owais"];

guestList.forEach(person => {
    console.log(`Dear ${person}, I would be honored to have you join me for dinner.`);
});
const personnotcomming : string = "Ali";
console.log(`${personnotcomming} is not comming`);

const newguest: string = "Ahmed"
const index = guestList.indexOf(personnotcomming);
if (index !== -1){
    guestList[index] = newguest;
}
guestList.forEach(person => {
    console.log(`Dear ${person}, I would be honored to have you join me for dinner.`);
});