import React from "react";
import { Search, Segment, List, Dropdown, Icon, Grid, Button, Container, Menu, Input } from "semantic-ui-react";
import axios from "axios";
import Uploader from "./Uploader"
class Navbar extends React.Component {
  state = {
    search: '',
    results: [],
    tags: [],
    filtertags: []
  };

  componentDidMount = () => {
    this.createTags()
    this.resetComponent()
  }

  resetComponent = () => this.setState({ results: [], search: '' })

  handleSearch = search => {
    let filtertags = this.state.tags
    filtertags = filtertags.filter( tag => {
      return tag.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    this.setState({
      search,
      filtertags
    })
  }

  createTags = () => {
    const surveys = this.props.surveys
    let list = []
    surveys.map(survey => {
      let tags = survey.name.split(" ")
      tags.map(tag => {
        let obj = {title: ''}
        obj.title = tag
        list.push(obj)
      })
    })
    const result = list.filter(function (a) {
        return !this[a.title] && (this[a.title] = true);
    }, Object.create(null));
    this.setState({
      tags: result
    })
  }

  handleChange = e => {
    const value = e.target.value;
    let filtertags = this.state.tags
    filtertags = filtertags.filter( tag => {
      return tag.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    })
    this.setState({
      search: value,
      filtertags
    })
  };

  handleSubmit = (value) => {
    if (value.length > 0) {
      axios
        .get("/search", { params: { search: value } })
        .then(res => {
          this.setState({ loading: true });
          this.props.onResults(res.data);
        })
        .catch(() => this.setState({ results: [] }));
    } else {
      this.setState({ results: [] });
    }
  }

  handleKeyUp = e => {
    const value = e.target.value;
    if (e.which === 13) {
      this.handleSubmit(value)
    }
  };

  handleResultSelect = (e, {result}) => {
    this.handleSearch(result.title)
  }

  render() {
    const { filtertags } = this.state

    return (
      <Container style={{ padding: 20 }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Dropdown
                button
                className='icon'
                floating
                fluid
                labeled
                icon='plus'
                text='Add QSF'
              >
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Uploader auth={this.props.auth}/>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Grid.Column>
            <Grid.Column width={13}>
              <Search
                fluid
                input='text'
                onSearchChange={this.handleChange}
                onResultSelect={this.handleResultSelect}
                results={filtertags}
                value={this.state.search}
                onKeyUp={this.handleKeyUp}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Navbar;
