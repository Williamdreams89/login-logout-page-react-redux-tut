import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import styled from "styled-components";

function Login() {
  const dispatch = useDispatch();
  const StyledLoginBtn = styled.button`
    background-color: white;
    border: 2px solid orangered;
    padding: 5px 20px;
    margin-top: 10px;
    border-radius: 15px;
    outline: none;
    &:hover {
      border: none;
      background-color: orangered;
      color: white;
    }
  `;
  return (
    <div>
      <StyledLoginBtn
        onClick={() => {
          dispatch(
            login({
              name: "William Dreams",
              email: "williamdreams89@outlook.com",
              age: 23,
            })
          );
          alert("Login sucessful !!");
        }}
      >
        Login
      </StyledLoginBtn>
      <button
        style={{
          backgroundColor: "blue",
          position: "absolute",
          top: 5,
          right: "15px",
          padding: "5px 10px",
          border: "none",
          borderRadius: "10px",
          color: "white",
          fontWeight: 700,
        }}

        onClick={()=>{dispatch(logout()); alert("Logout Successfully")}}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
