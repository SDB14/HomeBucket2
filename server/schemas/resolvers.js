const { User, Room } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('rooms');
      
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('rooms');
    },
    rooms: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Room.find(params).sort({ createdAt: -1 });
    },
    room: async (parent, { _id }) => {
      return Room.findOne({ _id });
    },
  }
};

module.exports = resolvers;