interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    let car: Car = {
        manufacturer: manufacturer,
        model: model
    };

    options.forEach(option => {
        const [key, value] = option;
        car[key] = value;
    });

    return car;
}

const myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2022]);

console.log(myCar);