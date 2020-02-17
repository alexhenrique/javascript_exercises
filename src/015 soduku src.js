function solution(grid) {
  let conta = 0;
  let valores = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      conta += grid[j][i];
      valores.push(grid[j][i]);
    }
    valores.sort();
    for (let j = 0; j < 9; j++) {
      if (valores[j] !== j + 1) {
        return false;
      }
    }

    if (conta !== 45) {
      return false;
    }
    valores = [];
    conta = 0;
  }
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      conta += grid[j][i];
      valores.push(grid[j][i]);
    }
    valores.sort();
    for (let i = 0; i < 9; i++) {
      if (valores[i] !== i + 1) {
        return false;
      }
    }

    if (conta !== 45) {
      return false;
    }
    valores = [];
    conta = 0;
  }
  for (let i = 0; i < 9;) {
    for (let j = 0; j < 9;) {
      valores = [];
      conta = 0;
      for (let k = 0; k < 3; k++) {
        for (let v = 0; v < 3; v++) {
          conta += grid[j + k][i + v];
          valores.push(grid[j + k][i + v]);
        }
      }
      valores.sort();

      for (let b = 0; b < 9; b++) {
        if (valores[b] !== b + 1) {
          return false;
        }
      }
      if (conta !== 45) {
        return false;
      }
      j += 3;
    }
    i += 3;
  }
  return true;
}

const a = [[1,3,2,5,4,6,9,8,7], 
 [4,6,5,8,7,9,3,2,1], 
 [7,9,8,2,1,3,6,5,4], 
 [9,2,1,4,3,5,8,7,6], 
 [3,5,4,7,6,8,2,1,9], 
 [6,8,7,1,9,2,5,4,3], 
 [5,7,6,9,8,1,4,3,2], 
 [2,4,3,6,5,7,1,9,8], 
 [8,1,9,3,2,4,7,6,5]];//true

 const b = [[1,3,2,5,4,6,9,2,7], 
 [4,6,5,8,7,9,3,8,1], 
 [7,9,8,2,1,3,6,5,4], 
 [9,2,1,4,3,5,8,7,6], 
 [3,5,4,7,6,8,2,1,9], 
 [6,8,7,1,9,2,5,4,3], 
 [5,7,6,9,8,1,4,3,2], 
 [2,4,3,6,5,7,1,9,8], 
 [8,1,9,3,2,4,7,6,5]]//false

 console.log(solution(a))
 console.log(solution(b))