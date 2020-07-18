import React from 'react';

const FormBox = (props) => {
    let typeText = false;
    ((props.type == "text") && (props.value == "")) ? typeText = true : typeText = false;
    return (
        <div style={{ margin: "10px" }}>
            <label htmlFor={props.name}>{props.label}</label>
            <br />
            <input
                type={props.type}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
                style={{ borderColor: typeText ? 'red' : 'green' }}
            />
        </div>
    )
}

export default FormBox;