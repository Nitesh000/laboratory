const router = require("express").Router();
const PricingModal = require("../modal/pricing.modal");

router.get("/", async (req, res) => {
  const prices = await PricingModal.find();
  if (!prices) return res.status(404).send({ message: "No Prices found!" });
  res.send(prices);
});

module.exports = router;
