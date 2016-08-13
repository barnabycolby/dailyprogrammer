/*global require, exports */
(function () {
    'use strict';

    var calculateLargestCropSquare = require('./solution.js');

    function performTest(test, expected, field) {
        test.expect(1);
        test.ok(calculateLargestCropSquare(field) === expected);
        test.done();
    }

    exports.test = {
        5: function (test) {
            performTest(test, 9,
                'X--X-' +
                '-----' +
                '-----' +
                '-----' +
                '---X-'
                );
        },
        8: function (test) {
            performTest(test, 16,
                '--X----X' +
                '-----X--' +
                'X--X----' +
                '--X-----' +
                'X--X----' +
                'XXXX----' +
                '--X-----' +
                '--X---X-'
                );
        },
        50: function (test) {
            performTest(test, 49,
                '--X---------X----------------------X---XXX--------' +
                '-X----------X-------------------XX------XX--XX--X-' +
                '---------X---X--X-------XX----------------------X-' +
                '----------------------X----X---XX---X-------X----X' +
                '------------------X----------X--------X----------X' +
                '----XX---X----------------X---X-X-----------------' +
                '---X----------------------------------X-------X---' +
                '-X-------X--XX----------X----X--X--X----------X---' +
                '---------X---------------X----------------------X-' +
                '-------------X------------------------X-----------' +
                '-X---------------------------XX----------X--------' +
                '--X--------------------X-X--------------------X---' +
                'X---X-----------X-------------X------------X------' +
                '---X-----------------------X-------------------X--' +
                '-------X--------------X--X-----X------------------' +
                '--------X------X------X----------XXX----X--X---X-X' +
                '------------------X-------X----X--X---------------' +
                '----X----X----------------------------------X-----' +
                '-----------X-----X--------X--------X--------------' +
                '--X------X-------------X--------------------X-----' +
                '------X----X----------------------X---------XX----' +
                '----XX----------X-----------------X---------X-X---' +
                '-----X------X------X----X-------XXX-X-------------' +
                '---X-X--------------------------------------------' +
                '-----------------X----------------X---------------' +
                '----X-------------X----------------------X--X-----' +
                '------X---------XX--X---------X--------X----------' +
                'XX--------X-----------------X-------------X---X---' +
                '-----------X-X--------X---X--------X---X--------X-' +
                '-------------------X-------XXX---X----------------' +
                '-------X-----X-------------------------------X----' +
                '----X------X------X--X---------------X------------' +
                '--------X--------X--------------X-----------------' +
                '--------X------------------X-------X--------X---X-' +
                'X--X--X---X------X----------X--X--X---------------' +
                '-----------X--X-------------X-----------------X---' +
                '--------------X-------X-----X-----------------X---' +
                '-----------------X----------------------X-X--X----' +
                '----------------X----------------------------X----' +
                '---------------X----------X-----------X-----------' +
                '---X-X-----------------XX----X-----XX------------X' +
                '--X-X-------------------X-------------------X--X--' +
                '--X------X----------------------------------------' +
                '----X-------------------------X---X--------X-----X' +
                'X--XX----X-------------X---X----------------------' +
                '---------X---------------------------------------X' +
                'X-------X---------X--X-----XX--------------X------' +
                '------XX---------X--X---------X-------------------' +
                '--------X----------X---X--X-----X------X-----X----' +
                '----------------------------------------------X---'
                );
        },
        100: function (test) {
            performTest(test, 81,
                '--------------X------X-----------X-X---X--X--X----X--------X--------------------X-------------------' +
                '-------------------X-X--------------------------------X-----------------X---------X-----X-----------' +
                '------------X------X------------------------X----X--------XXX---------------X---------------------XX' +
                '-----------------------------X-------------------------------X-----------X-----X------------X--X----' +
                '---------------------------X-------------XX------------XX---X-X--X----------X---X---X------X--------' +
                '----------------X--X---------------X--------X-X--X---------------X--------------------X-------------' +
                '--XX------X-X--------X-----------XX-X-----X-------XX--------X-X----------------------------------X--' +
                '---------X-------X-------------------X---------XX---------------X----------X-X-X-----------X-------X' +
                '-X---------------X-X--------X--X---X-----------------------------------------X-X---X-----X-X----XXXX' +
                '------X----------------------------------X--X----X--X--X--------------X------X---------X------X-X---' +
                '-X---X--------X---------------XX----------------X-----------X--X-X--------------X--X-----X----------' +
                'X-X----X-----------------X-X---------------------X----------X-------------------X-----------X-------' +
                '-X-----X---XX------X--X---------X--XX----X----X--------------XXX--X-------------X-------X--X----X---' +
                '-----X-------------X-X---------------X---------------------X---------XX-----------------------------' +
                'X--------------------------------------X-XX---------------X----------------------------------------X' +
                '-X------------X-------X--X-----------X-------X------X----------X-------------------X------X-X----X--' +
                'X-----X--X-X------------------X--------X---------------X--------X-----------------------------------' +
                '-------------X--------X------------------------X-XX---------------X-XX------------X-----------------' +
                '---X--------------------X--X--X---------X-------X-------------X----X------------X--X---X------------' +
                '--------------------X-----------X--------------------X------------------------------------------X---' +
                '-------------X----X----X-------X--------X-X-----X-XX-------------------X-XX----X---------X---X----X-' +
                '---------------XX--------------X----------------------X---X-------------X-----------X---------X-----' +
                '---X------------------------X-------------------------X--X-X---------------X----X-------------------' +
                '-----------------X-----------------X---------X---------X--------------X-------X----------X----------' +
                '-------------X--------X--------X--------------------------------X--X-----X----X---------------------' +
                '----X----X--X--------X-----X----------------------------X----------X-----------X-X-------X----------' +
                '-XX---X----------------X---------X-X-----X-----------------X---X---------X--------------X-XX---X----' +
                '-------------X-----XX-------X----X-------X------------X-------X-X----X-----X-X-------------------XX-' +
                '-----X------------X-----X---------------X----------X----------X--XX-------X-X-----X-----X-----------' +
                '--------X----X----X------X--------------X-------X----------X---X---X---X--------------X--X----------' +
                '---------X-----------------------XX--X-----------X-----------XX--------------X--------------X-------' +
                'X-----------------------------------X------X-----------------------------------------------XX-----X-' +
                '-------X---------X-----X-------------X-----X-----------X----X-------------------X-----X------X------' +
                'X--------------------------------------------------------------------------------X-----X------------' +
                '-------X------------------------X-----X-X--X------X----------XX--X-------------X-------------------X' +
                '--------------X-X---------X------------X-----------X-------------X----------X-------X---------------' +
                'X-X-X-------------X-----------------------X---X---X--X--------XX---X-----------X---------X----------' +
                '-----------X--------------XXX----XX------------------------------------X--X--X-X-------X-X---------X' +
                '-------------------------X-----------------X----------------------XX--X--X------X-------------X-----' +
                '--X-X---X-X----------------X---X-------X------XX-----------------X---X--X-------------X-X---X------X' +
                '------X-----X--------X---X----X------------------------X---X----X-------------------X---------------' +
                '---------------X-----------X-----X---------X-------------X---------X----X----------X---X--X-X--X----' +
                '---------------------X--------X--X-X--------------------------X----------X----------------------X---' +
                'X---X---X--X----------X------------X----------X-X------X-------------------X------X------------X----' +
                '----X---X---X-X--X-------------------X---------X---X---X------X----------------X------X-------------' +
                '-X-------X-------X----------------------X----------------X--------X-----X----------------------XX--X' +
                '---------XX-X---X--X-----------X--X--------------X-------------X--------------X----X----------------' +
                '-----------------------X------------X------------------------X------X-----------X-----XX-----X----X-' +
                '---------------------X---X----XX---------X---------------------------------X--X---X-----------X---X-' +
                '-----X----X-----X-X-------------X-X-----------X--X-------XX--------------X----X-X----XXX---X--------' +
                '-----------------X-X-------------X-----X-------X-XX-------------X----------------X-X----------X-----' +
                '------------X-X----------X---------------------------------X------X--------X---X---X----------------' +
                '--X------------------------X---------X---------------X------X-------X-----XX--------X----X-------X--' +
                '---XXX--------------------------X------X-----X-----------X-------------------X--------XX----------X-' +
                '---------X----X-------X-X-X---------------X-X----X--------------X-----X----------X----------------X-' +
                '--------X--X-X---------X------------------X---------X---------------------X----------------X--------' +
                '-----------------X------------------X----------X---X---XX-----X---X--------------------------------X' +
                '---------------------X-X----------XX--XX-----X-------X--X-----X---------X-X---------X---X-----------' +
                '-----X-------------X-X--------X----------X-----------------X-X-----X----------X----X----------X---X-' +
                '-------------------X-------X--X---X--X--X----------X-----------------------X--------X--X-------X---X' +
                '----X------X------XX------X---------------------------X--X----------------X---------------X------X--' +
                '--X---X------X----------X------------X-X-X-----------X-X---------------X----X------------X----------' +
                '-------X--X-----XX----------X-----------------------------------X---------------------------------X-' +
                '-----X-----------XX-------X-----------------X----X---------XX------X-----X---X------XX---X--X-------' +
                '---------X----------------X----X-X-----------X------X--------X-X--------------------------X----X----' +
                'X----------------------X-----------------X-------X---X--------------X-X-X-XX------X----------X--X-X-' +
                'X-----X------X-----------------------------X---------------------X----------X-XX------X-X-X-------X-' +
                '------------X---X--X------X-X---------X-----X---------X-------------------------X-------------X-----' +
                '---------------------X---X---------X------------------------------------------X-------X-X-----------' +
                '-----------------X--------XX----------X---X----------------X-----------------------X----------------' +
                '-XX-------X-----X--------------------X-------X---X-------------X-------X--X---X-------X-------X-----' +
                '-----------X--------XX----X---X------X------X---X--------------------------------------X----X------X' +
                '--------------X------X--XX-------XX-------------X---------X---X---------X------X-------X------------' +
                '----XX----------------------------------------X-------X---------X-------------------X--------------X' +
                '----------------X---X--------X----X--X-------------X---XX---X---------------X----X--X---------------' +
                '---------------X------------------X------X--X---------X--------------X---X-----------X--------X-----' +
                '----------X-------X------------X-X------X----X---------------------X--X----------X----------------X-' +
                '---------X------X-----------------------------------------------------X---X------X------------------' +
                '-----X-----------------X------------------------------X-------X-----X--X-----X-----X----------------' +
                '----X---------------------X---------------X------X------------------------------------------X----X--' +
                '-------X--X-------X-----------------X-----------XX---X-----------XX------X--------------------XX----' +
                '-----X------------------X--------X----X----X-------------------XX-------------------------X-------X-' +
                '-----XX---------------------------------------X------------X------X------XXX------X---------X------X' +
                'X-------X------X----------X--X------X-X----------XX-----X------XX-------------------X-----X---------' +
                '--X---X----------X-X---X------XX---------------X-----X--X--------X---------------------X----X-------' +
                '-X-X----------XX---X-X------------------------------XXX---X--X---X---X--X---X-----X-----X------X----' +
                '-------X---------------X--X-------------------X-----------X--------X----------------------X--X------' +
                '-------------------X-------------------------X-------X-X-----------------X------------X-X-----------' +
                '-----X-X------X----------------------------X-------------X-----------XX-----------------------------' +
                '----X----X-------------------------X----XX---------------X--X--X-----X-----X----------------------X-' +
                '-------------------X--------X-----------X---------X------X-----X-X----------------------------------' +
                '--X------------X-----------XXX-------X--------X-------------X------------X----X---------------------' +
                '-----------X--------X---------------------------------------------------X-------------X-------------' +
                '-X----XX--------------------------X--X--------X----X-------X-------X----X-------XX---X------------X-' +
                '-------X------------------------------X--X------X--X-------X--X------------X---------X--------------' +
                '-XX--------X----X-X---X--------------------------X---X-X------------------------------XX------------' +
                '----------X-----XX------------------X-X--------X-X-X---X--XX------------X-X-X--X--------------------' +
                'X-------X-------XX---X-X--XX--------X---X-------------------------------X--------------------X------' +
                '-X-----------------------------------X-----X--------------------------------X-------XX--------------' +
                '--X------------------------X-XX----------------X-------X-------X--------------X-----X-X------X---X--'
                );
        }
    };
}());