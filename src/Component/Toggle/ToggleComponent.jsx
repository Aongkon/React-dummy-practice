import React, { useState } from "react";

const ToggleComponent = () => {


  const [toggle, setToggle] = useState(true);
//   alert(toggle)

//   const showHandler = () =>{
//     setToggle(true)
//   }

  return (
    <div
      style={{
        background: "pink",
        color: "black",
        fontSize: "16px",
        padding: "20px",
      }}
    >
 {toggle && 
    <p>
        These are questions that we ask each other every single day. I’m sure
        you ask these questions to your loved ones too. So we decided to create
        a fun Travel Portfolio game out of it. All 700+ team members at our
        offices have already played this game. We have found out our Indian
        State & Union Territory scores, and our 'Countries Travelled to' score.
      </p>}

      <div>
      {/* <button
        onClick={showHandler}
          style={{
            background: "red",
            color: "black",
            fontSize: "14px",
            padding: "10px 30px",
            marginRight: "20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Show
        </button> */}

 <button 
        //  onClick={ () => {setToggle(false)}}
        onClick={() =>{setToggle(!toggle)}}
          style={{
            background: "red",
            color: "black",
            fontSize: "14px",
            padding: "10px 30px",
            border: "none",
            cursor: "pointer",
          }}
        >
         {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default ToggleComponent;
