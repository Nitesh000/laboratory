const router = require("express").Router();
const UserModal = require("../modal/user.modal");

router.get("/:userId", async (req, res, next) => {
  const _id = req.params.userId;
  const user = await UserModal.findById(_id);
  if (!user) res.status(404).send({ message: "No user found" });
  res.send(user.name);
});

module.exports = router;
