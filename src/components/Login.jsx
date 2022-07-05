import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
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
    </div>
  );
}

export default Login;
