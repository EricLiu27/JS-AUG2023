import React, { useState } from 'react'
import FormDisplayComponent from '../components/FormDisplayComponent';
// form input: store as state variable

const IcecreamTruck = () => {
    const [icecreamList, setIcecreamList] = useState([])


    const [flavor, setFlavor] = useState("Vanilla");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault();

        // send the info to the backend, process it in database
        const newIcecream = {flavor, quantity};
        receiveNewIcecream(newIcecream)
    }

    const receiveNewIcecream = (newIcecream)=>{
        setIcecreamList([...icecreamList, newIcecream])
         // setIcecreamList((prev)=>[...prev, newIcecream]) : when you want to set new state depending on the prev state
    }

    const removeIcecreamByIdx = (deleteIdx)=>{
        const filterList = icecreamList.filter((eachIcecream, idx)=> idx !== deleteIdx);
        setIcecreamList(filterList);
    }
    return (
        <fieldset>
            <legend> IcecreamTruck.jsx</legend>
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


            <table>
                <thead>
                    <tr>
                        <th> Flavor</th>
                        <th> Number of scoops</th>
                        <th> Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        icecreamList.map((eachIcecream, idx)=>{
                            return (
                                <tr key={idx}>
                                    <td> {eachIcecream.flavor}</td>
                                    <td> {eachIcecream.quantity}</td>
                                    <td> 
                                        <button type="button" onClick={()=>removeIcecreamByIdx(idx)}> Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </fieldset>
    )
}

export default IcecreamTruck