import React, { useState } from 'react'
import FormBox from './FormBox'

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [city, setCity] = useState('');
    return <form>
        <FormBox type='text' value={firstName} onChange={e => setFirstName(e.target.value)} name='firstName' placeholder='First Name' label='First Name:' />
        <FormBox type='text' value={secondName} onChange={e => setSecondName(e.target.value)} name='lastName' placeholder='Last Name' label='Last Name:' />
        <FormBox type='text' value={city} onChange={e => setCity(e.target.value)} name='city' placeholder='City' label='City:' />
        <FormBox type='submit' name='submit-button' placeholder='Submit' />
    </form>
}

export default Form;