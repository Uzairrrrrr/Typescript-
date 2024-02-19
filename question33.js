var values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var value = values_1[_i];
    if (value === 1) {
        console.log("".concat(value, "st"));
    }
    else if (value === 2) {
        console.log("".concat(value, "nd"));
    }
    else if (value === 3) {
        console.log("".concat(value, "rd"));
    }
    else {
        console.log("".concat(value, "th"));
    }
}
