import React from 'react';
export const Input=(props)=>{
    let placeholder=`Type ${props.Title} Here`;
    return(
        <div>
            <label>{props.Title}</label>
            <input value={props.val}  onChange={props.click}
             type='text' placeholder={placeholder}/>
        </div>
    )
}