import React, {useState} from "react";

function NewTaskForm({onCategoryTypes, onHandleSubmit}) {

  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

function localHandleSubmit(event) {
  event.preventDefault();
  onHandleSubmit({text, category});
}

function handleNameAdd(event) {
  setText(event.target.value);
}

function handleCategoryAdd(event) {
  setCategory(event.target.value);
}

function renderCategories() {
  onCategoryTypes.map((category) => {
    ( <option>{category}</option>
    )})
}

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
