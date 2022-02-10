const eventEmitter = require('events')
const { EventEmitter } = require('stream')
const eventEmitrCLass = eventEmitter.EventEmitter //class EventEmitter
const eventemitter = new EventEmitter()  //object

//publish of the event
eventemitter.on('test', () => {
    console.log('this the  first event')
})
eventemitter.on('add', (a, b) => {
    console.log('addition result ', (a + b))
})

eventemitter.on('test2', (msg) => {
    console.log("message ", msg)
})


//we can have multiple handlers
//listener of the event 1
eventemitter.emit('test2', "SHAIKH")
eventemitter.emit('add', 12, 13)

//listner  of the event 2
eventemitter.emit('test');

//event Names
console.log(eventemitter.eventNames())

let prod = ((a, b) => {
    console.log('multiplication result ', (a * b))
})

eventemitter.on('products', prod)
eventemitter.emit('products', 10, 20)

//remove event
eventemitter.removeListener('products', prod)
console.log(eventemitter.eventNames);


