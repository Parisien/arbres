var dictionnaire = function () {

	this.inputWord = document.getElementById('mot');
	this.result = document.getElementById("result");
	
	this.dico = {
		a: {
			r: {
				n: {
					a: {
						u: {
							d: {
								define: 'God is real!'
							}
						}
					}
				}
			}
		},
		c: {
			a: {
				c: {
					a: {
						define: "Le caca c'est délicieux",
						t: {
							o: {
								e: {
									s: {
										define: 'Peroquet'
									}
								}
							}
						}
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

		this.getWord();
		// this.roam('arnaud', this.dico);
	};	

	this.roam = function (word, dico, callback) {

		var word = word.toLowerCase();

		var length = word.length;

		var that = this;

		var data = Object.keys(dico);


		if (data.indexOf(word[0]) != -1) {

			if (Object.getOwnPropertyNames(dico) != 'define') {

				that.result.innerHTML = "Mot introuvable moron";

				that.roam(word.substring(1, length), dico[word[0]]);

			}

		} else if (data.indexOf('define') != -1) {

			that.result.innerHTML = dico.define;
		} else {

			that.result.innerHTML = "Mot introuvable moron";
		}


	};

	this.getWord = function () {

		var that = this;

		that.inputWord.addEventListener('keyup', function (e) {

			if (!that.inputWord.value) {

				that.result.innerHTML = "Veuillez taper une lettre moron";
			} else {

				that.roam(that.inputWord.value, that.dico);
			}

		})

	};	
};

window.onload = function () {

	var app = new dictionnaire();

	app.init();
}