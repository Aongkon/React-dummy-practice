import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { faqsData } from './FAQdata';
import FAQchild from './FAQchild';
import "./FaqStyle.css"

const FAQ = () => {

    const [faqs, setFaqs] = useState(faqsData)

  return (
    <main className="container">
      <section className="faqs">
      <button style={{ background: "red", color: "black" }} onClick={()=>{toast("this is toggler")}}>toast</button>
      <ToastContainer/>
        <h1>FAQ</h1>
        {faqs.map((faq) => <FAQchild key={faq.id} {...faq}/>)}
      </section>
    </main>
  );
}

export default FAQ;
