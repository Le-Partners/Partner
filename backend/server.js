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

const userSchema = new mongoose.Schema ({
    username:{
        type: String,
        required: true,
        unique: true
    },
    birthday:{
        type: Date,
        required: true,
    },
    gender:{
        type:String,
        required: true
    },
    bio:{
        type : String,
        required : true
    }

    
});

const postSchema = new mongoose.Schema({


    username:{
        type:String,
        required: true,
    },
    message:{
        type:String,
        required: true
    },
    date_time:{
        type:Date,
        required: false
    }
});

const partnerSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true
        
    },
    partners: {
        type: [String],
        required: true
    }

});

const messageSchema = new mongoose.Schema({
    sender_username:{
        type: String,
        required: true
    },
    reciever_username:{
        type:String,
        required: true
    }, 
    text_message:{
        type: String,
        required: true
    },
    is_read:{
        type: Boolean,
        required: true,
        default: false
    }
});

const notificationSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    notification_message:{
        type: String,
        required: true
    },
    is_read:{
        type: Boolean,
        required: true
    }

});






app.get("/api", (req, res) => {
    res.json({"dummy": ["testing", "the", "backend"]})
})

app.listen(8080, () => {
    console.log("Server started on port http://localhost:8080")
})
