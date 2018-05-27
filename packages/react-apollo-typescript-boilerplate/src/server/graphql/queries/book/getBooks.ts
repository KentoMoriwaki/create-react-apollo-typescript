import gql from "graphql-tag";

export const getBooksQuery = gql`
  extend type Query {
    getBooks: [Book!]!
  }
`;

const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

export default function getBooks() {
  return books;
}
