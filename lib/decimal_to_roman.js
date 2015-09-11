var _ = require('underscore.object.plus');

var self = {
	/**
	 * Returns list of default
	 * @returns {Array}
	 */
	mapping: [['M',1000],['CM',900],['D',500],['CD',400],['C',100],['XC',90],['L',50],['XL',40],['X',10],['IX',9],['V',5],['IV',4],['I',1]],

	/**
	 *
	 * @param number
	 * @returns {string}
	 */

	decimalToRoman : function decimalToRoman(number) {
		var output = "";
		_.each(self.mapping, function(value){
			while(number - value[1] >=0 ) {
				number -= value[1];
				output += value[0];
			}
		});
		return output;
	},

	/**
	 *
	 * @param roman_character
	 * @returns {number}
	 */
	romanToDecimal : function romanToDecimal(roman_character) {
		var number = 0;
		_.each(self.mapping, function(value){
			cont_yes = true;
			while (cont_yes) {
				if (roman_character.length >= value[0].length){
					if (roman_character.substring(0, value[0].length) == value[0]){
						number += value[1];
						roman_character = roman_character.substring(value[0].length)
					} else{ 
						cont_yes = false;
					}
				}else{ 
					cont_yes = false;
				}
			}
		});
		return number;
	}
};

module.exports = self;

