const { User } = require("../models/User");

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find();
    // },

    User: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
  },
};

module.exports = resolvers;
