import { Vehicle } from "./vehicle_fluent";

export class Car extends Vehicle {
  private maxPassengers: number;
  private currentPassengers: number = 0;

  constructor(
    maxSpeed: number,
    lightsType: string,
    maxPerfomance: number,
    vehicleName: string,
    maxPassengers: number
  ) {
    super(maxSpeed, lightsType, maxPerfomance, vehicleName);
    this.maxPassengers = maxPassengers;
  }

  loadPassengers(passengers: number): Car {
    if (this.currentPassengers + passengers <= this.maxPassengers) {
      this.currentPassengers += passengers;
      console.log(`Naloženo ${passengers} pasažérů do ${this.vehicleName}.`);
    } else {
      console.log(
        `Nelze naložit ${passengers} pasažérů do ${this.vehicleName}, překročen počet sedadel.`
      );
    }
    return this;
  }

  unloadPassengers(passengers: number): Car {
    if (this.currentPassengers - passengers >= 0) {
      this.currentPassengers -= passengers;
      console.log(`Vyloženo ${passengers} pasažérů z ${this.vehicleName}.`);
    } else {
      console.log(
        `Nelze vyložit ${passengers} pasažérů, v ${this.vehicleName} není dostatek pasažérů.`
      );
    }
    return this;
  }
}
