import React from "react";

function CategoryFilter({ onHandleCategoryChange, currentCategories }) {

const taskList = currentCategories.map((option) => {
  return (
  <button 
    key={option} 
    onClick={onHandleCategoryChange}>
      {option}
  </button>
  )
})

  return (
    <div className="categories" >
      <h5> Category filters</h5>
        { taskList }
    </div>
  );
}

export default CategoryFilter;
