function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      // ? setTimeout je funkce, která vykoná zadanou funkci po zadaném počtu milisekund.
      resolve();
    }, ms);
  });
}

console.log("Čekám 2 sekundy...");
// ? Vytvoření Promise, který se vyřeší po 2 sekundách a vypíše zprávu.
wait(2000).then(() => {
  console.log("2 sekundy uplynuly");
});
console.log("Konec programu");

// ? Nastavení funkce square, která bude vracet Promise, který se vyřeší po 1 sekundě a vrátí druhou mocninu zadaného čísla.
function square(number: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = number * number;
      resolve(result);
    }, 1000);
  });
}

console.log("Počítám druhou mocninu...");
let sqResult;
square(3).then((result) => {
  console.log(`Výsledek druhé mocniny je: ${result}`);
  sqResult = result;
});
console.log(sqResult);
export {};
