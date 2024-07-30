const m14 = require('./13');
console.log(m14);

m14.sayHello();

m14.username = 'Admin';

m14.sayHello(); //无法改变username的值，因为username是一个常量
