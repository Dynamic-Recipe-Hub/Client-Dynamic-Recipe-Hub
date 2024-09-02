const User = require("../models/UserModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); // أضف هذا إذا لم يكن موجوداً في الأعلى

const SECRET_KEY = process.env.JWT_SECRET_KEY || "your_secret_key";

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // تشفير كلمة المرور
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create user", error });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      // مقارنة كلمة المرور
      return res.status(401).json({ message: "Invalid credentials" });
    }
    if (!user.isActive) {
      return res.status(403).json({ message: "Your subscription has expired" });
    }

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });

    res.cookie("jwt", token, { httpOnly: true, secure: false }); // تعيين التوكن في الكوكي

    res.status(200).json({ message: "Login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to login", error });
  }
};
