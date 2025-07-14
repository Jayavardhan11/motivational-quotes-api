const express = require("express");

const quoteRoutes = require("./routes/quoteRoutes");
const app = express();
const cors = require("cors")
app.use(cors()); // ✅ Allow everyone

app.use(express.json());

//Root route
app.get("/", function (req, res) {
  res.send("Welcome to Quote API");
});

app.use("/api", quoteRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
