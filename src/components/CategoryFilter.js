import React from "react";

function CategoryFilter({ onHandleCategoryChange, categoryFilter, currentCategories }) {

  console.log(categoryFilter);

  return (
    <div className="categories" >
      <h5>Category filters</h5>
        {/* render <button> elements for each category here */}
        { currentCategories.map((option, index) => {
          return (
          <button key={index} onClick={onHandleCategoryChange}>{option}
          </button>
          )
        })}
    </div>
  );
}

export default CategoryFilter;
