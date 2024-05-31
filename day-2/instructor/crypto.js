console.log("hello crypto");

const crypto = require('crypto');
const random = crypto.randomInt(100)//.toString().padStart(6,'0')
const  randomString =crypto.randomBytes(10)//.toString('utf-8')or.toString('utf-8')
const name = 'Aiman' + "-" + random
const uuid =crypto.randomUUID();


console.log(random);
console.log(randomString);
console.log(name);
console.log(uuid);