import { Component } from 'react';

class Statictics extends Component {
  render() {
    return (
      <>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral} </p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.positivePercentage} %</p>
      </>
    );
  }
}

export default Statictics;
