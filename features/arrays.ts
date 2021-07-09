const carMakers = ['ford', 'toyota', 'chevrolet'];
const dates = [new Date(), new Date()];
const carsByMake = [
    ['f150'],
    ['corola'],
    ['camaro'],
];

// Help with inference when extracting values
let car: string | Car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('abc');
importantDates.push(new Date());

