

const ComparaSenhas = require('..js/index.js');

test('Senhas iguais', () => {
  expect(ComparaSenhas('senha123', 'senha123')).toBe('Senhas iguais. Sucesso!');
});

test('Senhas diferentes', () => {
  expect(ComparaSenhas('senha123', 'outraSenha')).toBe('Erro: Senhas diferentes.');
});
