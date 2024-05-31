const a = 10
const b = 5

function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

// console.log(add(a, b))
// console.log(subtract(a, b))
// console.log(multiply(a, b))

const math = {
    add,
    subtract,
    multiply
}

module.exports = math