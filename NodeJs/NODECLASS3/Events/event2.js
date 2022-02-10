const events = require('events')
const EventEmitter = events.EventEmitter
const eventEmitter1 = new EventEmitter();

eventEmitter1.on('test', () => {
    console.log("this is the first publisher of test event");
})


const eventEmitter2 = new EventEmitter();
eventEmitter2.emit('test')