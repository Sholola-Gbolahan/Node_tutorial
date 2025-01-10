const EventsEmitter = require('events')


const customEmitter =new EventsEmitter();


// On - listen for an event
// emit - Emit/ carry out an event
customEmitter.on('response', (name, age)=> {
  console.log(`data received: user info, name: ${name}, age:${age}`);
  
})

customEmitter.on('response', ()=> { 
  console.log(`Some data are received`);
  
})

customEmitter.emit('response','john', 31)