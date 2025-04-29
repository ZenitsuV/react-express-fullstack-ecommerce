import React from 'react';

const Input = ({ label, type = "text", id, placeholder, onChange, value }) => {

    return (
        <>                                                 
            <input 
                type={type}
                name={id} 
                id={id}  
                className='form-control'
                style={{lineHeight:0, padding:"5px",height:"35px",fontFamily: "inherit",fontSize: "15px"}} 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />                  
        </>
    );
}

export default Input;