import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";



function App(onTaskFormSubmit) {

  console.log(TASKS)
  const [tasks, setTasks] = useState(TASKS)
  const [filterBy, setFilterBy] = useState("All")
  

  function handleClick(key){
    const updatedTasks = tasks.filter((task) => task !== key)
    setTasks(updatedTasks)
  }


  function categoryHandler(category){
    setFilterBy(category)
  
  }

const filteredTasks = tasks.filter((task) => {
  if(filterBy === "All"){
    return true
  }
  else{
    return task.category === filterBy
  }
})
function onTaskFormSubmit(newItem){
  setTasks([...tasks, newItem])
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} categoryHandler={categoryHandler} filterBy={filterBy} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleClick={handleClick}/>
    </div>
  );
}

export default App;
