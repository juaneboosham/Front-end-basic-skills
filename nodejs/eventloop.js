const EventEmitter = require('events')
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => {
  console.log('开始')
  setTimeout(()=>{
    eventEmitter.emit('start')
  },100)
})
setTimeout(()=>{
  eventEmitter.emit('start')
},2000)


eventEmitter.once('start',()=>{
  console.log('start once')
})