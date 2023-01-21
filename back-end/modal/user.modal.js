const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    hashPassword: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserModal = model("User", userSchema);
