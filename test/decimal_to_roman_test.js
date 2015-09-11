var converter = require("../lib/decimal_to_roman");
var should     = require('should');

describe("decimal_to_roman_test.js", function() {
  describe("Decimal to Roman", function() {
    it("should convert 10 => X", function() {
      var roman = converter.decimalToRoman(10);
      roman.should.equal("X");
    });

    it("should convert 100 => C", function() {
      var roman = converter.decimalToRoman(100);
      roman.should.equal("C");
    });

    it("should convert 101 => CI", function() {
      var roman = converter.decimalToRoman(101);
      roman.should.equal("CI");
    });

    it("should convert 140 => CXL", function() {
      var roman = converter.decimalToRoman(140);
      roman.should.equal("CXL");
    });
  });

  describe("Roman to Decimal", function() {
    it("should convert X => 10", function() {
      var roman = converter.romanToDecimal("X");
      roman.should.equal(10);
    });

    it("should convert C => 100", function() {
      var roman = converter.romanToDecimal("C");
      roman.should.equal(100);
    });

    it("should convert CI => 101", function() {
      var roman = converter.romanToDecimal("CI");
      roman.should.equal(101);
    });

    it("should convert CXL => 140", function() {
      var roman = converter.romanToDecimal("CXL");
      roman.should.equal(140);
    });
  });
});