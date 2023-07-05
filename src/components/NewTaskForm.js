import React, { useState } from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {
  const [formData, setFormData] = useState({
    text:"",
    category:""
  })

  function handleOnChange(e){
    const name = e.target.name;
    const value = e.target.value;
      
        
    setFormData({...formData, [e.target.name]: e.target.value})

       }
  
    function handleSubmit(e){
        e.preventDefault();
        const newItem = {
          text: formData.text,
          category: formData.category
          }
          
      onTaskFormSubmit(newItem)
      }   


  const options = categories.map((category) => {
    if(category !== "All"){
      return <option key={category}>{category}</option>
    }
  } )
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleOnChange}/>
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleOnChange}>
          {options}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
