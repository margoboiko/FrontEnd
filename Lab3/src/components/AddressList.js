import React from 'react';
import ItemList from './ItemList';

function AddressList(props) {

    const validateHandler = value => value.length > 10;

    return <ItemList 
        validateHandler = {validateHandler}
        changeHandler = {props.changeHandler}
        label = "Addresses"
    />
}

export default AddressList;