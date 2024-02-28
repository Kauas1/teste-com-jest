function ConversorDeTemperatura(celcius) {
  const fahrenheit = ((celcius * 9) / 5) + 32;
  return fahrenheit;
}

const tempEmCelcius = 30;
const tempEmFahrenheit = ConversorDeTemperatura(tempEmCelcius);
console.log(`${tempEmCelcius}°C é igual ${tempEmFahrenheit}°F.`);



function ConversorDeBitcoin(bitcoins) {
    const bitcoinValor = 303614.11;
    const calcreal = bitcoins * bitcoinValor;
    return calcreal;
}

// 



function ComparaSenhas(senha1, senha2) {
    if (senha1 === senha2) {
      return "Senhas iguais. Sucesso!";
    } else {
      return "Erro: Senhas diferentes.";
    }
  }
  
  module.exports = ComparaSenhas;
  
 