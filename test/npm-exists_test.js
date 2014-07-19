/*
 * npm-exists
 * https://github.com/parroit/npm-exists
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai');
chai.expect();
chai.should();

var npmExists = require('../lib/npm-exists.js');

describe('npmExists', function(){
    it('is defined', function(){
      npmExists.should.be.a('function');
    });

});
