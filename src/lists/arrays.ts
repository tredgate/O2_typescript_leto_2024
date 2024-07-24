let array: string[] = ["first", "second", "third"];

console.log(array);
console.log(array[0]);

for (let i = 0; i < array.length; i++) {
  console.log("Cyklíme array, index: " + i + " prvek: " + array[i]);
}

const array2: string[] = ["a", "b"];
array2.push("c");
console.log(array2);

const readOnlyArray: readonly string[] = ["a", "b"];
// readOnlyArray.push("c");
