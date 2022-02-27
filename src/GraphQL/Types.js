import { GraphQLObjectType, GraphQLString } from "graphql";

export const FilterCharacter = new GraphQLObjectType({
  name: "filerCharacter",
  fields: {
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
  },
});
