// Choose void for type because it is returning a console message
function make_shirt(size: string, message: string): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

make_shirt('medium', 'I love coding!');
