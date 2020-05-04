const Max = require('max-api');
const express = require('express');
const app = express();

Max.post('Mijn nodejs gaat aan!');

app.get("/", function(req, res) {
	let content = "";
	content += "<p> Dit is Marks pagina. </p>";
	var getal = Math.random(5);
	content += getal;
	res.send(content);
});

app.listen(3000, function() {
	Max.post('Voorbeeldwebsite op poort 3000!')
});