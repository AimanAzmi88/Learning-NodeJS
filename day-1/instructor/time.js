const time = new Date
const hours = time.getHours()
const minutes = time.getMinutes().toString().padStart(2,'0')
const seconds = time.getSeconds()
const month = time.getMonth()


// console.log(time)
// console.log(hours,'hours')
// console.log(minutes, 'minute')
// console.log(seconds, 'seconds')
// console.log(month+1,'month')


// if (hours > 12) {
//     const newHours = hours  - 12
//     console.log(`the time now is ${newHours}:${minutes}:${seconds} pm`)
// } else {
//     console.log(`the time now is ${hours}:${minutes}:${seconds} am`)
// }

const object = {
    time,
    hours,
    minutes,
    seconds,
    month
}

module.exports = object