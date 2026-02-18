const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;


// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   console.log("Authorization Header:", req.headers.authorization);
//   console.log("JWT Secret:", process.env.JWT_SECRET);

//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).json({ message: "No token provided" });
//   }

//   const token = authHeader.split(" ")[1];

//   console.log("Extracted Token:", token);

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     console.log("Decoded:", decoded);
//     req.userId = decoded.id;
//     next();
//   } catch (error) {
//     console.log("JWT Error:", error.message);
//     return res.status(401).json({ message: "Invalid token" });
//   }
// };

// module.exports = authMiddleware;
