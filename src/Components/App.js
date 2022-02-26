import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Characters from "./Characters";
import Character from "./Character";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../App.css";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://rickandmortyapi.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Characters />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
