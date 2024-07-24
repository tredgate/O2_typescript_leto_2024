export abstract class Vehicle {
  protected maxSpeed: number;
  protected lightsType: string;
  protected maxPerfomance: number;
  protected vehicleName: string;
  protected isRunning: boolean = false;

  constructor(
    maxSpeed: number,
    lightsType: string,
    maxPerfomance: number,
    vehicleName: string
  ) {
    this.maxSpeed = maxSpeed;
    this.lightsType = lightsType;
    this.maxPerfomance = maxPerfomance;
    this.vehicleName = vehicleName;
  }

  startEngine() {
    if (!this.isRunning) {
      console.log(`${this.vehicleName} startuje. Motor běží.`);
      this.isRunning = true;
    } else {
      console.log(`${this.vehicleName} už je nastartované.`);
    }
    return this;
  }

  stopEngine() {
    if (this.isRunning) {
      console.log(`${this.vehicleName} se vypíná. Motor se zastavuje.`);
      this.isRunning = false;
    } else {
      console.log(`${this.vehicleName} už je vypnuté.`);
    }
    return this;
  }

  honk() {
    console.log(`${this.vehicleName} troubí.`);
    return this;
  }

  getInfoAboutVehicle() {
    console.log(
      `Toto je vozidlo ${this.vehicleName}. Maximální rychlost je ${this.maxSpeed} km/h, typ světel je ${this.lightsType} a maximální výkon je ${this.maxPerfomance} kW.`
    );
    return this;
  }

  driveTo(targetPlace: string, distance: number) {
    if (this.isRunning) {
      const eta = Math.round((distance / this.maxSpeed) * 60);
      console.log(
        `${this.vehicleName} cestuje do ${targetPlace}, bude tam za ${eta} minut.`
      );
    } else {
      console.log(
        `Není možné cestovat s ${this.vehicleName}, když není nastartováno!`
      );
    }
    return this;
  }
}
