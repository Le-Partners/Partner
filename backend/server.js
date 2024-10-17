const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors({origin: '*'}))

app.get("/api", (req, res) => {
    res.json({"dummy": ["testing", "the", "backend"]})
})

app.listen(8080, () => {
    console.log("Server started on port http://localhost:8080")
})