import React from "react";
import Navbar from "./Navbar";
import Questions from "./Questions";
import Taglist from "./Taglist";
import "semantic-ui-css/semantic.min.css";

class Home extends React.Component {
  state = {
    search: "",
    results: [],
    tags: []
  };

  handleResults = results => {
    let finalArray = [];
    let questions = this.props.questions;
    results.forEach(r =>
      questions.forEach(q => {
        if (r.content === q.title) {
          finalArray.push(q);
        } else if (r.content === q.survey.name) {
          finalArray.push(q);
        }
      })
    );
    this.setState({
      results: finalArray
    });
  };

  handleTagOnSearch = value => {
    this.setState({
      tags: [...this.state.tags, value]
    });
  };

  render() {
    const { questions, surveys } = this.props;
    const { search, tags, results } = this.state;

    return (
      <React.Fragment>
        <Navbar
          search={this.state.search}
          onSearch={this.handleSearch}
          onResults={this.handleResults}
          tagOnSearch={this.handleTagOnSearch}
        />
      <Taglist tags={tags} surveys={surveys} />
        <Questions search={search} results={results} questions={questions} />
      </React.Fragment>
    );
  }
}

export default Home;
