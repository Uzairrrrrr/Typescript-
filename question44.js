function sandwich() {
    var sandwich_items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwich_items[_i] = arguments[_i];
    }
    if (sandwich_items.length === 0) {
        console.log(" - No items selected");
    }
    else {
        sandwich_items.forEach(function (items) {
            console.log(" - ".concat(items));
        });
    }
}
sandwich();
sandwich('cheese', 'tomato', 'lettuce');
sandwich('ham', 'mayonnaise');
sandwich('peanut butter', 'jelly', 'banana');
