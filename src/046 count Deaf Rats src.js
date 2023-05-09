var countDeafRats = function (town) {
  let str = town.replace(/ /g, "").split("");
  let fus = 1;
  let sur = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "P") {
      fus = 0;
      continue;
    }
    if (fus) {
      if (str[i] === "O") {
        sur++;
      }
    } else {
      if (str[i] === "~") {
        sur++;
      }
    }
    i++;
  }
  return sur;
};
console.log(countDeafRats("~O~O~O~OP~O~OO~"));
