import React from "react"
import { Grid, Segment, Header } from 'semantic-ui-react'
class AllResults extends React.Component {
  render () {
    const { filteredQuestions } = this.props
    return (
      <div>
        <Grid stackable columns={2}>
          {Object.keys(filteredQuestions).map(key => {
                return (
                  <Grid.Column key={key}>
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
      </div>
    );
  }
}

export default AllResults
