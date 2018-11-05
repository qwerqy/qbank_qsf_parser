import React from "react"
import { Grid, Segment, Header } from 'semantic-ui-react'
class SearchResults extends React.Component {
  render () {
    const { results } = this.props
    return (
      <div>
        {Object.keys(results).map(key => {
            return (
              <Grid.Column key={key}>
                <Segment>
                  <Header as='p' block>{results[key].survey.name}</Header>
                  <Header>
                    <Header.Subheader>{results[key].qid}</Header.Subheader>
                    {results[key].title}
                  </Header>
                  <ul>
                    { results[key].answers.map(answer => {
                      return (
                        <li>{answer.input}</li>
                      )
                    })
                  }
                </ul>
              </Segment>
            </Grid.Column>
            )
          })
        }
      </div>
    );
  }
}

export default SearchResults
