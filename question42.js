function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("The Great ".concat(magicians[i]));
    }
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Example usage:
var magicians = ['Magnus', 'Aurora'];
make_great(magicians);
show_magicians(magicians);
