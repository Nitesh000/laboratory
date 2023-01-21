const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserModal = require("../modal/user.modal");
const saltRounds = 10;

router.post("/", async (req, res) => {
  const { name, phone, email, password, address } = req.body;
  const hashPassword = bcrypt.hashSync(password, saltRounds);
  let newUser = new UserModal({
    name,
    email,
    phone,
    address,
    hashPassword,
  });

  const response = await newUser.save();
  if (!response) return res.send({ message: "Unable to create a new User." });
  return res.send(response);
});

module.exports = router;
