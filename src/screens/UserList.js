import React from 'react'
import UserCard from '../components/UserCard';
import data from '../utils/data';

function UserList() {
    
  return (
    <div>
      {data.map(({name, email, roll})=>(
        <UserCard name={name} email={email} roll={roll}/>   

      

     )) }
    </div>
  );
}

export default UserList
