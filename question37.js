function make_shirt(size, message) {
    if (size === void 0) { size = 'large'; }
    if (message === void 0) { message = 'I Love Typescript'; }
    console.log("You order ".concat(size, " shirt with this \"").concat(message, "\" message."));
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I Love Python');
