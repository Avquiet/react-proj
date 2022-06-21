import { useState } from "react";
import { TextField } from "@mui/material";

export const SignForm = ({ onSubmit, error, loading }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePass = (e) => {
    setPass(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, pass);
    setEmail("");
    setPass("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField type="email" value={email} onChange={handleChangeEmail}></TextField>
        <TextField type="password" value={pass} onChange={handleChangePass}></TextField>
        <TextField type="submit" disabled={loading}></TextField>
      </form>
      {error && <h4 style={{color: 'red'}}>{error}</h4>}
    </>
  )
}