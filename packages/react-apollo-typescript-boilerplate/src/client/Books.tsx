import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { GetBooksQuery } from "./API";

class QueryGetBooks extends Query<GetBooksQuery> {}

const query = gql`
  query GetBooks {
    getBooks {
      title
      author
    }
  }
`;

const Books: React.SFC = () => (
  <QueryGetBooks query={query}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data!.getBooks.map(book => (
        <div key={book.title}>
          <p>{`${book.title}: ${book.author}`}</p>
        </div>
      ));
    }}
  </QueryGetBooks>
);

export default Books;
