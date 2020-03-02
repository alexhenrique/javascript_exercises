function capitalize(str) {
    let fra = str.split('');
    fra[0] = fra[0].toUpperCase()
    for (let i = 1; i < fra.length; i++){
        if (fra[i-1] == ' '){
            fra[i] = fra[i].toUpperCase()
        }
    }
    return fra.join('')
}



// function capitalize(str) {
//     let spt = str.split(' ');
//     let strg = [];
//     for (let i = 0; i < spt.length; i++){
//         strg.push(spt[i][0].toUpperCase())
//         for (let k = 1; k <spt[i].length; k++){
//             strg.push(spt[i][k])
//         }
//         if (i < spt.length-1){
//             strg.push(' ')
//         }
//     }
//     return strg.join('')
// }

console.log(capitalize("i love breakfast at bill miller bbq"));