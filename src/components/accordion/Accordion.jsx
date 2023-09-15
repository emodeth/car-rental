import "./accordion.css";

function Accordion({ question, answer, id, selected, handleSelected }) {
  return (
    <div className="accordion" onClick={() => handleSelected(id)}>
      <div
        className={
          selected === id
            ? "accordion__question accordion__question--active"
            : "accordion__question"
        }
      >
        <span>{question}</span>
        <i className="accordion__down fa-solid fa-chevron-down"></i>
      </div>
      <div
        className={
          selected === id
            ? "accordion__answer accordion__answer--active"
            : "accordion__answer"
        }
      >
        {answer}
      </div>
    </div>
  );
}

export default Accordion;
