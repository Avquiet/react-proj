import React, {useState} from 'react';
import { useSelector, connect, shallowEqual } from 'react-redux';
import { selectName } from "../../store/profile/selectors";
import { changeName } from '../../store/profile/actions'
import { Button, TextField } from '@mui/material';

export const Profile = ({ setName }) => {

    const name = useSelector(selectName, shallowEqual);
    const [value, setValue] = useState(name);

    const handleChangeText = (e) => {
        setValue(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(value);
      };

    return (
    <>
       <div>
       <form onSubmit={handleSubmit}>
        <TextField type="text" value={value} onChange={handleChangeText}></TextField>
        <Button variant="contained" type='submit' disabled={!value}>Save!</Button>
      </form>
       </div>
    </>
    )
}

const mapStateToProps = (state) => ({
    name: state.profile.name
});

const mapDispatchToProps = {
    setName: changeName
}

export const ConnectedProfile = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)