const maxApi = require('max-api');

maxApi.post('Hello world!');

maxApi.addHandler("bang", () => {
	maxApi.post("bang bang pieuw pieuw");
	});

maxApi.addHandler("heyhey", () => {
	maxApi.post(getRandomInt(10));
	});
	
	
function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}
	
maxApi.addHandler("randomnr", () => {
	maxApi.outlet(getRandomInt(10));
});