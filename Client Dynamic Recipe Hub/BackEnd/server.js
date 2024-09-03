const express = require("express");
const mongoose = require("./Config/config"); // استيراد إعدادات الاتصال بقاعدة البيانات
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

// استبدل بمسار النطاق المسموح به
app.use(
  cors({
    origin: "http://localhost:1000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


// استيراد الطرق
const authRoutes = require("./Routes/userRoutes");

// استخدام الطرق
app.use("/api/auth", authRoutes);


const contactRoutes = require('./Routes/contactRouter');

app.use('/api/contact', contactRoutes);

// بدء تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
