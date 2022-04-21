import React from "react";

function CategoryFilter({ onHandleCategoryChange, categories, categoryFilter }) {

  const categoryOptions = categories.map((option) => {

    const buttonClass = option === categoryFilter ? "selected" : null;

    return (
      <button 
        key={option} 
        onClick={onHandleCategoryChange}
        className={buttonClass}>    
          {option}
      </button>
      )
  })

  return (
    <div className="categories" >
      <h5> Category filters</h5>
        { categoryOptions }
    </div>
  );
}

export default CategoryFilter;
