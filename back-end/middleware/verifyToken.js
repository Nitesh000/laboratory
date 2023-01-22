const UserModal = require("../modal/user.modal");
const jwt = require("jsonwebtoken");

module.exports = verifyToken = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token || token == undefined) return next();
  const { _id } = jwt.verify(token, process.env.PRIVATEKEY);
  if (!_id) return next();
  const user = await UserModal.findOne({ _id });
  if (!user) return next();
  res
    .cookie("token", token, { httpOnly: true })
    .send({ message: `Welcome ${user.name}` });
};
