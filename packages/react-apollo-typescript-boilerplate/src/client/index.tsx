import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import Books from "./Books";

const client = new ApolloClient({
  uri: "/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Books />
  </ApolloProvider>
);
ReactDOM.render(<App />, document.getElementById("root"));
