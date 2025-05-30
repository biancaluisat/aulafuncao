function maiorDeTres(a, b, c) {
  let valores = [a, b, c];
  let maior = valores[0];

  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > maior) {
      maior = valores[i];
    }
  }
  return console.log(maior);
}

maiorDeTres(5, 9, 2);
maiorDeTres(-3, -7, -1);
