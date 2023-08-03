import React, { useState } from 'react'
import FormDisplayComponent from '../components/FormDisplayComponent';
// form input: store as state variable

const FormPage3 = () => {
    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

    const [flavorErr, setFlavorErr] = useState("");
    const [quantityErr, setQuantityErr] = useState(true);

    // when the form is submitted, show different message
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        // send the info to the backend, process it in database
        if (flavorErr || quantityErr ) { // if one of the errors is true, then do this
            alert("Invalid form")
        }else{
            const newIcecream = { flavor, quantity };
            console.log(newIcecream); // simulate sending info to the backend
            setIsSubmitted(true);
        }
    }

    const welcomeMessage = ()=>{
        if(isSubmitted){
            return "Thank you for submitting the form";
        }else{
            return "Please fill in the form";
        }
    }

    const handleFlavor =(e)=>{ 
        // handle the input
        setFlavor(e.target.value)

        // handle error based on the input
        if(e.target.value.length<3){
            setFlavorErr("Flavor must be at least 3 characters")
        }else{
            setFlavorErr("")
        }
    }


    const handleQuantity =(e)=>{
        setQuantity(e.target.value)
        if(e.target.value < 1){
            setQuantityErr("Quantity must be at least 1")
        }else{
            setQuantityErr("")
        }
    }

    return (
        <fieldset>
            <legend> FormPage3.jsx</legend>
            <h3>{welcomeMessage()}</h3>

            <form onSubmit={handleSubmit}>
                <div>
                    <label> Flavor: </label>
                    <input type="text" name="flavor" value={flavor} onChange={handleFlavor} />
                    <p style={{ color: "red" }}>{flavorErr}</p>
                </div>
                <div>
                    <label> Quantity: </label>
                    <input type="number" name="quantity" value={quantity} onChange={handleQuantity} />
                    <p style={{ color: "red" }}>{quantityErr}</p>
                    
                </div>
                <button type="submit" disabled={(flavorErr || quantityErr ) ? true : false} >Submit</button>
            </form>
            {/* if invalid quantity or invalid flavor : true */}

            <FormDisplayComponent flavor={flavor} quantity={quantity} />

        </fieldset>
    )
}

export default FormPage3