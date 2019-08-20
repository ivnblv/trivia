import React from "react";
import { useSpring, animated, config } from "react-spring";

const Answers = props => {
  const { answers, selectAnswer } = props;

  const scaleSpring = useSpring({
    from: {
      transform: "scale(0.1)",
      opacity: 1
    },
    to: {
      transform: "scale(1)",
      opacity: 1
    },
    config: config.slow
  });
  return (
    <animated.div className="answers" style={scaleSpring}>
      {answers.map(answer => (
        <div
          className="answer-btn hover"
          onClick={selectAnswer}
          data-answer={answer}
          id={answer}
          key={answer}
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      ))}
    </animated.div>
  );
};

export default Answers;
