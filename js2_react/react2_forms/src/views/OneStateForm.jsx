import React, { useState } from 'react'
import FormDisplayComponent from '../components/FormDisplayComponent';
// form input: store as state variable

const OneStateForm = () => {

    const [formState, setFormState] = useState({
        flavor: "Vanilla",
        quantity: 0
    })

    const [formErr, setFormErr] = useState({
        flavor: "",
        quantity: true
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formState);
    }

    const handleInput = (e) => {
        const keyToUpdate = e.target.name; // flavor / quantity
        const valToUpdate = e.target.value;

        setFormState((prev) => ({
            ...prev,
            [keyToUpdate]: valToUpdate
        }))

        // const errorObj = {...formErr};
        // if(keyToUpdate==="flavor"){
        //     valToUpdate.length <3 ?
        //         errorObj.flavor = "Flavor must be at least 3 characters":
        //         errorObj.flavor =""
        // }else if(keyToUpdate==="quantity"){
        //     valToUpdate <1?
        //     errorObj.quantity = "Quantity must be at least 1":
        //     errorObj.quantity = ""
        // }
        // setFormErr(errorObj)

        const errorObj = {...formErr};
        switch(keyToUpdate){
            case 'flavor':
                valToUpdate.length <3 ?
                errorObj.flavor = "Flavor must be at least 3 characters":
                errorObj.flavor =""
                break;
            case 'quantity':
                valToUpdate <1?
                errorObj.quantity = "Quantity must be at least 1":
                errorObj.quantity = ""
        }

        setFormErr(errorObj)



    }

    return (
        <fieldset>
            <legend> OneStateForm.jsx</legend>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Flavor: </label>
                    <input type="text" name="flavor" value={formState.flavor} onChange={handleInput} />
                    <p> {formErr.flavor}</p>
                </div>
                <div>
                    <label> Quantity: </label>
                    <input type="number" name="quantity" value={formState.quantity} onChange={handleInput} />
                    <p> {formErr.quantity}</p>
                </div>
                <button type="submit" >Submit</button>
            </form>


            <FormDisplayComponent flavor={formState.flavor} quantity={formState.quantity} />

        </fieldset>
    )
}

export default OneStateForm