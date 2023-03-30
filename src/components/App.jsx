import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import { Section } from './section/Section';
import { Notification } from './notifications/Notification';
import { Statistics } from './statistics/Statistics';
import { useState } from 'react';

export const App = () => {
  const [option, setOption] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const [total, setTotal] = useState(0);

  const handleClick = event => {
    let clickedOption = event.target.textContent.toLowerCase();
    setOption(prevOption => ({
      ...prevOption,
      [clickedOption]: prevOption[clickedOption] + 1,
    }));
    setTotal(total + 1);
  };

  return (
    <>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={option.good}
            neutral={option.neutral}
            bad={option.bad}
            total={total}
            positivePercentage={Math.round((option.good / total) * 100)}
          ></Statistics>
        ) : (
          <Notification message={'There is no feedback'}></Notification>
        )}
      </Section>
    </>
  );
};
