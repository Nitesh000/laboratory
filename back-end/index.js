const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/api/users", (req, res) => {
  res.json({ user: "John Doe" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
