// 24.2 -> "R$ 24,2 bi"
export function formatBi(valor) {
  return `R$ ${valor.toFixed(1).replace('.', ',')} bi`;
}

// 1247 -> "1.247" | 52.4 (2 casas) -> "52,4"
export function formatNumero(valor, decimals = 0) {
  return valor.toLocaleString('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
