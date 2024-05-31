console.log('hello path.js')

const path = require ('path')
const textPath = path.join(__dirname,'fs-files', '850', 'message-850.txt')
const extFile = path.extname(textPath)
const fs = require ('fs')

console.log(textPath)
console.log(extFile)

if (extFile === '.jpeg'){
    console.log('this is a jpeg file')
} else {
    console.log('this is not a jpeg file')
}

fs.readFile(textPath, 'utf8', (err, data) =>{
    if (err){
        console.log('error')
    } else {
        console.log(data)
    }
})

// console.log(__dirname)
// console.log(__filename)