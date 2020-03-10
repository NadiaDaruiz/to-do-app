import React from 'react'

export default function ToDoItem(props) {
    const data = props.item
    return (
        <div className="todo-item">
            <p>{data.text}</p>
            <div className="actions">
                <button className="btn" onClick={() => props.updateItem(data.id)}>
                    &#10004;
                </button>
            </div>

        </div>
    )
}
