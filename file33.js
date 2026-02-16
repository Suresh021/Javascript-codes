// const student = { name: "John", age: 30, city:"Jalandhar"}

//for destructing the array 
// names = ["John", "Jane", "Doe"]
// const [name1, name2, name3] = names
// console.log(name1)

// const {name,age} = student
// console.log(name)
// console.log(age)

// const {n1,n2} = student
// console.log(n1)
// console.log(n2)

// const { name: userName } = student
// console.log(userName)

// const { city = "Amritsar" } = student
// console.log(city)

const student = { name: "John", age: 30, marks: { math: 60, science: 90 } }
const { marks } = student
console.log(marks)
const { marks: { math } } = student
console.log(math)




