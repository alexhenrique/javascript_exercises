function order(words){
  let strSplit =  words.split(" ")
  let strSaida = []
  let numberOnly = words.replace(/\D+/g, '').split('');
  for (let i = 1; i <= numberOnly.length; i++){
    let k = numberOnly.indexOf(i.toString())
    strSaida.push (strSplit[k])
    
  }
  return strSaida.join(' ')
}

console.log(order("is2 Thi1s T4est 3a"))//, "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))//, "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order(""))//, "", "empty input should return empty string" )