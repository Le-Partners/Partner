const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));

app.use(cors({origin: '*'}))

const uri = process.env.mongo

mongoose.connect(uri)

const dbMongo = mongoose.connection

dbMongo.on('error', console.error.bind(console, 'connection error:'))

dbMongo.once('open', function() {
  console.log('Connected to MongoDB');
});

app.get("/api", (req, res) => {
    res.json({"dummy": ["testing", "the", "backend"]})
})

app.listen(8080, () => {
    console.log("Server started on port http://localhost:8080")
})