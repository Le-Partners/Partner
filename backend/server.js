const bodyParser = require("body-parser")
require("dotenv").config()
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const cors = require("cors")
const ImageKit = require('imagekit')

// Apit information for imagehosting
var imagekit = new ImageKit({

  publicKey : "public_bGhKDN0oFvrNYpH4gM9gB+FWG9E=",

  privateKey : "private_Pk1yBaz+F+MiEaZHJhVVuJkzEEE=",

  urlEndpoint : "https://ik.imagekit.io/83imtx286"

});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./public'));

// Allows us to make requests to the backend from anywhere
app.use(cors({origin: '*'}))

const uri = process.env.mongo

// Database connection
mongoose.connect(uri)

const dbMongo = mongoose.connection

dbMongo.on('error', console.error.bind(console, 'connection error:'))

dbMongo.once('open', function() {
  console.log('Connected to MongoDB');
});

// Schema for user info (schema basically being an outline)
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
  experience:{
    type : String,
    required : true
  },
  pfp:{
    type : String,
    required : true,
    default : 'https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?rs=1&pid=ImgDetMain'
  }
});
const User = mongoose.model('User', userSchema);

// Schema for user posts
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
    },
    like:{
      type: Number,
      required : true,
      default : 0
    },
    fire:{
      type: Number,
      required : true,
      default : 0
    },
    star:{
      type: Number,
      required : true,
      default : 0
    },
    content:{
      type : String,
      required : true,
    }

});
const Post = mongoose.model('Post', postSchema);

// Schema for users partners
const partnerSchema = new mongoose.Schema({
    username: {
      type:String,
      required: true
    },
    partners: {
      type: [String],
      required: true,
      default : [""]
    },
    uid : {
      type : String,
      required : true
    }
});
const Partner = mongoose.model('Partner', partnerSchema);

// Schema for user messages
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

// Schema for user notifications
const notificationSchema = new mongoose.Schema({
    username:{
        type: String,
        required: false
    },
    notification_message:{
        type: String,
        required: true
    },
    is_read:{
        type: Boolean,
        required: true,
        default: false
    },
    uid:{
      type : String,
      required : true
    }
});
const Notification = mongoose.model('Notification', notificationSchema);

// Set of API endpoints for User Schema

// Enpoint that creates a user in the db
app.post('/users', async function (req, res) {
  const usr = new User({
    username: req.body.username,
    birthday: req.body.birthday,
    gender: req.body.gender,
    bio: req.body.bio,
    uid: req.body.uid,
    experience: req.body.experience
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


// Grabs all the users in the db
app.get('/users', async function (req, res) {
  try {
    console.log("Getting")
    const usrs = await User.find()
    res.send(usrs)
  } catch (error) {
    console.log(error)
  }
})


// Grabs a user by their uid (would be used for the user viewing their profile)
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

// Grabs a user by their username (would be used when we make other user profiles viewable)
app.get('/users/username/:username', async function (req, res) {
  try {
    const username = req.params.username;

    const usr = await User.findOne({ username });

    if (!usr) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(usr);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

// This endpoint is for a user to modify their information
app.put('/users/:uid', async function (req, res) {
  try {
    const uid = req.params.uid;

    const updatedUser = await User.findOneAndUpdate(
      { uid },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

// This endpoint deletes a user from the db, in instance where they delete their account
app.delete('/users/:uid', async function (req, res) {
  try {
    const uid = req.params.uid;

    const result = await User.deleteOne({uid})
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(uid);
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Set of endpoints for user posts

// Endpoint posts a users post to the db
app.post('/posts', async function (req, res){
    const post = new Post({
        username: req.body.username,
        message: req.body.message,
        date_time: Date(),
        uid: req.body.uid,
        content: req.body.content,
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

// Lists all posts of all users
app.get('/posts', async function (req, res) {
    try{
    const posts = await Post.find()
    res.send(posts)
    }
    catch (error) {
        console.log(error)
    }
})

// GRabs the posts of a certain user using their uid
app.get('/posts/:uid', async function (req, res) {
  try {
    const uid = req.params.uid;

    const posts = await Post.find({ uid });

    if (!posts) {
      return res.status(404).json({ message: 'User posts not found' });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Grabs the posts of a certain user using their username
app.get('/posts/username/:username', async function (req, res) {
  try {
    const username = req.params.username;

    const posts = await Post.find({ username });

    if (!posts) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Grabs a post by the posts id
app.get('/posts/post/:_id', async function (req, res) {
  try {
    const _id = req.params._id;

    const posts = await Post.find({ _id });

    if (!posts) {
      return res.status(404).json({ message: 'User posts not found' });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: 'Server error' });
  }
});


// Allows the modification of a post (For when we implement post editing)
app.put('/posts/post/:_id', async function (req, res)
{
  try {
    const postId = req.params._id;

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $inc: req.body },
      { new: true, runValidators: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ message: 'Server error' });
  }
})


// Creates a users list of partners (For when the partner system gets implemented)
app.post('/partners', async function (req, res) {
  const partner = new Partner({
    username : req.body.username,
    uid : req.body.uid,
  })
  try {
    await partner.save()
    res.send(partner)
  }catch(error) {
    console.log(error)
  }
})

// Updates the list of partners
app.post('/partners/username/:username', async function (req, res) {
  try {
    const username = req.params.username

    const partners = await Partner.findOne({username})
    res.status(200).json(partners);
  }catch(error){
    console.log(error)
  }
})

// This endpoint gets authorization from ImageKit
app.get('/auth', function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});

// Starts the backend server
app.listen(8080, () => {
    console.log("Server started on port http://localhost:8080")
})
