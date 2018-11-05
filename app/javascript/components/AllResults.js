import React from "react";
import { Icon, List, Grid, Segment, Header } from "semantic-ui-react";
class AllResults extends React.Component {
  render() {
    const { filteredQuestions } = this.props;
    return (
      <div>
        <Grid stackable columns={2}>
          {Object.keys(filteredQuestions).map(key => {
            return (
              <Grid.Column key={key}>
                <Segment>
                  <Header as="p" block>
                    {filteredQuestions[key].survey.name}
                  </Header>
                  <Header>
                    <Header.Subheader>
                      {filteredQuestions[key].qid}
                    </Header.Subheader>
                    {filteredQuestions[key].title}
                  </Header>
                  <List animated>
                    {filteredQuestions[key].answers.map(answer => {
                      return <List.Item key={answer.id}><Icon name='angle right'/>{answer.input}</List.Item>;
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
