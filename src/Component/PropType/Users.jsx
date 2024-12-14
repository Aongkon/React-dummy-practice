import React, { useState } from 'react';
import User from './User';

const Users = () => {

    // const [userName, setUserName] = useState("Jannat Mahmud");
    // const [idName, setIdName] = useState("101")
    const [user, setUser] = useState({
        id:2344663255,
        name: "aongkon"
    })

  return (
    <>
      <User user={user}/> 
    </>
  );
};

export default Users;
