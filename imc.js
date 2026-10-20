function calcularIMC(peso, altura) {
  // Validar que sean números válidos y mayores que 0
    if (
    typeof peso !== "number" ||
    typeof altura !== "number" ||
    Number.isNaN(peso) ||
    Number.isNaN(altura) ||
    peso <= 0 ||
    altura <= 0
    ) {
    throw new Error("El peso y la altura deben ser números mayores que 0.");
    }

  return peso / altura ** 2;
}

function clasificarIMC(imc) {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
}

console.log("--- PRUEBA A: CALCULADORA DE IMC ---");
try {
  const peso = 72;     // en kg
  const altura = 1.78; // en metros

  const imc = calcularIMC(peso, altura);
  const categoria = clasificarIMC(imc);

  console.log(`Con un peso de ${peso}kg y una altura de ${altura}m:`);
  console.log(`Tu IMC es ${imc.toFixed(2)} y tu categoría es "${categoria}".`);
} catch (error) {
  console.error(`Error en IMC: ${error.message}`);
}