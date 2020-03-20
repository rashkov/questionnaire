import React from "react";
import "./App.css";

let questions = [
  {
    text: "What is your best language?",
    type: "text"
  },
  {
    text: "When did you last enter the US?",
    type: "date",
    furtherQuestions: [
      {
        text: "If before Jan. 1, 1972 – eligible for registry?",
        type: "bool"
      }
    ]
  },
  {
    text: "what is your name?",
    type: "text",
    furtherQuestions: []
  }
];

function App() {
  let inputForQuestion = ({ q, disabled = false }) => {
    if (q.type == "text") {
      return <input disabled={disabled} />;
    } else if (q.type == "bool") {
      return <input type="checkbox" disabled={disabled} />;
    } else if (q.type == "date") {
      return <input type="date" disabled={disabled} />;
    } else {
      throw "Unhandled question type";
    }
  };
  let renderQuestion = ({ q, disabled = false }) => {
    return (
      <>
        <div className="question">
          <div>
            <label>{q.text}</label>
          </div>
          <div>{inputForQuestion({ q, disabled })}</div>
        </div>
        {q.furtherQuestions && q.furtherQuestions.length > 0
          ? q.furtherQuestions.map(q => renderQuestion({ q, disabled: true }))
          : null}
      </>
    );
  };
  let questionRows = questions.map(q => renderQuestion({ q }));
  return <>{questionRows}</>;
}

export default App;
