import React from 'react'

const FormDisplayComponent = (props) => {
    
    return (
        <fieldset>
            <legend> FormDisplayComponent.jsx</legend>
            <div>
                <p> Flavor: {props.flavor} </p>
                <p> Quantity: {props.quantity} </p>
            </div>
        </fieldset>
    )
}

export default FormDisplayComponent