const { User, Room, Item } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('rooms');
        return userData;
      }

      throw new AuthenticationError('You are not logged in');
    },
    
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('You entered incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('You entered incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
  //   addUser: async (parent, args) => {
  //     const user = await User.create(args);
  //     const token = signToken(user);

  //     return { token, user };
  //   },
  //   addRoom: async (parent, { bookData }, context) => {
  //     if (context.user) {
  //       const updatedUser = await User.findByIdAndUpdate(
  //         { _id: context.user._id },
  //         { $push: { room: room._id } },
  //          { new: true }
  //        );

  //       return updatedUser;
  //     }

  //   }

//     //create room
//     addRoom: async (parent, args, context) => {
//       if (context.user) {
//         const room = await room.create({ ...args, username: context.user.username });

//         await User.findByIdAndUpdate(
//           { _id: context.user._id },
//           { $push: { room: room._id } },
//           { new: true }
//         );

//         return room;
//       }

//       throw new AuthenticationError('You need to be logged in!');
//     },
//     // addItem: async (parent, { roomId, itemID }, context) => {
//     //   if (context.user) {
//     //     const updatedRoom = await Room.findOneAndUpdate(
//     //       { _id: roomId },
//     //       { $push: { items: { itemId, itemDesc } } },
//     //       { new: true, runValidators: true }

//     //     );

//     //     return updatedRoom;
//     //   }

//     //   throw new AuthenticationError('You need to be logged in!');
//     // },

//     /*This needs to be fixed ASAP!!!!
//     additem: async (parent, { roomId }, context) => {
//       if (context.user) {
//         const updatedRoom = await User.findOneAndUpdate(
//           { _id: roomId  },
//           { $push: { items: { itemId, itemDesc } } },
//           { new: true }
//         ).populate('items');

//         return updatedRoom;
//       }

//       throw new AuthenticationError('You need to be logged in!');
//     }*/
//   } 
  }
  }
};

module.exports = resolvers;
