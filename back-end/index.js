const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb://localhost:27017/laboratory",
  { serverSelectionTimeoutMS: 5000 },
  (err) => {
    if (err) {
      throw new Error("There was an error connecting with mongoDB.");
    } else {
      console.log("The connection with mongoDB is successful.");
    }
  }
);

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/login", require("./routes/loginRoute"));
app.use("/signin", require("./routes/signInRoute"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
