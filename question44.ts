function sandwich(...sandwich_items: string[]){
    if (sandwich_items.length === 0) {
        console.log(" - No items selected");
    } else {
        sandwich_items.forEach(items => {
            console.log(` - ${items}`);
        });
    }
}
sandwich()
sandwich('cheese', 'tomato', 'lettuce');
sandwich('ham', 'mayonnaise');
sandwich('peanut butter', 'jelly', 'banana');