import React from 'react'
import AddTask from './AddTask'
import Task from './Task'
import { useSelector } from 'react-redux'

const ListTask = () => {

    const tasks = useSelector((state) => state.tasks);

    return (
        <>
            <AddTask />

            <div className="task--list">
                {tasks.map(task => 
                    <Task description={task.description} id={task.id} isDone={task.isDone}  />)}
            </div>
        </>
    )
}

export default ListTask;
