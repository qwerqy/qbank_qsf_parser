import React from "react"
import { Label, List, Container, Segment, Icon } from 'semantic-ui-react'
class Taglist extends React.Component {
  render () {
    const { tags } = this.props
    return (
      <Container style={{ marginBottom: 20 }}>
        <Segment>
          <List horizontal>
            {tags && tags.length
              ? tags.map( tag => {
                return (
                  <List.Item>
                    <Label>
                      {tag}
                      <Icon name='delete' />
                    </Label>
                  </List.Item>
                )
              })

              : <List.Item>
                  <p>Search for something</p>
                </List.Item>
            }

          </List>
        </Segment>
      </Container>
    );
  }
}

export default Taglist
