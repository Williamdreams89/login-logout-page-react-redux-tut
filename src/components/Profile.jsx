import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector((state)=> state.user.value);
  return (
    <div>
        <p>Name: {user.name}</p>
        <p>Age: {user.age} </p>
        <p>Email: {user.email} </p>
    </div>
  )
}

export default Profile