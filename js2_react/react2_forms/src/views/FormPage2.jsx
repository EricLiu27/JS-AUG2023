import React, { useState } from 'react'
import FormDisplayComponent from '../components/FormDisplayComponent';
// form input: store as state variable

const FormPage2 = () => {
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        // send the info to the backend, process it in database
        if (flavor.length > 2 && quantity > 0) { // if all inputs are valid, then do this
            const newIcecream = { flavor, quantity };
            console.log(newIcecream); // simulate sending info to the backend
        }else{
            alert("Invalid form")
        }

    }

    return (
        <fieldset>
            <legend> FormPage2.jsx</legend>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Flavor: </label>
                    <input type="text" name="flavor" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
                    {
                        flavor.length < 3 ? <p style={{ color: "red" }}>Flavor must be at least 3 characters</p> : <p></p>
                    }
                </div>
                <div>
                    <label> Quantity: </label>
                    <input type="number" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    {
                        quantity < 1 && <p style={{ color: "red" }}>Quantity must be at least 1</p>
                    }
                </div>
                <button type="submit" disabled={(quantity < 1 || flavor.length < 3) ? true : false} >Submit</button>
            </form>
            {/* if invalid quantity or invalid flavor : true */}

            <FormDisplayComponent flavor={flavor} quantity={quantity} />

        </fieldset>
    )
}

export default FormPage2