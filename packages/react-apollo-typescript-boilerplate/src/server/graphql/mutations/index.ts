import createBook, { createBookMutation } from "./book/createBook";

export const mutations = [createBookMutation];

export const resolvers = {
  createBook
};
