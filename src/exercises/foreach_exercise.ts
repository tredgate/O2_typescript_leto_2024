let cities: string[] = ["Praha", "Brno", "Plzeň", "Ostrava", "Pardubice"];

cities.forEach((city, i) => {
  console.log(city);
});

// ! Challenge:
let firstNames: string[] = ["Petr", "Alena"];
let lastNames: string[] = ["LAST1", "LAST2"];

firstNames.forEach((fn, i) => {
  let ln = lastNames[i];
  console.log(`${fn} ${ln}`);
});
