const router = require("express").Router();
const bcrypt = require("bcrypt");
const UserModal = require("../modal/user.modal");

router.post("/", async (req, res) => {
  const { name, phone, email, password, address } = req.body;
  const hashPassword = bcrypt.hashSync(password, process.env.SALTROUNDS);
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
