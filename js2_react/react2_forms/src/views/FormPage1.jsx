import React, { useState } from 'react'
import FormDisplayComponent from '../components/FormDisplayComponent';
// form input: store as state variable

const FormPage1 = () => {
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();

        // send the info to the backend, process it in database
        const newIcecream = {flavor, quantity};
        console.log(newIcecream);

    }

    return (
        <fieldset>
            <legend> FormPage1.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Flavor: </label>
                    <input type="text" name="flavor" value={flavor} onChange={(e)=>setFlavor(e.target.value)}/>
                </div>
                <div>
                    <label> Quantity: </label>
                    <input type="number" name="quantity" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
            </form>


            <FormDisplayComponent flavor={flavor} quantity={quantity} />

        </fieldset>
    )
}

export default FormPage1