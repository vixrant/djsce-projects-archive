const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'ItemTypes',
  fields: {
    type_id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    ironing_price: { type: GraphQLFloat },
    dry_cleaning_price: { type: GraphQLFloat },
  },
});
