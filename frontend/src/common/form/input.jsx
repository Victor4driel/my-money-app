import React from "react";
//input {...props} = o proprio redux form passa para o input um conjunto de propriedades dentro do input
export default props => {
    return (
        <input {...props.input} 
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}></input>
    )
}