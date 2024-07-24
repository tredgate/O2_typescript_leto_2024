import data from "./data.json";

console.log(data);

console.log(data.name);
console.log(data.age);
console.log(data.isStudent);

data.courses.forEach((course) => {
  console.log(course);
});
