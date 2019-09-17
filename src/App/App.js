import React from 'react';
import './App.css';
import questionData from "../questions"
import QuestionComponet  from "../QuestionComponent"
import Footer from "../Footer"
import { sortQuestionByQuestionSequence, calcProgress } from "../utils"

const questions = sortQuestionByQuestionSequence(questionData.questions);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {questions, headingText: questionData.AssessmentName, currentIndex: 0, progress: calcProgress(questions)}
  }
  
  onSelect = response => {
    const newQuestions = Object.assign({}, questions);
    newQuestions[this.state.currentIndex].Response = response;
    newQuestions[this.state.currentIndex].HasAnswered = "Y";
    this.setState({ question: newQuestions, currentIndex: this.state.currentIndex + 1, progress: calcProgress(questions) })
  }

  onNext = () => {
    if ( this.state.currentIndex + 1 <= this.state.questions.length - 1) {
      this.setState({ currentIndex: this.state.currentIndex + 1 })
    }
  }

  onPrev = () => {
    if ( this.state.currentIndex - 1 >= 0) {
      this.setState({ currentIndex: this.state.currentIndex - 1 })
    }
  }

  render() {
    return <div className="App">
      <h2 className="header" >{this.state.headingText}</h2>
      { this.state.currentIndex === this.state.questions.length 
        ? <h2 className="end-content">Thank you for your time to complete the survey!</h2>
        : <QuestionComponet question={this.state.questions[this.state.currentIndex]} onSelect={this.onSelect} ></QuestionComponet>
      }
      <Footer progress={this.state.progress} onNext={this.onNext} onPrev={this.onPrev}/>
    </div>
  }
}

export default App;
