const jwt = require("jsonwebtoken");
 const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.setHeader("Authorization", `Bearer ${token}`);


  return token; 
};

module.exports = {generateToken}; 