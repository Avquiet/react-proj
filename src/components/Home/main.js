import React from 'react';
import { useSelector } from "react-redux";


export const Home = () => {
const name = useSelector((state) => state.name);

    return (
        <>
            <h3>Welcome to Home!</h3>
            <h4>Hello, {name}</h4>
        </>
    )
}