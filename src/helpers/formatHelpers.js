const formatterCoin = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const formatterPercent = Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatCoin(value) {
  const valueNumber = parseFloat(value);
  return formatterCoin.format(valueNumber);
}

function formatPercent(value) {
  const valueNumber = parseFloat(value) / 100;
  return formatterPercent.format(valueNumber);
}

export { formatCoin, formatPercent };
