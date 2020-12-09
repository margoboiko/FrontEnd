import React, { useState } from 'react';
import AddressList from './AddressList';
import PhoneList from './PhoneList';
import InitRow from './InitRow';

function RegisterForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [date, setDate] = useState('');
    const [phones, setPhones] = useState([]);
    const [addresses, setAddresses] = useState([]);

    const firstNameChange = value => setFirstName(() => value);
    const lastNameChange = value => setLastName(() => value);
    const dateChange = value => setDate(() => value);
    const phonesChange = value => setPhones(() => value);
    const addressesChange = value => setAddresses(() => value);

    const validate  = () => {    
        const listErrors = [];
        const minStrLength = 5;
        if(firstName.length < minStrLength) listErrors.push(`Name length should be more than ${minStrLength}`);
        if(lastName.length < minStrLength) listErrors.push(`Surname length should be more than ${minStrLength}`);
        if(date === '' || Date.parse(date) > Date.now()) listErrors.push('Birth must be before now');
        if(addresses.length < 1) listErrors.push('Add at least one address');
        if(phones.length < 1) listErrors.push('Add at least one phone number');
    }

    const submitHandler = () => {
        if(validate()) send();
    }

    const send = async () => {    
       alert('sent to server');
        const response = await fetch('https://god.com/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                name: firstName,
                surname: lastName,
                birthday: date,
                addresses: addresses.map(address => address.value),
                phoneNumbers:  phones.map(phone => phone.value)  
            })
        });

        if(response.ok) {
            alert('Done!');
            console.log(await response.json());
        }
        else {
            alert(response.status);
        }
    }

    return (
        <form id="form">
             <div className="main">
                <p>Registration</p>

                <InitRow inputType="text" label="First Name" changeHandler={firstNameChange}/>
                <InitRow inputType="text" label="Last Name" changeHandler={lastNameChange}/>
                <InitRow inputType="date" label="Date of birth" changeHandler={dateChange}/>
                <AddressList changeHandler={addressesChange} />
                <PhoneList changeHandler={phonesChange} />
                <button onClick={submitHandler}>Submit</button>
             </div>
        </form>
    );

}

export default RegisterForm;