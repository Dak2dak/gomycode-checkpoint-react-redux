import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleDone } from '../JS/TaskSlice';
import { deleteTask } from '../JS/TaskSlice';

const Task = ({id, description, isDone}) => {

    const dispatch = useDispatch();

    const handleDone = () => {
        dispatch(toggleDone({id: id, isDone: !isDone}));
    }

    const handleDelete = () => {
        dispatch(deleteTask({id: id}));
    }

    return (
        <div className="todo">
                <div className="task--checking">
                    <input 
                        type="checkbox" 
                        checked={isDone} 
                        onChange={handleDone} 
                    />
                </div>
                <div className="task--title">
                    <form>
                        <input 
                            type="text" 
                            value={description}  
                        />
                    </form>
                </div>
                <div className="task--editing">
                    <i class="fas fa-pencil-alt"></i>
                </div>
                <div className="task--deleting">
                    <i className="fas fa-trash" onChange={handleDelete}></i>
                </div>
        </div>
    )
}

export default Task;