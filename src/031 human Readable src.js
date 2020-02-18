function humanReadable(valor) {
  let hou = 0
  let min = 0
  let secc = 0
  while (valor > 0) {
    if (3599 < valor) {
      valor -= 3600
      hou++
    } else if (59 < valor) {
      valor -= 60
      min++
    } else {
      secc = valor;
      valor = 0;
    }
  }
  let tmphou = (hou / 100).toFixed(2).split('')
  let tmpmin = (min / 100).toFixed(2).split('')
  let tmpsecc= (secc / 100).toFixed(2).split('')
  let temphou = tmphou[2] + tmphou[3]
  let tempmin = tmpmin[2] + tmpmin[3]
  let tempsecc = tmpsecc[2] + tmpsecc[3]
  let final = `${temphou}:${tempmin}:${tempsecc}`
  return final
}

console.log(humanReadable(0))
console.log(humanReadable(59))
console.log(humanReadable(60))
console.log(humanReadable(90))
console.log(humanReadable(3599))
console.log(humanReadable(3600))
console.log(humanReadable(45296))
console.log(humanReadable(86399))
console.log(humanReadable(86400))
console.log(humanReadable(359999))