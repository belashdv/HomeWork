//Task 1
class Car {
    constructor (public carBrand: string, public engineType: string){
    }
    showInfo() {
        return `This is ${this.carBrand}. It has ${this.engineType} engine.`
    }
}

class LuxuryCar extends Car {
    constructor (carBrand: string, engineType: string, public maxSpeed: number, public price: number) {
        super(carBrand, engineType)}   
    showInfo(){
        return `This is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}km/h. Approximetly cost of the car is ${this.price}$`
    }

}

class SportCar extends Car {
    constructor (carBrand: string, engineType: string, public maxSpeed: number, public price: number) {
        super(carBrand, engineType)}   
    showInfo(){
        return `This is ${this.carBrand}. It has ${this.engineType} engine and max speed equal to ${this.maxSpeed}km/h. Approximetly cost of the car is ${this.price}$`
    }

}

const bentleyContinentalGT = new LuxuryCar('Bentley', 'gasoline', 333, 156700);
console.log(bentleyContinentalGT.showInfo());
const bugattiChiron = new SportCar('Bugatti', 'gasoline', 440, 9500000);
console.log(bugattiChiron.showInfo());

//Task 2
class Human {
    constructor(public name: string, ) {}
    sayName(){
        return `My name is ${this.name}`
    }
}

const mike = new Human('Mike');
const john = new Human('John');
console.log(mike.sayName());
console.log(john.sayName());

//Task 3
class Car2 {
    constructor(public doors:number, public wheelsSide:string){}
    showInfo2(){
        return `This car has ${this.doors} doors and this is ${this.wheelsSide}-hand drive car`
    }
}
const bmw116d = new Car2(3,"left");
const vwVan = new Car2(5,"left");
const lexus = new Car2(5,"right");
console.log(bmw116d.showInfo2());
console.log(vwVan.showInfo2());
console.log(lexus.showInfo2());