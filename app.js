const EventsEmitter = require('events')


const customEmitter =new EventsEmitter();


// On - listen for an event
// emit - Emit/ carry out an event
customEmitter.on('response', ()=> {
  console.log('data received');
  
})

customEmitter.emit('response')