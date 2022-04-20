import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [currentTasks, setCurrentTasks] = useState(TASKS);
  const [currentCategories, setCUrrentCategories] = useState(CATEGORIES);

  function handleTaskRemoval (element) {
    console.log(element);
    const tempArray = [...currentTasks];
    const tempIndex = tempArray.indexOf(element.target.value);
    // console.log(tempIndex);

  }

  function handleCategoryChange (event) {
    console.log(event.target.textContent);
    setCategoryFilter(event.target.textContent);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onHandleCategoryChange={handleCategoryChange} categoryFilter={categoryFilter} currentCategories={currentCategories}/>
      <NewTaskForm />
      <TaskList currentTasks={currentTasks} categoryFilter={categoryFilter} handleTaskRemoval={handleTaskRemoval}/>
    </div>
  );
}

export default App;
