var dictionnaire = function () {

	// this.dico = {
	// 	c: [
	// 		{
	// 			a: [
	// 				{
	// 					c: [
	// 						{
	// 							a: [
	// 								{
	// 									define: 'rien à dire là'
	// 								}
	// 							]
	// 						} 
	// 					]
	// 				}
	// 			],
	// 			o: [
	// 				{
	// 					u: [
	// 						{
	// 							c: [
	// 								{
	// 									o: [
	// 										{
	// 											u: [
	// 												{
	// 													define: 'Salut!'
	// 												}
	// 											]
	// 										}
	// 									]
	// 								}
	// 							]
	// 						}
	// 					]
	// 				}
	// 			]
	// 		}
	// 	]
	// };
	
	this.dico = {
		c: {
			a: {
				c: {
					a: {
						define: 'salut'
					}
				}
			},
			o: {
				u: {
					c: {
						o: {
							u: {
								define:'Salut!'
							}
						}
					}
				}
			}
		}
	};

	this.init = function () {

		var that = this;

		this.displayWord(that.dico);
	};

	this.displayWord = function (currDico) {

		var that = this;

		if (typeof currDico == "undefined") {
			console.log('fini');
		} else {
			for (key in currDico) {
				console.log(currDico[key]);
				thisp.displayWord(this.dico[key]);
			}
		}
	}

	this.roam = function (word, currDico) {

		var nbr = word.length;
		var that = this;
		console.log(word);
		console.log(currDico);

		if (word == "" || typeof currDico == "undefined") {
			console.log("fini");
		} else {
			console.log(word);
			console.log(currDico[word[0]]+" : Hello");
			console.log(nbr);
			console.log(currDico+" currDico");
			that.roam(word.substring(1, nbr), that.dico[word[0]]);
		}
	};
};

window.onload = function () {

	var app = new dictionnaire();

	app.init();
}