import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const PropCom4 = () => {

    const {user, text} = useContext(UserContext)
    console.log(user)

  return (
    <div>
      hello
     <p> {user.id}</p>
     <p> {user.name}</p>
     <p>{text}</p>
    </div>
  );
}

export default PropCom4;
