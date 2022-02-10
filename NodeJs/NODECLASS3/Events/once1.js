
const event = require('events')
const emitterClass = event.EventEmitter
const eventEmitter1 = new emitterClass()
eventEmitter1.on("test", () => {
    console.log('on event emitter test1')
})

eventEmitter1.on("test2", () => {
    console.log('on event emitter')
})

eventEmitter1.emit('test');
eventEmitter1.emit('test2');


const eventEmitter2 = new emitterClass()

eventEmitter2.once('test3', () => {
    console.log('once event emiiter');
})
eventEmitter2.emit('test3')//emit only
// eventEmitter2.emit('test2')

//remove all listner
// eventEmitter2.removeAllListeners();
eventEmitter2.once('test4', () => {
    console.log('once second event emiiter');
})
eventEmitter2.emit('test')

eventEmitter2.once('test5', () => {
    console.log('once second event emiiter');
})
eventEmitter2.emit('test')


// console.log(eventEmitter1.eventNames())
console.log(eventEmitter2.eventNames())



