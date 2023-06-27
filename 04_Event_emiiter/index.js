const logEvent = require("./logEvent");

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

// initialize object

const myEmitter = new MyEmitter();

// add listner for log event

myEmitter.on('log', (msg) =>
    logEvent(msg));

setTimeout(() => {
    // emit event
    myEmitter.emit('log', 'Log event emiited!')
}, 2000)