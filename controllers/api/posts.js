const Post = require('../../models/Post');
module.exports = {
    index,
    create,
    details
}

async function index(req, res) {
   Post.find({}, function(err, posts) {
       res.json(posts)
   })
}

async function details(req, res) {
    Post.find({_id: req.params.id}, function(err, post) {
        res.json(post)
    })
 }

async function create(req, res) {
    Post.create(req.body, function(err, post) {
        res.status(200).json("success")
    }) 
}