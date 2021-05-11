const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    name: {},
    technologies: {},
    link: {},
    pic: {},
    github: {}
  },{
    timestamps: true,
  }
)

module.exports = mongoose.model("Portfolio", portfolioSchema);