/*
    Will Export: htmlEscape_Lyu
    htmlEscape_Lyu(): This function takes a string and returns a string that escapes the HTML characters.
    @param {string} str：The string to be escaped.
    @return {string}：The escaped string.
    >>How to use:
    const TIME = require('lyu-tools-test');
    const str = TIME.htmlEscape_Lyu('<script>alert("Hello")</script>'); //output: &lt;script&gt;alert(&quot;Hello&quot;)&lt;/script&gt;
*/
function htmlEscape_Lyu(str) {
    return str.replace(/<|>|&|"|'/g, (match) => {
        switch (match) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case '"':
                return '&quot;';
            case "'":
                return '&apos;';
        }
    });
}

/*
    Will Export: htmlUnEscape_Lyu
    htmlUnEscape_Lyu(): This function takes a string and returns a string that unescapes the HTML characters.
    @param {string} str：The string to be unescaped.
    @return {string}：The unescaped string.
    >>How to use:
    const TIME = require('lyu-tools-test');
    const str = TIME.htmlUnEscape_Lyu('&lt;script&gt;alert(&quot;Hello&quot;)&lt;/script&gt;'); //output: <script>alert("Hello")</script>
*/

function htmlUnescape_Lyu(str) {
    return str.replace(/&lt;|&gt;|&amp;|&quot;|&apos;/g, (match) => {
        switch (match) {
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';
            case '&amp;':
                return '&';
            case '&quot;':
                return '"';
            case '&apos;':
                return "'";
        }
    });
}

module.exports = {
    htmlEscape_Lyu,
    htmlUnescape_Lyu
}