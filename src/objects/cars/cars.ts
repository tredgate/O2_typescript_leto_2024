import { CarBlueprint } from "./car_blueprint";

const dieselCar = new CarBlueprint("červená", "1.4 TDI", "diesel");
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("modrá", "EV 160 kW", "elektřina");
electricCar.logCarProperties();

dieselCar.repaint("modrá");
dieselCar.logCarProperties();
console.log(dieselCar.getColor());
