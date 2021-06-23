import React, { useState, useEffect } from "react";
import User from "../user/User";
import Loader from "../loader/Loader";
import "./usersList.scss";

const UsersList = () => {
  const token = 'Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e';
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [usersFilter, setUsersFilter] = useState('')

  useEffect(() => {
    fetch(`http://emphasoft-test-assignment.herokuapp.com/api/v1/users/`, {
      headers: {
        'Authorization': token,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err.message));
  }, []);
    
  useEffect(() => {
    if (users && usersFilter) {
      setFilteredUsers(users.filter(el => el.username.toLowerCase().includes(usersFilter.toLowerCase())))
    }
  }, [users, usersFilter])
  
  let usersView = [];
  if (users) {
    usersView = usersFilter ? [...filteredUsers] : [...users];
    usersView = usersView.map((el) => <User key={el.username + el.first_name + el.last_name} user={el} />)
  }

  return (
    
    <div className="users">
      <p className="users__title">Users List</p>
      <label className="users__filter">
        Filter:
        <input className="users__input" value={usersFilter} onChange={(e) => setUsersFilter(e.target.value)} />
      </label>
      <div className="users__list">
        {users.length ? usersView : <Loader />}
      </div>
    </div>
  );
};

export default UsersList;
