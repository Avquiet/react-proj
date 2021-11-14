import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {

    const checkboxValue = useSelector(state => state.checkbox)
    const name = useSelector(state => state.name)
    const dispatch = useDispatch()

    const handleChangeValue = () => {
        dispatch(toggleCheckbox);
    }


    return (
    <>
        <h3>Welcome to Profile!</h3>
        <input type="checkbox" onChange={handleChangeValue} checked={checkboxValue} />
        <p>{name}</p>
    </>
    )

} 