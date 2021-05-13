import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./Components/Home";
import Fetch from "./Components/Fetch";
import styles from "./App.module.css"

const client = new ApolloClient({
  uri: "https://holy-snow.us-west-2.aws.cloud.dgraph.io/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className = {styles.fill}>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/:id' component={Fetch} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
};

export default App;
