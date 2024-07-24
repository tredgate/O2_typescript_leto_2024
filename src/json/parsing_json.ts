const jsonString = `{
   "name": "John",
   "age": 30,
   "cars": {
      "car1": "Ford",
      "car2": "BMW",
      "@car3": "Fiat"
   },
   "friends": ["Jane", "Tom", "Anna"]
   }`;

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);

const userName = jsonObject.name;
const userAge = jsonObject.age;

console.log(`Users name: ${userName}`);
console.log(`Users age: ${userAge}`);

const userCar1 = jsonObject.cars.car1;
const userCar3 = jsonObject.cars["@car3"];
console.log(userCar1);
console.log(userCar3);

const firstFriend = jsonObject.friends[0];
console.log(firstFriend);
