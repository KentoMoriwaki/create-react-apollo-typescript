import getBooks, { getBooksQuery } from "./book/getBooks";

export const queries = [getBooksQuery];

export const resolvers = {
  getBooks
};
