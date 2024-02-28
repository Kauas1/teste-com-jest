const ConversorDeTemperatura = require('../js/index.js');

test('ConversorDeTemperatura', () => {
    const tempEmCelsius = 30;
    const tempEmFahrenheit = ConversorDeTemperatura(tempEmCelsius);
    expect(tempEmFahrenheit).toBe(86);
});
