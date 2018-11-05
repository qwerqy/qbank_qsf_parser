import React from "react";
import Navbar from "./Navbar";
import Questions from "./Questions";
import Taglist from "./Taglist";
import "semantic-ui-css/semantic.min.css";

class Home extends React.Component {
  state = {
    search: "",
    questions: [],
    filteredQuestions: [],
    results: [],
    tags: []
  };

  componentWillMount = () => {
    this.setState({
      questions: this.props.questions,
      filteredQuestions: this.props.questions
    });
  };

  handleSearch = search => {
    let fq = this.state.questions;
    fq = fq.filter(question => {
      let possible =
        question.title.toLowerCase() +
        question.qid.toLowerCase() +
        question.survey.name.toLowerCase() +
        question.survey.sid.toLowerCase();
      return possible.indexOf(search.toLowerCase()) !== -1;
    });
    this.setState({
      search: search,
      filteredQuestions: fq
    });
  };

  handleResults = results => {
    let finalArray = [];
    let questions = this.props.questions;
    results.forEach(r =>
      questions.forEach(q => {
        if (r.content === q.title) {
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
    })
  }

  render() {
    const { questions } = this.props;
    const { search, tags, results, filteredQuestions } = this.state;

    return (
      <React.Fragment>
        <Navbar
          search={this.state.search}
          onSearch={this.handleSearch}
          onResults={this.handleResults}
          tagOnSearch={this.handleTagOnSearch}
        />
        <Taglist tags={tags} />
        <Questions
          search={search}
          results={results}
          filteredQuestions={filteredQuestions}
        />
      </React.Fragment>
    );
  }
}

export default Home;
