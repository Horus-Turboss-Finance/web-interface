export const formatBegginWord = (entit : string) => {
  return entit.split('_')
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

export const balanceSpaces = (balance : number) => {
  return `${
  Number(balance.toFixed(0)).toLocaleString() + 
  (`${balance}`.indexOf('.') !== -1 ? '.' + (Number(`${balance}`).toFixed(2).slice(`${balance}`.indexOf(".")+1)) : '.00')} €`
}