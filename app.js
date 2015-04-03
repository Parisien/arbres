var dictionnaire = function () {

	this.inputWord = document.getElementById('mot');
	this.result = document.getElementById("result");
	this.abcedaire = document.getElementById("abcedaire");
	this.addWordValue = document.getElementById("word");
	this.addFormValue = document.getElementById("addForm");
	
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

		var that = this;

		that.getWord();

		that.letterList(that.dico, function (err, finish) {
			if (err) return console.log(err);

			if (finish) console.log('salut');
		});
		that.displayWord()
		Object.countObject(that.dico);
		// that.addForm();
		that.logMe();
	};	

	this.letterList = function(dico, callback) {

		var that = this;

		for(key in that.dico){
			var a = document.createElement("a");
			a.className = 'letter';
			a.setAttribute("href", "/#/"+key);
			a.innerHTML = key;
			abcedaire.appendChild(a);
		}

		callback(null, true);
	}

	this.roam = function (word, dico, callback) {

		var word = word.toLowerCase();

		var length = word.length;

		var that = this;

		var data = Object.keys(dico);

		console.log(data);

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

	this.addWord = function (word, define, dico) {

		var word = word.toLowerCase();

		var length = word.length;

		var that = this;
		console.log(dico);
		if (dico.length > 1) {

			var data = Object.keys(dico);
		} else {
			var data = [];
		}

		if ((data.indexOf(word[0]) != -1)) {
			// Lettre trouver
			if (Object.getOwnPropertyNames(dico) != 'define') {

				that.addWord(word.substring(1, length), dico[word[0]]);

			}

		} else if (data.indexOf('define') != -1) {

			that.result.innerHTML = dico.define;
		} else if ((word.length == 0)) {
			dico.define = define;

		} else {
			// Il faut push lettre pas trouvé
			dico[word[0]] = new Object;
			that.addWord(word.substring(1, length), define, dico[word[0]]);
			// that.result.innerHTML = "Mot introuvable moron";
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

	this.displayWord = function () {

		var that = this;

		window.addEventListener('hashchange', function (e) {

			var hash = window.location.hash.replace('#', '').replace('/', '');		
			
			console.log(hash);
		}, true);

	};

	this.addForm = function () {

		var that = this;

		console.log(that.addFormValue)

		that.addFormValue.addEventListener('submit', function (e) {

			that.addWord(that.addWordValue.value, "Define me!", that.dico);

			e.preventDefault();
			return;
		});

	};

	this.logMe = function () {

		var that = this;

		document.getElementById('logMe').addEventListener('click', function () {

			console.log(that.dico)
		});
	};
};

Object.prototype.countObject = function (object) {
	var count = 0;
	for (var k in object) {
		if (object.hasOwnProperty(k)) {
			++count;
		}
	}
	return count;
}

window.onload = function () {

	var app = new dictionnaire();

	app.init();
}