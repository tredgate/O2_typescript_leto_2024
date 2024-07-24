import usersData from "./users_exercise.json";

export {};

const user = usersData.users[1];

const userId = user.id;
const userName = user.name;
const email = user.email;
const longAddress = `${user.address.street}, ${user.address.postalCode} ${user.address.city}, ${user.address.state}`;

console.log(
  `Uživatel s id: ${userId}, jménem: ${userName}, emailem: ${email} a adresou: "${longAddress}"`
);
