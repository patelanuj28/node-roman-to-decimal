var converter = require("./lib/decimal_to_roman");
var _ = require('underscore.object.plus');
var util = require('util');


_.each([10, 11, 140], function(value){
	var roman = converter.decimalToRoman(value);
	var decimal = converter.romanToDecimal(roman);

	console.log(util.format('%s => %s => %s' , value, roman, decimal));
});