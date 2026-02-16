numbers = [5, 3, 6, 1]
//numbers.forEach(()=>{})
// numbers.forEach((number)=>{
//     console.log(number)
// })
// numbers.map((number) => {
//     console.log(number)
// })

// numbers.map(() => {})
// const newArray = numbers.map((number) => {
//     return number + 1
// })
// console.log(newArray)

// numbers.filter(() => { })
// const evenNumbers = numbers.filter((number) => {
//     return number % 2 === 0
// })
// console.log(evenNumbers)

// numbers.find(() => { })
// const result = numbers.find((number) => {
//     return number > 3
// })
// console.log(result)

// numbers.reduce(() => { })
// const add = numbers.reduce((sum, number) => {
//     return sum + number
// }, 0)
// console.log(add)

//numbers.some(()=>{})
// const result = numbers.some((number) => {
//     return number > 1
// })
// console.log(result)

// numbers.every(()=>{})
const result = numbers.every((number) => {
    return number > 2
})
console.log(result)


// let marks = [78, 50, 90, 20]
// const result = marks.some((mark) => {
//     return mark > 50;
// })
// if (result) console.log("Pass")
// else console.log("Fail")

