import React from 'react';
import './user.scss';

const User = ({user}) => {
  const {username, first_name, last_name, is_active} = user;
  return (
    <div className="user">
      <p className="user__element">User: {username}</p>
      <p className="user__element">Name: {first_name}</p>
      <p className="user__element">Surname: {last_name}</p>
      <p className="user__element">Status: {is_active ? "Online" : "Offline"}</p>
    </div>
  )
}

export default User
