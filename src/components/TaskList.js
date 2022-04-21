import React from "react";
import Task from "./Task";

function TaskList({ tasks, categoryFilter, handleTaskRemoval }) {

const itemsToFilter = tasks.filter((item) => categoryFilter === "All" || item.category === categoryFilter );

const task = itemsToFilter.map((item) => {
  return <Task key={item.text} text={item.text} category={item.category} handleTaskRemoval={handleTaskRemoval}/>
})

  return (
    <div className="tasks">
      { task }
    </div>
  )};


export default TaskList;