const express = require("express");
const mongoose = require("./Config/config");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

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

// Import routes
const authRoutes = require("./Routes/authRoutes");
const catalogdish = require("./Routes/catalogdishroutes");
const catalogrecipe = require("./Routes/catalogreciperoutes");
const reviewrecipe = require("./Routes/reviewreciperoutes");
const contactRoutes = require("./Routes/contactRouter");
const contactdish = require("./Routes/reviewdishroutes");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/records", catalogdish);
app.use("/api/recipe", catalogrecipe);
app.use("/api/recipe", reviewrecipe); // Changed this line
app.use("/api/dish", contactdish); // Changed this line
app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
