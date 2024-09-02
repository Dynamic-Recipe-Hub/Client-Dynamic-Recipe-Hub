const express = require("express");
const mongoose = require("./Config/config"); // استيراد إعدادات الاتصال بقاعدة البيانات
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const cors = require("cors");
// require("./Models/UserModels");

app.use(
  cors({
    origin: "http://localhost:1000", // استبدل بعنوان النطاق المسموح به
    methods: ["GET", "POST", "PUT", "DELETE"], // السماح بطرق معينة
    allowedHeaders: ["Content-Type", "Authorization"], // السماح برؤوس معينة
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


const contactRoutes = require('./Routes/contactRouter');

app.use('/api/contact', contactRoutes);

// بدء تشغيل الخادم
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
