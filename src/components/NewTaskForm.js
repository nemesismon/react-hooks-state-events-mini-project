import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const localHandleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit({text, category});
  }

  const handleNameAdd = (event) => {
    setText(event.target.value);
  }

  const handleCategoryAdd = (event) => {
    setCategory(event.target.value);
  }

  const renderCategories = categories.filter(c => c !== "All").map((category) => <option>{category}</option>)

  return (
    <form className="new-task-form" onSubmit={localHandleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNameAdd} value={text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryAdd} value={category}>
          {/* render <option> elements for each category here */}
          {renderCategories}          
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
