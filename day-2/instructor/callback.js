console.log('hello file system!');

// function add (a,b){
//     return a + b
// }

// const a = add(1,2)  
// console.log(9 * 5)

function add (a,b) {
    const result = a + b;
    return result;
}

function subtract (a,b) {
    const result = a - b;
    return result;
}

function multiply (a,b) {
    const result = a * b;
    return result;
}

function mathCallback(a,b,callback){
    return callback(a,b);
}

const result = mathCallback(4, 5, multiply)


console.log(result);
