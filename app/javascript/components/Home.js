import React from "react";
import Navbar from "./Navbar";
import Questions from "./Questions";
import Taglist from "./Taglist";
import UserQuestions from './UserQuestions'
import "semantic-ui-css/semantic.min.css";

class Home extends React.Component {
  state = {
    search: '',
    results: [],
    tags: [],
    filtertags: [],
    addedQuestions: []
  };

  componentWillMount = () => {
    this.setState({
      filtertags: this.state.tags
    })
  }

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

  handleTagsList = (tagslist) => {
    this.setState({
      tags: tagslist
    })
  }

  handleSearch = search => {
    let filtertags = this.state.tags
    filtertags = filtertags.filter( tag => {
      return tag.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
    this.setState({
      search,
      filtertags
    })
  }

  handleSelectedTag = tag => {
    this.setState({
      search: tag
    })
  }

  handleAddQuestion = question => {
    this.setState({
      addedQuestions: [...this.state.addedQuestions, question]
    })
  }

  handleRemove = key => {
    const { addedQuestions } = this.state
    addedQuestions.splice(key, 1)
    this.setState({
      addedQuestions
    })
  }

  render() {
    const { questions, surveys } = this.props;
    const { addedQuestions, triggerSubmitByTag, tags, search, filtertags, results } = this.state;

    return (
      <React.Fragment>
        <Navbar
          onResults={this.handleResults}
          onSearch={this.handleSearch}
          auth={this.props.authenticity_token}
          search={search}
        />
        <Taglist onTagsList={this.handleTagsList} surveys={surveys} tags={tags} filtertags={filtertags} selectedTag={this.handleSelectedTag}/>
        <Questions search={search} results={results} questions={questions} onAddQuestion={this.handleAddQuestion}/>
        <UserQuestions addedQuestions={this.state.addedQuestions} onRemove={this.handleRemove}/>
      </React.Fragment>
    );
  }
}

export default Home;
