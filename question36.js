// Choose void for type because it is returning a console message
function make_shirt(size, message) {
    console.log("You have ordered a ".concat(size, "-sized shirt with the message: \"").concat(message, "\"."));
}
make_shirt('medium', 'I love coding!');
