const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const routes = require("./routes/routes");
const authRoutes = require("./routes/authRoutes");
var bodyParser = require("body-parser");
var cors = require("cors");
const cookieParser = require("cookie-parser");

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const mongoString = process.env.ATLAS;
const app = express();
mongoose.set("strictQuery", false);
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

app.use(cors(
  {origin: ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST"],
  credentials: true,}
));
app.use("/api", routes);

app.use("/1", authRoutes);


app.use(cookieParser());
app.use(express.json());

app.listen(process.env.port, () => {
  console.log(`Server Started at ${process.env.port}`);
});
