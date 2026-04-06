const jwt = require('jsonwebtoken');

// PROTECT MIDDLEWARE
exports.protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // check token exists
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token" });
  }

  try {
    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, "secretkey");

    req.user = decoded; // ✅ attach user

    next();

  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// ROLE BASED ACCESS
exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {

    if (!req.user) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access Denied" });
    }

    next();
  };
};