const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { sign } = require('jsonwebtoken');

const resolvers = {
    Query: {
    me: async (parent, args, context) => {
        if (context.user) {
            const userData = await User.findOne({ _id: countDocuments.user._id}).select(
                "-_v -password"
            );
            return userData;
        }
        throw new AuthenticationError('Failed Login')
    },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Invalid');
            }
        const correctPw = await user.isCorrectPassword(password)
            if (!correctPw) {
                throw new AuthenticationError('Invalid');
            }
            const token = signToken(user);
            return { token, user }


        },
        saveBook: async (parent, { bookData }, context ) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user_id },
                    { $push: { savedBooks: bookData } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('Please Login.');
        },
        removeBook: async (parent, { bookId }, context) => {
            if (context.user) {
                return User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedBooks: { bookId: bookId } } },
                    { new: true }
                );
            }
            throw new AuthenticationError('Please Login.')
        },
    },
};

module.exports = resolvers;