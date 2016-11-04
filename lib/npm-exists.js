/*
 * npm-exists
 * https://github.com/parroit/npm-exists
 *
 * Copyright (c) 2014 Andrea Parodi
 * Licensed under the MIT license.
 */

'use strict';

var request = require('request');
var Promise = require('bluebird');
var npmSource = {
    taobao: 'https://npm.taobao.org',
    npm: 'https://www.npmjs.org'
};

module.exports = function npmExists(moduleName, source) {
    source = npmSource[source] || source || npmSource.npm;
    return new Promise(function(resolve, reject) {
        request(source + '/package/' + moduleName, function(error, response, body) {
            if (error) {
                return reject(error);
            } 

            if (response.statusCode === 200) {
                return resolve(true);
            }

            resolve(false);
        });
    });
};
