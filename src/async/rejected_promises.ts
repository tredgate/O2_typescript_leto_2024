// ? Vytvoříme funkci mightFail, která bude vracet Promise, který se vyřeší po 1 sekundě. Pokud bude zadané číslo menší než 0, Promise bude odmítnut.
function mightFail(value: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 0) {
        reject("Negative value is not allowed");
      } else {
        resolve(`Hodnota je: ${value}`);
      }
    }, 1000);
  });
}

console.log("Zpracovávám hodnotu: -1...");
// ? Zavolání funkce mightFail se záporným číslem, které způsobí odmítnutí Promise.
mightFail(-1)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Chytám chybu");
    console.error("Error:", error);
  });

console.log("Zpracovávám hodnotu: 10...");
// ? Zavolání funkce mightFail s kladným číslem, které vyřeší Promise.
mightFail(10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
