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
    const removeTask = tempArray.filter((task) => {
      if (task.text !== taskToDelete) {
        return true;
      } else {
        return false;
      }
    })
    setCurrentTasks(removeTask);
  }

  function handleCategoryChange (event) {
    setCategoryFilter(event.target.textContent);
  }

  function categoryTypes () {
    currentCategories.map((category) => {
      return ( <option>{category}</option>);
    })
  }
  
  function handleSubmit(element) {
    setCurrentTasks([...currentTasks, element]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onHandleCategoryChange={handleCategoryChange} currentCategories={currentCategories}/>
      <NewTaskForm onCategoryTypes={categoryTypes} onHandleSubmit={handleSubmit}/>
      <TaskList currentTasks={currentTasks} categoryFilter={categoryFilter} handleTaskRemoval={handleTaskRemoval}/>
    </div>
  );
}

export default App;