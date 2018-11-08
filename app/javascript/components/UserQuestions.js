import React from "react";
import { Button, List, Header, Segment } from "semantic-ui-react";
class UserQuestions extends React.Component {
  handleClick = key => {
    this.props.onRemove(key);
  };

  render() {
    const { addedQuestions } = this.props;
    return (
      <Segment style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
        <Header>My Questions</Header>
        <List horizontal>
          {Object.keys(addedQuestions).map(key => {
            return (
              <List.Item key={key}>
                <Button onClick={() => this.handleClick(key)}>
                  {addedQuestions[key].title}
                </Button>
              </List.Item>
            );
          })}
        </List>
      </Segment>
    );
  }
}

export default UserQuestions;
