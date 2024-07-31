## How to install
```
    npm install lyu-tools-test
```

## How to import
```js
    const RandomName = require('lyu-tools-test');
```

## How to Use
```js
    const TIME = require('lyu-tools-test');
    const dt = TIME.dateFormat_Lyu(new Date()); 
    //output: 2021-08-02 15:00:00

    const TIME = require('lyu-tools-test');
    const str = TIME.htmlEscape_Lyu('<script>alert("Hello")</script>'); 
    //output: &lt;script&gt;alert(&quot;Hello&quot;)&lt;/script&gt;

    const TIME = require('lyu-tools-test');
    const original = '&lt;script&gt;alert(&quot;Hello&quot;)&lt;/script&gt;'
    const str = TIME.htmlUnEscape_Lyu(original); 
    //output: <script>alert("Hello")</script>
```

## Open-source protocol

    ISC