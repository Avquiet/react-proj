import React, { useState, useRef } from "react";
import { authors } from "../utils/constants";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export const GoodMessages = ({ onlyMessages }) => {
    const [value, setValue] = useState([]);
    const inputFocus = useRef();

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleSubmit = (event) => {
        onlyMessages({
            author: authors.user,
            text: value,
            id: `list-${Date.now()}`
        })
        event.preventDefault()

        setValue('');

    }
    inputFocus.current?.focus();

    return( 
        <form className="area-form" onSubmit={handleSubmit}>      
            <TextField
             value={value}
             onChange={handleChange}
             id="filled-basic"
             label="Enter your message"
             inputRef={inputFocus}
             variant="filled" />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">Send</Button>
        </form>
    )

}