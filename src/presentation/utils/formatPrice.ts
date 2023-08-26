export const formatPrice = (value: number) => {
  // Defina o tipo para number
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
