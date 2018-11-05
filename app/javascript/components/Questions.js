import React from "react"
import { Container, Header, Segment, Grid } from "semantic-ui-react"
class Questions extends React.Component {
  render () {
    const { results, filteredQuestions } = this.props
    return (
      <Container>
        <Grid stackable columns={2}>
          {results && results.length
            ? Object.keys(results).map(key => {
                return (
                  <Grid.Column>
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
            : Object.keys(filteredQuestions).map(key => {
                return (
                  <Grid.Column>
                    <Segment>
                      <Header as='p' block>{filteredQuestions[key].survey.name}</Header>
                      <Header>
                        <Header.Subheader>{filteredQuestions[key].qid}</Header.Subheader>
                        {filteredQuestions[key].title}
                      </Header>
                      <ul>
                        { filteredQuestions[key].answers.map(answer => {
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
        </Grid>
      </Container>
    );
  }
}

export default Questions
