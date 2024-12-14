import React, { useState } from 'react';
import PropCom2 from './PropCom2';
import { UserContext } from './UserContext';

const PropCom1 = () => {

    const [user, setUser] = useState({id:1, name:"aongkon"})
    const [text, setText] = useState("I'm doing somethings for myself")

  return (
    <UserContext.Provider value={{ user,text }}> 
    {/* akhon amra globally data access korte parbo value ar maddhome */}
      <PropCom2 />
    </UserContext.Provider>
  );
}

export default PropCom1;
//er maddhome without any prop shokol child component use korte parbe parent er data
//multiple data use korar jonno object use korte hobe second bracket er moddhe