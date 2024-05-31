const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    businessName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    userTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserType",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    sourceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Source",
      required: true,
    },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() },
  },
  { versionKey: false }
);
const User = mongoose.model("User", userSchema);

module.exports = User;
