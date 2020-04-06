const decodeResistorColors = bands => {
	const cores = e => {
		return 'black' === e ? 0 : 'brown' === e ? 1	: 'red' === e	? 2	: 'orange' === e ? 3 : 'yellow' === e	? 4	: 'green' === e	? 5	: 'blue' === e ? 6	: 'violet' === e	? 7	: 'gray' === e ? 8 : 'white' === e ? 9 : 'gold' === e ? '5%' : 'silver' === e ? '10%' : void 0;
	}
	let colorcodes = [];
	bands.split(' ').forEach((o) => colorcodes.push(cores(o)));
	switch (colorcodes[2]) {
		case 0:	colorcodes.splice(2, 1, ' ohms, ');	break;
		case 1:	colorcodes.splice(2, 1, '0 ohms, '); break;
		case 2: 0 === colorcodes[1]	 ? colorcodes.splice(1, 2, 'k ohms, ')
				: (colorcodes.splice(1, 0, '.'), 
           colorcodes.splice(3, 1, 'k ohms, ')); break;
		case 3:	colorcodes.splice(2, 1, 'k ohms, '); break;
		case 4:	colorcodes.splice(2, 1, '0k ohms, ');	break;
		case 5: 0 === colorcodes[1]	 ? colorcodes.splice(1, 2, 'M ohms, ')
				: (colorcodes.splice(1, 0, '.'), 
           colorcodes.splice(3, 1, 'M ohms, ')); break;
		case 6:	colorcodes.splice(2, 1, 'M ohms, '); break;
		case 7:	colorcodes.splice(2, 1, '0M ohms, ');
	}
	if (!colorcodes.join('').split('').includes('%')) colorcodes.push('20%');
	// if (!bands.includes('gold') && !bands.includes('silver')) colorcodes.push('20%');
	return colorcodes.join('');
}
console.log(decodeResistorColors('brown red black gold')); 
console.log(decodeResistorColors('brown red brown silver')); 
console.log(decodeResistorColors('brown red red gold')); 
console.log(decodeResistorColors('brown red orange gold'));  
console.log(decodeResistorColors('brown red yellow silver'));  
console.log(decodeResistorColors('brown red green gold')); 
console.log(decodeResistorColors('brown red blue')); 


