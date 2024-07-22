function logText() {
  console.log("Ahoj světe!");
}

logText();
logText();
logText();
logText();

function logTextParam(text: string) {
  console.log("Předaný parametr: " + text);
}

logTextParam("Programujeme v TS!");
logTextParam("1234");
