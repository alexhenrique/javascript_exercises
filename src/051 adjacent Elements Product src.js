function solution(inputArray) {
  let tam = inputArray.length;
  let max=inputArray[0]*inputArray[1];    
  for (i=1;i<tam;i++){
      let calc=inputArray[i]*inputArray[i-1];
      if(max<calc){
          max=calc;
      }
  }
  return max;
}

//https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m