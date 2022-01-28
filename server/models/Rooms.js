const { Schema, model } = require('mongoose');

const roomSchema = new Schema(
    {
      roomid: {
        type: String,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        required: true,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      itemid: {
        type: String,
        required: true,
        unique: true,
      },
    });

  const Room = model('Room', roomSchema);
  
  module.exports = Room;
  
