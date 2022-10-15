import React, { Component } from 'react';
import {
  Wrapper,
  SectionTitle,
  OptionsSection,
  FeedbackOption,
} from './App.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleClick(option) {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  };

  countTotalFeedback() {
    const totalCount = Object.values(this.state);
    return totalCount.reduce((acc, total) => acc + total, 0)
  }

  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.countTotalFeedback())*100).toFixed(0);
  }
  render() {
    const  option  = this.state;
    return (
      <Wrapper>
        <SectionTitle>Please leave feedback</SectionTitle>
        <OptionsSection>
          <FeedbackOption type="button" onClick={() => this.handleClick('good')}>Good</FeedbackOption>
          <FeedbackOption type="button" onClick={() => this.handleClick('neutral')}>Neutral</FeedbackOption>
          <FeedbackOption type="button" onClick={() => this.handleClick('bad')}>Bad</FeedbackOption>
        </OptionsSection>

        <SectionTitle>Statistics</SectionTitle>
        <p>Good: {option.good }</p>
        <p>Neutral: {option.neutral}</p>
        <p>Bad: {option.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </Wrapper>
    );
  }
  
}
  

