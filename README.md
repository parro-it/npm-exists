# npm-exists 

check if a library exists on npm

[![Build Status](https://secure.travis-ci.org/parroit/npm-exists.png?branch=master)](http://travis-ci.org/parroit/npm-exists)

[![NPM version](https://badge-me.herokuapp.com/api/npm/npm-exists.png)](http://badges.enytc.com/for/npm/npm-exists) 

## Getting Started
Install the module with: `npm install npm-exists --save`

```javascript
var exists = require('npm-exists');
exists('request').then(function(moduleExists){
    if (moduleExists) {
        console.log('gosh, `request` name already taken!');
    } else {
        console.log('you can register `request`');
    }
});
```

## License

[MIT](http://opensource.org/licenses/MIT) © 2014, Andrea Parodi
