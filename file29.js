// function add(a, b) {
//     console.log(a)
//     console.log(b)
// }
// add(4, 5)

// function add() {
//     console.log(arguments)
//     console.log(arguments.length)
//     console.log(arguments[0])
// }
// add(7, 5, 8, 9)

// function add(...arr) {
//     console.log(arr);
// }
// add(7, 5, 8, 9)

// function add(...arr) {
//     const sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     let sum = arr.reduce((total, num) => {
//         return total + num
//     }, 0)
//     return sum
// }
// const result = add(7, 5, 8, 9)
// console.log(result)

const add = () => {
    console.log(arguments)
    // let sum = arr.reduce((total, num) => {
    //     return total + num
    // }, 0)
    // return sum
}
const result = add(7, 5, 8, 9)
console.log(result)
