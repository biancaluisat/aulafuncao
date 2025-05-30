function ehPalindromo(palavra) {
  const palindromo = palavra.split('');
  let inverter = '';

  for (let i = palindromo.length - 1; i >= 0; i--) {
    inverter += palindromo[i];
  }

  if (inverter.toLowerCase() === palavra.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(ehPalindromo('Arara'));
