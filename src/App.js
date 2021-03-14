import React from 'react' ;
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import home from './components/home'
import fetch from './components/fetch'


const client = new ApolloClient({
  uri: 'https://holy-snow.us-west-2.aws.cloud.dgraph.io/graphql',
  cache: new InMemoryCache()
});

function App() {  
  return (
    <ApolloProvider client = {client}>
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/:id" component={fetch} />
          </Switch>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
