const User = require('../model/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (req, res) => {
    const { email, password ,name} = req.body;
    if (!email || !password|| !name) {
        return res.status(400).json({ message: 'Please provide both email and password.' });
    }
    const existingUser = await User.findOne({ email }).select("email");
    if (existingUser) {
        return res.status(400).json({ message: 'email already exists.' });
    }
    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = new User({ email, password: hashedPassword , name });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
};

const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        return res.status(400).json({ message: "Both name and password are required", status: 400 });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials", status: 401 });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid credentials", status: 401 });
      }
      return res.status(200).json({ message: "Login successfull", user: { email: user.email,password:user.password},});
    } catch (error) {
      return res.status(500).json({ message: error.message, status: 500 });
    }
  };
module.exports = { register, login };
