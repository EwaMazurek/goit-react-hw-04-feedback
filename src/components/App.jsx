import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';
import { Section } from './Section';
import Statistics from './Statistics';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodValue = 0;
  badValue = 0;
  neutralValue = 0;
  buttonClicked = false;
  handleClick = event => {
    this.buttonClicked = true;
    switch (event.target.textContent) {
      case 'Good':
        this.goodValue += 1;
        this.setState({ good: this.goodValue });
        break;
      case 'Neutral':
        this.neutralValue += 1;
        this.setState({ neutral: this.neutralValue });
        break;
      case 'Bad':
        this.badValue += 1;
        this.setState({ bad: this.badValue });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.buttonClicked ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.good + this.state.bad + this.state.neutral}
              positivePercentage={Math.round(
                (this.state.good /
                  (this.state.good + this.state.bad + this.state.neutral)) *
                  100
              )}
            ></Statistics>
          ) : (
            <Notification message={'There is no feedback'}></Notification>
          )}
        </Section>
      </>
    );
  }
}
