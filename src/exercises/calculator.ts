function add(a: number, b: number) {
  const result = a + b;
  console.log(`Výsledek sčítání: ${a} + ${b} = ${result} `);
}

const subtract = (a: number, b: number) => {
  const result = a - b;
  console.log(`Výsledek odčítání: ${a} - ${b} = ${result} `);
};

function multiply(a: number, b: number) {
  const result = a * b;
  console.log(`Výsledek násobení: ${a} * ${b} = ${result} `);
}

const divide = (a: number, b: number) => {
  const result = a / b;
  console.log(`Výsledek dělení: ${a} / ${b} = ${result} `);
};

add(15, 48);
subtract(98, 41);
multiply(54, 30);
divide(88, 6);
add(2, 5);

export default multiply;
