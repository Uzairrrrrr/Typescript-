var message = 'eric no';
console.log("UpperCase: " + message.toUpperCase());
console.log("LowerCase: " + message.toLowerCase());
console.log("Titlecase: " + toTitleCase(message));
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
