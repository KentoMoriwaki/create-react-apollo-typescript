import gql from "graphql-tag";
import { makeExecutableSchema } from "graphql-tools";

import Book from "./types/book/Book";
import getBooks, { getBooksQuery } from "./queries/book/getBooks";
import createBook, { createBookMutation } from "./mutations/book/createBook";

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
  typeDefs: [rootSchema, Book, getBooksQuery, createBookMutation],
  resolvers: {
    Query: {
      getBooks
    },
    Mutation: {
      createBook
    }
  }
});

export default schema;
