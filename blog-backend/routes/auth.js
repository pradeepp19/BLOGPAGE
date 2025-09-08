const express = require("express");
const bcrypt = require("bcrypt");
const  jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/signup",async (req,res) => {
    try {
        const{ username, email, password} = req.body;

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
        const { email, password } = req.body;

        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: "User not found"});

        const isPasswordValid = await bcrypt.compare(password , user.password);
        if(!isPasswordValid) return res.status(400).json({message:"Inavalid Credentials"});

        const token = jwt.sign (
            {id:user._id}, process.env.JWT_SECRET
        );
        res.json({token});
    } catch(err) {
        res.status(500).json({error: err.message});
    }
});
module.exports = { authRoutes: router };