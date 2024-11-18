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
  },
  birthday:{
    type: String,
    required: true,
  },
  gender:{
    type:String,
    required: true
  },
  bio:{
    type : String,
    required: false
  },
  uid:{
    type : String,
    required : true
  },
});
const User = mongoose.model('User', userSchema);


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
    },
    uid:{
      type : String,
      required : true
    }
});
const Post = mongoose.model('Post', postSchema);


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
const Partner = mongoose.model('Partner', partnerSchema);


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
const Message = mongoose.model('Message', messageSchema);


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
    },
    uid:{
      type : String,
      required : true
    }
});
const Notification = mongoose.model('Notification', notificationSchema);



app.post('/users', async function (req, res) {
  const usr = new User({
    username: req.body.username,
    birthday: req.body.birthday,
    gender: req.body.gender,
    bio: req.body.bio,
    uid: req.body.uid,
  })
  try {
    console.log("Trying")
    await usr.save();
    res.send(usr);
    console.log("User made")
  }catch(error) {
    console.log(error)
  }
})

app.get('/users', async function (req, res) {
  try {
    console.log("Getting")
    const usrs = await User.find()
    res.send(usrs)
  } catch (error) {
    console.log(error)
  }
})


app.get('/users/:uid', async function (req, res) {
  try {
    const uid = req.params.uid;

    const usr = await User.findOne({ uid });

    if (!usr) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(usr);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});


// app.put('/users/:uid', async function (req, res) {

// })


app.post('/posts', async function (req, res){
    const post = new Post({
        username: req.body.username,
        message: req.body.message,
        date_time: Date(),
        uid: req.body.uid,
    })
    try{
        console.log("Trying")
        await post.save();
        res.send(post);
        console.log("Post made")
    }
    catch(error){
        console.log(error)
    }
})



app.get('/posts', async function (req, res) {
    try{
    const posts = await Post.find()
    res.send(posts)
    }
    catch (error) {
        console.log(error)
    }
})


app.get("/api", (req, res) => {
  console.log("Got it")
  res.json({"dummy": ["testing", "the", "backend"]})
})

app.listen(8080, () => {
    console.log("Server started on port http://localhost:8080")
})
