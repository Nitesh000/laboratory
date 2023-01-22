const { model, Schema } = require("mongoose");
const testSchema = new Schema({
  test: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const pricingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  tests: [testSchema],
});

module.exports = PricingModal = model("pricing", pricingSchema);
