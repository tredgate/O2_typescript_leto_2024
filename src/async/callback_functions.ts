function greet(name: string, callback: (message: string) => void) {
  console.log("uvnitř funkce greet");
  const message = `Ahoj, ${name}!`;
  callback(message);
}

greet("Pepa", (message) => {
  console.log("funkce callback byla zavolána");
  console.log(message);
});

export {};
