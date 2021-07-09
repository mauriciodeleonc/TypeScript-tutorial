class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('honk');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color);
    }
    private drive(): void {
        console.log('vroom');
    }

    public startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

car = new Car(4, 'red');
car.startDrivingProcess();