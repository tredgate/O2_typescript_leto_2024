const actualAge = -5;
const drinkingAgeLimit = 18;
const fullName = "Josef Nový";

if (actualAge >= drinkingAgeLimit) {
  console.log(fullName + " už může pít alkohol.");
} else if (actualAge >= 0) {
  console.log(
    `${fullName} ještě nemůže pít alkohol. Chybí mu ještě ${
      drinkingAgeLimit - actualAge
    } let.`
  );
} else {
  console.log("Neplatný věk");
}
