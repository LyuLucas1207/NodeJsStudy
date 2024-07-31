const TIME = require('../lyu-tools-test/lyu-tools-test');

const dt = TIME.dateFormat_Lyu(new Date()); //output: 2021-08-02 15:00:00

console.log(dt); //output: 2021-08-02 15:00:00
console.log('----------------------');

const htmlStr = '<h1 title = "abc">Hello <span>W</span>orld &&&;;;;</h1>';
const str = TIME.htmlEscape_Lyu(htmlStr); //output: &lt;h1&gt;Hello World&lt;/h1&gt;
console.log(str); //output: &lt;h1&gt;Hello World&lt;/h1&gt;
console.log('----------------------');

const html = TIME.htmlUnescape_Lyu(str);
console.log(html); //output: <h1>Hello World</h1>
console.log('----------------------');
