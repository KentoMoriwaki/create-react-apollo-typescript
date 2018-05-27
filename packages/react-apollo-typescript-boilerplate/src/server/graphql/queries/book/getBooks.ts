import gql from "graphql-tag";

import api from "../../../lib/api";

export const getBooksQuery = gql`
  extend type Query {
    getBooks: [Book!]!
  }
`;

// const books = [
//   {
//     title: "Harry Potter and the Sorcerer's stone",
//     author: "J.K. Rowling"
//   },
//   {
//     title: "Jurassic Park",
//     author: "Michael Crichton"
//   }
// ];

export default async function getBooks() {
  const res = await api("http://localhost:3000/api/system/books");
  const json = await res.json();
  return json;
}
