import React from "react";
import { Input, Icon, List, Grid, Segment, Header } from "semantic-ui-react";
class SearchResults extends React.Component {
  handleAddButton = question => {
    this.props.onAddQuestion(question);
  };

  render() {
    const { results } = this.props;
    return (
      <div>
        <Grid stackable columns={2}>
          {Object.keys(results).map(key => {
            return (
              <Grid.Column key={key}>
                <Segment>
                  <Header as="p" block>
                    {results[key].survey.name}
                    <Icon
                      style={{ float: "right" }}
                      name="plus"
                      onClick={() => this.handleAddButton(results[key])}
                    />
                  </Header>
                  <Header>
                    <Header.Subheader>{results[key].qid}</Header.Subheader>
                    {results[key].title}
                  </Header>
                  {results[key].answers.length > 1 ? (
                    <List animated>
                      {results[key].answers.map(answer => {
                        return (
                          <List.Item key={answer.id}>
                            <Icon name="angle right" />
                            {answer.input}
                          </List.Item>
                        );
                      })}
                    </List>
                  ) : (
                    <Input disabled fluid placeholder="Text field.." />
                  )}
                </Segment>
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default SearchResults;
