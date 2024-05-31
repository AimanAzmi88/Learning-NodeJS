const firstName = 'Nabil'
const lastName = 'Aiman'

const fullName = firstName + ' ' + lastName
console.log(fullName)


//templates string using backtick notation  
const kataSemangat = `${firstName} ${lastName} nak jadi web developer`
console.log(kataSemangat)

const multiline = `jika kau fikirkan kau boleh
kau pasti boleh malakukan
jika kau fikirkan kemenangan
kau hampiri kejayaan`
console.log(multiline)

const age = 27

const sentence = `I am ${age} years old`

console.log(sentence)

const a = 10
const b = 20
console.log(`the sum of ${a} and ${b} is ${a + b}`)

//string methods
const email = 'mangebu@gmail.com'
console.log(` the length of the email is ${email.length}`)
console.log(email.indexOf('@'))
console.log(email.lastIndexOf('@'))
console.log(email.replace('gmail', 'yahoo'))
console.log(email.toUpperCase())
console.log(email.toLowerCase())







