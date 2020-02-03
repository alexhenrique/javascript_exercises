findNextSquare = sq => Math.sqrt(sq) === Math.floor(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1;

console.log(findNextSquare(121));
