// import PropTypes from 'prop-types';
import { OptionsSection, FeedbackOption, OptionButton } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <OptionsSection>
      {options.map((option, index) => {
        return (
            <FeedbackOption key={index}>
              <OptionButton
                onClick={() => {
                  onLeaveFeedback(option);
                }}
              >
                {option}
              </OptionButton>
            </FeedbackOption>
        );
      })}
    </OptionsSection>
  );
}
