
const valorCusto = 2;
const valorVenda = 3;

if (valorCusto >= 0 && valorVenda >= 0) {
  const valorCustoTotal = valorCusto * 1.2;
  const lucroTotal = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucroTotal);
} else {
  console.log("Error, os valores não podem ser negativos");
};