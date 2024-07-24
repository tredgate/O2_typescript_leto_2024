import { Vehicle } from "./vehicle_fluent";

export class Motorcycle extends Vehicle {
  private tricks: string[];

  constructor(
    maxSpeed: number,
    lightsType: string,
    maxPerfomance: number,
    vehicleName: string,
    tricks: string[]
  ) {
    super(maxSpeed, lightsType, maxPerfomance, vehicleName);
    this.tricks = tricks;
  }

  performTrick(trick: string): Motorcycle {
    if (this.tricks.includes(trick)) {
      console.log(`Motorka ${this.vehicleName} provedla trik ${trick}.`);
    } else {
      console.log(`Motorka ${this.vehicleName} neumí trik ${trick}.`);
    }
    return this;
  }
}
