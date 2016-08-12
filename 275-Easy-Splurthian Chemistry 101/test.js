/*global require, exports */
(function () {
    'use strict';

    var isValidChemicalSymbol = require('./solution.js');

    function performTest(test, name, symbol, expected) {
        test.expect(1);
        test.ok(isValidChemicalSymbol(name, symbol) === expected);
        test.done();
    }

    exports.test = {
        spenglerium: function (test) {
            performTest(test, 'Spenglerium', 'Ee', true);
        },
        zeddemorium: function (test) {
            performTest(test, 'Zeddemorium', 'Zr', true);
        },
        venkmine: function (test) {
            performTest(test, 'Venkmine', 'Kn', true);
        },
        stantzon: function (test) {
            performTest(test, 'Stantzon', 'Kn', false);
        },
        melintzum: function (test) {
            performTest(test, 'Melintzum', 'Nn', false);
        },
        tullium: function (test) {
            performTest(test, 'Tullium', 'Ty', false);
        },
        one_letter: function (test) {
            performTest(test, 'Boron', 'B', false);
        },
        three_letters: function (test) {
            performTest(test, 'Helium', 'Hel', false);
        }
    };
}());
