const futureTrafficLight: string = "green";
let actualColor = "yellow";
let previousColor;

switch (futureTrafficLight) {
  case "green":
    previousColor = actualColor;
    actualColor = "green";
    break;
  case "red":
    previousColor = actualColor;
    actualColor = "red";
    break;
  case "yellow":
    previousColor = actualColor;
    actualColor = "yellow";
    break;
  default:
    throw new Error("Unknown traffic light color");
}

console.log(
  `Traffic lights changing color from: ${previousColor} to ${actualColor}`
);
