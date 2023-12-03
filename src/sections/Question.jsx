import React, { useState } from "react";

export default function Question({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <article className="py-6 bg-slate-100 rounded-2xl mb-4">
        <div
          onClick={() => setShowAnswer(!showAnswer)}
          className="flex items-center justify-between cursor-pointer ml-8"
        >
          <h2 className="font-bold text-3xl hover:text-violet-600">{question}</h2>
          <button>
            {showAnswer ? (
              <img src='https://img.icons8.com/color/48/multiply.png' alt="" className="transform rotate-180 mr-2" />
            ) : (
              <img src='https://img.icons8.com/fluency/48/plus-math.png' alt="" className="mr-2" />
            )}
          </button>
        </div>
        {showAnswer && <p className="text-2xl font-medium text-stone-500 py-12 ml-8"> {answer}</p>}
      </article>
    </>
  );
}