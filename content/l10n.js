'use strict';
/**
 * l10n.js
 * Localization tools.
 */
////////////////////////////////////////////////////////////////////////////////
var Foxtrickl10n = {
	locales: [
		// english names and ids are also in chpps worldlanguages.xml
		'ar',	// العربية, arabic	22
		'be',	// Беларуская, belorus	84
		'bg',	// Български, bulgarian	43
		'bs',	// Bosanski	58
		'ca',	// Català, catalan	66
		'cs',	// Čeština, czech	35
		'da',	// Dansk, danish	8
		'de',	// Deutsch, german	3
		'el',	// Ελληνικά, greek	34
		'en',	// english	2
		'es-ES',	// Español	103
		'es-CR',	//Español centro-americano	51
		'es-AR',	// Español Sudamericano	6
		'et',	// Eesti	36
		'eu',	// Euskara, basque	110
		'fa',	// فارسی, farsi, iranian	75
		'fi',	// Suomi, finnish	9
		'fr',	// french	5
		'fur-IT',	// Furlan, northitaly	113
		'fy-NL',	// Frysk, east-netherland/north germany	109
		'gl',	// Galego, galician	74
		'he',	// עברית, hebrew	40
		'hr',	// Hrvatski, croatian	39
		'hu',	// Magyar, hungarian	33
		'is',	// Íslenska, island	25
		'it',	// italian	4
		'ja',	// 日本語, japanese	12
		'ka',	// Georgian	90
		'ko',	// 한국어, korean	17
		'lb',	// Lëtzebuergesch	111
		'lt',	// Lietuvių	56
		'lv',	// Latviešu	37
		'mk',	// Македонски, macedonian	83
		'mt',	// Malti	87
		'nl',	// netherlands	10
		'nn-NO',	// Norsk nynorsk	136
		'no',	// Norsk bokmål	7
		'pl',	// Polski	13
		'pt-PT',	// Português	11
		'pt-BR',	// Português brasil	50
		'ro',	// Română, romanian	23
		'ru',	// Русский, russain 	14
		'sk',	// Slovenčina, slovak	53
		'sl',	// Slovenščina, slovenian 	45
		'sq',	// Albanian	85
		'sr',	// Српски, serbian	32
		'sv-SE',	// Svenska, swedish	1
		'tr',	// Türkçe	19
		'uk',	// Українська, ukranian	57
		'vi',	// Tiếng Việt, vietnamese	55
		'vls-BE',	// Vlaams, netherland	65
		'zh-CN'	// 中文（简体）, chinese	15
				// Kyrgyz	86
	],
	htMapping: {
		'ar': 'ar',	// العربية, arabic	22
		'be': 'be',	// Беларуская, belorus	84
		'bg': 'bg',	// Български, bulgarian	43
		'bs': 'bs',	// Bosanski	58
		'ca': 'ca',	// Català, catalan	66
		'cs': 'cs',	// Čeština, czech	35
		'da': 'da',	// Dansk, danish	8
		'de': 'de',	// Deutsch, german	3
		'el': 'el',	// Ελληνικά, greek	34
		'en': 'en',	// english	2
		'es': 'es-ES',	// Español	103
		'es-mx': 'es-CR',	//Español centro-americano	51
		'es-ar': 'es-AR',	// Español Sudamericano	6
		'et': 'et',	// Eesti	36
		'eu': 'eu',	// Euskara, basque	110
		'fa': 'fa',	// فارسی, farsi, iranian	75
		'fi': 'fi',	// Suomi, finnish	9
		'fr': 'fr',	// french	5
		'fu': 'fur-IT',	// Furlan, northitaly	113
		'fy': 'fy-NL',	// Frysk, east-netherland/north germany	109
		'gl': 'gl',	// Galego, galician	74
		'he': 'he',	// עברית, hebrew	40
		'hr': 'hr',	// Hrvatski, croatian	39
		'hu': 'hu',	// Magyar, hungarian	33
		'is': 'is',	// Íslenska, island	25
		'it': 'it',	// italian	4
		'ja': 'ja',	// 日本語, japanese	12
		'ka': 'ka',	// Georgian	90
		'ko': 'ko',	// 한국어, korean	17
		'lb': 'lb',	// Lëtzebuergesch	111
		'lt': 'lt',	// Lietuvių	56
		'lv': 'lv',	// Latviešu	37
		'mk': 'mk',	// Македонски, macedonian	83
		'mt': 'mt',	// Malti	87
		'nl': 'nl',	// netherlands	10
		'nn-no': 'nn-NO',	// Norsk nynorsk	136
		'nn': 'no',	// Norsk bokmål	7
		'pl': 'pl',	// Polski	13
		'pt': 'pt-PT',	// Português	11
		'pt-br': 'pt-BR',	// Português brasil	50
		'ro': 'ro',	// Română, romanian	23
		'ru': 'ru',	// Русский, russain 	14
		'sk': 'sk',	// Slovenčina, slovak	53
		'sl': 'sl',	// Slovenščina, slovenian 	45
		'sq': 'sq',	// Albanian	85
		'sr': 'sr',	// Српски, serbian	32
		'sv': 'sv-SE',	// Svenska, swedish	1
		'tr': 'tr',	// Türkçe	19
		'uk': 'uk',	// Українська, ukranian	57
		'vi': 'vi',	// Tiếng Việt, vietnamese	55
		'vl': 'vls-BE',	// Vlaams, netherland	65
		'zh': 'zh-CN'	// 中文（简体）, chinese	15
				// Kyrgyz	86
	},

	htLanguagesXml: {},

	// for plural form rule ids see
	// https://developer.mozilla.org/en/Localization_and_Plurals
	plForm: 0,  // plural form of selected language
	plForm_default: 0, // plural form of default language

	// this function returns level including decimal subs from text.
	getLevelFromText: function(text) {
		var level, sublevel = 0;
		var lang = FoxtrickPrefs.getString('htLanguage');
		var xml = Foxtrickl10n.htLanguagesXml[lang];

		var levels = xml.getElementsByTagName('level');
		for (var i = 0; i < levels.length; ++i) {
			var leveltext = levels[i].getAttribute('text');
			if (RegExp('^' + leveltext, 'i').test(text)) {
				level = Number(levels[i].getAttribute('value'));
				break;
			}
		}
		if (level === null)
			return null;

		var ratingSubLevels = xml.getElementsByTagName('sublevel');
		for (var i = 0; i < ratingSubLevels.length; ++i) {
			var subleveltext = ratingSubLevels[i].getAttribute('text')
				.replace('(', '\\(').replace(')', '\\)');
			if (RegExp(subleveltext + '$', 'i').test(text)) {
				sublevel = Number(ratingSubLevels[i].getAttribute('value'));
				break;
			}
		}

		return level + sublevel;
	},

	getTextByLevel: function(value) {
		var level;
		var lang = FoxtrickPrefs.getString('htLanguage');
		var xml = Foxtrickl10n.htLanguagesXml[lang];

		var levels = xml.getElementsByTagName('level');
		for (var i = 0; i < levels.length; ++i) {
			var levelvalue = levels[i].getAttribute('value');
			if (RegExp('^' + levelvalue, 'i').test(value)) {
				level = levels[i].getAttribute('text');
				break;
			}
		}
		if (level !== null)
			return level;

		xml = Foxtrickl10n.htLanguagesXml[lang].en;

		levels = xml.getElementsByTagName('level');
		for (var i = 0; i < levels.length; ++i) {
			var levelvalue = levels[i].getAttribute('value');
			if (RegExp('^' + levelvalue, 'i').test(value)) {
				level = levels[i].getAttribute('text');
				break;
			}
		}
		return level;
	},


	// this function returns level string of given level type and numeral value.
	// type could be levels, for normal skills;
	// agreeability, honesty, and aggressiveness, which are all obvious.
	getLevelByTypeAndValue: function(type, val) {
		var lang = FoxtrickPrefs.getString('htLanguage');
		var path = 'language/' + type + "/level[@value='" + val + "']";
		var text = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml[lang], path, 'text');
		if (text === null) {
			Foxtrick.log('Requested level of type ' + type + ' and value ' + val +
			             " don't exist in locale " + lang + ', try en instead.');
			text = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml.en, path, 'text');
			if (text === null) {
				Foxtrick.log('Requested level of type ' + type + ' and value ' + val +
				             " don't exist, returning raw value.");
				text = val;
			}
		}
		return text;
	},

	getSublevelByValue: function(val) {
		var lang = FoxtrickPrefs.getString('htLanguage');
		var path = "language/ratingSubLevels/sublevel[@value='" + val + "']";
		var text = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml[lang], path, 'text');
		if (text === null) {
			Foxtrick.log('Requested sublevel of value ' + val +
			             " doesn't exist in locale " + lang + ', try en instead.');
			text = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml.en, path, 'text');
			if (text === null) {
				Foxtrick.log('Requested sublevel of value ' + val +
				             " doesn't exist, returning raw value.");
				text = val;
			}
		}
		return text;
	},

	getFullLevelByValue: function(val) {
		var main = Math.floor(val);
		var sub = val - main;
		if (sub >= 0 && sub < 0.25) {
			sub = '0.0';
		}
		else if (sub >= 0.25 && sub < 0.5) {
			sub = '0.25';
		}
		else if (sub >= 0.5 && sub < 0.75) {
			sub = '0.50';
		}
		else if (sub >= 0.75 && sub < 1) {
			sub = '0.75';
		}
		var mainStr = this.getLevelByTypeAndValue('levels', main);
		var subStr = this.getSublevelByValue(sub);
		return mainStr + ' ' + subStr;
	},

	getTacticById: function(id) {
		var tactics = [
			'normal',	//:	0,
			'pressing',	//:	1,
			'ca',		//:	2,
			'aim',		//:	3,
			'aow',		//:	4,
			'creatively',//:5,
			'longshots'//:6
		];

		var lang = FoxtrickPrefs.getString('htLanguage');
		var path = "language/tactics/tactic[@type='" + tactics[id] + "']";
		var text = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml[lang], path, 'value');
		if (text === null) {
			Foxtrick.log('Requested tactic of id ' + tactics[id] +
			             " doesn't exist in locale " + lang + ', try en instead.');
			text = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml.en, path, 'value');
			if (text === null) {
				Foxtrick.log('Requested tactic of id ' + tactics[id] +
				             " doesn't exist, returning raw value.");
				text = tactics[id];
			}
		}
		return text;
	},

	getShortPosition: function(pos) {
		var direct = function() {
			var space = pos.search(/ /);
			if (space == -1) {
				return pos.substr(0, 2);
			}
			else {
				return pos.substr(0, 1) + pos.substr(space + 1, 1);
			}
		};
		var shortPos = '';
		try {
			var lang = FoxtrickPrefs.getString('htLanguage');
			var path = "language/positions/position[@value='" + pos + "']";
			shortPos = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml[lang],
			                                        path, 'short');
		}
		catch (e) {
			Foxtrick.log(e);
		}
		return shortPos || direct();
	},

	getShortSpeciality: function(spec) {
		var direct = function() {
			return spec.substr(0, 2);
		};
		var shortSpec = '';
		try {
			var lang = FoxtrickPrefs.getString('htLanguage');
			var path = "language/specialties/specialty[@value='" + spec + "']";
			shortSpec = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml[lang],
			                                         path, 'short');
		}
		catch (e) {
			Foxtrick.log(e);
		}
		return shortSpec || direct();
	},

	getShortSpecialityFromEnglish: function(spec) {
		var direct = function() {
			return spec.substr(0, 2);
		};
		var shortSpec = '';
		try {
			var lang = FoxtrickPrefs.getString('htLanguage');
			var path = "language/specialties/specialty[@type='" + spec + "']";
			shortSpec = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml[lang],
			                                         path, 'short');
		}
		catch (e) {
			Foxtrick.log(e);
		}
		return shortSpec || direct();
	},

	getEnglishSpeciality: function(spec) {
		var engSpec = spec;
		try {
			var lang = FoxtrickPrefs.getString('htLanguage');
			var path = "language/specialties/specialty[@value='" + spec + "']";
			engSpec = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml[lang], path, 'type');
		}
		catch (e) {
			Foxtrick.log(e);
		}
		return engSpec;
	},

	getSpecialityFromNumber: function(number) {
		var specs = {
			0: '', 1: 'Technical', 2: 'Quick', 3: 'Powerful', 4: 'Unpredictable',
			5: 'Head', 6: 'Regainer'
		};
		var spec = specs[number];
		try {
			var lang = FoxtrickPrefs.getString('htLanguage');
			var path = "language/specialties/specialty[@type='" + spec + "']";
			spec = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml[lang], path, 'value');
		}
		catch (e) {
			Foxtrick.log(e);
		}
		return spec;
	},

	getNumberFromSpeciality: function(speciality) {
		var engSpec = this.getEnglishSpeciality(speciality);
		var specs = {
			0: '', 1: 'Technical', 2: 'Quick', 3: 'Powerful', 4: 'Unpredictable',
			5: 'Head', 6: 'Regainer'
		};
		var number = 0;
		var n;
		for (n in specs) {
			if (specs.hasOwnProperty(n)) {
				if (specs[n] == engSpec) {
					number = n;
					break;
				}
			}
		}
		return number;
	},

	getPositionByType: function(val) {
		var lang = FoxtrickPrefs.getString('htLanguage');
		var path = "language/positions/position[@type='" + val + "']";
		var text = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml[lang], path, 'value');
		if (text === null) {
			Foxtrick.log('Requested sublevel of value ' + val +
			             " doesn't exist in locale " + lang + ', try en instead.');
			text = Foxtrick.xml_single_evaluate(Foxtrickl10n.htLanguagesXml.en, path, 'value');
			if (text === null) {
				Foxtrick.log('Requested sublevel of value ' + val +
				             " doesn't exist, returning raw value.");
				text = val;
			}
		}
		return text;
	},

};

// ----------------------  Gecko specific get/set preferences --------------------------
if (Foxtrick.arch === 'Gecko') {
	(function() {

	Components.utils.import('resource://gre/modules/PluralForm.jsm');

	var Foxtrickl10nGecko = {

		// mozilla string bundles of localizations and screenshot links
		_strings_bundle: null,
		_strings_bundle_default: null,
		_strings_bundle_screenshots: null,
		_strings_bundle_screenshots_default: null,

		init: function() {
			if (Foxtrick.chromeContext() === 'background') {
				// get htlang.xml for each locale
				for (var i = 0; i < Foxtrickl10n.locales.length; ++i) {
					var locale = Foxtrickl10n.locales[i];
					var url = Foxtrick.InternalPath + 'locale/' + locale + '/htlang.xml';
					this.htLanguagesXml[Foxtrickl10n.locales[i]] = Foxtrick.util.load.xmlSync(url);
				}
			}

			this._strings_bundle_default =
				Components.classes['@mozilla.org/intl/stringbundle;1']
				.getService(Components.interfaces.nsIStringBundleService)
				.createBundle('chrome://foxtrick/content/foxtrick.properties');

			try {
				this.plForm_default = Number(this._strings_bundle_default
				                             .GetStringFromName('pluralFormRuleID').match(/\d+/));
			} catch (e) {}

			this.setUserLocaleGecko(FoxtrickPrefs.getString('htLanguage'));

			this._strings_bundle_screenshots_default =
				Components.classes['@mozilla.org/intl/stringbundle;1']
				.getService(Components.interfaces.nsIStringBundleService)
				.createBundle('chrome://foxtrick/content/foxtrick.screenshots');
		},

		setUserLocaleGecko: function(localecode) {
			try {
				this._strings_bundle =
					Components.classes['@mozilla.org/intl/stringbundle;1']
					.getService(Components.interfaces.nsIStringBundleService)
					.createBundle('chrome://foxtrick/content/locale/' + localecode +
					              '/foxtrick.properties');
			}
			catch (e) {
				this._strings_bundle = this._strings_bundle_default;
				Foxtrick.log('Use default properties for locale ', locale);
			}

			try {
				this.plForm = Number(this._strings_bundle
				                     .GetStringFromName('pluralFormRuleID').match(/\d+/));
			} catch (e) {}

			try {
				this._strings_bundle_screenshots =
					Components.classes['@mozilla.org/intl/stringbundle;1']
					.getService(Components.interfaces.nsIStringBundleService)
					.createBundle('chrome://foxtrick/content/locale/' + localecode +
					              '/foxtrick.screenshots');
			}
			catch (e) {
				this._strings_bundle_screenshots = this._strings_bundle_screenshots_default;
				Foxtrick.log('Use default screenshots for locale ', locale);
			}
		},

		getString: function(str, num) {
			try {
				if (FoxtrickPrefs.getBool('translationKeys'))
					return str;

				if (num !== undefined) {
					//Foxtrick.log('getString plural: ', str, ' ',num);
					var get = PluralForm.makeGetter(this.plForm)[0];
					try {
						return get(num, this._strings_bundle.GetStringFromName(str));
					} catch (e) {
						//Foxtrick.log('getString plural error. use last string');
						return this._strings_bundle.GetStringFromName(str).replace(/.+;/g, '');
					}
				}
				return this._strings_bundle.GetStringFromName(str);
			}
			catch (e) {
				try {
					if (this._strings_bundle_default) {
						if (num !== undefined) {
							//Foxtrick.log('getString plural default: ', str, ' ',num);
							var get = PluralForm.makeGetter(this.plForm_default)[0];
							try {
								return get(num, this._strings_bundle_default.GetStringFromName(str));
							} catch (e) {
								//Foxtrick.log('getString plural error. use last string');
								return this._strings_bundle_default
									.GetStringFromName(str).replace(/.+;/g, '');
							}
						}
						return this._strings_bundle_default.GetStringFromName(str);
					}
				}
				catch (ee) {
					Foxtrick.log(Error("Error getString('" + str + ")'"));
					return str;
				}
			}
		},

		isStringAvailable: function(str) {
			if (this._strings_bundle) {
				try {
					return this._strings_bundle.GetStringFromName(str) != null;
				}
				catch (e) {
					try {
						return this._strings_bundle_default.GetStringFromName(str) != null;
					}
					catch (ee) {
						return false;
					}
				}
			}
			return false;
		},

		isStringAvailableLocal: function(str) {
			if (this._strings_bundle) {
				try {
					return this._strings_bundle.GetStringFromName(str) != null;
				}
				catch (e) {
					return false;
				}
			}
			return false;
		},

		getScreenshot: function(str) {
			var link = '';
			if (this._strings_bundle_screenshots) {
				try {
					link = this._strings_bundle_screenshots.GetStringFromName(str);
				}
				catch (e) {
				}
			}
			if (link == '') {
				try {
					if (this._strings_bundle_screenshots_default)
						link = this._strings_bundle_screenshots_default.GetStringFromName(str);
				}
				catch (ee) {
				}
			}
			return link;
		},
	};

	var i;
	for (i in Foxtrickl10nGecko)
		Foxtrickl10n[i] = Foxtrickl10nGecko[i];
	}());
}



// ----------------------  Chrome specific get/set preferences --------------------------
if (Foxtrick.arch === 'Sandboxed') {

	(function() {
	var Foxtrickl10nChrome = {
		// string collection of localizations and screenshot links
		properties_default: null,
		properties: null,
		screenshots_default: null,
		screenshots: null,

		init: function() {
			// get htlang.xml for each locale
			var i;
			var locale;
			for (i in Foxtrickl10n.locales) {
				locale = Foxtrickl10n.locales[i];
				var url = Foxtrick.InternalPath + 'locale/' + locale + '/htlang.xml';
				this.htLanguagesXml[Foxtrickl10n.locales[i]] = Foxtrick.util.load.xmlSync(url);
			}

			this.properties_default = Foxtrick.util.load.sync(Foxtrick.InternalPath +
			                                                  'foxtrick.properties');
			this.screenshots_default = Foxtrick.util.load.sync(Foxtrick.InternalPath +
			                                                   'foxtrick.screenshots');
			try {
				this.plForm_default = Number(this._getString(this.properties_default,
				                             'pluralFormRuleID').match(/\d+/));
			} catch (e) {}

			locale = FoxtrickPrefs.getString('htLanguage');

			try {
				this.properties = Foxtrick.util.load.sync(Foxtrick.InternalPath + 'locale/' +
				                                          locale + '/foxtrick.properties');
				if (this.properties == null) {
					Foxtrick.log('Use default properties for locale ', locale);
					this.properties = this.properties_default;
				}
			}
			catch (e) {
				Foxtrick.log('Use default properties for locale ', locale);
				this.properties = this.properties_default;
			}
			try {
				this.plForm = Number(this._getString(this.properties,
				                     'pluralFormRuleID').match(/\d+/));
			} catch (e) {}
			try {
				this.screenshots = Foxtrick.util.load.sync(Foxtrick.InternalPath + 'locale/' +
				                                           locale + '/foxtrick.screenshots');
				if (this.screenshots == null) {
					Foxtrick.log('Use default screenshots for locale ', locale);
					this.screenshots = this.screenshots_default;
				}
			}
			catch (ee) {
				Foxtrick.log('Use default screenshots for locale ', locale);
				this.screenshots = this.screenshots_default;
			}
		},

		_getString: function(properties, str) {
			var string_regexp = RegExp('\\s' + str + '=(.+)\\s', 'i');
			if (properties.search(string_regexp) != -1)
				return properties.match(string_regexp)[1];
			return null;
		},

		getString: function(str, num) {
			try {
				if (FoxtrickPrefs.getBool('translationKeys'))
					return str;

				var plForm = this.plForm;
				var value = this._getString(this.properties, str);
				if (value === null) {
					value = this._getString(this.properties_default, str);
					plForm = this.plForm_default;
				}
				if (value === null)
					throw null;

				// replace escaped characters as what Gecko does
				value = value.replace(/\\n/g, '\n').replace(/\\:/g, ':')
					.replace(/\\=/g, '=').replace(/\\#/g, '#').replace(/\\!/g, '!');
				// get plurals
				if (num !== undefined) {
					//Foxtrick.log('getString plural: ', str, ' ',num);
					var get = PluralForm.makeGetter(plForm)[0];
					try {
						return get(num, value);
					} catch (e) {
						//Foxtrick.log('getString plural error. use last string');
						return value.replace(/.+;/g, '');
					}
				}
				return value;
			}
			catch (e) {
				Foxtrick.log(Error("Error getString('" + str + "')"));
				return str.substr(str.lastIndexOf('.') + 1);
			}
		},

		isStringAvailable: function(str) {
			var string_regexp = new RegExp('\\s' + str + '=(.+)\\s', 'i');
			return (Foxtrickl10n.properties.search(string_regexp) != -1
				|| Foxtrickl10n.properties_default.search(string_regexp) != -1);
		},

		isStringAvailableLocal: function(str) {
			var string_regexp = new RegExp('\\s' + str + '=(.+)\\s', 'i');
			return (Foxtrickl10n.properties.search(string_regexp) != -1);
		},

		getScreenshot: function(str) {
			try {
				var string_regexp = new RegExp('\\s' + str + '=(.+)\\s', 'i');
				if (Foxtrickl10n.screenshots && Foxtrickl10n.screenshots.search(string_regexp) != -1)
					return Foxtrickl10n.screenshots.match(string_regexp)[1];
				else if (Foxtrickl10n.screenshots_default.search(string_regexp) != -1)
					return Foxtrickl10n.screenshots_default.match(string_regexp)[1];
				return '';
			}
			catch (e) {
				Foxtrick.log(Error("Error getScreenshot('" + str + "')"));
			}
		},
	};

	var i;
	for (i in Foxtrickl10nChrome)
		Foxtrickl10n[i] = Foxtrickl10nChrome[i];
	}());
}