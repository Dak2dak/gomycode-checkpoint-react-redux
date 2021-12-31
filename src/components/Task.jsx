import React from 'react'

const Task = ({id, description, isDone}) => {
    return (
        <div className="todo">
                <div className="task--checking">
                    <input type="checkbox" />
                </div>
                <div className="task--title">
                    <form>
                        <input type="text" placeholder="Edit"  />
                    </form>
                </div>
                <div className="task--postponing">
                    <i class="fas fa-pencil-alt"></i>
                </div>
                <div className="task--deleting">
                    <i className="fas fa-trash"></i>
                </div>
        </div>
    )
}

export default Task;