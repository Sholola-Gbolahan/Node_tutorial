// The built in module provides many useful properties and methods for interacting with operating system.

// this give access to the built in module os
const os = require('os')

// access user info from the OS mudule]
const userInfo = os.userInfo();

console.log(userInfo);

// method to return system uptime in seconds
console.log(`The system uptime is : ${os.uptime()} seconds`);

