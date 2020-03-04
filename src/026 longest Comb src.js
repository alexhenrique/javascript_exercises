//https://www.codewars.com/kata/5715508de1bf8174c1001832/train/javascript
function longestComb(arr, command) {
  let str = []
  for (let i = 0; i < arr.length; i++){
    let k = i + 1;
    let tmpStr = [];
    tmpStr.push(arr[i]);
    while(k != arr.length){
      if (command == '< <'){
        if (tmpStr[tmpStr.length-1] < arr[k]){
          tmpStr.push(arr[k]);
        }
      }
      if (command == '> >'){
        if (tmpStr[tmpStr.length-1] > arr[k]){
          tmpStr.push(arr[k]);
        }
      }      
      k++;
    }
    if (tmpStr.length > 2){
        str.push(tmpStr);
    }
  }
  return str
}
let arr1 = [-1, 3, -34, 18, -55, 60, 118, -64];
let comm1 = '< <';
console.log(longestComb(arr1, comm1))// [-1, 3, 18, 60, 118]
let arr2 = [-1, 3, -34, 18, -55, 60, 118, -64];
let comm2 = '> >';
console.log(longestComb(arr2, comm2))// [[-1, -34, -55, -64], [3, -34, -55, -64]]
let arr3 = [-26, 26, -36, 17, 12, 12, -10, -21];
let comm3 = '< <';
console.log(longestComb(arr3, comm3))// []
let arr4 = [-22, 40, -45, -43, -1, 7, 43, -56];
let comm4 = '> >';
console.log(longestComb(arr4, comm4))// [-22, -45, -56]
