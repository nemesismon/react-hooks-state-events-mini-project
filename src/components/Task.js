import React, {useState} from "react";

function Task({ name, category, handleTaskRemoval }) {

  return (
    <div className="task">
        <div className="label">{category}</div>
        <div className="text">{name}</div>
        <button className="delete" onClick={handleTaskRemoval}>X</button>
    </div>
  );
}

export default Task;
