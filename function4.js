function inverteString(str) {
  const nome = str.split('');
  let inverter = '';

  for (let i = nome.length - 1; i >= 0; i--) {
    inverter += nome[i];
  }
  return inverter;
}

console.log(inverteString('Thiago'));
console.log(inverteString('JavaScript'));
