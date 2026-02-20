import express from "express";
const app = express()
app.listen(8080, () => {
    console.log("Server started...")
})
// const greet = (req, res, next) => {
//     console.log("Hello World")
//     next()
// }
// app.use(greet)
app.use(express.json())
let user = [
    { id: 1, name: "John", email: "John@gmail.com", role: "student" },
    { id: 2, name: "Cathy", email: "cathy@gmail.com", role: "student" },
    { id: 3, name: "Admin", email: "admin@gmail.com", role: "admin" }
]

app.post("/", (request, response) => {
    //console.log(request.body)
    const users = request.body
    user.push(users)
    response.json(user)
})

// app.delete("/:id", (request, response) => {
//     const id = Number(request.params.id)

//     user = user.filter((u) => u.id !== id)

//     response.json(user)
// })

app.get("/", (req, res) => {
    res.json(user)
})
// app.get("/:id", (req, res) => {
//     // res.send(user)
//     const users = user.find((users) => users.id === Number(req.params.id))
//     res.json(users)
// })

