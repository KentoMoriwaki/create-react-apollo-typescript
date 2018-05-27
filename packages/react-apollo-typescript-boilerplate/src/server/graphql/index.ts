import gql from "graphql-tag";
import { makeExecutableSchema } from "graphql-tools";

import types from "./types";
import { mutations, resolvers as mutationResolvers } from "./mutations";
import { queries, resolvers as queryResolvers } from "./queries";

const rootSchema = gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootSchema, ...types, ...queries, ...mutations],
  resolvers: {
    Query: {
      ...queryResolvers
    },
    Mutation: {
      ...mutationResolvers
    }
  }
});

export default schema;
