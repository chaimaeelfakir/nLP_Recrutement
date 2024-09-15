import React, { useState } from 'react';

const Questionnaire = ({ question, onSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(answer);
    setAnswer(''); // Clear the answer after submission
  };

  return (
    <div className="questionnaire-container flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">QUESTION1</h2>
      <textarea
        value={answer}
        onChange={handleChange}
        rows="4"
        className="w-full p-3 border rounded-lg mb-4"
        placeholder="Type your answer here..."
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};

export default Questionnaire;
