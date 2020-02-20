const parseInt = (nume) => {
  if (nume == 'one million') return 1000000;
  if (nume == "zero") return 0;
  const numberNames = e => { return "one" === e ? 1 : "two" === e ? 2 : "three" === e ? 3 : "four" === e ? 4 : "five" === e ? 5 : "six" === e ? 6 : "seven" === e ? 7 : "eight" === e ? 8 : "nine" === e ? 9 : "ten" === e ? 10 : "eleven" === e ? 11 : "twelve" === e ? 12 : "thirteen" === e ? 13 : "fourteen" === e ? 14 : "fifteen" === e ? 15 : "sixteen" === e ? 16 : "seventeen" === e ? 17 : "eighteen" === e ? 18 : "nineteen" === e ? 19 : "twenty" === e ? 20 : "thirty" === e ? 30 : "forty" === e ? 40 : "fifty" === e ? 50 : "sixty" === e ? 60 : "seventy" === e ? 70 : "eighty" === e ? 80 : "ninety" === e ? 90 : "hundred" === e ? 100 : "thous" === e ? 1000 : e };
  const re = /\-/gi;
  const ra = /and/gi;
  let stri = nume.replace(re, ' ').replace(ra, ' ');
  let str = [];
  stri.split(' ').forEach((o) => str.push(numberNames(o)));
  let arrEnd = str.filter(function (i) {
    return i;
  });
  for (let i = 0; i < arrEnd.length; i++ ){
    if (arrEnd[i] === 100){
      arrEnd[i] = arrEnd[i-1] * 100;
      arrEnd.splice(i-1, 1)
    }
  }
  for (let i = 0; i < arrEnd.length; i++ ){
    if (arrEnd[i] === 1000){
      let tmp = 0;
      if (arrEnd[i-3]){
        tmp += arrEnd[i-3];
        arrEnd[i-3] = 0;
      }
      if (arrEnd[i-2]){
        tmp += arrEnd[i-2] ;
        arrEnd[i-2] = 0;
      }
      tmp += arrEnd[i-1];
      arrEnd[i-1] = 0;
      tmp *=1000
      arrEnd[i] = tmp;
    }
  }
  let final = 0;
  for (let i = 0; i < arrEnd.length; i++ ){
    final += arrEnd[i];
  }
  return final;
};


console.log(parseInt("zero"));
console.log(parseInt("one"));
console.log(parseInt("ten"));
console.log(parseInt("twenty"));
console.log(parseInt("two hundred forty-six"));
console.log(parseInt("seven hundred sixty-five"));
console.log(parseInt("one hundred"));
console.log(parseInt("five hundred fifty-five"));
console.log(parseInt("one thousand one"));
console.log(parseInt("eight thousand seven hundred sixty-five"));
console.log(
  parseInt("four hundred fifty-six thousand seven hundred eighty-nine")
);
console.log(
  parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
);
console.log(parseInt("one million"));

// console.log(arraySemVazios); // [1, 2, 3, 4, 5]
