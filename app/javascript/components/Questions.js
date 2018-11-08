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
          <SearchResults results={results} onAddQuestion={this.props.onAddQuestion}/>
        ) : (
          <AllResults questions={this.props.questions}/>
        )}
      </Container>
    );
  }
}

export default Questions;
