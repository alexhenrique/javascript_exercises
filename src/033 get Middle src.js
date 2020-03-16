function getMiddle(n) {
  let t = n.split(""),
    r = 0;
  if (2 == t.length) {
    return [t[0], t[1]].join("");
  }
  if (t.length % 2 == 0) {
    if (t.length > 2) {
      return (r = t.length / 2), [t[r - 1], t[r]].join("");
    }
    return [t[0]].join("");
  }
  return (r = Math.floor(t.length / 2)), [t[r]].join("");
}

console.log(getMiddle("test")); //"es");
console.log(getMiddle("alexundro")); //"t");
console.log(getMiddle("henrique")); //"dd");
console.log(getMiddle("A")); //"A");
console.log(getMiddle("BC")); //"A");
console.log(getMiddle("DEF")); //"A");
console.log(getMiddle("FGHJ")); //"A");


// function getMiddle(s) {
//   let t = s.split('');
//   let tam = t.length;
//   let tom = 0;
//   if (tam == 2) {
//     let sai = [t[0], t[1]]
//     return sai.join('')
//   }
//   if (tam % 2 === 0) {
//     if (tam > 2) {
//       tom = tam / 2;
//       let sai = [t[tom - 1], t[tom]]
//       return sai.join('')
//     }
//     else {
//       tom = Math.floor(tam / 2);
//       let sai = [t[tom]]
//       return sai.join('')
//     }
//   } else {
//     tom = Math.floor(tam / 2);
//     let sai = [t[tom]]
//     return sai.join('')
//   }
// }