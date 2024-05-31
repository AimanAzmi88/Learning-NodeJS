//console.log('hello file system')

const fs = require('fs');
const crypto = require ('crypto')
const randomInt = crypto.randomInt(0,1000).toString().padStart(4, '0')

fs.mkdir(`./fs-files/folder-${randomInt}`, {recursive:true}, (err) =>  {
    if (err) {
        console.log('directory not created')
    } else {
        console.log('directory create')
    }
})


fs.writeFile(`./fs-files/folder-${randomInt}/message${randomInt}.txt`, `Hello Node.js, this is your number ${randomInt}`, 'utf8', function (err){
    if (err) {
        console.log('file not written')
    } else {
        console.log('file written')
    }
});


// for (let i=0; i<10; i++){
//     fs.writeFile(`./fs-files/message${i}.txt`, 'Hello Node.js', 'utf8', function (err){
//         if (err) {
//             console.log('file not written')
//         } else {
//             console.log('file written')
//         }
//     });
// }

fs.readFile(`./fs-files/folder-${randomInt}/message${randomInt}.txt`, 'utf8', function (err, data){
    if (err) {
        console.log('file not read')
    } else {
        console.log('this is the data from the file')
        console.log(data)
    }
})

