import React from 'react';
import ItemList from './ItemList';

function PhoneList(props) {

    const validateHandler = value => {
        const validatingRule = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        return validatingRule.test(value);
    }

    return <ItemList 
        validateHandler = {validateHandler}
        changeHandler = {props.changeHandler}
        label = "Phone numbers"
    />
}

export default PhoneList;