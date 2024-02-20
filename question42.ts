function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`The Great ${magicians[i]}`);
    }
}

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

let magicians: string[] = ['Magnus', 'Aurora'];

make_great(magicians);

show_magicians(magicians);