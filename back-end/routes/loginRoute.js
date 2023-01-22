const UserModal = require("../modal/user.modal");
const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.cookies);
  const user = await UserModal.findOne({ email: username });
  if (!user)
    return res.send({
      message:
        "Not an existing account. Please create an account and try again!",
    });
  const isPasswordCorrect = bcrypt.compareSync(password, user.hashPassword);
  if (!isPasswordCorrect) {
    return res.send({ mesaage: "The password is wrong! please try again!" });
  }
  const token = jwt.sign({ _id: user._id }, process.env.PRIVATEKEY, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true });
  res.send({ message: `welcome ${user.name}` });
});

module.exports = router;
