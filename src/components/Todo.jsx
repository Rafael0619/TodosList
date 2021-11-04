import React from 'react';

const Todo = ({title,status, handleCompleteTodo,id}) => {
    return (
            <div className="Todo_card">
                <div>
                    <h4>{title}</h4>
                </div>
                <div className="Todo_actions">
                    <button className={status ? "reset" : "complete"} onClick={() => handleCompleteTodo(id)}>{status ? "Reset" : "Complete" }  </button>
                </div>            
            </div>
    )
}

export default Todo;