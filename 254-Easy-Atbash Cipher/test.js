/*global require, exports */
(function () {
    'use strict';

    var atbash = require('./solution.js');

    function performTest(test, ciphertext, plaintext) {
        test.expect(1);
        test.equal(atbash(ciphertext), plaintext);
        test.done();
    }

    exports.test = {
        1: function (test) {
            performTest(test, "ullyzi", "foobar");
        },
        2: function (test) {
            performTest(test, "draziw", "wizard");
        },
        3: function (test) {
            performTest(test, "/i/wzrobkiltiznnvi", "/r/dailyprogrammer");
        },
        4: function (test) {
            performTest(test, "gsrh rh zm vcznkov lu gsv zgyzhs xrksvi", "this is an example of the atbash cipher");
        }
    };
}());
