import React from 'react'
import FormBox from './FormBox'

const Form = () => {
    return <form>
        <FormBox type='text' name='first-box' placeholder='First Box' label='The first name' />
    </form>
}

export default Form;