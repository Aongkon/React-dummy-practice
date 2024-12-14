import React, { useState } from 'react';
import "./FaqStyle.css"
const FAQchild = (props) => {
    const { title, desc} = props

    const [toggle, setToggle] = useState(false);

  return (
    <article className="faq">
      <div>
        <h2> {title}</h2>
        <button onClick={() => {setToggle(!toggle)}}>{toggle ? "-" : "+"}</button>
      </div>
      {toggle && <p>{desc}</p>} 
      {/* jodi toggle true hoy tahole "<p></p>" dekhabe */}
    </article>
  );
}

export default FAQchild;

// (!toggle) mane toggle er value protibar change korbe