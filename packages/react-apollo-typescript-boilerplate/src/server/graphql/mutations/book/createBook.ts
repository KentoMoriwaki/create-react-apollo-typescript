import gql from "graphql-tag";

export const createBookMutation = gql`
  extend type Mutation {
    createBook(title: String): Book
  }
`;

export default function createBook(_: any, { title }: any) {
  return { title, author: "K" };
}
