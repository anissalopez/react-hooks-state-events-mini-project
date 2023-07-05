import React, {useState} from "react";
import Task from "./Task"



function TaskList({tasks, handleClick}) {



  

 



  const taskList = tasks.map((task) => {return <Task text = {task.text} category = {task.category} key={task.text} handleClick={()=> handleClick(task)}></Task>})
  return (
    <div className="tasks">
    
      {taskList}
    </div>
  );
}

export default TaskList;
