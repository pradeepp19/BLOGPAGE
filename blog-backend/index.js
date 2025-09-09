const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config()

const { authRoutes } = require("./routes/auth.js");
const { blogRoutes } = require("./routes/blog.js");


const app = express();
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

app.use(express.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/blogs", blogRoutes);

async function main() {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(3000);
    console.log("Listening on port 3000");
}

main()