const express = require("express");
const bcrypt = require("bcrypt");
const  jwt = require("jsonwebtoken");
const User = require("../models/User");
const Blog = require("../models/Blog");
const authMiddleware = require("../middleware/authmiddleware");


const router = express.Router();

router.post("/signup",async (req,res) => {
    try {
        let { username, email, password} = req.body;
        email = email.toLowerCase();

        const existingUser = await User.findOne({ email });
        if(existingUser) return res.status(404).json({message:"User already exists"});

        const hashedpassword = await bcrypt.hash(password, 10);

        const newUser = new User({ 
            username, 
            email, 
            password: hashedpassword
        });
        await newUser.save();

        res.status(201).json({message : "Account created Successfully"});
    } catch (err) {
        res.status(500).json({error: err.message});
    }
});

router.post("/login",async (req, res) => {
    try{
        let { email, password } = req.body;
        email = email.toLowerCase();

        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: "User not found"});

        const isPasswordValid = await bcrypt.compare(password , user.password);
        if(!isPasswordValid) return res.status(400).json({message:"Inavalid Credentials"});

        const token = jwt.sign (
            {id:user._id, username:user.username },
             process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );
        res.json({token, username:user.username });
    } catch(err) {
        res.status(500).json({error: err.message});
    }
});

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("username bio");
    if (!user) return res.status(404).json({ message: "User not found" });

    const blogs = await Blog.find({ author: req.userId }).sort({ createdAt: -1 });

    res.json({ user, blogs });
  } catch (err) {
    res.status(500).json({ message: "Error fetching account info", error: err.message });
  }
});
module.exports = { authRoutes: router };