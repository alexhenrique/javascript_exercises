const minuto = 60
const hora = 60 * minuto
const dia = 24 * hora
const mes = dia * 30
const ano = 365 * dia
const decada = ano * 10
const seculo = decada * 10
const milenio = seculo * 10
console.log(minuto)
console.log(hora)
console.log(dia)
console.log(mes)
console.log(ano)
console.log(decada)
console.log(seculo)
console.log(milenio)
function diashoras(valor) {
  let MIL = 0
  let SEC = 0
  let DEC = 0
  let YEA = 0
  let DAY = 0
  let hou = 0
  let min = 0
  let MON = 0
  let secc = 0
  while (valor > 0) {
    if (milenio < valor) {
      valor -= milenio
      MIL++
    } else if (seculo < valor) {
      valor -= seculo
      SEC++
    } else if (decada < valor) {
      valor -= decada
      DEC++
    } else if (ano < valor) {
      valor -= ano
      YEA++
    } else if (mes < valor) {
      valor -= mes
      MON++
    } else if (dia < valor) {
      valor -= dia
      DAY++
    } else if (hora < valor) {
      valor -= hora
      hou++
    } else if (minuto < valor) {
      valor -= minuto
      min++
    } else if (valor >= 1) {
      valor -= 1
      secc++
    }
  }
  return { MIL, SEC, DEC, YEA, MON, DAY, hou, min, secc }
}
//                    Q  T  B  M  m  
console.log(diashoras(20000000000))
