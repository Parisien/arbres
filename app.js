var dictionnaire = function () {

	this.inputWord = document.getElementById('mot');
	this.resultH = document.querySelector("#result h2 span");
	this.resultP = document.querySelector("#result p");
	this.abcedaire = document.getElementById("abcedaire");
	this.addWordValue = document.getElementById("word");
	this.addFormValue = document.getElementById("addForm");
	this.offcanvas = document.getElementById("offcanvas");
	
	this.dico = {
		b: {
			e: {
				e: {
					r: {
						define:'Beer is an alcoholic beverage produced by the saccharification of starch and fermentation of the resulting sugar.',
						word:'beer'
					}
				}
			},
			o: {
				a: {
					t: {
						define:'A boat is a watercraft of any size designed to float or plane, to work or travel on water.',
						word: 'boat'
					}
				}
			},
			i: {
				r: {
					d:{
						define: "Birds are feathered, winged, two-legged, warm-blooded, egg-laying vertebrates.", 
						word:'bird'
					}
				},
				k: {
					e: {
						define:'A bike, is a ground vehicle, entering the category of the cycles, compound of two aligned wheels. The driving strength is supplied by his driver, in position most of the time seated, through two pedals pulling the back wheel by a chains.',
						word:'bike'
					}
				},
			},
			r: {
				i: {
					d: {
						g: {
							e: {
								define: 'Work by which a traffic lane, an aqueduct, a conduct crosses a stream, an arm of the sea, a depression or a traffic lane.',
								word:'bridge'
							}
						}
					}
				}
			}
		},
		c: {
			a: {
				r: {					
					define:'An automobile, an automobile car, a car is a vehicle with wheels propelled by an engine intended for the ground transport of the people and the objects.',
					word: 'car'
				},
				t: {
					define:'The domestic cat is a carnivorous mammal of the family of Felidae. It is one of the main pets and counts about fifty different races recognized by the authorities of certification today.',
					word :'cat'
				},
			},
			l:{
				o: {
					u: {
						d: {
							define:'In meteorology, a cloud is a visible mass of liquid droplets or frozen crystals made of water or various chemicals suspended in the atmosphere above the surface of a planetary body.',
							word:'cloud'
						} 
					}
				}
			} 
		},
		d: {
			j: {
				define:'A disc jockey (DJ) is a person who mixes recorded music for an audience; in a club event or rave, this is an audience of dancers.',
				word:'dj',
			},
			o: {
				g: {
					define: 'The domestic dog is a usually furry, carnivorous canid carnivoran mammal. Domestic dogs are commonly known as "man\'s best friend". The dog was the first domesticated animal and has been widely kept as a working, hunting, and pet companion.',
					word: 'dog'
				}
			},
			r: {
				e:{
					a: {
						m: {
							c: {
								a:{
									t: {
										c: {
											h: {
												e: {
													r: {
														define:'In some Native American cultures, a dreamcatcher is a handmade object based on a willow hoop, on which is woven a loose net or web. The dreamcatcher is then decorated with sacred items such as feathers and beads.',
														word:'dreamcatcher'
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
		},
		g: {
			a: {
				m: {
					e: {
						define:'A game is structured playing, usually undertaken for enjoyment and sometimes used as an educational tool.',
						word:'game'
					} 
				}
			}
		},
		m: {
			a: {
				n: {					
					define:'A man is a male individual and an adult of the human race, called a boy before the puberty. By metonymy, this term is besides used to indicate the human being, as much the man as the woman.!',
					word:'man'
				}
			},
			o: {
				o: {
					n: {
						define:'The Moon (Latin: Luna) is Earth\'s only natural satellite',
						word:'moon'
					}
				}
			}
		},
		n: {
			e: {
				w: {
					' ': {
						y: {
							o: {
								r: {
									k:{
										define:'New York is a state in the Northeastern and Mid-Atlantic regions of the United States. New York is the 27th-most extensive, the fourth-most populous, and the seventh-most densely populated of the 50 United States.',
										word: 'new york'
									}
								}
							}
						}
					}
				}
			}
		},
		o: {
			c: {
				e: {
					a: {
						n: {
							define: 'An ocean is often defined, in geography, as a vast area of salt water. Approximately 70,7 % of the surface of the Earth is covered by the world ocean, collectively divided into five oceans and in dozens of seas.',
							word: 'ocean'
						}
					}
				}
			}
		},
		p: {
			a: {
				r: {
					t: {
						y: {
							define: 'A party is a gathering of people who have been invited by a host for the purposes of socializing, conversation, recreation, or as part of a festival or other commemoration of a special occasion.',
							word:'party'
						} 
					},
					i: {
						s: {
							define:'Paris is the capital and most populous city of France.',
							word:'paris'
						}
					},
				}
			}
		},
		s: {
			t: {
				a: {
					r: {					
						define:'A star is a luminous sphere of plasma held together by its own gravity.',
						word: 'star'
					}
				}	
			},
			k: {
				a: {
					t: {
						e: {
							b: {
								o: {
									a: {
										r: {
											d: {										
											define:'A skateboard is a type of sports equipment. A skateboard is propelled by pushing with one foot while the other remains on the board, or by pumping one\'s legs in structures such as a bowl or half pipe.',
											word: 'skateboard'
											}
										}
									}
								}
							}
						}
					}
				} 
			},
			u: {
				r: {
					f: {
						define:' Sport in which the wave rider',
						word:'surf'
					}
				}
			},
			w: {
				i: {
					n: {
						g: {
							define:'A swing is a hanging seat, usually found at playgrounds for children, a circus for acrobats, or on a porch for relaxing, although they may also be items of indoor furniture, such as the Indian oonjal.',
							word:'swing'
						}
					}
				}
			}
		},
		t: {
			a: {
				x: {
					i: {
						define:'A taxicab, also known as a taxi or a cab, is a type of vehicle for hire with a driver, used by a single passenger or small group of passengers, often for a non-shared ride. A taxicab conveys passengers between locations of their choice.',
						word:'taxi'
					}
				}
			}
		},
		f: {
			a: {
				s: {
					t: {
						' ': {
								f: {
									o: {
										o: {
											d: {
												define:'Fast food is the term given to food that is prepared and served very quickly, first popularized in the 1950s in the United States.',
												word:'fast food'
											}
										}
									}	
								}				
							}
						}
					}
				},
			i: {
				r: {
					' ': {
						c: {
							o: {
								n: {
									e:{
										define:'A cone (in formal botanical usage: strobilus, plural strobili) is an organ on plants in the division Pinophyta (conifers) that contains the reproductive structures. The familiar woody cone is the female cone, which produces seeds. ',
										word:'fir cone'
									}
								}
							}
						}
					}
				}
			},
			o: {
				r: {
					e: {
						s: {
							t: {
								define: 'A forest is a large area of land covered with trees or other woody vegetation.',
								word:'forest'
							}
						}
					}
				}
			},
			l: {
				o: {
					w: {
						e: {
							r: {
								define: 'A flower, sometimes known as a bloom or blossom, is the reproductive structure found in flowering plants',
								word:'flower'
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

			if (finish) console.log('*** SAM DICTIONARY INITIALIZED V0.1 ***');
		});
		that.displayWord()
		that.countObject(that.dico);
		// that.logMe();
	};	

	this.letterList = function(dico, callback) {

		var that = this;

		for(key in that.dico){
			var li = document.createElement("li");
			var a = document.createElement("a");
			a.className = 'letter';
			a.setAttribute("href", "/#/letter/"+key);
			a.innerHTML = key;
			li.appendChild(a);
			that.abcedaire.appendChild(li);
		}

		var link = that.abcedaire.querySelectorAll('a');

		for(var i = 0; i < link.length; i++) {
			link[i].addEventListener('click', function (e) {

				if (that.offcanvas.hasClass('open') == false) {
					that.toggleClass(that.offcanvas, 'open');
				}
			});
		}

		callback(null, true);
	};

	// A faire, ne marche pas :'(
	this.listByLetter = function (letter, dico) {

		var that = this;

		var data = Object.keys(dico);

		for (var y = 0; i < letter.length; y++) {

			for (var i = 0; i < data.length; i++) {

				console.log(data[i]);
				console.log(letter[y]);

				if (data[i].indexOf(letter[y]) != -1) {
					console.log('sa passe')
					if (Object.getOwnPropertyNames(dico) != 'define') {

						that.listByLetter(dico[letter[y]], dico[letter[y]]);
					} else {

						console.log(dico)

						var li = document.createElement("li");
						var a = document.createElement("a");
						a.className = 'word';
						a.setAttribute("href", "/#/word/" + key);
						a.innerHTML = key;
						li.appendChild(a);
						that.offcanvas.querySelector('ul').appendChild(li);
					}
				}
			}
		}
	}

	this.roam = function (word, dico, callback) {

		var word = word.toLowerCase();

		var length = word.length;

		var that = this;

		var data = Object.keys(dico);

		if (data.indexOf(word[0]) != -1) {

			if (Object.getOwnPropertyNames(dico) != 'define') {

				that.resultP.innerHTML = "Mot introuvable moron";

				that.roam(word.substring(1, length), dico[word[0]]);

			}

		} else if (data.indexOf('define') != -1) {

			that.resultP.innerHTML = dico.define;
			that.resultH.innerHTML = dico.word;
			that.getImage(dico.word);

		} else {

			that.resultP.innerHTML = "Word not found";
			that.resultH.innerHTML = "Not found";
		}
	};

	this.addWord = function (word, define, dico) {

		var word = word.toLowerCase();

		var length = word.length;

		var that = this;
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

				that.resultP.innerHTML = "Type a word for search, if no present you add him with the form appear.";
				that.resultH.innerHTML = "Help";
			} else {

				that.roam(that.inputWord.value, that.dico);
			}

		})

	};

	this.displayWord = function () {

		var that = this;

		window.addEventListener('hashchange', function (e) {

			var hash = window.location.hash.replace('#', '').replace('/', '');		
			var url = hash.split('/');

			if (url[0] == 'letter') {

				console.log('YOLO')

				that.listByLetter(url[1], that.dico);
			} else {
				console.log('a faire');
			}
			
		}, true);

	};

	this.addForm = function () {

		var that = this;

		that.addFormValue.addEventListener('submit', function (e) {

			that.addWord(that.addWordValue.value, "Define me!", that.dico);

			e.preventDefault();
			return;
		});

	};

	this.ajax = function (url, callback) {

		var request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				callback(null, JSON.parse(request.responseText));
			} else {

			}
		};

		request.onerror = function() {
		
		};

		request.send();
	};

	this.getImage = function (word) {

		var that = this;

		that.ajax('http://www.splashbase.co/api/v1/images/search?query='+ word, function (err, data) {

			if (err) return console.log(err);

			var rand = Math.floor(Math.random() * data.images.length);

			document.body.style.backgroundImage = 'url('+data.images[rand].url+')';
		});
	};

	this.logMe = function () {

		var that = this;

		document.getElementById('logMe').addEventListener('click', function () {

			console.log(that.dico)
		});
	};

	this.countObject = function (object) {
		var count = 0;
		for (var k in object) {
			if (object.hasOwnProperty(k)) {
				++count;
			}
		}
		return count;
	};

	this.toggleClass = function (obj, yolo) {

		var obj = obj;

		obj.classList.toggle(yolo);
	};
};

window.onload = function () {

	Element.prototype.hasClass = function(className) {
	    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
	};

	var app = new dictionnaire();

	app.init();
}