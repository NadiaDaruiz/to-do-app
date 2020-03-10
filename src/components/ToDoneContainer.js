import React from 'react'
import ToDoneItem from './ToDoneItem';

export default function ToDoneContainer(props) {
    // 1. store props in variable 
    const todones = props.items;
    // 2. map thru the items array and return list component
    const toDoNesItems = todones.map(el => {
        return (<ToDoneItem item={el} key={el.text} updateItem={props.updateItem} />)
    })

    return (
        <div className="todones-container">
            <h3>BACKLOG</h3>
            {toDoNesItems}

        </div>
    )
}

