const Max = require('max-api');

Max.post('Halloootjesss');

function getRandomInt(hoogste) {
	return Math.floor(Math.random() * Math.floor (hoogste));
}

// handlers proberen

Max.addHandler('bang', () => {
	Max.outlet(getRandomInt(10));
});

Max.addHandler('onderschepme', (val) => {
	Max.post(val);
	Max.outlet(val);
});

