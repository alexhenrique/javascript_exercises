
makeArrayConsecutive2 = statues => Math.max(...statues) - Math.min(...statues) - statues.length + 1;

console.log(makeArrayConsecutive2([1, 3, 4, 120]))