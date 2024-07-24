import { Vehicle } from "./vehicle";

export class Van extends Vehicle {
  private maxLoad: number;
  private currentLoad: number = 0;

  constructor(
    maxSpeed: number,
    lightsType: string,
    maxPerfomance: number,
    vehicleName: string,
    maxLoad: number
  ) {
    super(maxSpeed, lightsType, maxPerfomance, vehicleName);
    this.maxLoad = maxLoad;
  }

  loadCargo(cargoWeight: number): void {
    if (this.currentLoad + cargoWeight <= this.maxLoad) {
      this.currentLoad += cargoWeight;
      console.log(
        `Naloženo: ${cargoWeight} kg zboží do dodávky: ${this.vehicleName}. Celková hmotnost nákladu: ${this.currentLoad}.`
      );
    } else {
      console.log(
        `Nelze naložit ${cargoWeight} kg zboží do ${
          this.vehicleName
        }, byla by překročena nosnost o ${
          this.currentLoad + cargoWeight - this.maxLoad
        } kg`
      );
    }
  }

  unloadCargo(cargoWeight: number): void {
    if (this.currentLoad - cargoWeight >= 0) {
      this.currentLoad -= cargoWeight;
      console.log(`Vyloženo ${cargoWeight} kg zboží z ${this.vehicleName}.`);
    } else {
      console.log(
        `Nelze vyložit ${cargoWeight} kg zboží z ${this.vehicleName}, ve vozidle není dostatek zboží.`
      );
    }
  }
}
