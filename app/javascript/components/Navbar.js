import React from "react";
import { Segment, List, Dropdown, Icon, Grid, Button, Container, Menu, Input } from "semantic-ui-react";
import axios from "axios";
import Uploader from "./Uploader"
class Navbar extends React.Component {
  state = {
    loading: false,
    results: []
  };

  handleChange = e => {
    const value = e.target.value;
    const element = document.querySelector(".suggestables")
    this.props.onSearch(value);
    value.length > 0 ? element.classList.add('visible') : element.classList.remove('visible')
  };

  handleSubmit = (value) => {
    if (value.length > 0) {
      axios
        .get("/search", { params: { search: value } })
        .then(res => {
          this.setState({ loading: true });
          this.props.onResults(res.data);
        })
        .catch(() => this.setState({ loading: false, results: [] }));
    } else {
      this.setState({ loading: false, results: [] });
    }
  }

  handleKeyUp = e => {
    const value = e.target.value;
    if (e.which === 13) {
      this.setState({
        loading: true
      });
      this.handleSubmit(value)
    }
  };

  handleBlur = () => {
    const element = document.querySelector(".suggestables")
    setTimeout(() => {element.classList.remove('visible')}, 500)
  }

  handleClick = e => {
    const value = e.target.innerText
    this.props.selectedTag(value)
    this.handleSubmit(value)
  }

  render() {
    const { filtertags } = this.props

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
              <Input
                autoComplete="off"
                fluid
                name="search"
                icon="search"
                placeholder="Search for questions.."
                value={this.props.search}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                />
              <Segment className="suggestables">
                <List selection>
                  {Object.keys(filtertags).map( key => {
                      return (
                        <List.Item key={key} onClick={this.handleClick}>
                          {filtertags[key]}
                        </List.Item>
                      )
                    })
                  }
                </List>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Navbar;
