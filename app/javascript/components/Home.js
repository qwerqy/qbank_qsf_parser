import React from "react";
import Navbar from "./Navbar";
import Questions from "./Questions";
import UserQuestions from "./UserQuestions";
import "semantic-ui-css/semantic.min.css";

class Home extends React.Component {
  state = {
    results: [],
    addedQuestions: []
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

  handleSelectedTag = tag => {
    this.setState({
      search: tag
    });
  };

  handleAddQuestion = question => {
    this.setState({
      addedQuestions: [...this.state.addedQuestions, question]
    });
  };

  handleRemove = key => {
    const { addedQuestions } = this.state;
    addedQuestions.splice(key, 1);
    this.setState({
      addedQuestions
    });
  };

  render() {
    const { questions, surveys } = this.props;
    const {
      addedQuestions,
      triggerSubmitByTag,
      tags,
      search,
      filtertags,
      results
    } = this.state;

    return (
      <React.Fragment>
        <Navbar
          onResults={this.handleResults}
          onSearch={this.handleSearch}
          filtertags={filtertags}
          auth={this.props.authenticity_token}
          search={search}
          selectedTag={this.handleSelectedTag}
          surveys={surveys}
        />
        <Questions
          search={search}
          results={results}
          questions={questions}
          onAddQuestion={this.handleAddQuestion}
        />
        {addedQuestions.length && (
          <UserQuestions
            addedQuestions={this.state.addedQuestions}
            onRemove={this.handleRemove}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Home;
