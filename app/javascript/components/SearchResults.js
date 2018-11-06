import React from "react"
import { Icon, List, Grid, Segment, Header } from 'semantic-ui-react'
class SearchResults extends React.Component {

  handleAddButton = question => {
    this.props.onAddQuestion(question)
  }

  render () {
    const { results } = this.props
    return (
      <div>
        <Grid stackable columns={2}>
          {Object.keys(results).map(key => {
              return (
                <Grid.Column key={key}>
                  <Segment>
                    <Header as='p' block>{results[key].survey.name}<Icon style={{float: 'right'}} name="plus" onClick={() => this.handleAddButton(results[key])}></Icon></Header>
                    <Header>
                      <Header.Subheader>{results[key].qid}</Header.Subheader>
                      {results[key].title}
                    </Header>
                    <List animated>
                      { results[key].answers.map(answer => {
                        return <List.Item key={answer.id}><Icon name='angle right'/>{answer.input}</List.Item>
                        })
                      }
                    </List>
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

export default SearchResults
