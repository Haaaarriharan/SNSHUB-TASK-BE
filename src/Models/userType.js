const mongoose = require("mongoose");

const userTypeSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    createdAt: { type: Number, default: Date.now },
    updatedAt: { type: Number, default: Date.now },
  },
  { versionKey: false }
);

const UserType = mongoose.model("UserType", userTypeSchema);

module.exports = UserType;
