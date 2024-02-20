function make_shirt(size: string = 'large', message: string = 'I Love Typescript'): void{
    console.log(`You order ${size} shirt with this "${message}" message.`);
}
make_shirt();
make_shirt('medium');
make_shirt('small', 'I Love Python');