import express from 'express'
const app = express()
app.listen(8080)

const logger = (req, res, next) => {
    // console.log(req.url)
    req.message = "This is logger function"
    next()
}
app.use(logger)
app.get("/", logger, (req, res) => {
    console.log(req.message)
    res.json(req.url)

})

app.get("/home", (req, res) => {
    console.log(req.message)
    res.json(req.url)
})