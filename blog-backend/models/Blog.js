const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title : {type:String, require:true},
    content: {type:String, required:true},
    author: {type: mongoose.Schema.Types.ObjectId, ref:"User"}
},{timestamps:true});

module.exports = mongoose.model("Blog",blogSchema);