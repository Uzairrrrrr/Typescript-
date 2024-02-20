const magians_name: string[] = ['Magnus', 'Aurora'];
function show_magicians(magians_name: string[]): void {
    magians_name.forEach(name => {
        console.log(name);
    });
}
show_magicians(magians_name)