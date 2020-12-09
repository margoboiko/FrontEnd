  
import React from 'react';

function Item(props) {
    return (
        <li key={props.id}>
            <label>{props.value}</label>
            <button onClick={() => props.handleDelete(props.id)}>X</button>
        </li>
    )
}

export default Item;