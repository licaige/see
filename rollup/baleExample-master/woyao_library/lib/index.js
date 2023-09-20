'use strict';

class Greeter {
    greeting;
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        console.log('hello', this.greeting);
    }
}

var g = new Greeter();
g.greet();
//# sourceMappingURL=index.js.map
