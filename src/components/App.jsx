import React, { Component } from 'react';
import { Wrapper, NotificationMessage } from './App.styled';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback() {
    const totalCount = Object.values(this.state);
    return totalCount.reduce((acc, total) => acc + total, 0);
  }

  countPositiveFeedbackPercentage() {
    // return ((this.state.good / this.countTotalFeedback()) * 100
    // ).toFixed(0); -> returning NaN if no feedback, propType is erroring
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }
  render() {
    const option = this.state;
    return (
      <Wrapper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={option.good}
              neutral={option.neutral}
              bad={option.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <NotificationMessage>There is no feedback</NotificationMessage>
          )}
        </Section>
      </Wrapper>
    );
  }
}
