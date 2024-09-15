import React from 'react';

function Input({ label, id, name, error, ...props }) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={name} {...props} />
            <div className='control-error'>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
}

export default Input;