import React from 'react';

const Header = ({handleCompletedBtn}) => {
    return (
        <div className="header_styles">
                <h4>ToDoApp</h4>
            <div className="btn_in_header">
                <button onClick={() => handleCompletedBtn("All")} className="btn_styles">All</button>
                <button onClick={() => handleCompletedBtn("completed")} className="btn_styles">Completed</button>
                <button onClick={() => handleCompletedBtn("Uncompleted")} className="btn_styles">Uncompleted</button>
            </div>
        </div>
    )
}

export default Header;

