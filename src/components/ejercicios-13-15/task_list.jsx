import React, { useState } from "react";
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from "../task";
import Formulario from "./formulario";

const TaskList = () => {
  
const defaultTask1 = new Task('Example1', 'default description', true, LEVELS.BLOCKING);
const defaultTask2 = new Task('Example2', 'default description', false, LEVELS.NORMAL);
const defaultTask3 = new Task('Example3', 'default description', false, LEVELS.URGENT);

  const [tasks, setTasks] = useState([
    defaultTask1,
    defaultTask2,
    defaultTask3,
  ]);

  function completeTask(task){
    console.log('Complete this task', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    setTasks(tempTasks);
}

  function addTask(task) {
    console.log("Add this task", task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope='col'>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return <TaskComponent key={index} 
                    task={task}
                    complete={completeTask}
                    ></TaskComponent>;
          })}
        </tbody>
      </table>
    );
  };

  let tasksTable;

  if (tasks.length > 0) {
    tasksTable = <Table></Table>;
  } else {
    tasksTable = (
      <div>
        <h3>No hay tareas que mostrar</h3>
        <h4>Puedes crear nuevas tareas </h4>
      </div>
    );
  }

  return (
    <div>
      <div style={{ position: "relative", height: "500px" }}>
        <div className="col-8">
          {/* Card header */}
          <div className="card-header p-3">
            <h5>Your task</h5>
          </div>
          {/* Card Body */}
          <div className="card-body" data-mdb-perfect-scrollbar="true">
            {tasksTable}
          </div>
        </div>
        {/* Formulario Formik y Yup */}
        <Formulario add={addTask} lenght={tasks.length}></Formulario>
      </div>
    </div>
  );
};

export default TaskList;
