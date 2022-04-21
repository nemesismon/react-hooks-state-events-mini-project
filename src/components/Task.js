import React from "react";

function Task({ text, category, handleTaskRemoval }) {

function handleDeleteClick () {
  handleTaskRemoval(text);
}

  return (
    <div className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={handleDeleteClick}>X</button>
    </div>
  );
}

export default Task;
