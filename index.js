let normalString = "Joao"; // String a ser invertida
let invertString = "";

for (let i = normalString.length - 1; i >= 0; i--) {
  invertString += normalString[i];
}

console.log(invertString); // Imprime a string invertida