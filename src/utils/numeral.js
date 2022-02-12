import numeral from 'numeral';

export const numFormatter = (num) => {
  numeral.locale('es')
  const result = numeral(num).format('0,0')
  return result
}