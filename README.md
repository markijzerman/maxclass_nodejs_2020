# NodeJS and Max

andig om te hebben, anders even installeren:
- Sublime Text, VSC, of vergelijkbaar.

* Wat is NodeJS?
	- Open source server omgeving gebaseerd op Javascript. Kan dynamische paginas maken, bestanden lezen schrijven enz op server. Is anders dan js object! Kan ook gebruikt worden voor API's en dergelijke. Werkt samen met NPM, veel packages, heel krachtig.

* Wat is Node4Max?
	- NodeJS in Max

* Introductievideo: https://www.youtube.com/watch?v=qSZH6fjOcXE

* Zit bij Max in.
	- maak node.script object & js file, en sla beide op in zelfde map. Maak node.script object wat verwijst naar js bestand.

	- Zorg dat je in je js bestand zorgt dat de Max API voor NodeJS aangeroepen wordt.
	`const Max = require('max-api');`

	- maak een hello world:
	`maxApi.post('Hello world!');`

	- maak een node.debug object, connect aan rechter outlet van node.script. Maak een fout en zie dat je dat terugziet.

	- maak een Handler: 
	`maxApi.addHandler("bang", () => {
	maxApi.post("bang bang pieuw pieuw");
	});`

	- run nu je script vanuit Max met de "script start" message

	- maak nu nog een output lijst:
	`function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}`

	- En roep deze aan, die naar de linkeroutlet stuurt:
	`maxApi.addHandler("randomnr", () => {
	maxApi.outlet(getRandomInt(10));
	});`

	- Tot zover deze simpele introductie- wat kan je hier nou mee?

* Deel II: Web-pagina serving vanuit Max
	- Expressjs: Simpel web-framework

	* Doe npm install express, kan zijn dat je hier npm voor nodig hebt...
	* simpel express voorbeeld...

	* bekijk express voorbeeld in repository.


* Deel III: API's from Max
	* Bekijk voorbeelden

* Twee repo's om te bekijken:
	- https://github.com/Cycling74/n4m-core-examples (vooral gewoon Node en Max)
	- https://github.com/cycling74/n4m-examples (Node, Max en de buitenwereld (online!))
	- https://github.com/Cycling74/n4m-community (Community Examples)


* Deel IV: Discord API & NodeJS