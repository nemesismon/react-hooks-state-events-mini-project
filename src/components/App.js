import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentTasks, setCurrentTasks] = useState(TASKS);
  const [currentCategories, setCurrentCategories] = useState(CATEGORIES);

  function handleTaskRemoval (taskToDelete) {
    const tempArray = [...currentTasks];
    const removeTask = tempArray.filter((task) => task.text !== taskToDelete);
    setCurrentTasks(removeTask);
  }

  function handleCategoryChange (event) {
    debugger;
    setCategoryFilter(event.target.textContent);
  }
  
  function handleSubmit(task) {
    setCurrentTasks([...currentTasks, task]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onHandleCategoryChange={handleCategoryChange} categories={currentCategories} categoryFilter={categoryFilter}/>
      <NewTaskForm categories={currentCategories} onTaskFormSubmit={handleSubmit}/>
      <TaskList tasks={currentTasks} categoryFilter={categoryFilter} handleTaskRemoval={handleTaskRemoval}/>
    </div>
  );
}

export default App;