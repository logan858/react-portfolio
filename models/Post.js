const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: { type: String, required: true },
    topic: { type: String, required: true },
    content: { type: String, required: true }
  },{
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);