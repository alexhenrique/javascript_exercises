function SeriesSum(t) {
  switch (t) { 
    case 0: return "0.00"; 
    default: { 
      let e = 4;
      let r = 1; 
      for (let n = 1; n < t; n++){
        r += 1 / e;
        e += 3;
      } 
      return r.toFixed(2) 
    } 
  } 
}

console.log(SeriesSum(0))//, "0.00"
console.log(SeriesSum(1))//, "1.00"
console.log(SeriesSum(2))//, "1.25"
console.log(SeriesSum(3))//, "1.39"
console.log(SeriesSum(4))//, "1.49"
console.log(SeriesSum(5))//, "1.57"
console.log(SeriesSum(58))//,"2.40"