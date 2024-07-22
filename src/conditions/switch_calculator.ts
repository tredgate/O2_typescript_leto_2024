let operation: string = "addd";
const a: number = 10;
const b: number = 23;
let operationResult: number;

switch (operation) {
  case "add":
    operationResult = a + b;
    break;
  case "subtract":
    operationResult = a - b;
    break;
  case "multiply":
    operationResult = a * b;
    break;
  case "divide":
    if (b !== 0) {
      operationResult = a / b;
    } else {
      throw new Error("Nelze dělit nulou!");
    }
    break;
  default:
    throw new Error("Špatná operace!");
}

console.log(`Výsledek operace: ${operation} je: ${operationResult}`);
