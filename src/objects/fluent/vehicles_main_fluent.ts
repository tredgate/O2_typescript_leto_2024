import { Car } from "./car_fluent";
import { Motorcycle } from "./motorcycle_fluent";

new Car(150, "LED", 120, "Auto", 5)
  .loadPassengers(2)
  .unloadPassengers(1)
  .startEngine()
  .startEngine()
  .startEngine()
  .stopEngine()
  .driveTo("Brno", 230);

new Motorcycle(80, "LED", 10, "Fichtl", [])
  .startEngine()
  .stopEngine()
  .driveTo("K babičce", 20)
  .honk()
  .performTrick("Wheelie");
