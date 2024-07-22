const actualPoints = 75;
const minPoints = 75;
const studentName = "Josefína Müllerová";

if (actualPoints >= minPoints) {
  console.log(
    `Student/ka: ${studentName} úspěšně splnil/a požadavky na ukončení studia se ziskem: ${actualPoints} bodů z minimálního počtu: ${minPoints} bodů.`
  );
} else {
  console.log(
    `Student/ka: ${studentName}  nesplnil/a požadavky na ukončení studia se ziskem: ${actualPoints} bodů z minimálního počtu: ${minPoints} bodů.`
  );
}
