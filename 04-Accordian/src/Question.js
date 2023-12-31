import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, id, info }) => {
  const [para, setPara] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>

        <button className="btn" onClick={() => setPara(!para)}>
          {para ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{para ? info : ""}</p>
    </article>
  );
};

export default Question;
