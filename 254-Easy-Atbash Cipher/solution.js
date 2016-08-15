/*global module */
(function () {
    'use strict';

    function reverse(input) {
        return input.split("").reverse().join("");
    }

    module.exports = function (cipherText) {
        var i, alphabet, plainText, characterIndex;

        alphabet = "abcdefghijklmnopqrstuvwxyz";
        plainText = "";

        for (i = 0; i < cipherText.length; i += 1) {
            characterIndex = alphabet.indexOf(cipherText[i]);

            if (characterIndex === -1) {
                plainText += cipherText[i];
            } else {
                plainText += reverse(alphabet)[characterIndex];
            }
        }

        return plainText;
    };
}());
