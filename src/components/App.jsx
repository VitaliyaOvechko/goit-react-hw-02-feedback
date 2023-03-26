import { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Feedback/FeedbackStatistic';
import { Notification } from './Feedback/Notification';
import { Section } from './Feedback/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = event => {
    const value = event.target.value;

    console.log(value);

    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (total, prevState) => total + prevState,
      0
    );

  countPositiveFeedbackPercentage = () =>
    Math.round(
      (this.state.good /
        Object.values(this.state).reduce(
          (total, feedback) => total + feedback,
          0
        )) *
        100
    );

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleBtnClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
