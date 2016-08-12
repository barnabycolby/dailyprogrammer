/*global module */
(function () {
    'use strict';

    module.exports = function (nameMixedCase, symbolMixedCase) {
        var symbol, name, firstIndex, secondIndex;

        // Symbols must be exactly two letters
        if (symbolMixedCase.length !== 2) {
            return false;
        }

        // Before retrieving the indexes of symbol components in the element name, we need to convert both strings to lowercase in order to
        // achieve case insensitivity
        name = nameMixedCase.toLowerCase();
        symbol = symbolMixedCase.toLowerCase();
        firstIndex = name.indexOf(symbol[0]);
        secondIndex = name.indexOf(symbol[1], firstIndex + 1);

        // Check that the symbol letters are found in the elements name
        if (firstIndex === -1 || secondIndex === -1) {
            return false;
        }

        return true;
    };
}());
