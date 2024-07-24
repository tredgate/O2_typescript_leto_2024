import { Car } from "./car";
import { Motorcycle } from "./motorcycle";
import { Van } from "./van";
import { Vehicle } from "./vehicle";

const superCar = new Car(250, "LED", 250, "Super Car", 2);
const familyCar = new Car(180, "Xenon", 80, "Family Car", 5);
const postVan = new Van(130, "Halogen", 66, "Post Van", 1000);
const iceCreamVan = new Van(80, "Halogen", 44, "Zmrzlinářská dodávka", 300);
const harleyDavidson = new Motorcycle(120, "Halogen", 70, "Harley", [
  "stoppie",
  "burnout",
]);
const yamaha = new Motorcycle(320, "LED", 126, "Yamaha", [
  "backflip",
  "wheelie",
]);

superCar.getInfoAboutVehicle();
superCar.startEngine();
superCar.startEngine();
superCar.honk();
superCar.loadPassengers(10);
superCar.unloadPassengers(2);
familyCar.getInfoAboutVehicle();
familyCar.stopEngine();
postVan.loadCargo(2000);
iceCreamVan.honk();
harleyDavidson.performTrick("stoppie");
yamaha.performTrick("crash");

superCar.driveTo("Ostrava", 350);
familyCar.startEngine();
familyCar.driveTo("Ostrava", 350);
yamaha.startEngine();
yamaha.driveTo("Ostrava", 350);
