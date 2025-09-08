const jwt = require("jsonwebtoken");

function authMiddleware (req,res,next) {
    try {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(403).json({message:"No token "});
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();

} catch (err) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
} 
module.exports = authMiddleware;
