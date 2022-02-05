const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
    }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
  },
  { timestamps: true }
);

roomSchema.virtual('id').get(function () {
  return this._id.toString();
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;
