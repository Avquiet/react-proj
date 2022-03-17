import React, {useState, useEffect} from 'react';
import { useSelector, connect, shallowEqual } from 'react-redux';
import { selectName } from "../../store/profile/selectors";
import { changeName } from '../../store/profile/actions'
import { Button, TextField } from '@mui/material';
import { onValue, set } from "firebase/database";
import { logOut, userRef } from "../../services/firebase";

export const Profile = ({ setName }) => {

  const name = useSelector(selectName, shallowEqual);
  const [value, setValue] = useState(name);

  const handleChangeText = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    set(userRef, {
      name: value,
    })
  };

  useEffect(() => {
    const unsubscribe = onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      setName(userData?.name || "");
    });

    return unsubscribe;
  }, [setName]);

  const handleLogOutClick = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      
      <form onSubmit={handleSubmit}>
      <h3>Welcome, {value}</h3>
        <TextField type="text" value={value} onChange={handleChangeText}></TextField>
        <TextField type="submit"></TextField>
      </form>
      <Button onClick={handleLogOutClick}>SIGN OUT</Button>
    </>
  )
}

const mapStateToProps = (state) => ({
  name: state.profile.name
});

const mapDispatchToProps = (dispatch)  => ({
  setName: (newName) => dispatch(changeName(newName))
});

export const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);