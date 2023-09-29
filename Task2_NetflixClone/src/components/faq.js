import FaqCss from "./faq.module.css";
import plus from "./images/plus.png";
import React from "react";

function Faqs() {
  return (
    <>
      <div className={FaqCss.container3}>
        <p className={FaqCss.faq}>Frequently Asked Questions</p>
        <div className={FaqCss.main_box}>
          <div className={FaqCss.small_box}>
            <p className={FaqCss.question}>
              What is Netflix? 
            </p>
            <img className={FaqCss.plus} src={plus} />
          </div>

          <div className={FaqCss.small_box}>
            <p className={FaqCss.question}>
              How much does Netflix cost?
              
            </p>
            <img className={FaqCss.plus} src={plus} />
          </div>

          <div className={FaqCss.small_box}>
            <p className={FaqCss.question}>
              Where can I watch?
              
            </p>
            <img className={FaqCss.plus} src={plus} />
          </div>

          <div className={FaqCss.small_box}>
            <p className={FaqCss.question}>
              How do I cancel?
            
            </p>
            <img className={FaqCss.plus} src={plus} />
          </div>

          <div className={FaqCss.small_box}>
            <p className={FaqCss.question}>
              What can I watch on Netflix?
             
            </p>
            <img className={FaqCss.plus} src={plus} />
          </div>

          <div className={FaqCss.small_box}>
            <p className={FaqCss.question}>
              Is Netflix good for kids?
             
            </p>
            <img className={FaqCss.plus} src={plus} />
          </div>
        </div>
        <p className={FaqCss.text}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <input className={FaqCss.mail} placeholder="Email address"></input>
        <button className={FaqCss.btn}>Get Started &gt; </button>
      </div>
    </>
  );
}

export default Faqs;
