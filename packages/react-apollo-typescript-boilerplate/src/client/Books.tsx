import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Books: React.SFC = () => (
  <Query
    query={gql`
      {
        books {
          title
          author
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.books.map(
        ({ title, author }: { title: string; author: string }) => (
          <div key={title}>
            <p>{`${title}: ${author}`}</p>
          </div>
        )
      );
    }}
  </Query>
);

export default Books;
