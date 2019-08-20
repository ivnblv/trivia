import React, { useRef } from "react";
import { useSpring, useChain, animated } from "react-spring";

const Result = props => {
  const { selectedAnswer, correctAnswer, correct } = props;

  const opacityRef = useRef();
  const opacitySpring = useSpring({
    from: { opacity: 0.1 },
    to: { opacity: 1 },
    config: {
      duration: 200
    },
    ref: opacityRef
  });
  const colorRef = useRef();
  const colorSpring = useSpring({
    from: {
      backgroundColor: "#F5F5F5"
    },
    to: {
      backgroundColor: correct ? "#98FB98" : "rgba(255,0,0,.7)"
    },
    config: {
      duration: 800
    },
    ref: colorRef
  });
  const correctRef = useRef();
  const correctSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1200 },
    ref: correctRef
  });
  useChain([opacityRef, colorRef, correctRef], [0, 0.4, 0.4]);

  return (
    <React.Fragment>
      <animated.div style={opacitySpring} className="result">
        <animated.div style={colorSpring}>
          <p
            style={{ padding: "1rem" }}
            dangerouslySetInnerHTML={{ __html: selectedAnswer }}
          />
        </animated.div>
      </animated.div>
      <animated.div style={correctSpring} className="correct-answer">
        {!correct ? (
          <p>
            Correct answer:
            <span dangerouslySetInnerHTML={{ __html: correctAnswer }} />
          </p>
        ) : null}
      </animated.div>
    </React.Fragment>
  );
};

export default Result;
