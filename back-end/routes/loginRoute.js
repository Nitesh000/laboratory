const router = require("express").Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;
});

module.exports = router;
