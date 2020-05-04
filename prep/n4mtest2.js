const maxApi = require('max-api');
const express = require('express');
const app = express();

app.get("/", function (req, res) {
	let responseText = "";
	responseText += "<p> LEEG </p>" + inputNr;
	res.send(responseText);
		
});


app.listen(3000, function () {
	maxApi.post('Marks example listening on port 3000!');
});