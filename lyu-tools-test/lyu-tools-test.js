/*
This is entry file of the module.
Lyu-tools
    |- index.js
    |- package.json
    |- README.md
    |- src
        |- dateTools.js
        |- html.js
*/
const { dateFormat_Lyu } = require('./src/dateTools');
const { htmlEscape_Lyu, htmlUnescape_Lyu } = require('./src/htmlTools');







module.exports = {
    dateFormat_Lyu,
    htmlEscape_Lyu, 
    htmlUnescape_Lyu
}

/*
or:
    const datetools = require('./src/dateTools');
    const htmltools = require('./src/htmlTools');

    module.exports = {
        ...datetools,
        ...htmltools
    }
*/