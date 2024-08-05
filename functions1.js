function printName() {
  let name = "Abdulaziz Murad";
  console.log(name);
}
printName();
function printAge(birthYear) {
  let age = 2024 - birthYear;
  console.log(`your are ${age} years old. `);
}
printAge(2001);
function printAgeAndName(birthYear, name) {
  console.log(` Hello ${name} you are ${2024 - birthYear} years old`);
}

printAgeAndName(2001, "abdulaziz");

function printHello(name, language) {
  if (language == "en" || language == "english" || language == "English") {
    console.log(`Hello ${name}`);
  } else if (language == "fr" || language == "french" || language == "French") {
    console.log(`Bonjour ${name}`);
  } else if (
    language == "es" ||
    language == "espaniol" ||
    language == "Espaniol"
  ) {
    console.log(`Hola ${name}`);
  } else if (
    language == "tr" ||
    language == "Turkish" ||
    language == "turkish"
  ) {
    console.log(`Merhaba ${name}`);
  }
}

printHello("abdulaziz", "English");
printHello("abdulaziz", "turkish");
printHello("abdulaziz", "es");
printHello("abdulaziz", "fr");

function printMax(number1, number2) {
  if (number1 > number2) {
    console.log(`first value is greater and it is:${number1}`);
  } else if (number2 > number1) {
    console.log(`second value is greater and it is:${number2}`);
  } else if (number1 == number2) {
    console.log(
      `Both numbers are equal, the values you entered were:${number1} ${number2}`
    );
  }
}
printMax(2, 3);
printMax(3, 2);
printMax(1, 1);
