import React, { useEffect, useState } from 'react';

const Styling1st = () => {
    
    const error = true;

    const [user, setUser] = useState("")
    const [inputValid, setInputValid] = useState(false)

     const handleChange = (e) => {
        setUser(e.target.value);
     }

     useEffect(() => {
      
        if(user.length < 4){
            setInputValid(false)
        }else{
            setInputValid(true)
        }
     }, [user])
     
    

  return (
    <div>
      <h1
       style={{ 
        color: error ? 'red' : 'green',
         backgroundColor: error ? 'black' : 'yellow',
         textAlign: 'center'
          }}>
          Hello World
      </h1>


      <input
        // style={{ backgroundColor: inputValid ? 'white':'red' }}
        // className={`${inputValid ? "valid":"invalid"}`}
        className={`${inputValid && "valid"}`}
       type='text' placeholder='search' value={user} onChange={handleChange}></input>
    </div>
  );
}

export default Styling1st;
