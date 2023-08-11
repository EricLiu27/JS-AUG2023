import React, { useState, useEffect } from 'react'
import axios from "axios"

// 1. Get data from API : Axios
// 2. Get data on Load : useEffect
// 3. Variable change when loading API : useState 

// DELETE
// 1. Add the button that send the id to the function
// 2. When it is clicked, trigger handleDelete and would send delete request to API
// 3. After it is deleted, update the state variable to remove that item from DOM


const DashboardPage = () => {
    // create state variable for the list

    // useEffect to get the list from the API 

    return (
        <div>
          {/* Using .map to display the list in the way you like (table/list/card) */}
        </div>
    )
}

export default DashboardPage
