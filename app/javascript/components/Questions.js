import React from "react";
import { Container, Header, Segment, Grid } from "semantic-ui-react";
import SearchResults from "./SearchResults";
import AllResults from "./AllResults";

class Questions extends React.Component {
  render() {
    const { results, questions } = this.props;
    return (
      <Container>
        {results && results.length ? (
          <SearchResults results={results} />
        ) : (
          <Header textAlign='center'>Search for something</Header>
        )}
      </Container>
    );
  }
}

export default Questions;
