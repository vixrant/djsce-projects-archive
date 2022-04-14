const { GraphQLSchema } = require('graphql');

const rootMutation = require('./rootMutation');
const rootQuery = require('./rootQuery');
const signInUsers = require('./signInUsers');
const signUpUsers = require('./signUpUsers');

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

module.exports = {
  schema,
  signInUsers,
  signUpUsers,
};
