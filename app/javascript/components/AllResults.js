import React from "react";
import { Icon, List, Grid, Segment, Header } from "semantic-ui-react";
class AllResults extends React.Component {
  render() {
    const { questions } = this.props;
    return (
      <div>
        <Grid stackable columns={2}>
          {Object.keys(questions).map(key => {
            return (
              <Grid.Column key={key}>
                <Segment>
                  <Header as="p" block>
                    {questions[key].survey.name}
                  </Header>
                  <Header>
                    <Header.Subheader>{questions[key].qid}</Header.Subheader>
                    {questions[key].title}
                  </Header>
                  <List animated>
                    {questions[key].answers.map(answer => {
                      return (
                        <List.Item key={answer.id}>
                          <Icon name="angle right" />
                          {answer.input}
                        </List.Item>
                      );
                    })}
                  </List>
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default AllResults;
