import React, { useState } from "react";
import { authors } from "../utils/constants";

export const Msgl = ({ onlyMessages }) => {
    const [value, setValue] = useState([]);


    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        onlyMessages({
            author: authors.user,
            text: value,
            id: `msg-${Date.now()}`
        })
        event.preventDefault()

        setValue('');
    }

    return( 
        <form className="area-form" onSubmit={handleSubmit}>      
            <input className="area-put" value={value} onChange={handleChange} />
            <button type="submit" className="area-subms">Send message</button>
        </form>
    )

}