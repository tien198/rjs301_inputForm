import React from 'react';

function Input({ label, id, type, name, error, ...props }) {
    return (
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} name={name} {...props} required />
            <div className="control-error">{error && <p>{error}</p>}</div>
        </div>
    );
}

export default Input;