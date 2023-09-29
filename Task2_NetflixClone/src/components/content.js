import ContentCss from "./content.module.css";
import React from "react";

function Content(props) {
  return (
    <>
      <div className={ContentCss.container2}>
        <div className={ContentCss.big_box}>
          <p className={ContentCss.main_heading}>{props.string1}</p>
          <p className={ContentCss.sub_heading}>{props.string2}</p>
        </div>
        <div className={ContentCss.big_box}>
        {props.imageSrc != null ? <img className = {ContentCss.img} src={props.imageSrc} alt="netflix" /> : null}

        </div>
      </div>
    </>
  );
}

export default Content;
