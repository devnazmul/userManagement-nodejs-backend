require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const userDetailsRouter = require("./routes/userDetails")
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => {
    res.send('Server is running..');
});
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/userDetails", userDetailsRouter);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Listening on http://localhost:${port}`));