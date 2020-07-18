import React from 'react';

const FormBox = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <br />
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default FormBox;