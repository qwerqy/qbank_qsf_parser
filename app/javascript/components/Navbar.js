import React from "react";
import { Dropdown, Icon, Grid, Button, Container, Menu, Input } from "semantic-ui-react";
import axios from "axios";
import Uploader from "./Uploader"
class Navbar extends React.Component {
  state = {
    loading: false,
    results: []
  };

  handleChange = e => {
    const value = e.target.value;
    this.props.onSearch(value);
  };

  handleKeyUp = e => {
    const value = e.target.value;
    if (e.which === 13) {
      this.setState({
        loading: true
      });
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
  };

  render() {
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
                fluid
                name="search"
                icon="search"
                placeholder="Search for questions.."
                value={this.props.search}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleChange}
                />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Navbar;
