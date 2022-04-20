import React from "react";
import Task from "./Task";

function TaskList({ currentTasks, categoryFilter, handleTaskRemoval }) {

const itemsToFilter = currentTasks.filter((task) => {
  if (categoryFilter === "All") {
    return true;
  } else {
    return task.category === categoryFilter;
  }
})

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      { itemsToFilter.map((item, index) =>
        <Task key={index} name={item.text} category={item.category} handleTaskRemoval={handleTaskRemoval}/>
      )}
    </div>
  )};

export default TaskList;
