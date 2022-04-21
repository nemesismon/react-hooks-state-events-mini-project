import React from "react";
import Task from "./Task";

function TaskList({ currentTasks, categoryFilter, handleTaskRemoval }) {

console.log(currentTasks);
const itemsToFilter = currentTasks.filter((task) => {
  console.log(task);
  if (categoryFilter === "All") {
    return true;
  } else {
    return task.category === categoryFilter;
  }
})

const taskList = itemsToFilter.map((item) => {
  return <Task key={item.text} text={item.text} category={item.category} handleTaskRemoval={handleTaskRemoval}/>
})

  return (
    <div className="tasks">
      { taskList }
    </div>
  )};


export default TaskList;