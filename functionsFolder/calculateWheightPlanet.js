const calculateWeight = (earthWeight, planet) => {
	if (typeof earthWeight === 'number' && typeof planet === 'string') {
		switch (planet) {
			case 'Mercury':
				console.log(earthWeight * 0.378);
				break;
			case 'Venus':
				console.log(earthWeight * 0.907);
				break;
			case 'Mars':
				console.log(earthWeight * 0.377);
				break;
			case 'Jupiter':
				console.log(earthWeight * 2.36);
				break;
			case 'Saturn':
				console.log(earthWeight * 0.916);
				break;
			default:
				console.log(
					'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
				);
		}
	}
};
calculateWeight(100, 'Mars');
