const Post = require('../../models/Post');
const Portfolio = require('../../models/Portfolio')
let nodeMail = require("nodemailer")

module.exports = {
    index,
    details,
    contact
}

function index(req, res) {
   Portfolio.find({}, function(err, posts) {
       res.json(posts).status(200)
   })
}

async function details(req, res) {
    Post.find({_id: req.params.id}, function(err, post) {
        res.json(post)
    })
 }

async function contact(req, res) {
    const transporter = nodeMail.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAILROUTE,
            pass: process.env.EMAILBUDDY
        }
    })
    const mailOptions = {
        from: `${req.body.email}`,
        to: process.env.EMAILROUTE,
        subject: `${req.body.name}`,
        text: `${req.body.message}`,
        replyTo: `${req.body.email}`
    }
    transporter.sendMail(mailOptions, (err, data) => {
        if(err) {
            res.json({status: 'fail'}).status(400)
        } else {
            res.json({status: 'success'}).status(200)
        }
    })
}