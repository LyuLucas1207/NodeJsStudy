module.exports.user = {
    name: 'John',
    age: 20
};

module.exports.owner = 'Admin';

module.exports.hello = function() {
    console.log("Hello, " + module.exports.user.name);
}



//new module

module.exports = {
    user: {
        name: 'Lily',
        age: 22
    },
    owner: 'User',
    hello: function() {
        console.log("Hello, " + this.user.name);
    }
}
