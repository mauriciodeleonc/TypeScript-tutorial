class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get = (index: number): number => {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get = (index: number): string => {
        return this.collection[index];
    }
}

class ArrayOfAnything<T> {
    constructor(public collection: T[]) {}

    get = (index: number): T => {
        return this.collection[index];
    } 
}

new ArrayOfAnything<string>(['a','b']);

//  Example of generics with functions
const printAnything = <T>(arr: T[]): void => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b']);

// Generic constraints

class Car implements Printable {
    print = () => {
        console.log('I am a car');
    }
}

interface Printable {
    print(): void;
}

const printHorCM = <T extends Printable>(arr: T[]): void => {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHorCM<Car>([new Car(), new Car()]);