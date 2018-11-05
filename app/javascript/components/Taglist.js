import React from "react"
import { Header, Label, List, Container, Segment, Icon } from 'semantic-ui-react'
class Taglist extends React.Component {
  state = {
    tags: []
  }

  componentDidMount = () => {
    this.createTags()
  }

  createTags = () => {
    const surveys = this.props.surveys
    let list = []
    surveys.map(survey => {
      let tag = survey.name.split(" ")
      list.push(tag)
    })
    let uniqueList = Array.from(new Set(list.flat()))

    this.setState({
      tags: uniqueList
    })
  }

  render () {
    const { tags } = this.state
    return (
      <Container style={{ marginBottom: 20 }}>
        <Segment>
          <Header as='h5'>Suggested Search</Header>
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
