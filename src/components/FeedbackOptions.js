import { Component } from 'react';

class FeedbackOptions extends Component {
  options = this.props;
  render() {
    return (
      <>
        {this.props.options.map((option, index) => (
          <button
            type="button"
            key={index}
            onClick={this.props.onLeaveFeedback}
          >
            {option}
          </button>
        ))}

        {/* <button type="button" onClick={this.props.onLeaveFeedback}>
          {options[0]}
        </button>
        <button type="button" onClick={this.props.onLeaveFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.props.onLeaveFeedback}>
          Bad
        </button> */}
      </>
    );
  }
}

export default FeedbackOptions;
