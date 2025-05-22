// index.js
require("dotenv").config();
const express = require("express");
const app = express();
const schoolRoutes = require("./routes/schoolRoutes");

app.use(express.json());
app.use("/", schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
