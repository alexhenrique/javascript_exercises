/* function solution(statues) {
    let tam = statues.length;
    let min = Math.min(...statues);
    let max = Math.max(...statues);
    return (max - min)-tam+1;
}
*/

solution = statues => Math.max(...statues) - Math.min(...statues) - statues.length + 1;

//https://app.codesignal.com/arcade/intro/level-2/bq2XnSr5kbHqpHGJC