import React from "react"
import { Header, Button, List, Container, Segment, Icon } from 'semantic-ui-react'
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

  handleClick = e => {
    this.props.selectedTag(e.target.innerText)
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
                    <Button onClick={this.handleClick}>
                      {filtertags[key]}
                    </Button>
                  </List.Item>
                )
              })

              : Object.keys(tags).map( key => {
                return (
                  <List.Item key={key}>
                    <Button onClick={this.handleClick}>
                      {tags[key]}
                    </Button>
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
