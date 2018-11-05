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

    this.props.onTagsList(uniqueList)
  }

  render () {
    const { tags, filtertags } = this.props
    return (
      <Container style={{ marginBottom: 20 }}>
        <Segment>
          <Header as='h5'>Suggested Search</Header>
          <List horizontal>
            {filtertags && filtertags.length
              ? Object.keys(filtertags).map( key => {
                return (
                  <List.Item key={key}>
                    <Label>
                      {filtertags[key]}
                    </Label>
                  </List.Item>
                )
              })

              : Object.keys(tags).map( key => {
                return (
                  <List.Item key={key}>
                    <Label>
                      {tags[key]}
                    </Label>
                  </List.Item>
                )
              })
            }

          </List>
        </Segment>
      </Container>
    );
  }
}

export default Taglist
