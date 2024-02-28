const ConversorDeBitcoin = require('../js/index.js');

test('ConversorDeBitcoin', () => {
    const bitcoin = 2;
    const calcreal = ConversorDeBitcoin(bitcoin);
    expect(calcreal).toBe(607228.22);
});
