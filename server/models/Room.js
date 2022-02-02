const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const roomSchema = new Schema(
  {
    rmDesc: {
      type: String,
      required: 'A description is required!',
      minlength: 1,
      maxlength: 280
    },
    // roomId: {
    //     type: String,
    //     required: true, 
    // },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    items:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Item'
      }
    ],
  },
  {
    toJSON: {
      getters: true
    }
  }
);

roomSchema.virtual('itemCount').get(function() {
  return this.items.length;
});

const Room = model('Room', roomSchema);

module.exports = Room;
