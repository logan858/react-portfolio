const Post = require('../../models/Post');
module.exports = {
    index,
    create,
    details,
    deleteOne,
    editOne,
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

async function deleteOne(req, res) {
    Post.deleteOne({_id: req.params.id}, function(err, post) {
        if(err) console.log(err);
        res.status(204).json("success")
    })
}

function editOne(req, res) {
    Post.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        topic: req.body.topic,
        content: req.body.content,
        }, function(err, post) {
            if(err) {
                res.send(err)
            } else {
                res.status(200).json("success") 
            }
        }
    )   
}