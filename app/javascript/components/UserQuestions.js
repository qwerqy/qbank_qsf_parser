import React from "react"
import { Label, List, Header, Segment } from 'semantic-ui-react'
class UserQuestions extends React.Component {
  render () {
    const { addedQuestions } = this.props
    return (
      <Segment style={{position: 'fixed', bottom: 0, left: 0, right: 0}}>
        <Header>My Questions</Header>
        <List horizontal>
          { Object.keys(addedQuestions).map(key => {
            return (
                <List.Item key={key}>
                  <Label>
                    {addedQuestions[key].title}
                  </Label>
                </List.Item>
            )
          })}
        </List>
      </Segment>
    );
  }
}

export default UserQuestions
