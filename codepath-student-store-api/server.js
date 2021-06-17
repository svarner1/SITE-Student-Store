const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const productsRouter = require("./routes/products") 
const app = express()


app.use(morgan("tiny"))
app.use(express.json())
app.use(cors())
//attach the products endpoint 

/*
app.get("/", async (req, res, next) => {
    res.status(200).json({ping: "pong"})
})
*/

const port = 3001

app.listen(port, () => {
    console.log('Server listening on port ' + port)
})