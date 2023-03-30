import { Component } from 'react';

class Feedback extends Component {
  goodValue = 0;
  neutralValue = 0;
  badValue = 0;
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  handleGood = () => {
    this.goodValue += 1;
    this.setState({ good: this.goodValue });
    console.log('good');
  };
  handleNeutral = () => {
    this.neutralValue += 1;
    this.setState({ neutral: this.neutralValue });
    console.log('neutral');
  };
  handleBad = () => {
    this.badValue += 1;
    this.setState({ bad: this.badValue });
    console.log('bad');
  };

  countTotalValue = () => {
    return this.goodValue + this.badValue + this.neutralValue;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalValue();
    return Math.round((this.goodValue / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleGood}>
          Good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          Bad
        </button>
        <h3>Stats</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral} </p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalValue()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
