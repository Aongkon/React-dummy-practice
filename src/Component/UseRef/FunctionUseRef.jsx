import { useField } from 'formik';
import React, { useRef } from 'react';

const FunctionUseRef = () => {

    const userRef = useRef()
    const passwordRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();

        const userName = userRef.current.value;
        const password = passwordRef.current.value;

        console.log({userName, password})
    }

  return (
      <form onSubmit={handleSubmit}>
        <div className="form_div">
          <label htmlFor="userName">UserName:</label>
          <input type="text" id="helloInput" ref={userRef}></input>
        </div>

        <div className="form_div">
          <label htmlFor="password">Password:</label>
          <input type="password" id="helloInput" ref={passwordRef}></input>
        </div>

        <button type="submit">Save</button>
      </form>
  );
}

export default FunctionUseRef;
