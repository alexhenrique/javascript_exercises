// https://www.codewars.com/kata/5855777bb45c01bada0002ac/train/javascript
function encodeResistorColors(ohmsString) {
	const cores = {
		0: 'black',
		1: 'brown',
		2: 'red',
		3: 'orange',
		4: 'yellow',
		5: 'green',
		6: 'blue',
		7: 'violet',
		8: 'gray',
		9: 'white',
		k: 'black red',
		M: 'black green'
	};
	let str = ohmsString.split('');
	let resp = [];
	resp.push(cores[str[0]]);
	resp.push(' ', cores[str[1]]);
	if (/([^kM] )/.test(str.join(''))) {
		if (parseInt(str.join('')) > 99) {
			resp.push(' ', cores[1]); //brown
		} else {
			resp.push(' ', cores[0]); //black
		}
	}else if (str[1] === '.') {
		resp.push(cores[str[2]]); //red
		if (str[3] === 'k') resp.push(' ', cores[2]); //red
		if (str[3] === 'M') resp.push(' ', cores[5]); //green
	} else if (/(.\dk)|(.\dM)/.test(str.join(''))) {
		if (str[2] === 'k') resp.push(' ', cores[3]); //orange
		if (str[3] === 'k') resp.push(' ', cores[4]); //yellow
		if (str[2] === 'M') resp.push(' ', cores[6]); //blue
	}
	resp.push(' gold');
	return resp.join('');
}

console.log(encodeResistorColors('10 ohms')); // "brown black black gold")
console.log(encodeResistorColors('47 ohms')); // "yellow violet black gold")
console.log(encodeResistorColors('100 ohms')); // "brown black brown gold")
console.log(encodeResistorColors('220 ohms')); // "red red brown gold")
console.log(encodeResistorColors('680 ohms')); // "blue gray brown gold")
console.log(encodeResistorColors('1k ohms')); // "brown black red gold")
console.log(encodeResistorColors('4.7k ohms')); // "yellow violet red gold")
console.log(encodeResistorColors('10k ohms')); // "brown black orange gold")
console.log(encodeResistorColors('22k ohms')); // "red red orange gold")
console.log(encodeResistorColors('100k ohms')); // "orange orange yellow gold")
console.log(encodeResistorColors('1M ohms')); // "brown black green gold")
console.log(encodeResistorColors('2.2M ohms')); // "red rede green gold")
console.log(encodeResistorColors('4.7M ohms')); // "yellow violet green gold")
console.log(encodeResistorColors('10M ohms')); // "brown black orange gold")
console.log(encodeResistorColors('22M ohms')); // "red red orange gold")
