const User = require("../Models/User.model");

const getUsers = (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = new User({ username, email, password });
    user.save();
  } catch (error) {
    res.status(401).json(error);
  }
};

module.exports = { getUsers };
