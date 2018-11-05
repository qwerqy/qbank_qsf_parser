import React from "react"
import { Container, Header, Segment, Grid } from "semantic-ui-react"
import SearchResults from './SearchResults'
import AllResults from './AllResults'

class Questions extends React.Component {
  render () {
    const { results, filteredQuestions } = this.props
    return (
      <Container>
          {results && results.length
            ? <SearchResults results={results} />
            : <AllResults filteredQuestions={filteredQuestions} />
          }
      </Container>
    );
  }
}

export default Questions
