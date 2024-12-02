// import React, { useState, useEffect } from "react";


// function Question({ question, onAnswered }) {
//   const [timeRemaining, setTimeRemaining] = useState(10);
// }

//   // add useEffect code
//     useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeRemaining((prevTime) => {
//         if (prevTime === 1) {
//           onAnswered(false);
//           return 10;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);
  


//   function handleAnswer(isCorrect) {
//     setTimeRemaining(10);
//     onAnswered(isCorrect);
//   }

//   const { id, prompt, answers, correctIndex } = question;

//   return (
//     <>
//       <h1>Question {id}</h1>
//       <h3>{prompt}</h3>
//       {answers.map((answer, index) => {
//         const isCorrect = index === correctIndex;
//         return (
//           <button key={answer} onClick={() => handleAnswer(isCorrect)}>
//             {answer}
//           </button>
//         );
//       })}
//       <h5>{timeRemaining} seconds remaining</h5>
//     </>
//   );
// })

// export default Question;

import React, { useState, useEffect } from "react";

const Question = ({ onAnswered }) => {
  // Declare timeRemaining state
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Create a side effect to decrement timeRemaining every second
    const timer = setTimeout(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          // Reset timer and trigger the onAnswered callback
          onAnswered(false);
          return 10;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [timeRemaining, onAnswered]); // Add dependencies to avoid stale closures

  return (
    <div>
      <h1>Question Component</h1>
      <p>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
};

export default Question;
