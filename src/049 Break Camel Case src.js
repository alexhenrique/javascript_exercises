function solution(string) {
    let strout = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            strout.push(" ");
        }
        strout.push(string[i]);
    }
    return strout.join('');
}

console.log(solution('camelCasing'))//, 'camel Casing'
console.log(solution('camelCasingTest'))//, 'camel Casing Test'