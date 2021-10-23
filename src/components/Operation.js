import React from 'react';
export const Operation=(Props)=>{

    return(
        <button  onClick={Props.click}>{Props.title}</button>
    )
}