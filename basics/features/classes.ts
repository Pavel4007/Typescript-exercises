class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const newVehicle = new Vehicle('orange');
console.log(newVehicle.color);

class Mycar extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);  
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const newCar = new Mycar(4, 'red');
newCar.startDrivingProcess();
