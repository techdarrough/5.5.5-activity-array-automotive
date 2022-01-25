import Vehicle from "./vehicle.js";

class Car extends Vehicle {
    constructor(make, model, year, colo, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.fuel = 10;
        this.scheduledService = false;
    }

    start ()
    {
        if( this.fuel > 0) {this.start = true}
        else     
        { console.log(`${this.make} ${this.model} is out of fuel`)}        
    };
   
    loadPassenger (num) 
    {
        if (this.passenger <= this.maxPassengers) 
        {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger == num;
                return this.passenger;
            }
        } else {`${this.make} ${this.model} Cannot fit that many passenger, Please sacerfice at least ${this.maxPassengers - this.passenger} to proceed`}
    };

    scheduleService (mileage) {
        if (mileage >= 30000) {
            this.scheduleService == true;
            return this.scheduleService;
        } 
        else 
        {
            console.log(`${model} ${make} service is not due for another ${30000 - mileage}`)
        }
    }
    
}


//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)