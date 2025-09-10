const express = require("express");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authmiddleware");


const router = express.Router();

router.post("/",authMiddleware, async(req,res) => {
try {
    const{title,content} = req.body;
    if(!title || !content) {
       return res.status(400).json({ message: "Title and content are required" }); 
    }
    const blog = new Blog({
        title,
        content,
        author : req.userId,
    });

    await blog.save();
    res.status(201).json({ message: "Blog created successfully", blog });
} catch (err) {
    res.status(500).json({ message: "Error creating blog", error: err.message });
}
});


router.get("/",authMiddleware,async (req, res) => {
    try{
        const blogs = await Blog.find().populate("author", "username");
        res.json(blogs);

    }catch(err){
        res.status(500).json({ message: "Error fetching blogs", error: err.message });
    }
});






router.delete("/:id", authMiddleware ,async(req,res) =>
 {
    try {
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }


        if (blog.author.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized to delete this blog" });
    }
    await blog.deleteOne();
    res.json({ message: "Blog deleted successfully" });
     } catch (err) {
    res.status(500).json({ message: "Error deleting blog", error: err.message });
  }
});


router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "username email");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: "Error fetching blog", error: err.message });
  }
});


module.exports = {blogRoutes : router};