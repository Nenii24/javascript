function fizzBuzz(n) {
  // Rechazar: vacío, NaN, no números, negativos, cero o decimales
  if (
    n === undefined ||
    n === null ||
    typeof n !== "number" ||
    Number.isNaN(n) ||
    n <= 0 ||
    !Number.isInteger(n)
  ) {
    throw new Error(
      "El parámetro 'n' debe ser un número entero positivo mayor a 0.",
    );
  }

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i}: FizzBuzz`);
    } else if (i % 3 === 0) {
      console.log(`${i}: Fizz`);
    } else if (i % 5 === 0) {
      console.log(`${i}: Buzz`);
    } else {
      console.log(`${i}: ${i}`);
    }
  }
}

console.log("\n--- PRUEBA B: FIZZBUZZ ---");
try {
  const limite = 15;
  console.log(`Ejecutando FizzBuzz hasta ${limite}:`);
  fizzBuzz(limite);
} catch (error) {
  console.error(`Error en FizzBuzz: ${error.message}`);
}
